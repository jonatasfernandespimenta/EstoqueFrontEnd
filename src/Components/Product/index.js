import React, { useEffect, useState } from 'react';
import { getProductByNameOrSku, getProducts } from '../../services/endpoints';

import { Container, Text, Button, Row } from './styles';

function Product({ setVisible, setProductSku, setProductName, search }) {

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = search !== '' ? await getProductByNameOrSku(search) : await getProducts();
      setData(res.data);
    };
    fetchData();
  })

  return(
    <>
      {
        data?.map((item) => (
          <Container>
            <Row>
              <Text>Nome: {item.name}</Text>
              <Text>SKU: {item.sku}</Text>
              <Text>Quantidade: {item.quantity}</Text>
      
              <Button onClick={() => { setVisible(true); setProductSku(item.sku); setProductName(item.name) }}>+</Button>
            </Row>
          </Container>
        ))
      }
    </>
  );
}

export default Product;
