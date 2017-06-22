import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMemberList } from 'actions/memberListActions'

class MemberList extends React.Component {
  componentDidMount() {
    this.props.fetchMemberList();
  }

  render () {
    const { memberList } = this.props;

    return (
      <ul>
        {memberList.map(({ id, name }) =>
          <li key={id}>
            <Link to={"/member/"+id}>{name}</Link>
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (
  state,
  ownProps
) => ({
  memberList: state.memberList.items
});
const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  fetchMemberList: () => {
    dispatch(fetchMemberList);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
