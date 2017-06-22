import { MemberListGetApi } from 'mockapi/memberApi'
import {
  MEMBER_LIST_IS_FETCHING,
  MEMBER_LIST_FETCH_SUCCEED,
  MEMBER_LIST_HAS_ERROR,
} from 'actions/actionTypes'

// When designing action types, use consistent name for action type, action
// creator, and action data
export function memberListHasError(hasError) {
  return {
    type: MEMBER_LIST_HAS_ERROR,
    hasError
  };
}

export function memberListIsFetching(isFetching) {
  return {
    type: MEMBER_LIST_IS_FETCHING,
    isFetching
  };
}

export function fetchMemberList(dispatch) {
  // Diaptch MemberList is fetching action
  dispatch(memberListIsFetching(true));

  // MemberListGetApi.success() is a Promise
  MemberListGetApi.success()
    .then((response) => {
      // Error handling skipped here
      // Dispatch MemberList fetche succeed action
      dispatch({
        type: MEMBER_LIST_FETCH_SUCCEED,
        items: response
      });

      // Dispatch MemberList is no longer fetching action
      dispatch(memberListIsFetching(false));
    });
}
