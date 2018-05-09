<script>
// focusedItem
// aria-selected="true"

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
      this.focusedIndex = this.focusedIndex + 1

      if (this.focusedIndex > this.items.length - 1) {
        this.focusedIndex = 0
      }

      this.scrollIntoView()
    },
    focusItem (index) {
      this.focusedIndex = index
    },
    scrollBottom () {
      this.focusedIndex = this.items.length - 1
      this.scrollIntoView()
    },
    scrollIntoView () {
      this.$nextTick(() => {
        this.currentItemDOM.scrollIntoView()
      })
    },
    scrollTop () {
      this.focusedIndex = 0
      this.scrollIntoView()
    },
    up () {
      this.focusedIndex = this.focusedIndex - 1

      if (this.focusedIndex < 0) {
        this.focusedIndex = this.items.length - 1
      }

      this.scrollIntoView()
    }
  },
  render () {
    return this.$scopedSlots.default({
      focused: {
        index: this.focusedIndex,
        item: this.currentItem
      },
      focusedIndex: this.focusedIndex,
      list: this.items,
      listboxAria: {
        role: 'listbox'
      },
      onFocus: this.focusItem,
      onKeyboard: {
        keydown: this.handleEvent
      },
      optionsAria: {
        role: 'option'
      }
    })
  }
}
</script>
