import React, { useState } from 'react';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../Toast';
import { Container, Button } from './styles';

function AddProduct() {
  const [sku, setSku] = useState(null);
  const [name, setName] = useState(null);

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Criar produto</h1>
        <Input placeholderText="SKU" value={sku} onChange={e => setSku(e.target.value)} />
        <Input placeholderText="Nome" value={name} onChange={e => setName(e.target.value)} />
        <Button color={'#20A506'}>Criar Produto</Button>
      </Container>
    </>
  );
}

export default AddProduct;
