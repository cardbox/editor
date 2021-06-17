import Tippy from '@tippyjs/react'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { THEMES } from '../../../lib/tippy/themes'
import { Container, Icon } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  isActive: boolean
  tooltip?: string
}

export const ToolbarButton = ({
  icon,
  isActive,
  tooltip,
  style,
  ...rest
}: Props) => {
  const pure = (
    <Container data-active={isActive} {...rest}>
      <Icon style={style}>{icon}</Icon>
    </Container>
  )

  if (tooltip) {
    return (
      <Tippy
        theme={THEMES.EDITOR_KEYBIND}
        content={tooltip}
        offset={[0, 20]}
        hideOnClick={false}
      >
        {pure}
      </Tippy>
    )
  }

  return pure
}
