<script>
import enableClick from '@/utils/enableClick'

export default {
  name: 'BansheeToggle',
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
        'aria-expanded': String(Boolean(this.getOn))
      }
    },
    getOn () {
      return this.isControlled ? this.on : this.internalOn
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
    isControlled () {
      return this.on !== undefined
    },
    toggler () {
      return { click: this.toggle }
    }
  },
  created () {
    this.internalOn = this.defaultOn
  },
  methods: {
    setOn () {
      this.internalOn = true
      this.onToggle(this.getOn)
      this.$emit('onSetOn', this.getOn)
    },
    setOff () {
      this.internalOn = false
      this.onToggle(this.getOn)
      this.$emit('onSetOff', this.getOn)
    },
    toggle () {
      this.internalOn = !this.internalOn
      this.onToggle(this.getOn)
      this.$emit('onToggle', this.getOn)
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
