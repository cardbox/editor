export type SvgComponent = (props: React.SVGProps<SVGSVGElement>) => JSX.Element

export type MenuType = 'add' | 'transform'

interface VisibilityControl {
  show: () => void
  hide: () => void
}

export type BlockMenuSection = (props: VisibilityControl) => JSX.Element | null

export type ContentProps = VisibilityControl & {
  sections?: BlockMenuSection[]
}

export interface MenuAdditionalProps {
  sections?: BlockMenuSection[]
}
