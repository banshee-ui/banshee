<script>
import generateId from '@/utils/generateId'

export default {
  name: 'BansheeCarouselSlide',
  props: {
    tag: {
      type: String,
      default: 'li'
    }
  },
  render (h) {
    return h(this.tag, {
      key: generateId() // Need to key for transition to correctly work
    }, this.$slots.default)
  }
}
</script>
