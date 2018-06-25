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
    head () {
      return this.filteredItems[0]
    },
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
    last () {
      return this.filteredItems[this.filteredItems.length - 1]
    },
    reversedItems () {
      const items = [...this.filteredItems]
      return items.reverse()
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
    },
    tail () {
      return this.filteredItems.length > 1
        ? this.filteredItems.slice(1)
        : this.filteredItems
    },
    uniqueItems () {
      return this.filteredItems.filter(item => this.filteredItems.indexOf(item) === this.filteredItems.lastIndexOf(item))
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
      head: this.head,
      items: this.filteredItems,
      last: this.last,
      reversedItems: this.reversedItems,
      sort: this.sortBy,
      tail: this.tail
    })
  }
}
</script>
