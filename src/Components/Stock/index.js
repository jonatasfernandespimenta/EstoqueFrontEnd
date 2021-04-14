import React, { useEffect, useState } from 'react';
import { getProducts, getLog } from '../../services/endpoints';

// import { Container } from './styles';

function Stock() {
  const [product, setProduct] = useState(null);
  const [summed, setSummed] = useState(0);

  useEffect(() => {
    const fetchProductData = async() => {
      const res = await getProducts();
      const withdrawRes = await getLog();

      const last15 = withdrawRes.data.input.slice(Math.max(withdrawRes.data.withdraw.length - 5, 0))
      const last15Qtd = last15?.map((p) => p.info.quantity)
      const summedQtd = last15Qtd.reduce((a, b) => a + b, 0)

      setSummed(summedQtd);

      setProduct(res.data)
    };
    fetchProductData();
  }, [])

  return(
    <>
      <table>
        <tr>
          <th>Produto</th>
          <th>Em estoque</th>
          <th>Velocidade</th>
          <th>Dias de estoque restantes</th>
          <th>Dias de estoque deseajvel</th>
        </tr>
        {
          product?.map((p) => {
            return(
              <tr>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{summed / 15}</td>
                <td>{p.quantity / (summed / 15)}</td>
                <td>0000</td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default Stock;
