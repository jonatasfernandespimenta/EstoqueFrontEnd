import './App.css';
import Input from './Components/Input';
import Product from './Components/Product';

import { FaHome } from 'react-icons/fa';
import { useState } from 'react';
import AddItemModal from './Components/AddItemModal';

function App() {
  const [visible, setVisible] = useState(false);
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');

  return (
    <div className="Container">
      <div className="Header">
      </div>

      <div className="Menu">
        <FaHome color="white" size={40} style={{marginTop: 95}} />
      </div>

      <div className="Content">
        <Input placeholderText="Busque por um produto..." isSearch />
        <div className="Products">
          {
            visible ?
            <AddItemModal setVisible={setVisible} productSku={productSku} productName={productName} />
            :
            <Product setVisible={setVisible} setProductSku={setProductSku} setProductName={setProductName} />
          }
        </div>
      </div>

    </div>
  );
}

export default App;
