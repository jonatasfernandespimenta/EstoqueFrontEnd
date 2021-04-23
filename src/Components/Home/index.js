import React, { useEffect, useState } from 'react';
import { getLog, getProductByNameOrSku, getProducts } from '../../services/endpoints';

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Bar
} from "recharts";

import { Container } from './styles';

function HomeComponent() {
  const [logs, setLogs] = useState([]);
  const [info, setInfo] = useState([]);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await getProductByNameOrSku('Decor cristal Kruscher 0,10 X 1,22 X 50');

      const productsRes = await getProducts();
      setProducts(productsRes.data)

      const logRes = await getLog();
      setLogs(logRes.data);

      setInfo(
        logRes?.data.product?.filter(i => i?.name === 'Decor cristal Kruscher 0,10 X 1,22 X 50')
        .map(p => p?.exits.map(x => [x.withdrawDate, x.quantity]))
      )
    };
    fetchProduct()
  }, [])

  // Entradas da data X - saidas da data X = Saldo da data X 

  const mappedProducts = products.map(x => x.name)

  logs?.product?.filter(i => i?.name === 'Decor cristal Kruscher 0,10 X 1,22 X 50')[0].exits.map(x => x)

  const data = info.map(x => x.map(crr => {
    return {
      "name": crr[0],
      "quantidade": crr[1],
      "saldo": Math.floor(Math.random() * 10),
    }}
  ));

  const handleSelection = async(e) => {
    setName(e.target.value)
    const res = await getProductByNameOrSku(e.target.value);
    const productsRes = await getProducts();
    setProducts(productsRes.data)

    const logRes = await getLog();
    setLogs(logRes.data);

    setInfo(
      logRes?.data.product?.filter(i => i?.name === e.target.value)
      .map(p => p?.exits.map(x => [x.withdrawDate, x.quantity]))
      )
  }

  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    
    <select name="products" id="products-dropdown" onChange={e => handleSelection(e)}>
    <option value="" selected disabled hidden>Decor cristal Kruscher 0,10 X 1,22 X 50</option>
      {
        mappedProducts.sort().map(x => {
          return(
            <option value={x}>{x}</option>
          )
        })
      }
    </select>
    <Container>
      <ComposedChart
        width={1000}
        height={500}
        data={data[0]}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="saldo" barSize={100} fill="#413ea0" />
        <Line type="monotone" dataKey="quantidade" stroke="#ff7300" />
      </ComposedChart>
    </Container>
    </div>
  );
}

export default HomeComponent;
