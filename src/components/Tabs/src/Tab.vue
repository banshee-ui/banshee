<script>
export default {
  name: 'BansheeTab',
  functional: true,
  props: {
    active: {
      type: String
    },
    id: {
      type: String
    },
    tab: {
      type: String,
      required: true
    }
  },
  render (h, context) {
    const { tab } = context.props
    const active = context.props.active === context.props.tab

    return context.data.scopedSlots.default({
      active,
      attrs: {
        'aria-controls': `${tab}-tab`,
        'aria-selected': String(active),
        id: context.props.id || tab,
        role: 'tab',
        tabindex: '-1'
      },
      tab
    })
  }
}
</script>
