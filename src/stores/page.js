import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    items: [],
    currentPage: 1,
    totalPages: 1,
  }),
  actions: {
    async fetchPage(pageNumber) {
      const response = await fetch(`/api/items?page=${pageNumber}`)
      const data = await response.json()

      this.items = data.items
      this.currentPage = data.currentPage
      this.totalPages = data.totalPages
    },
  },
})