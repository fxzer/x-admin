import { webUpdateNotice } from '@plugin-web-update-notification/vite'

export function setupWebUpdateNotification() {
  return webUpdateNotice({
    hiddenDismissButton: true,
    checkInterval: 1 * 60 * 1000,
    notificationProps: {
      title: '🎉 系统更新提示!',
      description: '检测到系统版本已更新, 请刷新页面后使用！',
      buttonText: '刷新',
    },
  })
}
