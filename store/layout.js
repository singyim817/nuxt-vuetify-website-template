export const state = () => ({

  articles: require('@/data/articles.json'),
  drawer: false,
  items: [{
      text: 'Home',
      href: '#!',
    },
    {
      text: 'About',
      href: '#about',
    },
  ],
})


export const getters = {

  categories: state => {
    const categories = []

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue

      const text = article.category

      categories.push({
        text,
        href: '#!',
      })
    }

    return categories.sort().slice(0, 4)
  },
  links: (state, getters) => {
    return state.items.concat(getters.categories)
  },
}


export const actions = {}



export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
}
