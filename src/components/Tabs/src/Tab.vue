<script>
export default {
  name: 'BansheeTab',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    updateIndex: {
      type: Function
    },
    tag: {
      type: [String, Object],
      default: 'div'
    }
  },
  render (h) {
    return h(this.tag, {
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
