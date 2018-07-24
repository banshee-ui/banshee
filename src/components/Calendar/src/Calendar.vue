<script>
import chunk from '@/utils/chunk'
import generateId from '@/utils/generateId'

const getMonths = (format = 'long') => {
  return {
    long: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }[format]
}

export default {
  name: 'BansheeCalendar',
  props: {
    daysOfWeek: {
      type: Array,
      default: () => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    min: {
      type: Date,
      default: () => new Date(1980, 0, 1)
    },
    max: {
      type: Date,
      default: () => new Date(2040, 11, 31)
    },
    monthFormat: {
      type: String,
      default: 'long',
      validator: value => ['long', 'short'].includes(value)
    }
  },
  data: () => ({
    date: new Date(),
    months: [],
    today: new Date(new Date().setHours(0, 0, 0, 0))
  }),
  computed: {
    currentDaysOfMonth () {
      return this.getDays(this.month, 1, this.lastDayOfMonth.getDate())
    },
    weeks () {
      return chunk([...this.previousMonthDays, ...this.currentMonthDays, ...this.nextMonthDays])
    },
    firstDayOfMonth () {
      return new Date(this.year, this.month, 1).getDay()
    },
    lastDayOfMonth () {
      return new Date(this.year, this.month + 1, 0)
    },
    month () {
      return this.date.getMonth()
    },
    monthName () {
      return this.months[this.date.getMonth()]
    },
    nextMonthDays () {
      const numberOfDays = 6 - this.lastDayOfMonth.getDay()
      const nextMonth = this.month + 1
      return this.getDays(nextMonth, 1, numberOfDays)
    },
    previousMonthDays () {
      const endOfPreviousMonth = new Date(this.year, this.month, 0).getDate()
      const startRange = Number(endOfPreviousMonth) - Number(this.firstDayOfMonth) + 1
      const prevMonth = this.month - 1
      return !this.firstDayOfMonth ? [] : this.getDays(prevMonth, startRange, endOfPreviousMonth)
    },
    year () {
      return this.date.getFullYear()
    }
  },
  mounted () {
    this.months = getMonths(this.monthFormat)
  },
  methods: {
    getDays (month, startDay = 1, numberOfDays) {
      const days = []

      for (startDay; startDay <= numberOfDays; startDay++) {
        let thisDay = new Date(this.year, month, startDay)

        days.push({
          _id: generateId(),
          day: startDay,
          year: this.year,
          month: this.month,
          date: thisDay,
          current: this.today.getTime() === thisDay.getTime(),
          secondary: this.date.getMonth() !== thisDay.getMonth()
        })
      }

      return days
    },
    nextMonth () {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)

      this.$emit('onChange', this.date)
    },
    previousMonth () {
      this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1)

      this.$emit('onChange', this.date)
    }
  }
}
</script>
