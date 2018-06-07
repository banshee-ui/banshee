<script>
import generateId from '@/utils/generateId'

export default {
  name: 'BansheeExpandableBody',
  props: {
    labelBy: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'dd'
    }
  },
  inject: ['expandable', 'itemIndex'],
  computed: {
    isActive () {
      return this.expandable.internalActive.includes(this.itemIndex)
    }
  },
  render (h) {
    return h(this.tag, {
      style: {
        display: this.isActive ? 'block' : 'none'
      },
      attrs: {
        'aria-hidden': String(this.isActive),
        'aria-labelledby': this.labelBy,
        role: 'tabpanel'
      },
      key: generateId()
    }, this.$slots.default)
  }
}
</script>
