import React, { useEffect, useState } from 'react';
import { getLog } from '../../services/endpoints';
import { Column, Container, Row, Text } from '../Product/styles';

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
          {item.exits.map((exit) => {
              return(
                <Column>
                <Text>Data: {exit.withdrawDate === null ? exit.inputDate : exit.withdrawDate}</Text>
            
                <Text>Tipo: {exit.withdrawDate}</Text>
            
                <Text>Quantidade: {exit.quantity}</Text>
                </Column>
                )
              })}
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
