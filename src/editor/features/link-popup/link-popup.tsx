import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import tippy from 'tippy.js'
import { useEditorNodeRef } from '../../lib/hooks/use-editor-node-ref'
import { THEMES } from '../../lib/tippy/themes'
import { CustomTransforms } from '../../lib/custom-transforms'
import { useEditor } from '../../lib/hooks/use-editor'
import { REGEX } from '../../lib/util'
import styles from './link-popup.module.css'
import { useLinkPopupState } from './link-popup-context'

/*
 * We use this element as the React Portal container
 * It's something like our custom tippy react binding
 * (the default one doesn't work well for the link popup)
 */
function useContainer() {
  return useMemo(() => {
    const element = document.createElement('div')
    element.classList.add(styles.container)
    return element
  }, [])
}

function isURL(string: string) {
  const url = new RegExp(REGEX.URL, 'i')
  return string.length < 2083 && url.test(string)
}

export const LinkPopup = () => {
  const editor = useEditor()
  const editorNodeRef = useEditorNodeRef()
  const container = useContainer()
  const { instance, input, selection, href, setHref } = useLinkPopupState()
  const [valid, setValid] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHref(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!valid) return
    if (!selection.current) return
    CustomTransforms.setHref(editor, href, { at: selection.current })
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

  // eslint-disable-next-line sonarjs/cognitive-complexity
  useEffect(() => {
    if (!editorNodeRef.current) return

    instance.current = tippy(editorNodeRef.current, {
      theme: THEMES.EDITOR_LINK_POPUP,
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
      onHidden: () => setHref(''),
    })

    return () => instance.current?.destroy()
  }, [container, editorNodeRef])

  return ReactDOM.createPortal(
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <LinkIcon className={styles.icon} />
        <input
          ref={input}
          className={styles.input}
          value={href}
          onChange={handleChange}
          placeholder="Enter the URL"
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>,
    container
  )
}

const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
        fill="currentColor"
      />
      <path
        d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
        fill="currentColor"
      />
      <path
        d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
        fill="currentColor"
      />
    </svg>
  )
}
