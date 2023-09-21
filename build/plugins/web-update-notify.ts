import { webUpdateNotice } from '@plugin-web-update-notification/vite'

export function setupWebUpdateNotification() {
  return webUpdateNotice({
    notificationProps: {
      title: '👋 有新版本了',
      description: '点击刷新页面获取最新版本',
      buttonText: '刷新',
      dismissButtonText: '忽略',
    },
  })
}
