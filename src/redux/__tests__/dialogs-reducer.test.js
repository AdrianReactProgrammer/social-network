import { deleteDialog } from "../dialogs-reducer"
import dialogsReducer from './../dialogs-reducer';

let state = {
  dialogs: [
    { id: 1, name: 'Adrian', avatar: 'https://sun9-6.userapi.com/impg/VSq6c4aXrQlpau3Lgfxn-QV6jANk8RU5PDkKyQ/S3XY8RxLx9g.jpg?size=1080x1059&quality=96&sign=835ffdbdb253082d6e2ea700cc951e11&type=album' },
    { id: 2, name: 'Dmitri', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 3, name: 'Liza', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 4, name: 'Gena', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 5, name: 'Nikita', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 6, name: 'VIKING', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 7, name: 'Gal', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' },
    { id: 8, name: 'Valera', avatar: 'https://thumbs.dreamstime.com/b/%D0%B0%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE-%D1%83%D0%B1%D0%BE%D0%B9-%D0%BA%D0%B2%D0%B0-%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5-%D1%8C-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B7%D0%B0%D0%BF%D0%BE-%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-44494164.jpg' }
  ]
}

it('dialog has been deleted', () => {
  let action = deleteDialog(1)
  let actionTwo = deleteDialog(2)
  let newState = dialogsReducer(state, action)
  let newStateTwo = dialogsReducer(newState, actionTwo)

  expect(newStateTwo.dialogs.length).toBe(6)
})