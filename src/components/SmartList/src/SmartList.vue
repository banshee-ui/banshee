<script>
export default {
  name: 'BansheeSmartList',
  props: {
    defaultSort: {
      type: String,
      default: null,
      validator (value) {
        return ['asc', 'desc'].includes(value)
      }
    },
    filterMethod: {
      type: Function,
      default: null
    },
    items: {
      type: Array,
      required: true
    },
    sortMethod: {
      type: Function,
      default: null
    },
    sortKey: {
      type: String,
      default: ''
    },
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      sort: {
        by: this.sortKey,
        order: 1
      }
    }
  },
  computed: {
    filteredItems () {
      let data = this.items

      if (this.query) {
        data = !this.filterMethod
          ? this.searchedItems
          : this.filterMethod(this.query, this.items)
      }

      if (this.sort.by || this.defaultSort) {
        data = !this.sortMethod
          ? this.sortedItems
          : this.sortMethod(this.sort, this.searchedItems)
      }

      return data
    },
    searchedItems () {
      return this.items.filter(row => {
        if (typeof row === 'object') {
          return Object.keys(row).some(key => {
            return String(row[key]).toLowerCase().includes(this.query.toLowerCase())
          })
        }

        return String(row).toLowerCase().includes(this.query.toLowerCase())
      })
    },
    sortedItems () {
      return this.searchedItems.slice().sort((a, b) => {
        if (typeof a === 'object' && typeof b === 'object') {
          a = a[this.sort.by]
          b = b[this.sort.by]
        }
        return (a === b ? 0 : a > b ? 1 : -1) * this.sort.order
      })
    }
  },
  created () {
    if (this.defaultSort) {
      this.sort.order = this.defaultSort === 'asc'
        ? this.sort.order
        : this.sort.order * -1
    }
  },
  methods: {
    sortBy (by) {
      this.sort.by = by
      this.sort.order = this.sort.order * -1
    }
  },
  render () {
    return this.$scopedSlots.default({
      items: this.filteredItems,
      sort: this.sortBy
    })
  }
}
</script>
