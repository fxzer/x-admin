export type LanguageType = 'zh' | 'en' | null
export type SizeType = 'large' | 'default' | 'small'
export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export interface MenuSizeList {
  fold: '64px' | '52px' | '48px'
  unfold: '210px' | '200px' | '190px'
  height: '60px' | '50px' | '46px'
}
export interface SizeConfig {
  label: '大型' | '默认' | '小型'
  key: SizeType
  menu: MenuSizeList
  header: {
    height: '60px' | '48px' | '44px'
  }
}
export interface Layout {
  name: string
  value: LayoutType
}
