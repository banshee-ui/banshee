<script>
export default {
  name: 'BansheeDrop',
  data: () => ({
    dropped: false
  }),
  render () {
    return this.$scopedSlots.default({
      dropped: this.dropped
    })
  }
}
</script>
