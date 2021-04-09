import React, { useEffect, useState } from 'react';
import { getLog } from '../../services/endpoints';
import { Button, Container, Row, Text } from '../Product/styles';

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
      {
        inputData?.map((item) => {
          if(item.date !== 'Invalid Date') {
            return(
              <Container>
                <Row>
                  <Text>Data: {item.date}</Text>
    
                  <Text>Tipo: Entrada</Text>
    
                  <Text>Quantidade: {item.qtd}</Text>
          
                  <Button>+</Button>
                </Row>
              </Container>
            )
          }
        }
        )
      }
      {
        withdrawData?.map((item) => {
          if(item.date !== 'Invalid Date') {
            return(
              <Container>
              <Row>
                <Text>Data: {item.date}</Text>
          
                <Text>Tipo: Saida</Text>
          
                <Text>Quantidade: {item.qtd}</Text>
                
                <Button>+</Button>
              </Row>
            </Container>
            );
          }
        }
       )
      }
    </>
  );
}

export default Logs;
