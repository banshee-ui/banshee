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
    getAria () {
      const isActive = this.index === this.tabs.getActiveIndex

      return {
        attrs: {
          role: 'tab',
          tabindex: isActive ? 0 : -1,
          'aria-selected': String(isActive)
        }
      }
    }
  },
  render (h) {
    let children
    const isScoped = this.$scopedSlots.default

    if (isScoped) {
      children = this.$scopedSlots.default({
        aria: this.noAria ? { ...this.getAria.attrs } : null,
        index: this.index,
        updateActiveIndex: this.updateIndex
      })
    } else {
      children = this.$slots.default
    }

    return h(this.tag, {
      attrs: !this.noAria ? { ...this.getAria.attrs } : null,
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
