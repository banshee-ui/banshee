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
    selected: {
      type: Array,
      required: true
    },
    selectItem: {
      type: Function,
      required: true
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    _scopedSlotContent () {
      return this.$scopedSlots.default({
        active: this.focused === this.index,
        item: this.item,
        index: this.index,
        selected: this.selected.includes(this.item)
      })
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
    }, this._scopedSlotContent)
  }
}
</script>
