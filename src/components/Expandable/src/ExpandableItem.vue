<script>
export default {
  name: 'BansheeExpandableItem',
  props: {
    index: {
      type: Number
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  provide () {
    return {
      itemIndex: this.index
    }
  },
  render (h) {
    return h(this.tag, this.$slots.default)
  }
}
</script>
