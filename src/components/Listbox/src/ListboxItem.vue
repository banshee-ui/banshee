<script>
export default {
  name: 'BansheeListboxItem',
  props: {
    focus: {
      type: Function,
      required: true
    },
    focused: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    item: {
      type: [String, Number, Object],
      required: true
    },
    selectItem: {
      type: Function
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render (h) {
    return h(this.tag, {
      attrs: {
        role: 'option',
        'aria-selected': this.focused === this.index
      },
      on: {
        click: () => {
          this.focus(this.index)
        }
      }
    }, this.$scopedSlots.default({
      item: this.item,
      index: this.index,
      selected: this.focused === this.index
    }))
  }
}
</script>
