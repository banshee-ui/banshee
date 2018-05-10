<script>
export default {
  name: 'BansheeListboxItem',
  functional: true,
  props: {
    itemIndex: {
      type: Number,
      required: true
    },
    selected: {
      type: [Array, String, Number],
      required: true
    }
  },
  render (h, context) {
    return context.data.scopedSlots.default({
      active: context.props.selected === context.props.itemIndex,
      aria: {
        role: 'option',
        'aria-selected': context.props.selected === context.props.itemIndex
      }
    })
  }
}
</script>
