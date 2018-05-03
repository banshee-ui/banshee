<script>
export default {
  name: 'BansheeDrag',
  data: () => ({
    active: false
  }),
  methods: {
    drag (e) {
      this.active = true
      this.$emit('drag', e)
    },
    dragend (e) {
      this.active = false
      this.$emit('dragend', e)
    }
  },
  render () {
    return this.$scopedSlots.default({
      active: this.active,
      drag: {
        drag: this.drag,
        dragend: this.dragend
      }
    })
  }
}
</script>
