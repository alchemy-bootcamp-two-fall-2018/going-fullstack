<template>
    <li>
        <RouterLink :to="`/nonprofits/${nonprofit.id}`">{{nonprofit.name}}</RouterLink>
        {{nonprofit.city}}, a PDX Metro area: {{formattedMetro}}  
    </li>
</template>

<script>
export default {
  props:{
    nonprofit: null
  },
  computed: {
    formattedMetro() {
      return new Metro(this.nonprofit.metropolitan).toString();
    }
  }
};
</script>

<style>

</style>
