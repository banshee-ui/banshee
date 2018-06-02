<script>
export default {
  name: 'BansheeTab',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    updateIndex: {
      type: Function
    },
    tag: {
      type: [String, Object],
      default: 'button'
    }
  },
  inject: ['tabs'],
  render (h) {
    let children
    const isScoped = this.$scopedSlots.default
    const isActive = this.index === this.tabs.getActiveIndex

    if (isScoped) {
      children = this.$scopedSlots.default({
        index: this.index,
        updateIndex: this.updateIndex
      })
    } else {
      children = this.$slots.default
    }

    return h(this.tag, {
      attrs: {
        role: 'tab',
        tabindex: isActive ? 0 : -1,
        'aria-selected': String(isActive)
      },
      on: {
        click: () => {
          if (!this.disabled) {
            this.updateIndex()
          }
        }
      }
    }, children)
  }
}
</script>
