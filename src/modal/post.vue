<template>
  <div>
    <div
      class="
        px-3
        py-1
        bg-dark
        d-flex
        justify-content-between
        align-items-center
      "
    >
      <h4 class="text-light text-uppercase">{{ status }}</h4>
      <button class="btn btn-sm btn-secondary pull-right" @click="onClose({ status: 'closed', data: {} })"><i class="text-lg bx bx-x"></i></button>
    </div>
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form
        novalidate
        id="initialForm"
        @submit.prevent="handleSubmit(onSubmit)"
        class="space-y-2 py-2 px-4"
      >
        <ValidationProvider
          name="card-name"
          :rules="{ required: true }"
          v-slot="{ errors, classes }"
        >
          <label for="post-title">Title</label>
          <input
            class="form-control form-control-sm"
            :class="
              classes.validated || userPost.title
                ? 'border-success'
                : 'border-danger'
            "
            type="text"
            v-model="userPost.title"
          />
          <template v-if="classes.dirty || classes.validated">
            <span
              class="text-danger text-sm"
              v-for="error in errors"
              :key="error"
              >{{ error }}</span
            >
          </template>
        </ValidationProvider>
        <ValidationProvider
          name="body"
          :rules="{ required: true }"
          v-slot="{ errors, classes }"
        >
          <label for="post-title">Body</label>
          <textarea
            class="form-control border"
            id="body"
            rows="3"
            :class="
              classes.validated || userPost.body
                ? 'border-success'
                : 'border-danger'
            "
            v-model="userPost.body"
          ></textarea>
          <template v-if="classes.dirty || classes.validated">
            <span
              class="text-danger text-sm"
              v-for="error in errors"
              :key="error"
              >{{ error }}</span
            >
          </template>
        </ValidationProvider>
        <div class="mt-2">
          <button class="btn btn-success" type="submit">Save</button>
        </div>
      </form>
    </ValidationObserver>
    <div class="form-group"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { actions, getters } from '../utils/store_schema'
const _page = 'posts'
const { put, post } = actions(_page)
export default {
  props: {
    post: Object,
    status: String
  },
  data () {
    return {
      userPost: {
        userId: null,
        title: '',
        body: ''
      }
    }
  },
  mounted () {
    this.userPost = this.post
  },
  computed: {
    ...mapGetters(getters(_page))
  },
  methods: {
    onSubmit () {
      this.$store.dispatch(this.userPost.id ? put : post, this.userPost).then(res => {
        if (this.userPost.id) {
          this.onClose({ status: 'edited', data: this.userPost })
        } else {
          this.onClose({ status: 'new', data: this.userPost })
        }
      })
    },
    onClose (state) {
      this.$emit('close')
      this.$root.$emit('post-modal', state)
    }
  }
}
</script>
