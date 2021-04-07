import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/endpoints';

import { Container, Text, Button, Row } from './styles';

function Product({ setVisible }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProducts();
      console.log(res.data)
      setData(res.data);
    };
    fetchData();
  }, [])

  return(
    <>
      {
        data?.map((item) => (
          <Container>
            <Row>
              <Text>Nome: {item.name}</Text>
              <Text>SKU: {item.sku}</Text>
              <Text>Quantidade: {item.quantity}</Text>
      
              <Button onClick={() => setVisible(true)}>+</Button>
            </Row>
          </Container>
        ))
      }
    </>
  );
}

export default Product;
