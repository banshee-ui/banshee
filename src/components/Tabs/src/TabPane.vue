<script>
import generateId from '@/utils/generateId'

export default {
  name: 'BansheeTabPane',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  inject: ['tabs'],
  render (h) {
    return h(this.tag, {
      key: generateId()
    }, this.$slots.default)
  }
}
</script>
