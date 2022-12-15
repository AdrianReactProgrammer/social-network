let initialState = {
  communities: [
    { name: 'Dogs', description: 'About dogs...' },
    { name: 'Cats', description: 'About cats...' }
  ],
}

const communitiesPageReducer = (state = initialState, action) => {
  return state
}

export default communitiesPageReducer;