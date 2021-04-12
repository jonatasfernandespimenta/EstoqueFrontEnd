import React, { useState } from 'react';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../../Utils/Toast';
import { Container, Button } from './styles';
import { createProduct } from '../../services/endpoints';

function AddProduct() {
  const [sku, setSku] = useState(null);
  const [name, setName] = useState(null);

  const handleProduct = async() => {

    try {
      await createProduct(sku, name);
      success('😄 Produto cadastrado com sucesso!', 'top-right');
    } catch (e) {
      error('😕 Houve uma falha ao realizar o processo', 'top-right') 
    }
  }

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Criar produto</h1>
        <Input placeholderText="SKU" value={sku} onChange={e => setSku(e.target.value)} />
        <Input placeholderText="Nome" value={name} onChange={e => setName(e.target.value)} />
        <Button color={'#20A506'} onClick={handleProduct}>Criar Produto</Button>
      </Container>
    </>
  );
}

export default AddProduct;
