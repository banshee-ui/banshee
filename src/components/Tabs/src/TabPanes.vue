<script>
export default {
  name: 'BansheeTabPanes',
  props: {
    active: {
      type: Number
    },
    tag: {
      type: [String, Object],
      default: 'div'
    }
  },
  render (h) {
    return h(this.tag, [
      this.$slots.default[this.active]
    ])
  }
}
</script>
