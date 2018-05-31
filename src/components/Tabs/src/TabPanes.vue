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
    return h(this.tag, [
      this.$slots.default[this.tabs.getActiveIndex]
    ])
  }
}
</script>
