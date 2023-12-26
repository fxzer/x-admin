export const useNetworkStore = defineStore('store-network', () => {
  const networks = reactive([{ uuid: '321befc1ba074e50827c9c7ee102763d', number: 208, accountUuid: 'de3f247b7720430f8d339c688071f817', name: '组网测试', cidr: '10.0.0.0/16', dummyCidr: '10.0.254.0/24', dummyCidr6: 'fc00:9cac:157d:7e0d::2:0/112', accelTunnelCidr: '10.0.249.0/24', accelTunnelCidr6: 'fc00:9cac:157d:7e0d::7:0/112', vpeVtapCidr: '10.0.255.0/24', cpeCidr: '10.0.0.0/19', hubCidr: '10.0.253.0/24', hubToHubCidr: '10.0.252.0/24', ipv6Cidr: 'fc00:9cac:157d:7e0d::/64', ipv6VpeVtepCidr: 'fc00:9cac:157d:7e0d::1:0/112', ipv6CpeCidr: 'fc00:9cac:157d:7e0d::5:0/112', ipv6HubCidr: 'fc00:9cac:157d:7e0d::3:0/112', ipv6HubToHubCidr: 'fc00:9cac:157d:7e0d::4:0/112', dialCidr: '10.0.250.0/24', ipv6DialCidr: 'fc00:9cac:157d:7e0d::6:0/112', vid: 46, siteCount: 5, type: '组网', state: 'Enabled', lastOpDate: 'Dec 14, 2023 4:16:42 PM', createDate: 'Aug 18, 2023 3:27:14 PM', accountName: 'zhangy', company: 'zy-test123' }])

  const currentNet = ref({})
  const setCurrentNet = (net: any) => {
    if (typeof net !== 'object') {
      const current = networks.find(item => item.uuid === net)
      currentNet.value = current || {}
    }
    else {
      currentNet.value = net
    }
  }
  return { networks, currentNet, setCurrentNet }
})
