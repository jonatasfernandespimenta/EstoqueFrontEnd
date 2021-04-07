import React, { useEffect, useState } from 'react';
import { createItem } from '../../services/endpoints';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../Toast';

import { Container, Button } from './styles';

function AddItemModal({ setVisible, productSku }) {
  const [price, setPrice] = useState(null);

  useEffect(() => price < 0 ? setPrice(0) : null);

  const handleAddItem = async() => {
    try {
      await createItem(price, productSku);
      success('😄 Entrada realizada com sucesso!', 'top-right');
    } catch (error) {
      error('😕 Houve uma falha ao realizar o processo', 'top-right')
    }
  }

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Adicionar item</h1>
        <p>SKU: {productSku}</p>
        <Input placeholderText="Preço" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <Button onClick={handleAddItem} color={'#20A506'}>Dar entrada</Button>
        <Button onClick={() => setVisible(false)} color={'#d10000'}>Voltar</Button>
      </Container>
    </>
  );
}

export default AddItemModal;
