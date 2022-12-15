const SEND_MESSAGE = 'ADD_MESSAGE'
const DELETE_DIALOG = 'DELETE_DIALOG'

let initialState = {
  dialogs: [
    { id: 1, name: 'Adrian', avatar: 'https://sun9-6.userapi.com/impg/VSq6c4aXrQlpau3Lgfxn-QV6jANk8RU5PDkKyQ/S3XY8RxLx9g.jpg?size=1080x1059&quality=96&sign=835ffdbdb253082d6e2ea700cc951e11&type=album' },
    { id: 2, name: 'Dmitri', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 3, name: 'Liza', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 4, name: 'Gena', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 5, name: 'Nikita', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 6, name: 'VIKING', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 7, name: 'Gal', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 8, name: 'Valera', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' }
  ],

  messages: [
    { id: 1, messageContent: 'You cool, boy', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 2, messageContent: 'No, u really cool', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 3, messageContent: 'Yeah, i love you!', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 4, messageContent: 'Thanks!', avatar: 'https://sun9-6.userapi.com/impg/VSq6c4aXrQlpau3Lgfxn-QV6jANk8RU5PDkKyQ/S3XY8RxLx9g.jpg?size=1080x1059&quality=96&sign=835ffdbdb253082d6e2ea700cc951e11&type=album' },
    { id: 5, messageContent: 'And... VIKINGS', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 6, messageContent: 'And... white roses', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' }
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: 1,
          messageContent: action.messageContent,
          avatar: 'https://sun9-54.userapi.com/impg/9fpJv5Jc1djSBMlLmzLiWjX3xoX5UofOD_cNsw/PkNOzSXoJgs.jpg?size=1617x2160&quality=95&sign=f1f18f488a21e86f7a9ac1c9577db5a1&type=album'
        }]
      }
    case DELETE_DIALOG:
      return { ...state, dialogs: state.dialogs.filter(u => u.id != action.id) }
    default: return state
  }
}

export const sendMessage = (messageContent) =>
  ({ type: SEND_MESSAGE, messageContent })
export const deleteDialog = (id) => ({ type: DELETE_DIALOG, id })

export default dialogsReducer