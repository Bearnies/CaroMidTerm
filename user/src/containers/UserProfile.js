import {connect} from 'react-redux';
import {getUserProfile, getProtected, postProtected} from '../actions/actions';
import AccountProfile from '../components/AccountProfile';

const mapStateToProps = state => {
  const {apiAction} = state;
  return {
    isRedirect: apiAction.isRedirect,
    URL: apiAction.URL
  };
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => {
    dispatch(postProtected('/updateprofile', '/login', data))
  },
  onLoad: () => {
    dispatch(getProtected('/profile', getUserProfile));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountProfile);