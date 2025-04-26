// lib/products.ts
import { OfflineService } from './offline';

export const ProductService = {
  async fetchProducts() {
    try {
      const response = await fetch('http://localhost:8082/products');
      const products = await response.json();
      console.log('offPro',products)
      await OfflineService.saveProducts(products);
      return products;
    } catch (error) {
      if (!OfflineService.isOnline()) {
        return await OfflineService.getProducts();
      }
      throw error;
    }
  }
};