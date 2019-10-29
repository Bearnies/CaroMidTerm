import Game from '../components/Game';
import {connect} from 'react-redux';
import {resetURL} from '../actions/actions';

const mapStateToProps = state => ({
  username: state.user.data.username
});

const mapDispatchToProps = dispatch => ({
  stopRedirect: () => {
    dispatch(resetURL());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
