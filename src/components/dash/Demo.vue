<template>
  <div>
    <h1 class="text-center">Our Environment</h1>
    <section class="content">
      <div class="row">
        <datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%"></datepicker>
      </div>
    </section>
  </div>
</template>
<script>
  import datepicker from 'vue-date-picker'
  export default {
    name: 'Servers',
    data: function () {
      return {}
    },
    computed: {
      datetime: function () {
        return new Date()
      }
    },
    components: {datepicker}
  }
</script>

<style>
</style>
