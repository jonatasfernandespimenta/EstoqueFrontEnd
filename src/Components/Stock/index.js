import React, { useEffect, useState } from 'react';
import { getProducts, getLog } from '../../services/endpoints';

// import { Container } from './styles';

function Stock() {
  const [product, setProduct] = useState(null);
  const [withdrawRes, setWithdrawRes] = useState(null);

  useEffect(() => {
    const fetchProductData = async() => {
      const res = await getProducts();
      const withdrawRes = await getLog();

      setProduct(res.data)
      setWithdrawRes(withdrawRes)
    };
    fetchProductData();
  }, [])

  const handleLast30 = (product) => {
    const last30 = withdrawRes?.data.product.filter(i => i.name == product.sku).slice(Math.max(withdrawRes?.data.length - 30, 0))
    const summed = last30?.map(i => i.exits.map(x => x.quantity)).reduce((a, b) => a + b, 0)
    return summed
  }

  const handleShouldBuy = (product) => {
    if((product.quantity / (handleLast30(product) / 30)) - product.providerDays <= product.days) {
      return(
        <div style={{ background: '#d10', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      <table id="stock">
        <tr>
          <th>Produto</th>
          <th>Und</th>
          <th>Setor</th>
          <th>Resp</th>
          <th>Fornecedor</th>
          <th>Em estoque</th>
          <th>Consumo por mês</th>
          <th>Dias de estoque restantes</th>
          <th>Dias de estoque desejavel</th>
          <th>Dias para fornecimento</th>
          <th>Deve comprar?</th>
        </tr>
        {
          product?.map((p) => {
            return(
              <tr>
                <td>{p.name}</td>
                <td>{p.und}</td>
                <td>{p.sector}</td>
                <td>{p.resp}</td>
                <td>{p.provider}</td>
                <td>{p.quantity}</td>
                <td>{(handleLast30(p) / 30).toFixed(2)}</td>
                <td>{p.quantity / (handleLast30(p) / 30) == Infinity ? '-' : p.quantity / (handleLast30(p) / 30)}</td>
                <td>{p.days}</td>
                <td>{p.providerDays}</td>
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
