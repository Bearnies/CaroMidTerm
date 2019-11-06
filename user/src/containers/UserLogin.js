import {connect} from 'react-redux';
import {getAllUser, redirectAPI} from '../actions/actions';
import AccountLogin from '../components/AccountLogin';

const mapStateToProps = state => {
  const {apiAction} = state;
  return {
    isRedirect: apiAction.isRedirect,
    URL: apiAction.URL
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
        dispatch(getAllUser({data: res.user, token: res.token}));
        dispatch(redirectAPI('/game'));
      })
      .catch(error => {
        console.log(error);
      });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountLogin);