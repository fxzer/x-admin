import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    ignores: [
      '**/colors.ts',
      '**/interface/index.ts',
    ],
  },
)