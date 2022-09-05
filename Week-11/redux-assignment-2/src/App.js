import './App.css';
import { connect } from 'react-redux';
import { resetCounter, setIncrementCounter } from './Redux/Actions/commonAction';

function App(props) {
  return (
    <div className="App">
      <div className={` main-area`}>
        <div>
          <label>You Have Walked {props.counter} Steps</label>
        </div>
        <div>
          <button className='add-btn' onClick={() => { props.setIncrementCounter(props.counter + 1) }} >
            Add a Step
          </button>
        </div>
        <div>
          <button className='reset-btn' onClick={() => { props.resetCounter(0) }}>
            Reset Steps
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.commonData.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    resetCounter: (data) => dispatch(resetCounter(data)),
    setIncrementCounter: (data) => dispatch(setIncrementCounter(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
