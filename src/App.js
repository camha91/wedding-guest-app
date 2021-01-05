import logo from './logo.svg';
import './App.css';
import GuestList from './components/GuestList';
import GuestInput from './components/GuestInput';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App my-5">
      <GuestInput />
      <GuestList />
    </div>
  );
}

export default App;
