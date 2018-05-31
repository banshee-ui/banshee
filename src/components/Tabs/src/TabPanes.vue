<script>
export default {
  name: 'BansheeTabPanes',
  props: {
    tag: {
      type: [String, Object],
      default: 'div'
    }
  },
  inject: ['tabs'],
  render (h) {
    return h(this.tag, {
      attrs: {
        role: 'tabpanel',
        tabindex: 0
      }
    }, [
      this.$slots.default[this.tabs.getActiveIndex]
    ])
  }
}
</script>
