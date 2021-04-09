import './App.css';
import Input from './Components/Input';
import Product from './Components/Product';

import { FaHome, FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';
import AddItemModal from './Components/AddItemModal';

function App() {
  const [visible, setVisible] = useState(false);
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="Container">
      <div className="Header">
      </div>

      <div className="Menu">
        <FaHome color="white" size={40} style={{marginTop: 95}} />
        <button className="IconButton">
          <FaPlusCircle color="white" size={40} />
        </button>
      </div>

      <div className="Content">
        <Input placeholderText="Busque por um produto..." isSearch value={search} onChange={e => setSearch(e.target.value)} />
        <div className="Products">
          {
            visible ?
            <AddItemModal setVisible={setVisible} productSku={productSku} productName={productName} />
            :
            <Product setVisible={setVisible} setProductSku={setProductSku} setProductName={setProductName} search={search} />
          }
        </div>
      </div>

    </div>
  );
}

export default App;
