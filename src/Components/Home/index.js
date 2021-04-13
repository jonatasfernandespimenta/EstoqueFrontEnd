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
        data: inputData?.map((i) => [i.date, i.info.quantity]).filter(x => x[0] !== 'Invalid Date')
      },
      {
        label: 'Saida',
        data: withdrawData?.map((i) => [i.date, i.info.quantity]).filter(x => x[0] !== 'Invalid Date')
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

  const series = React.useCallback(
    (s, i) => (
      {
      type:
        i === 0
          ? 'bar'
          : 'line'

    }),
    []
  )

  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container>
      <Chart data={data} axes={axes} series={series} tooltip />
    </Container>
    </div>
  );
}

export default HomeComponent;
