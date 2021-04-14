import React, { useEffect, useState } from 'react';
import { Chart } from 'react-charts'
import { getLog } from '../../services/endpoints';

import { Container } from './styles';

function HomeComponent() {
  const [inputData, setInputData] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLog();
      const {input, withdraw} = res.data;
      const result = input.reduce((acc, curr) => {
        const withdrawObj = withdraw.find(w => w.date === curr.date);
        acc.push([
          curr.date,
          withdrawObj ? 
          curr.info.quantity - withdrawObj.info.quantity :         
          curr.info.quantity
        ]);
        return acc;
      }, []);

      setTotal(result)

      setInputData(res.data.input);
    };
    fetchData();
  }, [])

  const data = React.useMemo(
    () => [
      {
        label: 'Saldo',
        data: total
      },
      {
        label: 'Entrada',
        data: inputData?.map((i) => [i.date, i.info.quantity])
      },
    ],
    [inputData, total]
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false },
    ],
    []
  )

  const series = React.useCallback(
    (s, i) => (
      {
      type:
        i === 0
          ? 'line'
          : 'bar'

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
