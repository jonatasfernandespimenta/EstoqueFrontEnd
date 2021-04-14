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

  const handleShouldBuy = (product) => {
    if(product.quantity / (summed / 15) <= product.days) {
      return(
        <div style={{ background: '#20A506', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h4 style={{color: 'white'}}>SIM</h4>
        </div>
      );
    } else {
      return(
        <div style={{ background: '#20A506', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h4 style={{color: 'white'}}>NÃO</h4>
        </div>
      );
    }
  }

  return(
    <>
      <table>
        <tr>
          <th>Produto</th>
          <th>Em estoque</th>
          <th>Velocidade</th>
          <th>Dias de estoque restantes</th>
          <th>Dias de estoque deseajvel</th>
          <th>Deve comprar?</th>
        </tr>
        {
          product?.map((p) => {
            return(
              <tr>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{summed / 15}</td>
                <td>{p.quantity / (summed / 15)}</td>
                <td>{p.days}</td>
                <td>{handleShouldBuy(p)}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default Stock;
