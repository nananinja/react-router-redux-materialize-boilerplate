import Api from 'mockapi/Api'

const memberData = [{
  id: 1,
  name: 'Hei'
}, {
  id: 2,
  name: 'Judy'
}];

const MemberListGetApi = new Api(() => memberData);
const MemberGetApi = new Api((target) => memberData.find(({ id }) => (id === target)));

export {
  MemberListGetApi,
  MemberGetApi
}
