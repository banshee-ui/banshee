<script>
export default {
  name: 'BansheeErrorBoundary',
  props: {
    onError: {
      type: Function,
      default: null
    },
    stopPropagation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      error: null,
      err: null,
      vm: null,
      info: ''
    }
  },
  errorCaptured (err, vm, info = '') {
    this.error = true
    this.err = err
    this.vm = vm
    this.info = info

    this.$emit('onErrorCaptured', { err, vm, info })
    if (this.onError) this.onError(err, vm, info)
    if (this.stopPropagation) return false
  },
  render (h) {
    if (!this.$slots.default.length) {
      console.warn('ErrorBoundary component must have child components.')
      return null
    }
    return this.error ? this.$scopedSlots.default({
      err: this.err,
      info: this.info
    }) : this.$slots.default[0]
  }
}
</script>
