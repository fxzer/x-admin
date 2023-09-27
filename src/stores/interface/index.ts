export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns'

export type AssemblySizeType = 'large' | 'default' | 'small'

export type LanguageType = 'zh' | 'en' | null

/* GlobalState */
export interface GlobalState {
  layout: LayoutType
  assemblySize: AssemblySizeType
  language: LanguageType
  maximize: boolean
  primary: string
  isDark: boolean
  isGrey: boolean
  isWeak: boolean
  asideInverted: boolean
  headerInverted: boolean
  isCollapse: boolean
  accordion: boolean
  breadcrumb: boolean
  breadcrumbIcon: boolean
  tabs: boolean
  tabsIcon: boolean
  footer: boolean
}

/* UserState */
export interface UserState {
  token: string
  userInfo: { name: string }
}

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string
  title: string
  path: string
  name: string
  closable: boolean
}

/* TabsState */
export interface TabsState {
  tabList: TabsMenuProps[]
}

/* AuthState */
export interface AuthState {
  routeName: string
  authButtonList: {
    [key: string]: string[]
  }
  authRouteList: Menu.MenuOptions[]
}

/* KeepAliveState */
export interface KeepAliveState {
  aliveNames: string[]
}
