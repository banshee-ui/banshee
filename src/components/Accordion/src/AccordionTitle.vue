<script>
export default {
  name: 'BansheeAccordionTitle',
  props: {
    index: {
      type: Number,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    },
    updateIndex: {
      type: Function
    }
  },
  render (h) {
    return h(this.tag, {
      on: {
        click: this.updateIndex
      }
    }, this.$slots.default)
  }
}
</script>
