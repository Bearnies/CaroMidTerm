import {combineReducers} from 'redux'
import {createForms} from 'react-redux-form';
import {
    NEXT_PLAYER,
    NEW_NEXTPLAYER,
    PLAY_AGAIN,
    SORT_ASCEND,
    IS_ASCENDING,
    GET_WINSQUARES,
    NEW_WINNER,
    NEW_HISTORY,
    NEW_STEPNUMBER,

    GET_USER,
    GET_TOKEN,
    GET_ALL_USER,
    REDIRECT_API,
} from '../actions/actions'

const xIsNext = (state = true, action) => {
    switch (action.type) {
      case NEXT_PLAYER:
        return !state
      case NEW_NEXTPLAYER:
        return action.newnextplayer
      case PLAY_AGAIN:
        return true
      default:
        return state
    }
}

const sortAscend = (state = false, action) => {
    switch (action.type) {
      case SORT_ASCEND:
        return !state
      default:
        return state
    }
}

const isAscending = (state = false, action) => {
  switch (action.type) {
    case IS_ASCENDING:
      return !state
    case PLAY_AGAIN:
      return state
    default:
      return state
  }
}

const winSquares = (state = [], action) => {
    switch (action.type) {
      case GET_WINSQUARES:
        return action.newwinSquares
      case PLAY_AGAIN:
        return []
      default:
        return state
    }
}

const winner = (state = null, action) => {
    switch (action.type) {
      case NEW_WINNER:
        return action.newwinner
      case PLAY_AGAIN:
        return null
      default:
        return state
    }
}

const history = (state = [{row: null, col: null}], action) => {
    switch (action.type) {
      case NEW_HISTORY:
        return action.newhistory
      case PLAY_AGAIN:
        return [{row: null, col: null}]
      default:
        return state
    }
}

const stepNumber = (state = 0, action) => {
    switch (action.type) {
      case NEW_STEPNUMBER:
        return action.newstepNumber
      case PLAY_AGAIN:
        return 0
      default:
        return state
    }
}

//Tạo thông tin bắt đầu cho người dùng
const initialStateUser = {
  username: '',
  password: ''
}

const user = (state = {data: null, token: null}, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        data: action.data,
        token: state.token
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case GET_ALL_USER:
      return action.user;
    default:
      return state;
  }
}

const apiAction = (state = {isRedirect: false, URL:''}, action) => {
  switch (action.type) {
    case REDIRECT_API:
      return {
        isRedirect: true,
        URL: action.URL
      };
    default:
      return state;
  }
}

export default combineReducers({
    xIsNext,
    sortAscend,
    isAscending,
    winSquares,
    winner,
    history,
    stepNumber,

    user,
    apiAction,
    ...createForms({
      userForm: initialStateUser
    })
});
  