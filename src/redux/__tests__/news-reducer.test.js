import newsReducer, { addNews, deleteNews } from './../news-reducer';

let state = {
  news: [
    {
      id: 0,
      user: 'RenTV',
      category: 'Movie',
      title: 'Дед пишет',
      content: 'На данном выше изображении мы видим пишушего деда. С первого взгляда определить, что именно он пишет, не просто',
      image: 'https://zhataytekh.ru/wp-content/uploads/2022/04/fyvfyvfyvfyvfyvfyv-450x317.jpg',
      time: '20:32'
    },
    {
      id: 1,
      user: 'Hallo',
      category: 'ggggg',
      title: 'Дед пишеggggggт',
      content: 'На данном выgggggggggше изображении мы видим пишушего деда. С первого взгляда определить, что именно он пишет, не просто',
      image: 'https://zhataytekh.ru/wggggggp-content/uploads/2022/04/fyvfyvfyvfyvfyvfyv-450x317.jpg',
      time: '20:32dd'
    },
    {
      id: 2,
      user: 'RsdfsdfenTV',
      category: 'Movsdfsdfdsie',
      title: 'Дед пишетsdfsdfsdf',
      content: 'На данном выше иsdfsdfsdfзображении мы видим пишушего деда. С первого взгляда определить, что именно он пишет, не просто',
      image: 'https://zhataytekh.ru/wp-cosdfsdfntent/uploads/2022/04/fyvfyvfyvfyvfyvfyv-450x317.jpg',
      time: '20:32sdfsdfsd'
    },
  ]
}


it('gay was fined and news about it was post', () => {
  let action = addNews({ category: 'Gays', newsMessage: 'gay is defined', title: 'gays. so gays', shareToFriends: true })
  let newState = newsReducer(state, action)
  expect(newState.news.length).toBe(4)
})

it('category in the post was true', () => {
  let action = addNews({ category: 'Gays', newsMessage: 'gay is defined', title: 'gays. so gays', shareToFriends: true })
  let newState = newsReducer(state, action)
  expect(newState.news[1].category).toBe('Movie')
  expect(newState.news[0].category).toBe('Gays')
  expect(newState.news[3].category).toBe('Movsdfsdfdsie')
})

it('gay was deleted', () => {
  let action = deleteNews(0)
  let newState = newsReducer(state, action)
  expect(newState.news.length).toBe(2)
})