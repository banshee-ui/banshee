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
      expandable: this.$data,
      updateIndex: this.updateActiveIndex
    }
  },
  data: () => ({
    internalActive: []
  }),
  computed: {
    _scopedSlotContent () {
      return this.$scopedSlots.default
        ? this.$scopedSlots.default({
          active: this.internalActive,
          update: this.updateActiveIndex
        })
        : null
    }
  },
  methods: {
    _cloneChildren (child, index) {
      const options = child.componentOptions

      if (options && toPascal(options.tag) === BansheeExpandableItem.name) {
        return this.$createElement(BansheeExpandableItem, {
          ...child.data,
          props: {
            active: this.internalActive,
            index,
            ...options.propsData
          }
        }, options.children)
      }

      return child
    },
    updateAccordionIndex (index) {
      if (this.internalActive.includes(index)) {
        this.internalActive = this.internalActive.filter(i => i !== index)
      } else {
        this.internalActive = []
        this.internalActive.push(index)
      }

      this.$emit('onOpen', this.internalActive)
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

      this.$emit('onOpen', this.internalActive)
    }
  },
  render (h) {
    const children = this.$slots.default.map(this._cloneChildren)

    return h(this.tag, {
      attrs: {
        role: 'presentation'
      }
    }, [
      children,
      this._scopedSlotContent
    ])
  }
}
</script>
