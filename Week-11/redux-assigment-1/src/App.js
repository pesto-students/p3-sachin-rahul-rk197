import './App.css';
import { connect } from 'react-redux';
import { setRoomLight } from './Redux/Actions/commonAction';

function App(props) {
  return (
    <div className="App">
      <div className={`${props.onRoomLight ? 'light-on' : 'light-off'} main-area`}>
        {props.onRoomLight && <div>
          <p> Room Light is On</p>
          <button onClick={() => { props.setRoomLight(false) }} >Off</button>
        </div>}
        {!props.onRoomLight && <div>
          <p> Room Light is Off</p>
          <button onClick={() => { props.setRoomLight(true) }} >On</button>
        </div>}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    onRoomLight: state.commonData.onRoomLight
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setRoomLight: (data) => dispatch(setRoomLight(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
