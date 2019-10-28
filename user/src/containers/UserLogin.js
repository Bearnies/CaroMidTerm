import {connect} from 'react-redux';
import {getAllUserData, redirectAPI, stopAction} from '../actions';
import AccountLogin from '../components/AccountLogin';

const mapStateToProps = state => {
  const {API} = state;
  return {
    isRedirect: API.isRedirect,
    url: API.url
  };
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => {
    console.log(data);
    fetch('/login', {
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
        dispatch(getAllUserData({ data: res.user, token: res.token }));
        dispatch(redirectAPI('/home'));
      })
      .catch(error => {
        console.log(error);
      });
  },
  stopRedirect: () => {
    dispatch(stopAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountLogin);