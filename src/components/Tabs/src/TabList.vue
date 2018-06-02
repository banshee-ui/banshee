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
        const props = {
          index,
          vertical: this.vertical,
          updateIndex: () => {
            this.updateIndex(index)
          },
          ...options.propsData
        }

        return h(BansheeTab, {
          ...child.data,
          props: {
            ...props
          }
        }, options.children)
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
