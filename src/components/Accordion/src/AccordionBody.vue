<script>
export default {
  name: 'BansheeAccordionBody',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  inject: ['activeItems', 'itemIndex'],
  render (h) {
    return this.activeItems.internalActive.includes(this.itemIndex)
      ? h(this.tag, this.$slots.default)
      : null
  }
}
</script>
