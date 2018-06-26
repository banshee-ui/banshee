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
  inject: [
    'updateIndex'
  ],
  computed: {
    _scopedSlotContent () {
      return this.$slots.default.map(this._cloneChildren)
    }
  },
  methods: {
    _cloneChildren (child, index) {
      const options = child.componentOptions
      if (options && toPascal(options.tag) === 'BansheeTab') {
        const props = {
          index,
          updateIndex: () => {
            this.updateIndex(index)
          },
          ...options.propsData
        }

        return this.$createElement(BansheeTab, {
          ...child.data,
          props: { ...props }
        }, options.children)
      }

      return child
    }
  },
  render (h) {
    return h(this.tag, {
      attrs: {
        role: 'tablist'
      }
    }, this._scopedSlotContent)
  }
}
</script>
