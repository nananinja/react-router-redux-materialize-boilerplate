import {
  MEMBER_LIST_IS_FETCHING,
  MEMBER_LIST_FETCH_SUCCEED,
  MEMBER_LIST_HAS_ERROR
} from 'actions/actionTypes'

const initialState = {
  isFetching: false,
  hasError: true,
  items: []
}

const MemberListReducer = (state=initialState, action) => {
  switch (action.type) {
    case MEMBER_LIST_IS_FETCHING:
      return Object.assign(state, {
        isFetching: action.isFetching
      });

    case MEMBER_LIST_FETCH_SUCCEED:
      return Object.assign(state, {
        items: action.items
      });

    case MEMBER_LIST_HAS_ERROR:
      return Object.assign(state, {
        hasError: action.hasError
      });

    default:
      return state;
  }
}

export default MemberListReducer;
