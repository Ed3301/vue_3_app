import { mount  } from '@vue/test-utils'
import NewsItem from '@/components/NewsItem.vue'

describe('NewsItem.vue', () => {
  it('renders properly', () => {
    const msg = 'new message'
    const wrapper = mount (NewsItem, {
      props: {
        article: {
          title: 'Test title',
          body: 'Test body',
        }
      }
    })
    expect(wrapper.text()).toContain('Test title')
  })
})
