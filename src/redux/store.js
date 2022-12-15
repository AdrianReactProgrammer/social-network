// import communitysPageReducer from "./communitysPage-reducer"
// import dialogsReducer from "./dialogs-reducer"
// import navbarReducer from "./navbar-reducer"
// import newsPageReducer from "./newsPage-reducer"
// import profileReducer from "./profile-reducer"

// let store = {

//   // _state: {
//   //   profilePage: {
//   //     posts: [
//   //       { id: 1, name: 'Dima', age: 30, post: 'Crazy!', likesCount: 15 },
//   //       { id: 2, name: 'Adrian', age: 17, post: 'Yeh, you are right!', likesCount: 6 },
//   //       { id: 3, name: 'Evgeny', age: 5, post: 'Oh, no... My mother is dead and i lose my brains(((', likesCount: 0 },
//   //       { id: 4, name: 'Liza', age: 25, post: 'Suck my big D, loooozers xD', likesCount: -11 },
//   //       { id: 5, name: 'VIKING', age: 999, post: 'I\'M VIKING WUAAAAAH', likesCount: 99999 },
//   //       { id: 5, name: 'Slavik', age: 0, post: 'I hate you, Adrian', likesCount: -10000 }
//   //     ],

//   //     newPostText: ''
//   //   },

//   //   _callSubscriber() {
//   //     console.log('state changed')
//   //   },

//   //   navbar: {
//   //     sidebar: {
//   //       friends: {
//   //         friendsList: [
//   //           { id: '1', src: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4af3e5d8-3352-49bd-9570-de2aef8972b9/eric-bailey-profile.jpg' },
//   //           { id: '2', src: 'https://image.shutterstock.com/image-vector/placeholder-icon-editable-web-mobile-260nw-1498997603.jpg' },
//   //           { id: '3', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' }
//   //         ],
//   //       }
//   //     }
//   //   },

//   //   dialogsPage: {
//   //     dialogs: [
//   //       { id: 1, name: 'Adrian', src: 'https://sun9-6.userapi.com/impg/VSq6c4aXrQlpau3Lgfxn-QV6jANk8RU5PDkKyQ/S3XY8RxLx9g.jpg?size=1080x1059&quality=96&sign=835ffdbdb253082d6e2ea700cc951e11&type=album' },
//   //       { id: 2, name: 'Dmitri', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 3, name: 'Liza', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 4, name: 'Gena', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 5, name: 'Nikita', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 6, name: 'VIKING', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 7, name: 'Gal', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 8, name: 'Valera', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' }
//   //     ],

//   //     messages: [
//   //       { id: 1, message: 'You cool, boy', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 2, message: 'No, u really cool', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 3, message: 'Yeah, i love you!', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 4, message: 'Thanks!', src: 'https://sun9-6.userapi.com/impg/VSq6c4aXrQlpau3Lgfxn-QV6jANk8RU5PDkKyQ/S3XY8RxLx9g.jpg?size=1080x1059&quality=96&sign=835ffdbdb253082d6e2ea700cc951e11&type=album' },
//   //       { id: 5, message: 'And... VIKINGS', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
//   //       { id: 6, message: 'And... white roses', src: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' }
//   //     ],

//   //     newMessageText: ''
//   //   },

//   //   newsPage: {
//   //     news: [
//   //       { newsTittle: 'Stepa is dead', newsContent: 'Stepa is dead, i\'m sorry...', src: 'https://homkin.ru/wp-content/uploads/2017/09/homyak-678x381.jpg', id: '2' },
//   //       { newsTittle: 'Good morning, Stepa', newsContent: 'Stepa was sleep all night and have a good morning vibe', src: 'https://i.ytimg.com/vi/aN5J7qC2Qss/mqdefault.jpg', id: '1' }
//   //     ],

//   //     newsDetails: [
//   //       { newsTittle: 'Stepa is dead...', newsContent: 'This morning Styopa ate and went to bed again, because hamsters are nocturnal animals. And Styopa is a hamster... And usually he does not sleep forever. But today... something has changed and Styopa has died. Now dead. sorry', imgSrc: 'https://homkin.ru/wp-content/uploads/2017/09/homyak-678x381.jpg', dateTime: 'Today, 18:43' }
//   //     ]
//   //   },

//   //   communitysPage: {
//   //     communitys: [
//   //       { name: 'Dogs', description: 'About dogs...' },
//   //       { name: 'Cats', description: 'About cats...' }
//   //     ],
//   //   },
//   // },
//   _callSubscriber() {
//     console.log('state changed')
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer
//   },
//   getState() {
//     return this._state
//   },



//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action = action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action = action)
//     this._state.navbar = navbarReducer(this._state.navbar, action = action)
//     this._state.newsPage = newsPageReducer(this._state.newsPage, action = action)
//     this._state.communitysPage = communitysPageReducer(this._state.communitysPage, action = action)
    
//     this._callSubscriber(this._state)
//   },
// }

// export default store
// window.store = store

