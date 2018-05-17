<script>
import BansheeExpandableItem from './ExpandableItem'
import toPascal from '@/utils/hyphenToPascal'

export default {
  name: 'BansheeExpandable',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    active: {
      type: [Array, Number]
    },
    tag: {
      type: String,
      default: 'dl'
    }
  },
  provide () {
    return {
      activeItems: this.$data,
      updateIndex: this.updateActiveIndex
    }
  },
  data: () => ({
    internalActive: []
  }),
  methods: {
    updateAccordionIndex (index) {
      if (this.internalActive.includes(index)) {
        this.internalActive = this.internalActive.filter(i => i !== index)
      } else {
        this.internalActive = []
        this.internalActive.push(index)
      }

      this.$emit('updated', this.internalActive)
    },
    updateActiveIndex (index) {
      if (this.accordion) {
        this.updateAccordionIndex(index)
        return
      }

      if (this.internalActive.includes(index)) {
        this.internalActive = this.internalActive.filter(i => i !== index)
      } else {
        this.internalActive.push(index)
      }

      this.$emit('updated', this.internalActive)
    }
  },
  render (h) {
    const scoped = this.$scopedSlots.default
      ? this.$scopedSlots.default({
        active: this.internalActive,
        update: this.updateActiveIndex
      })
      : null

    const children = this.$slots.default.map((child, index) => {
      const options = child.componentOptions

      if (options && toPascal(options.tag) === BansheeExpandableItem.name) {
        return h(BansheeExpandableItem, {
          props: {
            active: this.internalActive,
            index
          }
        }, options.children)
      }

      return child
    })

    return h(this.tag, {
      attrs: {
        role: 'presentation'
      }
    }, [
      children,
      scoped
    ])
  }
}
</script>
