<script>
import BansheeAccordionTitle from './AccordionTitle'
import BansheeAccordionBody from './AccordionBody'
import toPascal from '@/utils/hyphenToPascal'

export default {
  name: 'BansheeAccordionItem',
  props: {
    active: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  inject: ['updateIndex'],
  render (h) {
    const children = this.$slots.default.map(child => {
      const options = child.componentOptions
      const tag = toPascal(options.tag)

      if (options && tag === BansheeAccordionTitle.name) {
        const data = Object.assign({}, {
          updateIndex: () => {
            this.updateIndex(this.index)
          }
        })

        return h(BansheeAccordionTitle, {
          props: {
            index: this.index,
            ...data
          }
        }, options.children)
      } else if (options && tag === BansheeAccordionBody.name) {
        return this.active.includes(this.index) ? child : null
      }

      return child
    })

    return h(this.tag, children)
  }
}
</script>
