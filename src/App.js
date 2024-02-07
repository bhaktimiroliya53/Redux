import logo from './logo.svg';
import './App.css';
import { Decerment, Incerment, Reset } from './action/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const no = useSelector(state => state.counter)
  return (
    <>
      <center>
        <h1>counter</h1>
        <h1>{no}</h1>
        <button onClick={() => dispatch(Incerment())}>+</button>
        <button onClick={() => dispatch(Decerment())}>-</button>
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </center>
    </>
  );
}

export default App;
