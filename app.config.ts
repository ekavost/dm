export default defineAppConfig({
  ui: {
    colors: {
      primary: 'signal',
      secondary: 'amber',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'font-medium rounded-full'
      }
    },
    card: {
      slots: {
        root: 'rounded-2xl ring-1 ring-white/10 bg-panel/80 backdrop-blur-sm'
      }
    }
  }
})
