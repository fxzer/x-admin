import type { layouts } from '@/constants'

export type LanguageType = 'zh' | 'en' | null
export type SizeType = 'large' | 'default' | 'small'
export type LayoutType = typeof layouts[number]['value']

export interface SizeConfig {
  label: '大型' | '默认' | '小型'
  key: SizeType
  fold: 64 | 56 | 48
  unfold: 210 | 200 | 190
}
