<script setup lang="ts">
import Size from './components/Size.vue'
import Language from './components/Language.vue'
import GlobalSearch from './components/GlobalSearch/index.vue'
import Setting from './components/Setting.vue'
import Message from './components/Message.vue'
import Fullscreen from './components/Fullscreen.vue'
import Avatar from './components/Avatar.vue'

import { useUserStore } from '@/stores'

const userStore = useUserStore()
const { userInfo } = userStore
</script>

<template>
  <div class="flex-center">
    <div class="flex-y-center space-x-3 md:space-x-5">
      <Size />
      <Language />
      <GlobalSearch />
      <Setting />
      <Message />
      <Fullscreen />
      <Avatar />
    </div>
    <p class="ml-1 max-w-20 truncate" :title="userInfo.name">
      {{ userInfo.name }}
    </p>
  </div>
</template>
