let initialState = {
  sidebar: {
    friends: {
      friendsList: [
        { id: '1', src: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4af3e5d8-3352-49bd-9570-de2aef8972b9/eric-bailey-profile.jpg' },
        { id: '2', src: 'https://image.shutterstock.com/image-vector/placeholder-icon-editable-web-mobile-260nw-1498997603.jpg' },
      ],
    }
  }
}

const navbarReducer = (state = initialState, action) => {
  return state
}

export default navbarReducer;