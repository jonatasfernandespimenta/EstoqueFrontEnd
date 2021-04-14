import React, { useEffect, useState } from 'react';
import Input from '../Input';
import { ToastContainer } from 'react-toastify';

import { success, error } from '../../Utils/Toast';
import { Container, Button } from './styles';
import { updateProduct, getProduct } from '../../services/endpoints';

function UpdateProduct({ setVisible, id }) {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [days, setDays] = useState(0);
  const [providerDays, setProviderDays] = useState(0);

  useEffect(() => {
    const fetchProducts = async() => {
      const res = await getProduct(id);
      setName(res.data.name)
      setSku(res.data.sku)
      setDays(res.data.days)
    }
    fetchProducts()
  }, [])

  const handleProduct = async() => {

    try {
      await updateProduct(id, name, sku, days, providerDays);
      success('😄 Produto atualizado com sucesso!', 'top-right');
    } catch (e) {
      error('😕 Houve uma falha ao realizar o processo', 'top-right') 
    }
  }

  return(
    <>
      <ToastContainer/>
      <Container>
        <h1>Atualizar produto</h1>
        <Input placeholderText="SKU" value={sku} onChange={e => setSku(e.target.value)} />
        <Input placeholderText="Nome" value={name} onChange={e => setName(e.target.value)} />
        <br/>
        <br/><br/>
        <label>Dias fornecedor</label>
        <Input placeholderText="Dias de estoque" type="number" value={providerDays} onChange={e => setProviderDays(e.target.value)} />
        <br/>
        <label>Dias de estoque</label>
        <Input placeholderText="Dias de estoque" type="number" value={days} onChange={e => setDays(e.target.value)} />
        <br/>
        <Button color={'#20A506'} onClick={handleProduct}>Atualizar Produto</Button>
        <Button color={'#d10000'} onClick={() => setVisible(false)}>Voltar</Button>
      </Container>
    </>
  );
}

export default UpdateProduct;
