import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts'
import { getLog } from '../../services/endpoints';

import { Container } from './styles';

function HomeComponent() {
  const [inputData, setInputData] = useState([]);
  const [withdrawData, setWithdrawData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLog();
      setInputData(res.data.input);
      setWithdrawData(res.data.withdraw);
    };
    fetchData();
  }, [])


  const data = React.useMemo(
    () => [
      {
        label: 'Entrada',
        data: inputData?.map((i) => [parseInt(i.date.substr(0, 2)), i.qtd]).filter(x => !Number.isNaN(x[0]))
      },
      {
        label: 'Saida',
        data: withdrawData?.map((i) => [parseInt(i.date.substr(0, 2)), i.qtd]).filter(x => !Number.isNaN(x[0]))
      }
    ],
    [inputData, withdrawData]
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: true }
    ],
    []
  )
 
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container>
      <Chart data={data} axes={axes} series={{type: 'bar', series: 10}} tooltip />
    </Container>
    </div>
  );
}

export default HomeComponent;
