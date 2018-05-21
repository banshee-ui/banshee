<script>
import BansheeListboxItem from './ListboxItem'
import toPascal from '@/utils/hyphenToPascal'

export default {
  name: 'BansheeListbox',
  props: {
    items: {
      type: Array,
      required: true
    },
    selected: {
      type: [Array, String, Number],
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    transfer: {
      type: Boolean,
      default: false
    },
    withMultiSelect: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    focusedIndex: 0,
    internalSelected: []
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
        case 13: /** Enter key */
          return this.selectItem()
        case 35: /** End key */
          return this.scrollBottom()
        case 36: /** Home key */
          return this.scrollTop()
        case 38: /** Up arrow */
          return this.up()
        case 40: /** Down arrow */
          return this.down()
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
    selectItem () {
      if (!this.internalSelected.includes(this.currentItem)) {
        this.internalSelected.push(this.currentItem)

        this.$emit('selectItem', {
          item: this.currentItem,
          selected: this.internalSelected
        })
      }
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
  render (h) {
    const children = this.$slots.default.map(child => {
      const options = child.componentOptions

      if (options && toPascal(options.tag) === BansheeListboxItem.name) {
        return this.items.map((item, index) => {
          return h(BansheeListboxItem, {
            props: {
              item,
              index,
              focus: this.focusItem,
              focused: this.focusedIndex,
              selectItem: this.selectItem
            },
            ...child.data
          })
        })
      }

      return child
    })

    return h(this.tag, {
      attrs: {
        role: 'listbox',
        tabindex: 0
      },
      on: {
        keydown: this.handleEvent
      }
    }, children)
  }
}
</script>
