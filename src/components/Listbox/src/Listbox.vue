<script>
export default {
  name: 'BansheeListbox',
  props: {
    dev: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      required: true
    },
    selected: {
      type: [Array, String, Number],
      default: 0
    },
    withMultiSelect: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    focusedIndex: 0
  }),
  computed: {
    currentItem () {
      return this.items[this.focusedIndex]
    },
    currentItemDOM () {
      return this.$el.querySelectorAll('[role="option"]')[this.focusedIndex]
    }
  },
  mounted () {
    if (!Array.isArray(this.selected)) {
      this.focusedIndex = parseInt(this.selected)
    }
  },
  methods: {
    handleEvent ({ keyCode }) {
      switch (keyCode) {
        case 35: /** End key */
          return this.scrollBottom()
        case 36: /** Home key */
          return this.scrollTop()
        case 38: /** Up arrow */
          return this.up()
        case 40: /** Down arrow */
          return this.down()
        default:
          if (this.dev) console.warn(`No case for key code: ${keyCode}`)
      }
    },
    down () {
      this.focusItem(this.focusedIndex + 1)

      if (this.focusedIndex > this.items.length - 1) {
        this.focusItem(0)
      }

      this.scrollIntoView()
    },
    focusItem (index) {
      this.focusedIndex = index
      this.$emit('onFocus', index)
    },
    scrollBottom () {
      this.focusItem(this.items.length - 1)
      this.scrollIntoView()
    },
    scrollIntoView () {
      this.$nextTick(() => {
        this.currentItemDOM.scrollIntoView()
      })
    },
    scrollTop () {
      this.focusItem(0)
      this.scrollIntoView()
    },
    up () {
      this.focusItem(this.focusedIndex - 1)

      if (this.focusedIndex < 0) {
        this.focusItem(this.items.length - 1)
      }

      this.scrollIntoView()
    }
  },
  render () {
    return this.$scopedSlots.default({
      aria: {
        role: 'listbox',
        tabindex: 0
      },
      focused: {
        index: this.focusedIndex,
        item: this.currentItem
      },
      focusedIndex: this.focusedIndex,
      list: this.items,
      onFocus: this.focusItem,
      onKeyboard: {
        keydown: this.handleEvent
      }
    })
  }
}
</script>
