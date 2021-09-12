<template>
  <div class="date-wrapper">
    <p v-html="getDate"></p>
  </div>
</template>

<script>
export default {
  name: "WeatherDate",
  computed: {
    getDate() {
      let d = new Date();
      let months = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ];
      let days = [
        "Chủ Nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `
        <span class="strong">${day},</span>
        <small>ngày</small> ${date} <small>tháng</small> ${month} <small>năm</small> ${year}
      `;
    }
  }
};
</script>

<style lang="sass">
.date
  &-wrapper
    font-size: 16px
    &:not(:last-child)
      margin-bottom: 10px
    .strong
      color: #fff
      font-size: 1.2em
</style>
