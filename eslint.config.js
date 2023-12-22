import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      'no-console': 'warn',
    },
    ignores: [
      '**/colors.ts',
      './mocs/**',
      '**/interface/index.ts',
    ],
  },
)
