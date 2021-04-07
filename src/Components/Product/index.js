import React from 'react';

import { Container, Text, Button } from './styles';

function Product({ setVisible }) {

  return(
    <>
      <Container>
        <Text>Nome: Lorem Ipsum</Text>
        <Text>SKU: Lorem Ipsum</Text>
        <Text>Quantidade: 00</Text>

        <Button onClick={() => setVisible(true)}>+</Button>
      </Container>
    </>
  );
}

export default Product;
