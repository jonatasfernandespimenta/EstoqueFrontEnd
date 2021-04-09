import './App.css';
import Input from './Components/Input';
import Product from './Components/Product';

import { FaHome, FaPlusCircle, FaArchive, FaFileContract } from 'react-icons/fa';
import { useState } from 'react';
import AddItemModal from './Components/AddItemModal';
import Logs from './Components/Logs';
import { Tooltip } from '@material-ui/core';
import AddProduct from './Components/AddProduct';


function App() {
  const [visible, setVisible] = useState(false);
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');
  const [search, setSearch] = useState('');
  const [content, setContent] = useState('');
  
  const handleContent = () => {
    if(content === 'products') {
      return(
        <>
          {          
            visible ?
            <AddItemModal setVisible={setVisible} productSku={productSku} productName={productName} />
            :
            <Product setVisible={setVisible} setProductSku={setProductSku} setProductName={setProductName} search={search} />
          }
        </>
      );
    }

    if(content === 'logs') {
      return(
        <Logs/>
      )
    }

    if(content === 'AddProduct') {
      return(
        <AddProduct/>
      )
    }
  }

  return (
    <div className="Container">
      <div className="Header">
      </div>

      <div className="Menu">
        <Tooltip title="Home" placement="right-end">
          <button className="IconButton">
            <FaHome color="white" size={40} />
          </button>
        </Tooltip>

        <Tooltip title="Produtos" placement="right-end">
          <button className="IconButton" onClick={() => setContent('products')}>
            <FaArchive color="white" size={40} />
          </button>
        </Tooltip>

        <Tooltip title="Adicionar Produto" placement="right-end">
          <button onClick={() => setContent('AddProduct')} className="IconButton">
            <FaPlusCircle color="white" size={40} />
          </button>
        </Tooltip>

        <Tooltip title="Logs" placement="right-end">
          <button className="IconButton" onClick={() => setContent('logs')}>
            <FaFileContract color="white" size={40} />
          </button>
        </Tooltip>
      </div>

      <div className="Content">
        {content === 'products' ? 
          <Input placeholderText="Busque por um produto..." isSearch value={search} onChange={e => setSearch(e.target.value)} />
          : null
        }
        <div className="Products">
          {
            handleContent()
          }
        </div>
      </div>

    </div>
  );
}

export default App;
