<script setup lang="ts">
import AssemblySize from './components/AssemblySize.vue'
import Language from './components/Language.vue'
import GlobalSearch from './components/GlobalSearch/index.vue'
import ThemeSetting from './components/ThemeSetting.vue'
import Message from './components/Message.vue'
import Fullscreen from './components/Fullscreen.vue'
import Avatar from './components/Avatar.vue'

import { useUserStore } from '@/stores/modules/user'

const userStore = useUserStore()
const username = computed(() => userStore.userInfo.name)
</script>

<template>
  <div class="flex-center">
    <div class="flex-y-center space-x-3 md:space-x-5">
      <AssemblySize />
      <Language />
      <GlobalSearch />
      <ThemeSetting />
      <Message />
      <Fullscreen />
      <Avatar />
    </div>
    <p class="ml-1 max-w-20 truncate" :title="username">
      {{ username }}
    </p>
  </div>
</template>
