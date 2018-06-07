<script>
export default {
  name: 'BansheeExpandableTitle',
  props: {
    controls: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'dt'
    }
  },
  inject: [
    'expandable',
    'itemIndex',
    'updateIndex'
  ],
  data: () => ({
    focused: false
  }),
  computed: {
    isActive () {
      return String(this.expandable.internalActive.includes(this.itemIndex))
    },
    isFocused () {
      return String(this.focused)
    }
  },
  methods: {
    addFocus () {
      this.focused = true
    },
    update () {
      this.updateIndex(this.itemIndex)
    },
    removeFocus () {
      this.focused = false
    }
  },
  render (h) {
    return h(this.tag, {
      attrs: {
        'aria-expanded': this.isActive,
        'aria-selected': this.isFocused,
        'aria-controls': this.controls,
        role: 'tab'
      },
      on: {
        blur: this.removeFocus,
        click: this.update,
        focus: this.addFocus
      }
    }, this.$slots.default)
  }
}
</script>
