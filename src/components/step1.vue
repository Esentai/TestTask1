<template>
  <form class="inputs" @submit.prevent="submit">
    <input class="input" :class="{ 'hasError': $v.lastName.$error }" v-model="lastName" type="text" placeholder="Фамилия*">
    <input class="input" :class="{ 'hasError': $v.firstName.$error }" v-model="firstName" type="text" placeholder="Имя*">
    <input class="input" type="text" placeholder="Отчество">
    <input class="input" :class="{ 'hasError': $v.dateOfBirth.$error }" v-model="dateOfBirth" type="text" onfocus="(this.type = 'date')"  placeholder="Дата рождения*">
    <input class="input" :class="{ 'hasError': $v.phoneNumber.$error }" v-model="phoneNumber" type="number" placeholder="Номер телефона*">
    <label class="input_label" for="group">Группа клиентов*</label>
    <select class="input multiple" multiple :class="{ 'hasError': $v.groupName.$error }" v-model="groupName" id="group">
      <option value="vip">VIP</option>
      <option value="problems">Проблемные</option>
      <option value="oms">ОМС</option>
    </select>
    <label class="input_label" for="doctor">Лечащий врач</label>
    <select class="input" name="doctor" id="doctor">
      <option value="" selected disabled hidden>Не выбрано</option>
      <option value="">Иванов</option>
      <option value="">Захаров</option>
      <option value="">Чернышева</option>
    </select>
    <div class="checkbox">
      <input id="sendSMS" type="checkbox">
      <label for="sendSMS">Не отправлять СМС</label>
    </div>

    <button  type="submit" class="step_btn">Следующий шаг</button>

  </form>
</template>

<script>

import { required, minLength, maxLength} from "vuelidate/lib/validators";

export default {
  name: "step1",
  data: () => {
    return {
        lastName: "",
        firstName: "",
        dateOfBirth:"",
        phoneNumber: "",
        groupName:[]
    }
  },
  validations: {
      lastName: {
        required,
        min: minLength(2)
      },
      firstName: {
        required,
        min: minLength(2)
      },
      dateOfBirth:{
        required
      },
      phoneNumber:{
        required,
        max: maxLength(11)
      },
      groupName:{
        required,
      }
  },
  methods:{
    submit() {
      this.$v.$touch();
      if(this.$v.$error) return
      this.$emit('status', true)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "../assets/steps.sass"
</style>