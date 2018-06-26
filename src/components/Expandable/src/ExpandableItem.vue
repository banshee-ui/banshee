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
  inject: ['expandable'],
  provide () {
    return {
      itemIndex: this.index
    }
  },
  computed: {
    isActive () {
      return this.expandable.internalActive.includes(this.index)
    },
    isScoped () {
      return this.$scopedSlots.default
    },
    _children () {
      return this.isScoped
        ? this.$scopedSlots.default({ isActive: this.isActive })
        : this.$slots.default
    }
  },
  render (h) {
    return h(this.tag, this._children)
  }
}
</script>
