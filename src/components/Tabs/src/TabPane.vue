<script>
export default {
  name: 'BansheeTabPane',
  functional: true,
  props: {
    active: {
      type: String
    },
    for: {
      type: String
    },
    id: {
      type: String
    }
  },
  render (h, context) {
    const props = context.props
    return props.active === props.for ? context.data.scopedSlots.default({
      attrs: {
        'aria-labelledby': props.for,
        id: `${props.for}-tab`,
        role: 'tabpanel',
        tabindex: 0
      }
    }) : null
  }
}
</script>
