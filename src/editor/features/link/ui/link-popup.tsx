import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import tippy from 'tippy.js'
import { GlobalTransforms } from '../../../lib/global-transforms'
import { useEditor, useEditorNodeRef } from '../../../lib/hooks/slate'
import { TIPPY_THEMES } from '../../../lib/tippy'
import { REGEX } from '../../../lib/util'
import { ClearIconSvg, LinkIconSvg } from '../../../ui/icons'
import { useLinkPopupActions, useLinkPopupState } from './link-popup-context'
import { ClearIcon, Error, Input, InputWrapper, LinkIcon } from './styles'

/*
 * We use this element as the React Portal container
 * It's something like our custom tippy react binding
 * (the default one doesn't work well for the link popup)
 */
function useContainer() {
  return useMemo(() => {
    const element = document.createElement('div')
    element.classList.add('link-popup-container')
    return element
  }, [])
}

function isURL(string: string) {
  const url = new RegExp(REGEX.URL, 'i')
  return string.length < 2083 && url.test(string)
}

export const LinkPopup = () => {
  if (typeof window === 'undefined') return null
  return <LinkPopupInner />
}

const LinkPopupInner = () => {
  const editor = useEditor()
  const editorNodeRef = useEditorNodeRef()
  const container = useContainer()
  const { instance, input, selection, href, setHref, hadHref } =
    useLinkPopupState()
  const { reset } = useLinkPopupActions()
  const [valid, setValid] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHref(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!valid) return
    if (!selection.current) return
    GlobalTransforms.setHref(editor, href, { at: selection.current })
    instance.current?.hide()
    editorNodeRef.current?.focus()
  }

  const clear = () => {
    if (!selection.current) return
    GlobalTransforms.clearHref(editor, { at: selection.current })
    instance.current?.hide()
    editorNodeRef.current?.focus()
  }

  const validate = (href: string) => {
    setError(null)

    if (!href) {
      setValid(false)
      return
    }

    if (!isURL(href)) {
      setValid(false)
      setError("It doesn't look like an URL")
      return
    }

    setValid(true)
  }

  useEffect(() => {
    validate(href)
  }, [href])

  useEffect(() => {
    if (!editorNodeRef.current) return

    instance.current = tippy(editorNodeRef.current, {
      theme: TIPPY_THEMES.LINK_POPUP,
      content: container,
      placement: 'bottom',
      trigger: 'manual',
      interactive: true,
      offset: [0, 15],
      moveTransition: 'transform 0.1s ease-out',
      getReferenceClientRect: () => {
        const selection = window.getSelection()
        if (!selection) return new DOMRect()
        const range = selection.getRangeAt(0)
        return range.getBoundingClientRect()
      },
      hideOnClick: true,
      onHidden: () => reset(),
    })

    return () => instance.current?.destroy()
  }, [container, editorNodeRef])

  return ReactDOM.createPortal(
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <LinkIcon>
          <LinkIconSvg />
        </LinkIcon>
        <Input
          ref={input}
          value={href}
          onChange={handleChange}
          placeholder="Enter the URL"
        />
        {hadHref.current && (
          <ClearIcon onClick={clear}>
            <ClearIconSvg />
          </ClearIcon>
        )}
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </form>,
    container
  )
}
