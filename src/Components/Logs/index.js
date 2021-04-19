import React, { useEffect, useState } from 'react';
import { getLog } from '../../services/endpoints';
import { Container, Row, Text } from '../Product/styles';

// import { Container } from './styles';

function Logs() {
  const [withdrawData, setWithdrawData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLog();
      setWithdrawData(res.data);
    };
    fetchData();
  }, [])

  return (
    <>
      <Container>

      {
        withdrawData?.product.map((item) => {
          return(
            <Row>
              <Text>Produto: {item.name}</Text>

              <Text>Data: {item.exits.map(i => i.withdrawDate === null ? item.exits.map(i => i.inputDate) : item.exits.map(i => i.withdrawDate))}</Text>
          
              <Text>Tipo: {item.exits.map(i => i.withdrawDate === null ? 'Entrada' : 'Saida')}</Text>
          
              <Text>Quantidade: {item.exits.map(i => i.quantity)}</Text>
            </Row>
          );
        }
        )
      }
      </Container>
    </>
  );
}

export default Logs;
