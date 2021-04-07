import React, { useEffect, useState } from 'react';
import Input from '../Input';

import { Container } from './styles';

function AddItemModal() {
  const [price, setPrice] = useState(0);

  useEffect(() => price < 0 ? setPrice(0) : null);

  return(
    <>
      <Container>
        <h1>Adicionar item</h1>
        <Input placeholderText="Preço" type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </Container>
    </>
  );
}

export default AddItemModal;
