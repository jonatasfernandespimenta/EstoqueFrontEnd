import './App.css';
import Input from './Components/Input';

import { useState } from 'react';
import { handleContent, handleMenuButtons } from './Utils/MenuRendering';


function App() {
  const [visible, setVisible] = useState(false);
  const [productSku, setProductSku] = useState('');
  const [productName, setProductName] = useState('');
  const [search, setSearch] = useState('');
  const [content, setContent] = useState('home');

  return (
    <div className="Container">
      <div className="Header" />

      { handleMenuButtons(setContent) }

      <div className="Content">
        {
          content === 'products' ? 
            <Input placeholderText="Busque por um produto..." isSearch value={search} onChange={e => setSearch(e.target.value)} content={content} />
          : null
        }
        <div className="Products">
          {
            handleContent(content, productSku, productName, setProductSku, setProductName, setVisible, visible, search)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
