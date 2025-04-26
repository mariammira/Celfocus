// // lib/offline.ts
// import { get, set, createStore } from 'idb-keyval';

// const store = createStore('offline-store', 'products');

// export const OfflineService = {
//   async saveProducts(products: any) {
//     await set('products', products, store);
//   },

//   async getProducts() {
//     return get('products', store) || [];
//   },

//   isOnline() {
//     return typeof navigator !== 'undefined' && navigator.onLine;
//   }
// };
// services/lib/offline.ts
import type { UseStore } from 'idb-keyval';

let store: UseStore;

export const OfflineService = {
  async init() {
    if (typeof window === 'undefined') return;
    if (store) return;
    
    const { createStore } = await import('idb-keyval');
    store = createStore('offline-store', 'products');
  },

  async saveProducts(products: any[]) {
    await this.init();
    if (!store) return;
    const { set } = await import('idb-keyval');
    await set('products', products, store);
  },

  async getProducts() {
    await this.init();
    if (!store) return [];
    const { get } = await import('idb-keyval');
    return get('products', store) || [];
  },

  isOnline() {
    return typeof navigator !== 'undefined' && navigator.onLine;
  }
};