<script>
export default {
  name: 'BansheeTab',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    updateIndex: {
      type: Function
    },
    tag: {
      type: [String, Object],
      default: 'button'
    }
  },
  inject: ['tabs'],
  computed: {

  },
  render (h) {
    return h(this.tag, {
      attrs: {
        role: 'tab',
        'aria-selected': String(this.index === this.tabs.getActiveIndex)
      },
      on: {
        click: () => {
          if (!this.disabled) {
            this.updateIndex()
          }
        }
      }
    }, this.$slots.default)
  }
}
</script>
