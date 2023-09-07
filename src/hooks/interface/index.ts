export module Table {
  export interface Pageable {
    pageNum: number
    pageSize: number
    total: number
  }
  export interface StateProps {
    tableData: any[]
    pageable: Pageable
    searchParam: {
      [key: string]: any
    }
    searchInitParam: {
      [key: string]: any
    }
    totalParam: {
      [key: string]: any
    }
    icon?: {
      [key: string]: any
    }
  }
}

export module HandleData {
  export type MessageType = '' | 'success' | 'warning' | 'info' | 'error'
}

export module Theme {
  export type ThemeType = 'light' | 'inverted' | 'dark'
  export type GreyOrWeakType = 'grey' | 'weak'
}
