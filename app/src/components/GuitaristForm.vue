<template>
<form @submit.prevent="onSubmit(guitarist)">
    <input v-model="guitarist.name" placeholder="Name" require>
    <input v-model="guitarist.type" placeholder="Music Type" require>
    <input type="number" v-model="guitarist.yob" placeholder="Year of Birth" require>
    <p>
    <select v-model="guitarist.alive" class="alive">
        <option disabled value="">Alive?</option>
        <option value="true">Alive</option>
        <option value="false">Deceased</option>
    </select>
    
    <select v-if="guitars" 
        v-model="guitarist.guitarId" 
        required>
        <option value="-1" disabled>Select a Guitar</option>
        <option v-for="guitar in guitars"
        :key="guitar.id"
        :value="guitar.id">
        {{guitar.brand}} ({{guitar.model}})
        </option>
    </select>

    <button>{{label || 'Add'}}</button>
    </p>
</form>
    
</template>

<script>
import api from '../services/api';

function initGuitarist() {
  return {
    name: '',
    type: '',
    yob: '',
    alive: '',
    guitarId: -1
  };
}

function copyGuitarist(guitarist) {
  return {
    id: guitarist.id,
    name: guitarist.name,
    yob: guitarist.yob,
    type: guitarist.type,
    alive: guitarist.alive,
    guitarId: guitarist.guitarId
  };
}
export default {
  props: {
    onSubmit: Function,
    label: String,
    guitaristToEdit: Object
  },
  data() {
    return {
      guitarist: this.guitaristToEdit 
        ? copyGuitarist(this.guitaristToEdit) 
        : initGuitarist(),
      guitars: null
    };
  },
  created() {
    api.getGuitars()
      .then(guitars => {
        this.guitars = guitars;
      });
  }
};
</script>

<style>

</style>


