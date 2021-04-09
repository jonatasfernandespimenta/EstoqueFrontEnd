import api from './index';

export const getProducts = async() => await api.get('/products');

export const createItem = async(quantity, sku, productName) => await api.post('/item', { quantity, sku, productName });
