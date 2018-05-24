<script>
export default {
  name: 'BansheeCarouselSlide',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h) {
    return h(this.tag, this.$slots.default)
  }
}
</script>
