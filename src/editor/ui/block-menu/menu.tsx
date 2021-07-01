import React from 'react'
import { useControlsState } from '../controls'
import { AddMenu } from './add.menu'
import { TransformMenu } from './transform.menu'
import { MenuAdditionalProps } from './types'

export const Menu = (props: MenuAdditionalProps) => {
  const { meta } = useControlsState()

  const SpecificMenu = meta.empty ? AddMenu : TransformMenu

  return <SpecificMenu {...props} />
}
