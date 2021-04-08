import React, { useEffect, useState } from 'react';
import { createItem } from '../../services/endpoints';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../Toast';

import { Container, Button } from './styles';

function AddItemModal({ setVisible, productSku }) {
  const [quantity, setQuantity] = useState(null);

  useEffect(() => quantity < 0 ? setQuantity(0) : null);

  const handleAddItem = async() => {
    try {
      const res = await createItem(quantity, productSku);

      const url = window.URL.createObjectURL(new Blob([res.data]))
      const link = document.createElement('a')
      link.href = url;
      link.setAttribute('download', 'teste.txt')
      document.body.appendChild(link)
      link.click()

      success('😄 Entrada realizada com sucesso!', 'top-right');
    } catch (e) {
      console.log(e)
      error('😕 Houve uma falha ao realizar o processo', 'top-right')
    }
  }

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Adicionar item</h1>
        <p>SKU: {productSku}</p>
        <Input placeholderText="Quantidade" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <Button onClick={handleAddItem} color={'#20A506'}>Dar entrada</Button>
        <Button onClick={() => setVisible(false)} color={'#d10000'}>Voltar</Button>
      </Container>
    </>
  );
}

export default AddItemModal;
