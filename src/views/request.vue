<template>
  <div class="h-100">
    <div class="w-100 primary d-block d-sm-none" style="height: 10px"></div>
    <div class="container h-100 py-9">
      <div class="row justify-center align-center h-100">
        <div class="col-12 col-sm-11 col-md-8 formContainer">
          <v-form ref="form" v-model="valid">
            <v-container class="pb-0">
              <v-row>
                <v-col cols="12">
                  <div class="w-100 d-flex align-center justify-space-between">
                    <p class="text-h4 mb-0">ثبت نام</p>
                    <v-btn icon large @click="$emit('back')">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                  </div>
                  <p class="text-subtitle-1 mb-0">
                    لطفا اطلاعات خود را وارد نمایید.
                  </p>
                </v-col>
                <v-col cols="12" sm="6" class="pb-0">
                  <v-text-field
                    v-model="firstName"
                    label="نام"
                    :rules="requiredRules"
                    required
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="6" class="pb-0">
                  <v-text-field
                    v-model="lastName"
                    label="نام خانوادگی"
                    :rules="requiredRules"
                    required
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="6" class="pb-0">
                  <v-text-field
                    v-model="phoneNum"
                    label="تلفن همراه"
                    :rules="phoneNumRules"
                    required
                    outlined
                    type="number"
                    class="numInput"
                  />
                </v-col>
                <v-col cols="12" sm="6" class="pb-0">
                  <v-text-field
                    v-model="telNum"
                    label="تلفن ثابت"
                    :rules="telNumRules"
                    hint="نمونه:‌ 02112345678"
                    required
                    outlined
                    type="number"
                    class="numInput"
                  />
                </v-col>
                <v-col cols="12" class="pb-0">
                  <v-text-field
                    v-model="address"
                    label="آدرس دقیق"
                    :rules="requiredRules"
                    required
                    outlined
                  />
                </v-col>
                <v-col cols="12" sm="6" class="pb-0">
                  <p class="mb-3 v-label theme--light">جنسیت</p>
                  <div class="d-flex w-100">
                    <v-btn
                      color="primary"
                      class="flex-grow-1 ml-1"
                      :outlined="gender === 'Female'"
                      @click="gender = 'Male'"
                      >آقا</v-btn
                    >
                    <v-btn
                      color="primary"
                      class="flex-grow-1 mr-1"
                      :outlined="gender === 'Male'"
                      @click="gender = 'Female'"
                      >خانم</v-btn
                    >
                  </div>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pb-0 d-flex align-end justify-end mt-5 mt-md-0"
                >
                  <v-btn
                    color="success"
                    @click="submit"
                    x-large
                    :width="windowWidth > 768 ? '300px' : '100%'"
                    :disabled="!valid"
                    >مرحله بعد</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "requestPage",
  props: {
    windowWidth: Number,
    windowHeight: Number,
    location: Object,
  },
  data() {
    return {
      dialog: false,
      firstName: "",
      lastName: "",
      phoneNum: "",
      telNum: "",
      address: "",
      requiredRules: [(v) => !!v || "این فیلد الزامی است"],
      phoneNumRules: [
        (v) => !!v || "این فیلد الزامی است",
        (v) =>
          /^(\u06F0\u06F9|09)[\u06F0-\u06F90-9]{9}$/.test(v) ||
          "شماره همراه وارد شده اشتباه است",
      ],
      telNumRules: [
        (v) => !!v || "این فیلد الزامی است",
        (v) =>
          /^(\u06F0|0)[\u06F0-\u06F90-9]{2,3}[\u06F0-\u06F90-9]{8}$/.test(v) ||
          "شماره تلفن وارد شده اشتباه است",
      ],
      valid: false,
      gender: "Male",
    };
  },
  methods: {
    submit() {
      this.$loading.show();
      this.$api.service
        .createRequest({
          first_name: this.firstName,
          last_name: this.lastName,
          coordinate_mobile: this.phoneNum,
          coordinate_phone_number: this.telNum,
          lat: this.location.lat,
          lng: this.location.lng,
          region: 1,
          address: this.address,
          gender: this.gender,
        })
        .then(() => {
          this.$loading.hide();
          this.$notif.push("درخواست شما ارسال شد", "success");
          localStorage.removeItem("location");
          this.$router.push({ name: "requests" });
        })
        .catch(() => {
          this.$loading.hide();
          this.$notif.push("خطا در اتصال به سرور", "danger");
        });
    },
  },
};
</script>

<style>
@media screen and (min-width: 768px) {
  .formContainer {
    padding-bottom: 40px !important;
    border: 1px solid gainsboro;
    border-radius: 6px;
  }
}
</style>
