<script setup lang='ts'>
import { colorsMap } from '@/constants'
import { useGlobalStore } from '@/stores'
import { useMobile } from '@/hooks'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])
const { isMobile } = useMobile()
const visible = useVModel(props, 'modelValue', emit)
const globalStore = useGlobalStore()
const { primary } = storeToRefs(globalStore)
const activeCate = ref('品牌色')

// 弹窗宽度
const width = computed(() => (isMobile.value ? '90%' : '690px'))
</script>

<template>
  <el-dialog v-model="visible" :width="width" :modal="false" append-to-body>
    <h3 class="mb-4 text-center text-2xl font-semibold text-primary -mt-5">
      中国传统色
    </h3>
    <el-tabs v-model="activeCate" tab-position="top">
      <el-tab-pane v-for="(colors, cate) in colorsMap" :key="cate" :label="cate" :name="cate">
        <div class="grid grid-cols-4 gap-5 pt-2 md:grid-cols-8">
          <div v-for="color in colors" :key="color.hex">
            <div
              class="h-9 flex-center cursor-pointer rounded-md" :style="{ backgroundColor: color.hex }"
              @click="primary = color.hex"
            >
              <i-ep-select v-if="color.hex === primary" class="text-xl text-white" />
            </div>
            <div class="mt-1 text-center text-sm">
              {{ color.name }}
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<style scoped lang='scss'></style>
