<script>
export default {
  name: 'BansheeExpandableBody',
  props: {
    tag: {
      type: String,
      default: 'dd'
    }
  },
  inject: ['activeItems', 'itemIndex'],
  render (h) {
    return this.activeItems.internalActive.includes(this.itemIndex)
      ? h(this.tag, {
        attrs: {
          role: 'region'
        }
      }, this.$slots.default)
      : null
  }
}
</script>
