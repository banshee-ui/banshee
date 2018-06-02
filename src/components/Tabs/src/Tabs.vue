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
    getActiveIndex () {
      return this.active >= 0 ? this.active : this.internalActive
    }
  },
  mounted () {
    this.internalActive = this.defaultActive
  },
  methods: {
    updateActiveIndex (index) {
      const previous = this.internalActive
      this.internalActive = index
      this.$emit('updateActiveIndex', { index, previous })
    }
  },
  render (h) {
    let children
    const isScoped = this.$scopedSlots.default

    if (isScoped) {
      children = this.$scopedSlots.default({
        active: this.getActiveIndex
      })
    } else {
      children = this.$slots.default
    }

    return h(this.tag, children)
  }
}
</script>
