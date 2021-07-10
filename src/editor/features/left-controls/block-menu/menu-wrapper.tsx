import { TIPPY_THEMES } from '../../../lib/tippy'
import { useControlsState } from '../controls'
import { ContentProps, MenuAdditionalProps } from './types'
import Tippy from '@tippyjs/react'
import clsx from 'clsx'
import React, { useState } from 'react'

type SvgComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element

interface MenuProps {
  svg: SvgComponent
  iconClassName: string
  content: (props: ContentProps) => JSX.Element
}

export const MenuWrapper = ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  svg: Svg,
  iconClassName,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  content: Content,
  sections,
}: MenuProps & MenuAdditionalProps) => {
  const { active, setActive } = useControlsState()

  const [isOpen, setOpen] = useState(false)

  const show = () => setOpen(true)
  const hide = () => setOpen(false)
  const toggle = () => setOpen((current) => !current)

  const fullIconClass = clsx({
    'block-menu-icon': true,
    [iconClassName]: true,
    'active': isOpen,
  })

  return (
    <Tippy
      theme={TIPPY_THEMES.BLOCK_TYPE_MENU}
      interactive={true}
      placement="bottom-end"
      content={
        <ContentWrapper active={active}>
          <Content show={show} hide={hide} sections={sections} />
        </ContentWrapper>
      }
      visible={isOpen}
      onShow={() => setActive(true)}
      onHidden={() => setActive(false)}
      onClickOutside={hide}
    >
      <div className={fullIconClass} onClick={toggle}>
        <Svg />
      </div>
    </Tippy>
  )
}

const ContentWrapper = ({
  active,
  children,
}: {
  active: boolean
  children: JSX.Element
}) => {
  if (!active) return null
  return children
}
