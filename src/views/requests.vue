<template>
  <div>
    <div class="w-100 primary" style="height: 10px"></div>
    <div class="container h-100 py-9">
      <div class="row h-100">
        <v-col cols="12">
          <div class="w-100 d-flex align-center justify-space-between">
            <p class="text-h4 mb-0">لیست سفارشات</p>
            <v-btn icon large @click="$router.push({ name: 'home' })">
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </div>
        </v-col>
        <template v-if="response">
          <div
            class="col-12 col-sm-6"
            v-for="(item, index) in response.slice(0, time * 20)"
            :key="index"
          >
            <div class="formContainer pa-4">
              <p class="mb-1">آدرس:‌ {{ item.address }}</p>
              <p class="mb-0">
                نام: {{ item.first_name + " " + item.last_name }} - شماره
                موبایل:
                {{ item.coordinate_mobile }}
              </p>
            </div>
          </div>
          <infinite-loading @infinite="handleInfinite"></infinite-loading>
        </template>
        <div class="col-12 d-flex justify-center mt-10" v-else-if="err">
          <div class="col-12 col-md-6 formContainer text-center">
            <div class="d-flex align-center justify-center mb-3">
              <v-icon class="ml-1">mdi-alert-outline</v-icon>
              خطای سرور
            </div>
            <v-btn color="primary" @click="getData" outlined>
              تلاش دوباره
              <v-icon size="20px" class="mr-1">mdi-refresh</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infiniteLoading from "vue-infinite-loading";

export default {
  name: "requestsPage",
  data() {
    return {
      response: null,
      err: false,
      time: 1,
    };
  },
  methods: {
    getData() {
      this.err = false;
      this.$loading.show();
      this.$api.service
        .getRequests()
        .then((response) => {
          this.$loading.hide();
          this.response = response.data;
        })
        .catch(() => {
          this.$loading.hide();
          this.$notif.push("خطا در اتصال به سرور", "danger");
          this.err = true;
        });
    },
    handleInfinite($state) {
      if ((this.time + 1) * 20 < this.response.length) {
        this.time += 1;
        $state.loaded();
      } else {
        $state.complete();
      }
    },
  },
  mounted() {
    this.getData();
  },
  components: {
    infiniteLoading,
  },
};
</script>

<style>
.formContainer {
  /* padding-bottom: 40px !important; */
  border: 1px solid gainsboro;
  border-radius: 6px;
}
</style>
