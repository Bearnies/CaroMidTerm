import Game from '../components/Game';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    username: state.user.data.username
});

export default connect(
  mapStateToProps,
  null
)(Game);
