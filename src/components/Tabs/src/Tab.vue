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
    noAria: {
      type: Boolean,
      default: false
    },
    tag: {
      type: [String, Object],
      default: 'button'
    },
    updateIndex: {
      type: Function
    }
  },
  inject: ['tabs'],
  computed: {
    _children () {
      return this.isScoped ? this._scopedSlotContent : this.$slots.default
    },
    getAria () {
      const isActive = this.index === this.tabs.getActiveIndex

      return {
        attrs: {
          role: 'tab',
          tabindex: isActive ? 0 : -1,
          'aria-selected': String(isActive)
        }
      }
    },
    isScoped () {
      return this.$scopedSlots.default
    },
    _scopedSlotContent () {
      return this.$scopedSlots.default({
        aria: this.noAria ? { ...this.getAria.attrs } : null,
        index: this.index,
        updateActiveIndex: this.updateIndex
      })
    }
  },
  render (h) {
    return h(this.tag, {
      attrs: !this.noAria ? { ...this.getAria.attrs } : null,
      on: {
        click: () => {
          if (!this.disabled) {
            this.updateIndex()
          }
        }
      }
    }, this._children)
  }
}
</script>
