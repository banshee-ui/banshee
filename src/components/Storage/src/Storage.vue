<script>
export default {
  name: 'BansheeStorage',
  props: {
    get: {
      type: [Array, String],
      default: null
    },
    set: {
      type: [Array, Object],
      default: null
    },
    type: {
      type: String,
      default: 'local',
      validator (value) {
        return ['local', 'session']
      }
    }
  },
  data: () => ({
    result: {}
  }),
  mounted () {
    if (this.get) {
      this._handleInitialGet()
    }

    if (this.set) {
      this._handleInitialSet()
    }
  },
  computed: {
    length () {
      return this.storage.length
    },
    storage () {
      return this.type === 'local'
        ? window.localStorage
        : window.sessionStorage
    }
  },
  methods: {
    _getEach () {
      this.get.forEach(key => this.getItem(key))
    },
    _setEach () {
      this.set.forEach(item => {
        for (let prop in item) {
          this.setItem(prop, item[prop])
        }
      })
    },
    _handleInitialGet () {
      if (Array.isArray(this.get)) {
        this._getEach()
        return
      }

      this.getItem(this.get)
    },
    _handleInitialSet () {
      if (Array.isArray(this.set)) {
        this._setEach()
        return
      }

      for (let prop in this.set) {
        this.setItem(prop, this.set[prop])
      }
    },
    clear () {
      this.storage.clear()
      this.result = {}

      this.$emit('onClear')
    },
    getItem (key) {
      if (!key) {
        console.warn('You must provide a key when attempting to get data from storage.')
        return
      }

      const item = this.storage.getItem(key)
      this.$set(this.result, key, item)

      this.$emit('onGetItem', {
        item,
        result: this.result,
        store: this.storage
      })
    },
    key (property, index) {
      this.$set(this.result, property, this.storage.key(index))

      this.$emit('onKeyed', {
        key: this.storage.key(index),
        result: this.result,
        store: this.storage
      })
    },
    removeItem (key) {
      this.storage.removeItem(key)

      this.$emit('onRemoveItem', {
        result: this.result,
        store: this.storage
      })
    },
    removeItems (keys) {
      this.keys.forEach(key => {
        this.storage.removeItem(key)
      })

      this.$emit('onRemoveItem', {
        result: this.result,
        store: this.storage
      })
    },
    setItem (key, value) {
      if (!key || !value) {
        console.warn('A key or value must be present in order to save data to storage.')
        return
      }

      this.storage.setItem(key, value)
      this.$set(this.result, key, value)

      this.$emit('onSetItem', {
        result: this.result,
        store: this.storage
      })
    }
  },
  render (h) {
    return this.$scopedSlots.default({
      clear: this.clear,
      getItem: this.getItem,
      key: this.key,
      length: this.length,
      removeItem: this.removeItem,
      removeItems: this.removeItems,
      result: this.result,
      setItem: this.setItem,
      storage: this.storage
    })
  }
}
</script>
