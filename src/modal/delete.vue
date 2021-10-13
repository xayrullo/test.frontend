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
      <h4 class="text-light text-uppercase"></h4>
      <button
        class="btn btn-sm btn-secondary pull-right"
        @click="onClose({ status: 'closed', data: {} })"
      >
        <i class="text-lg bx bx-x"></i>
      </button>
    </div>
    <div class="p-3">
      <h4 class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, soluta.
      </h4>
      <div class="d-flex justify-content-center mt-3">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <button
                type="button"
                @click="onClose({status: 'deleted', data: {}})"
                class="btn w-sm btn-danger ml-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },

  methods: {
    onClose (state) {
      this.$emit('close')
      this.$root.$emit('delete-modal', state)
    }
  }
}
</script>
