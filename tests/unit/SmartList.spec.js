import { shallowMount } from '@vue/test-utils'
import BansheeSmartList from '@/components/SmartList/src/SmartList.vue'

describe('SmartList.vue', () => {
  it('renders props.items when passed', () => {
    const items = ['One', 'Two', 'Three']

    const wrapper = shallowMount(BansheeSmartList, {
      propsData: { items },
      scopedSlots: {
        default: `
          <ul slot-scope="{ items }">
            <li v-for="item in items" :key="item">
              {{ item }}
            </li>
          </ul>
        `
      }
    })

    // Number of <li> should match the array length
    expect(wrapper.findAll('li').length).toBe(items.length)
  })

  it('renders with default sorting', () => {
    const items = ['c', 'd', 'a', 'b']
    const sortedItems = items.sort()

    const wrapper = shallowMount(BansheeSmartList, {
      propsData: {
        items,
        'default-sort': 'asc'
      },
      scopedSlots: {
        default: `
          <ul slot-scope="{ items }">
            <li v-for="item in items" :key="item">
              {{ item }}
            </li>
          </ul>
        `
      }
    })

    // First element should be 'a'
    expect(wrapper.findAll('li').at(0).text()).toBe(sortedItems[0])
  })

  it('renders only the items matching the search query', () => {
    const items = ['Alleria', 'Sylvanas', 'Vereesa']
    const query = 'Syl'

    const wrapper = shallowMount(BansheeSmartList, {
      propsData: { items, query },
      scopedSlots: {
        default: `
          <ul slot-scope="{ items }">
            <li v-for="item in items" :key="item">
              {{ item }}
            </li>
          </ul>
        `
      }
    })

    expect(wrapper.find('li').text()).toBe('Sylvanas')
  })
})
