import {connect} from 'react-redux';
import {redirectAPI} from '../actions/actions';
import AccountSignup from '../components/AccountSignup';

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
    fetch('/signup', {
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
      .then(res => res.json(),
            error => {console.log(error)}
      );
    dispatch(redirectAPI('/login'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSignup);