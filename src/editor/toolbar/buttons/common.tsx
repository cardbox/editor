import Tippy from '@tippyjs/react'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { THEMES } from '../../lib/tippy/themes'
import styles from './common.module.css'

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
    <button className={styles.container} data-active={isActive} {...rest}>
      <span className={styles.icon} style={style}>
        {icon}
      </span>
    </button>
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
