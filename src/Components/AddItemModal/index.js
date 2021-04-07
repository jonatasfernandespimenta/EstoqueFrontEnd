import React, { useEffect, useState } from 'react';
import Input from '../Input';

import { Container, Button } from './styles';

function AddItemModal({ setVisible }) {
  const [price, setPrice] = useState(null);

  useEffect(() => price < 0 ? setPrice(0) : null);

  return(
    <>
      <Container>
        <h1>Adicionar item</h1>
        <Input placeholderText="Preço" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <Button color={'#20A506'}>Dar entrada</Button>
        <Button onClick={() => setVisible(false)} color={'#d10000'}>Voltar</Button>
      </Container>
    </>
  );
}

export default AddItemModal;
