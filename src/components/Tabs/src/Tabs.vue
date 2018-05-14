<script>
import BansheeTabPanes from './TabPanes'
import BansheeTabList from './TabList'

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
    const children = this.$slots.default.map(child => {
      if (child.componentOptions && child.componentOptions.tag === 'BansheeTabPanes') {
        return h(BansheeTabPanes, {
          props: {
            active: this.getActiveIndex
          }
        }, child.componentOptions.children)
      } else if (child.componentOptions && child.componentOptions.tag === 'BansheeTabList') {
        return h(BansheeTabList, {
          props: {
            updateActiveIndex: this.updateActiveIndex
          }
        }, child.componentOptions.children)
      }

      return child
    })

    return h(this.tag, children)
  }
}
</script>
