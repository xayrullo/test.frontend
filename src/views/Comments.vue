<template>
  <div class="about">
    <h1>Comments</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { actions, getters } from '../utils/store_schema'
const _page = 'posts'
const { get } = actions(_page)
export default {
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.fetchPosts()
  },
  computed: {
    ...mapGetters(getters(_page))
  },
  methods: {
    fetchPosts () {
      this.$store.dispatch(get).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
