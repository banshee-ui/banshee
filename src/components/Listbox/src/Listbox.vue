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
    itemKey: {
      type: String,
      default: 'id'
    },
    select: {
      type: [Array, String, Number],
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  data: () => ({
    focusedIndex: 0,
    selected: []
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
    if (!Array.isArray(this.select)) {
      this.focusedIndex = parseInt(this.select)
    }
  },
  methods: {
    _removeFromSelected () {
      const index = this.selected.indexOf(this.currentItem)
      this.selected = this.selected.filter((x, i) => i !== index)

      this.$emit('removeItem', {
        removed: this.currentItem,
        selected: this.selected
      })
    },
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
      if (!this.selected.includes(this.currentItem)) {
        this.selected.push(this.currentItem)

        this.$emit('selectItem', {
          item: this.currentItem,
          selected: this.selected
        })
      } else {
        this._removeFromSelected()
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
    transfer () {
      this.$emit('transfer', {
        selected: this.selected
      })

      this.$el.focus()
      this.selected = []
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
          let key

          // If item is not an object
          if (!item[this.itemKey]) {
            key = `${item}-${index}`
          } else {
            key = item[this.itemKey]
          }

          return h(BansheeListboxItem, {
            props: {
              item,
              index,
              focus: this.focusItem,
              focused: this.focusedIndex,
              selected: this.selected,
              selectItem: this.selectItem
            },
            key,
            ...child.data
          })
        })
      }

      return child
    })

    const scopedSlot = this.$scopedSlots.default
      ? this.$scopedSlots.default({
        items: this.items,
        focus: this.focusItem,
        focused: this.focusedIndex,
        selectItem: this.selectItem,
        selectedItems: this.selected,
        transfer: this.transfer
      })
      : null

    return h(this.tag, {
      attrs: {
        role: 'listbox',
        tabindex: 0
      },
      on: {
        keydown: this.handleEvent
      }
    }, [children, scopedSlot])
  }
}
</script>
