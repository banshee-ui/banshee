<script>
import BansheeTab from './Tab'
import toPascal from '@/utils/hyphenToPascal'

export default {
  name: 'BansheeTabList',
  props: {
    tag: {
      type: [String, Object],
      default: 'div'
    }
  },
  inject: ['updateIndex'],
  render (h) {
    const children = this.$slots.default.map((child, index) => {
      const options = child.componentOptions
      if (options && toPascal(options.tag) === 'BansheeTab') {
        const data = Object.assign({}, {
          index,
          updateIndex: () => {
            this.updateIndex(index)
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

    return h(this.tag, {
      attrs: {
        role: 'tablist'
      }
    }, children)
  }
}
</script>
