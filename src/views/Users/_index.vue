<template>
  <div class="container">
    <div class="main-body">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a @click="$router.push('/users')" class="text-info">Users</a></li>
          <!-- <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li> -->
          <li class="breadcrumb-item active" aria-current="page">User Profile</li>
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
                      id="postdatatable"
                      style="width: 100%"
                      class="table table-striped table-bordered"
                      cellspacing="0"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th style="width: 50px">№</th>
                          <th>Title</th>
                          <th>
                            <button class="btn btn-sm btn-info pull-right text-light" @click="toNew()"><i class="text-lg bx bx-plus-medical"></i></button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(post, index) in posts" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>
                            <div class="text-dark">{{ post.title }}</div>
                          </td>
                          <td class="text-center">
                            <div role="group" class="btn-group">
                              <button class="btn btn-sm btn-success pull-right" @click="toEdit(post)" type="submit"><i class="text-lg bx bx-edit"></i></button>
                              <button class="btn btn-sm btn-danger pull-right" @click="toDelete(post)" type="submit"><i class="text-lg bx bx-trash"></i></button>
                            </div>
                          </td>
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
                  <div class="table-responsive">
                    <table
                      id="todosdatatable"
                      style="width: 100%"
                      class="table table-striped table-bordered"
                      cellspacing="0"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th style="width: 50px">№</th>
                          <th>Title</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(todo, index) in todos" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>
                            <div class="text-dark">{{ todo.title }}</div>
                          </td>
                          <td>
                            <div v-if="todo.completed" class="text-success">Completed</div>
                            <div v-else class="text-danger">Doing</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  class="tab-pane fade mt-2"
                  :class="{ 'active show': isActive('albums') }"
                  id="nav-albums"
                  role="tabpanel"
                  aria-labelledby="nav-albums-tab"
                >
                  <div class="table-responsive">
                    <table
                      id="albumsdatatable"
                      style="width: 100%"
                      class="table table-striped table-bordered"
                      cellspacing="0"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th style="width: 60px !important">№</th>
                          <th>Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(album, index) in albums" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>
                            <div class="text-dark">{{ album.title }}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
import $ from 'jquery'
import postModal from '@/modal/post'
import deleteModal from '@/modal/delete'
const _page = 'users'
const _pageInPost = 'posts'
const { getById } = actions(_page)
const { remove } = actions(_pageInPost)
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
      posts: [],
      todos: [],
      albums: []
    }
  },
  mounted () {
    this.fetchUser().then(async () => {
      await this.fetchUserPosts()
      await this.fetchUserTodos()
      await this.fetchUserAlbums()
    })
  },
  computed: {
    ...mapGetters(getters(_page))
  },
  methods: {
    toEdit (post) {
      this.showPostModal(post, 'edit')
    },
    toNew () {
      this.showPostModal({ userId: this.$route.query.id, title: '', body: '' }, 'new')
    },
    toDelete (post) {
      this.$modal.show(
        deleteModal,
        { status: 'sign-in' },
        { height: 'auto', width: '500' }
      )
      this.$root.$once('delete-modal', res => {
        var index = this.posts.indexOf(post)
        if (res.status === 'deleted') {
          this.$store.dispatch(remove, post.id).then(res => {
            this.posts.splice(index, 1)
          })
        }
      })
    },
    showPostModal (post, status) {
      this.$modal.show(
        postModal,
        { post: post, status: status },
        {
          height: 'auto',
          maxWidth: 600,
          width: window.innerWidth <= 600 ? window.innerWidth - 30 : 600,
          scrollable: true,
          clickToClose: false
        }
      )
      this.$root.$once('post-modal', res => {
        var index = this.posts.indexOf(e => e.id === res.data.id)
        if (res.status === 'edited') {
          this.posts.splice(index, 1, res.data)
        } else if (res.status === 'new') {
          this.posts.push(res.data)
        } else {
          this.fetchUserPosts('refresh')
        }
      })
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    async fetchUser () {
      await this.$store.dispatch(getById, this.$route.query.id).then((res) => {
        this.user = res
      })
    },
    async fetchUserPosts (status) {
      await this.$store.dispatch(getById, `${this.$route.query.id}/posts`).then((res) => {
        this.posts = res
        if (status !== 'refresh') {
          setTimeout(() => {
            $('#postdatatable').DataTable({
              lengthMenu: [
                [10, 25, 50, -1],
                [10, 25, 50, 'All']
              ],
              pageLength: 10
            })
          })
        }
      })
    },
    async fetchUserTodos () {
      await this.$store.dispatch(getById, `${this.$route.query.id}/todos`).then((res) => {
        this.todos = res
        setTimeout(() => {
          $('#todosdatatable').DataTable({
            lengthMenu: [
              [10, 25, 50, -1],
              [10, 25, 50, 'All']
            ],
            pageLength: 10
          })
        })
      })
    },
    async fetchUserAlbums () {
      await this.$store.dispatch(getById, `${this.$route.query.id}/albums`).then((res) => {
        this.albums = res
        setTimeout(() => {
          $('#albumsdatatable').DataTable({
            lengthMenu: [
              [10, 25, 50, -1],
              [10, 25, 50, 'All']
            ],
            pageLength: 10
          })
        })
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
