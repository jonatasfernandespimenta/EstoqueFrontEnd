import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts'
import { getLog, getProducts } from '../../services/endpoints';

import { Container } from './styles';

function HomeComponent() {
  const [inputData, setInputData] = useState([]);
  const [balanceData, setBalanceData] = useState([]);
  const [productId, setProductId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLog();
      const productRes = await getProducts();
      console.log(productRes.data.quantity)
      setInputData(res.data.input);
      setBalanceData(productRes.data.quantity);
    };
    fetchData();
  }, [])

  const data = React.useMemo(
    () => [
      {
        label: 'Entrada',
        data: inputData?.map((i) => [i.date, i.info.quantity]).filter(x => x[0] !== 'Invalid Date')
      }
    ],
    [inputData, balanceData]
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
