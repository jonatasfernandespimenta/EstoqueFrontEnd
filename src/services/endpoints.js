import api from './index';

export const getProducts = async() => await api.get('/products');

export const createItem = async(price, sku) => await api.post('/item', { price, sku });
