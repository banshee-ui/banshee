<script>
export default {
  name: 'BansheeTabs',
  props: {
    active: {
      type: Number
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
  methods: {
    updateActiveIndex (index) {
      const previous = this.internalActive
      this.internalActive = index
      this.$emit('updateActiveIndex', { index, previous })
    }
  },
  render (h) {
    return h(this.tag, this.$slots.default)
  }
}
</script>
