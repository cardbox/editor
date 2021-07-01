import React from 'react'

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <div className="block-menu-container">{children}</div>
}

const Section = ({
  name,
  children,
}: {
  name: string
  children: JSX.Element | JSX.Element[]
}) => {
  return (
    <div className="block-menu-section">
      <p className="block-menu-list-name">{name}</p>
      {children}
    </div>
  )
}

type ULAttributes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>

const List = ({
  children,
  ...rest
}: { children: JSX.Element | JSX.Element[] } & ULAttributes) => {
  return (
    <ul className="block-menu-list" {...rest}>
      {children}
    </ul>
  )
}

type LIAttributes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>

const Item = ({
  name,
  detail,
  onClick,
  ...rest
}: {
  name: string
  detail?: string
  onClick?: React.MouseEventHandler<HTMLLIElement>
} & LIAttributes) => {
  return (
    <li className="block-menu-item" onClick={onClick} {...rest}>
      <span className="block-menu-item-name">{name}</span>
      {detail && <span className="block-menu-item-detail">{detail}</span>}
    </li>
  )
}

export const BlockMenuContent = {
  Container,
  Section,
  List,
  Item,
}
