<template>
  <div v-for="item in paginatedItems" :key="item.id">{{ item.title }}</div>
  <nav>
    <ul>
      <li v-for="(page, index) in pageCount" :key="index">
        <router-link :to="`/list/${page}`">{{ page }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'List',
  props: ['page'],
  computed: {
    items() {
      // 获取所有数据
      // 可以通过 API 获取
      return [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        { id: 4, title: 'Item 4' },
        { id: 5, title: 'Item 5' },
        { id: 6, title: 'Item 6' },
        { id: 7, title: 'Item 7' },
        { id: 8, title: 'Item 8' },
        { id: 9, title: 'Item 9' },
        { id: 10, title: 'Item 10' },
        { id: 11, title: 'Item 11' },
        { id: 12, title: 'Item 12' },
        { id: 13, title: 'Item 13' },
        { id: 14, title: 'Item 14' },
        { id: 15, title: 'Item 15' }
      ]
    },
    paginatedItems() {
      // 分页计算
      const perPage = 5
      const start = (this.page - 1) * perPage
      const end = start + perPage
      return this.items.slice(start, end)
    },
    pageCount() {
      // 总页数计算
      const perPage = 5
      const count = Math.ceil(this.items.length / perPage)
      return Array.from(Array(count), (_, i) => i + 1)
    }
  },
  route({ page = 1 } = {}) {
    return {
      data: {
        page: parseInt(page)
      }
    }
  }
}
</script>
