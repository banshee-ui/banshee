<script>
export default {
  name: 'BansheeTabs',
  props: {
    active: {
      type: Number
    },
    defaultActive: {
      type: Number,
      default: 0
    },
    tag: {
      type: [String, Object],
      default: 'div'
    }
  },
  provide () {
    return {
      tabs: this,
      updateIndex: this.updateActiveIndex
    }
  },
  data: () => ({
    internalActive: 0
  }),
  computed: {
    _children () {
      return this.isScoped ? this._scopedSlotContent : this.$slots.default
    },
    getActiveIndex () {
      return this.active >= 0 ? this.active : this.internalActive
    },
    isScoped () {
      return this.$scopedSlots.default
    },
    _scopedSlotContent () {
      return this.$scopedSlots.default({
        active: this.getActiveIndex,
        updateActiveIndex: this.updateActiveIndex
      })
    }
  },
  mounted () {
    this.internalActive = this.defaultActive
  },
  methods: {
    updateActiveIndex (index) {
      const previous = this.internalActive
      this.internalActive = index
      this.$emit('onTabChange', { index, previous })
    }
  },
  render (h) {
    return h(this.tag, this._children)
  }
}
</script>
