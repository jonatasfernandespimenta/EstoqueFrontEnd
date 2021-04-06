import './App.css';
import Input from './Components/Input';
import { FaHome } from 'react-icons/fa';

function App() {
  return (
    <div className="Container">
      <div className="Header">
      </div>

      <div className="Menu">
        <FaHome color="white" size={50} style={{marginTop: 95}} />
      </div>

      <div className="Content">

        <Input/>

        <div className="Products">

        </div>
      </div>

    </div>
  );
}

export default App;
