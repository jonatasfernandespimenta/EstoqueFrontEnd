import React from 'react';

import { Container, Text, Button } from './styles';

function Product() {
  return(
    <Container>
      <Text>Nome: Lorem Ipsum</Text>
      <Text>SKU: Lorem Ipsum</Text>
      <Text>Quantidade: 00</Text>
      <Button>+</Button>
    </Container>
  );
}

export default Product;
