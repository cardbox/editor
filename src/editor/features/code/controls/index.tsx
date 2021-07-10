import { useEditor, usePath } from '../../../lib/hooks/slate'
import {
  BlockMenuContent,
  BlockMenuSection,
  useControlsState,
} from '../../left-controls'
import { PRISM_LANGUAGES } from '../constants'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Transforms } from 'slate'
import styled from 'styled-components'

export const CodeControls: BlockMenuSection = (props) => {
  const { element } = useControlsState()
  if (element.type !== 'code') return null
  return <Content {...props} />
}

const Content: BlockMenuSection = ({ hide }) => {
  const editor = useEditor()
  const { element } = useControlsState()
  const path = usePath(element)
  const searchRef = useRef<HTMLInputElement | null>(null)
  const [search, setSearch] = useState('')

  const setLanguage = (language: string) => {
    Transforms.setNodes(editor, { language }, { at: path })
    hide()
  }

  const matchedLanguages = useMemo(() => {
    return PRISM_LANGUAGES.filter((language) => {
      return language.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [search])

  useEffect(() => {
    if (!searchRef.current) return
    searchRef.current.focus()
  }, [])

  if (element.type !== 'code') return null

  return (
    <BlockMenuContent.Section name="Select code language">
      <BlockMenuContent.Container>
        <InputWrapper>
          <Icon>{searchIcon}</Icon>
          <Input
            ref={searchRef}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputWrapper>
      </BlockMenuContent.Container>
      <BlockMenuContent.List style={{ maxHeight: 200, overflow: 'auto' }}>
        {matchedLanguages.map((language) => {
          const isSelected = language.grammarName === element.language

          return (
            <BlockMenuContent.Item
              key={language.name}
              name={language.name}
              onClick={() => setLanguage(language.grammarName)}
              style={{ color: isSelected ? 'rgb(56, 132, 255)' : '' }}
            />
          )
        })}
      </BlockMenuContent.List>
    </BlockMenuContent.Section>
  )
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e4ea;
  border-radius: 3px;

  &:focus-within {
    border-color: #6494e2;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;
  color: #b7c0ca;

  & svg {
    width: 16px;
    height: 16px;
  }
`

export const searchIcon = (
  <svg
    preserveAspectRatio="xMidYMid meet"
    height="1em"
    width="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    stroke="currentColor"
    className="icon-7f6730be--text-3f89f380"
  >
    <g>
      <circle cx="10.5" cy="10.5" r="7.5" />
      <line x1="21" y1="21" x2="15.8" y2="15.8" />
    </g>
  </svg>
)

export const Input = styled.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  outline: none;
  color: #1a1a23;
`
