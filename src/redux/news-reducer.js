const ADD_NEWS = 'ADD-NEWS'
const DELETE_NEWS = 'DELETE_NEWS'

let initialState = {
  news: [
    {
      id: 0,
      user: 'RenTV',
      category: 'Movie',
      title: 'Дед пишет',
      content: 'На данном выше изображении мы видим пишушего деда. С первого взгляда определить, что именно он пишет, не просто',
      image: 'https://zhataytekh.ru/wp-content/uploads/2022/04/fyvfyvfyvfyvfyvfyv-450x317.jpg',
      time: '20:32'
    }
  ]
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        news: [
          {
            id: 1,
            user: 'TV3',
            category: action.category,
            title: action.newsTitle,
            content: action.newsMessage,
            image: 'https://cs6.pikabu.ru/post_img/big/2014/05/08/9/1399554068_1972028990.jpg',
            time: '21:43'
          },
          ...state.news
        ]
      }
    case DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter(n => n.id != action.id)
      }
    default: return state
  }
}

export const addNews = (data) => ({ type: ADD_NEWS, ...data })
export const deleteNews = (id) => ({ type: DELETE_NEWS, id })

export default newsReducer