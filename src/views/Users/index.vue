<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card rounded shadow border-0">
          <div class="card-body p-5 bg-white rounded">
            <div class="table-responsive">
              <table
                id="datatable"
                style="width: 100%"
                class="table table-striped table-bordered"
                cellspacing="0" width="100%"
              >
                <thead>
                  <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Office</th>
                    <th>Website</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index" >
                    <td>{{ index + 1 }}</td>
                    <td>
                      <div class="text-dark">{{ user.name }}</div>
                      <div class="text-secondary">{{ user.email }}</div>
                    </td>
                    <td>
                      <div class="text-dark">{{ user.username }}</div>
                      <div class="text-secondary">{{ user.phone }}</div>
                    </td>
                    <td><div>{{ user.company.name }}</div></td>
                    <td>{{ user.website }}</td>
                    <td><a @click="toDetailUser(user)">View</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { actions, getters } from '../../utils/store_schema'
import $ from 'jquery'
const _page = 'users'
const { get } = actions(_page)
export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.fetchUsers()
  },
  computed: {
    ...mapGetters(getters(_page))
  },
  methods: {
    toDetailUser (user) {
      this.$router.push({
        path: `/users/${user.id}`,
        query: { id: user.id }
      })
    },
    async fetchUsers () {
      await this.$store.dispatch(get).then((res) => {
        this.users = res
        setTimeout(() => {
          $('#datatable').DataTable({
            lengthMenu: [
              [5, 10, 25, 50, -1],
              [5, 10, 25, 50, 'All']
            ],
            pageLength: 5
          })
        })
      })
    }
  }
}
</script>
<style scoped>
.background :hover{
 background-color: lightgray;
}
</style>
