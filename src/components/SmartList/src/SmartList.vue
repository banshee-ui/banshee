<script>
export default {
  name: 'BansheeSmartList',
  props: {
    filterMethod: {
      type: Function
    },
    items: {
      type: Array,
      required: true
    },
    itemKey: {
      type: String,
      default: 'id'
    },
    sortMethod: {
      type: Function
    },
    query: {
      type: String,
      default: ''
    }
  },
  computed: {
    filteredItems () {
      let data = this.items

      if (this.query) {
        data = data.filter(row => {
          return Object.keys(row).some(key => {
            return (
              String(row[key])
                .toLowerCase()
                .includes(this.query.toLowerCase())
            )
          })
        })
      }

      return data
    }
  },
  methods: {
    addItem (item) {
      this.$emit('add', this.items.push(item))
    },
    removeItem (item) {
      this.$emit('remove', this.items.filter(x => x[this.itemKey] !== item[this.itemKey]))
    }
  },
  render () {
    return this.$scopedSlots.default({
      items: this.filteredItems,
      remove: this.removeItem
    })
  }
}
</script>
