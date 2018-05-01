<script>
import enableClick from '@/utils/enableClick'

export default {
  props: {
    defaultOn: {
      type: Boolean,
      default: false
    },
    on: {
      type: Boolean,
      default: undefined
    },
    onToggle: {
      type: Function,
      default: () => ({})
    }
  },
  data: () => ({
    internalOn: false
  }),
  computed: {
    attrs () {
      return {
        tabIndex: 0,
        'aria-expanded': Boolean(this.getOn)
      }
    },
    getOn () {
      return this.isOnControlled ? this.on : this.internalOn
    },
    inputActions () {
      return {
        ...this.toggler,
        keyup: e => {
          if (e.key === 'Enter') {
            this.toggle()
          }
        }
      }
    },
    isOnControlled () {
      return this.on !== undefined
    },
    toggler () {
      return {
        click: this.toggle
      }
    }
  },
  created () {
    this.internalOn = this.defaultOn
  },
  methods: {
    setOn () {
      this.internalOn = true
    },
    setOff () {
      this.internalOn = false
    },
    toggle () {
      this.internalOn = !this.internalOn
    }
  },
  render (h) {
    return this.$scopedSlots.default({
      attrs: { ...this.attrs },
      on: this.getOn,
      setOn: enableClick(this.setOn),
      setOff: enableClick(this.setOff),
      toggle: this.toggler,
      inputToggle: { ...this.inputActions }
    })
  }
}
</script>
