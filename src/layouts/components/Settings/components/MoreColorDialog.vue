<script setup lang='ts'>
import colorsMap from '@/utils/colors'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/stores'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])
const { changePrimary } = useTheme()
const visible = useVModel(props, 'modelValue', emit)
const globalStore = useGlobalStore()
const { primary } = storeToRefs(globalStore)
const activeCate = ref('红色系')
function handleClick(color: string) {
  primary.value = color
  changePrimary(color)
}
</script>

<template>
  <el-dialog v-model="visible" width="690" :modal="false" append-to-body>
    <h3 class="mb-4 text-center text-2xl font-semibold text-primary">
      中国传统色
    </h3>
    <el-tabs v-model="activeCate" tab-position="top">
      <el-tab-pane v-for="(colors, cate) in colorsMap" :key="cate" :label="cate" :name="cate">
        <div class="grid grid-cols-8 gap-5 pt-2">
          <div v-for="color in colors" :key="color.hex">
            <div
              class="h-9 flex-center cursor-pointer rounded-md" :style="{ backgroundColor: color.hex }"
              @click="handleClick(color.hex)"
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
