import { combineReducers } from 'redux'
import MemberListReducer from 'reducers/MemberListReducer'

const createReducer = () => {
  return combineReducers({
    memberList: MemberListReducer
  });
};

export default createReducer;
