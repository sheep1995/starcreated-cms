import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    items: [],
    currentItem: null,
  }),
  actions: {
    async fetchItems() {
      const response = await axios.get('/items');
      this.items = response.data;
    },
    async createItem(item) {
      const response = await axios.post('/items', item);
      this.items.push(response.data);
    },
    async updateItem(item) {
      const response = await axios.put(`/items/${item.id}`, item);
      const index = this.items.findIndex(i => i.id === item.id);
      this.items.splice(index, 1, response.data);
    },
    async deleteItem(id) {
      await axios.delete(`/items/${id}`);
      const index = this.items.findIndex(i => i.id === id);
      this.items.splice(index, 1);
    },
    setCurrentItem(item) {
      this.currentItem = item;
    },
  },
});
