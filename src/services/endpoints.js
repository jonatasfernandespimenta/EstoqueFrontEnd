import api from './index';

export const getProducts = async() => await api.get('/products');

export const createItem = async(createdAt, quantity, sku, productName) => await api.post('/item', { createdAt, quantity, sku, productName });

export const getProductByNameOrSku = async(param) => await api.get(`/products/name/${param}`)
