<script>
import BansheeTab from './Tab'

export default {
  name: 'BansheeTabList',
  props: {
    updateActiveIndex: {
      type: Function
    },
    tag: {
      type: [String, Object],
      default: 'div'
    }
  },
  render (h) {
    const children = this.$slots.default.map((child, index) => {
      if (child.componentOptions && child.componentOptions.tag === 'BansheeTab') {
        const data = Object.assign({}, {
          updateActiveIndex: () => {
            this.updateActiveIndex(index)
          }
        }, child.componentOptions.propsData)

        return h(BansheeTab, {
          props: {
            ...data
          }
        }, child.componentOptions.children)
      }

      return child
    })

    return h(this.tag, children)
  }
}
</script>
