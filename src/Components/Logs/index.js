import React, { useEffect, useState } from 'react';
import { getLog } from '../../services/endpoints';
import { Container, Row, Text } from '../Product/styles';

// import { Container } from './styles';

function Logs() {
  const [inputData, setInputData] = useState(null);
  const [withdrawData, setWithdrawData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLog();
      setInputData(res.data.input);
      setWithdrawData(res.data.withdraw);
    };
    fetchData();
  }, [])

  return (
    <>
      <Container>
      {
        inputData?.map((item) => {
          if(item.date !== 'Invalid Date') {
            return(
                <Row>
                  <Text>Data: {item.date}</Text>
    
                  <Text>Tipo: Entrada</Text>
    
                  <Text>Quantidade: {item.qtd}</Text>
                </Row>
            )
          }
        }
        )
      }
      {
        withdrawData?.map((item) => {
          if(item.date !== 'Invalid Date') {
            return(
              <Row>
                <Text>Data: {item.date}</Text>
          
                <Text>Tipo: Saida</Text>
          
                <Text>Quantidade: {item.qtd}</Text>
              </Row>
            );
          }
        }
        )
      }
      </Container>
    </>
  );
}

export default Logs;
