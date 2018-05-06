<script>
export default {
  name: 'BansheeTabs',
  props: {
    defaultSelected: {
      type: String
    },
    selected: {
      type: String,
      default: undefined
    },
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    internalSelected: ''
  }),
  computed: {
    activeTabPane () {
      return this.$slots[this.getSelected.toLowerCase()]
    },
    attrs () {
      return {
        role: 'tab',
        tabindex: '-1'
      }
    },
    getSelected () {
      return this.isControlled ? this.selected : this.internalSelected
    },
    isControlled () {
      return this.selected !== undefined
    }
  },
  created () {
    this.internalSelected = this.defaultSelected
  },
  methods: {
    select (tab) {
      this.internalSelected = tab
      this.$emit('tabSelect', tab)
    }
  },
  render (h, context) {
    return h('div', {
      attrs: {
        'role': 'tablist'
      }
    }, [
      this.$scopedSlots.default({
        attrs: { ...this.attrs },
        tabs: this.tabs,
        select: this.select,
        selected: this.getSelected
      }),
      this.activeTabPane
    ])
  }
}
</script>
