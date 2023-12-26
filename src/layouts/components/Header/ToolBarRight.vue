<script setup lang="ts">
import Size from './components/Size.vue'

// import Language from './components/Language.vue'
import GlobalSearch from './components/GlobalSearch/index.vue'

// import Message from './components/Message.vue'
import Fullscreen from './components/Fullscreen.vue'
import Avatar from './components/Avatar.vue'
import DarkToggle from './components/DarkToggle.vue'
</script>

<template>
  <div class="flex-center">
    <div class="flex-y-center space-x-3 md:space-x-5">
      <DarkToggle />
      <GlobalSearch />
      <Size />
      <!-- <Language /> -->
      <Fullscreen />
      <!-- <Message /> -->
      <Avatar />
    </div>
  </div>
</template>
