<template>
  <div class="container">
    <div class="main-body">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">posts</a></li>
          <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
          <li class="breadcrumb-item active" aria-current="page">User todos</li>
        </ol>
      </nav>
      <!-- /Breadcrumb -->

      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{ user.username }}</h4>
                  <p class="text-secondary mb-1">{{ user.company.name }}</p>
                  <p class="text-muted font-size-sm">
                    {{ user.address.street }} {{ user.address.city }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <ul class="list-group list-group-flush">
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                "
              >
                <h6 class="mb-0">Full Name</h6>
                <span class="text-secondary">{{ user.name }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                "
              >
                <h6 class="mb-0">Email</h6>
                <span class="text-secondary">{{ user.email }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                "
              >
                <h6 class="mb-0">Phone</h6>
                <span class="text-secondary">{{ user.phone }}</span>
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                "
              >
                <h6 class="mb-0">Address</h6>
                <span class="text-secondary"
                  >{{ user.address.street }} {{ user.address.city }}</span
                >
              </li>
              <li
                class="
                  list-group-item
                  d-flex
                  justify-content-between
                  align-items-center
                  flex-wrap
                "
              >
                <h6 class="mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-globe mr-2 icon-inline"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    ></path></svg
                  >Website
                </h6>
                <span class="text-secondary">https://{{ user.website }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link"
                    :class="{ active: isActive('posts') }"
                    id="nav-posts-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-posts"
                    type="button"
                    role="tab"
                    aria-controls="nav-posts"
                    aria-selected="true"
                    @click.prevent="setActive('posts')"
                  >
                    Posts
                  </button>
                  <button
                    class="nav-link"
                    :class="{ active: isActive('todos') }"
                    id="nav-todos-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-todos"
                    type="button"
                    role="tab"
                    aria-controls="nav-todos"
                    aria-selected="false"
                    @click.prevent="setActive('todos')"
                  >
                    Todos
                  </button>
                  <button
                    class="nav-link"
                    :class="{ active: isActive('albums') }"
                    id="nav-albums-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-albums"
                    type="button"
                    role="tab"
                    aria-controls="nav-albums"
                    aria-selected="false"
                    @click.prevent="setActive('albums')"
                  >
                    Albums
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade mt-2"
                  :class="{ 'active show': isActive('posts') }"
                  id="nav-posts"
                  role="tabpanel"
                  aria-labelledby="nav-posts-tab"
                >
                  <div class="table-responsive">
                    <table
                      id="datatable"
                      style="width: 100%"
                      class="table table-striped table-bordered"
                      cellspacing="0"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th style="width: 60px">№</th>
                          <th>Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(post, index) in posts" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>
                            <div class="text-dark">{{ post.title }}</div>
                          </td>
                          <!-- <td><a @click="toDetailUser(user)">View</a></td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  class="tab-pane fade mt-2"
                  :class="{ 'active show': isActive('todos') }"
                  id="nav-todos"
                  role="tabpanel"
                  aria-labelledby="nav-todos-tab"
                >
                  todos
                </div>
                <div
                  class="tab-pane fade mt-2"
                  :class="{ 'active show': isActive('albums') }"
                  id="nav-albums"
                  role="tabpanel"
                  aria-labelledby="nav-albums-tab"
                >
                  albums
                </div>
              </div>
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
// import $ from 'jquery'
const _page = 'users'
const { getById } = actions(_page)
export default {
  data () {
    return {
      user: {
        name: '',
        company: {
          name: ''
        },
        address: {
          city: '',
          street: ''
        }
      },
      activeItem: 'posts',
      posts: []
    }
  },
  mounted () {
    this.fetchUser()
  },
  computed: {
    ...mapGetters(getters(_page))
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    fetchUser () {
      this.$store.dispatch(getById, this.$route.query.id).then((res) => {
        this.user = res
      })
    }
  }
}
</script>
<style scoped>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>
