<script>
export default {
  name: 'BansheeAccordionTitle',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  inject: ['itemIndex', 'updateIndex'],
  methods: {
    update () {
      this.updateIndex(this.itemIndex)
    }
  },
  render (h) {
    return h(this.tag, {
      on: {
        click: this.update
      }
    }, this.$slots.default)
  }
}
</script>
