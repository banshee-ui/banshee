<script>
export default {
  name: 'BansheeAccordionTitle',
  props: {
    tag: {
      type: String,
      default: 'dt'
    }
  },
  inject: [
    'activeItems',
    'itemIndex',
    'updateIndex'
  ],
  methods: {
    update () {
      this.updateIndex(this.itemIndex)
    }
  },
  render (h) {
    return h(this.tag, {
      attrs: {
        'aria-expanded': this.activeItems.internalActive.includes(this.itemIndex)
      },
      on: {
        click: this.update
      }
    }, this.$slots.default)
  }
}
</script>
