import {connect} from 'react-redux';
import {getAllUser, redirectAPI, resetURL} from '../actions/actions';
import AccountLogin from '../components/AccountLogin';

const mapStateToProps = state => {
  const {apiAction} = state;
  return {
    isRedirect: apiAction.isRedirect,
    url: apiAction.url
  };
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => {
    console.log(data);
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      }),
      redirect: 'follow'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(getAllUser({data: res.user, token: res.token}));
        dispatch(redirectAPI('/home'));
      })
      .catch(error => {
        console.log(error);
      });
  },
  stopRedirect: () => {
    dispatch(resetURL());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountLogin);