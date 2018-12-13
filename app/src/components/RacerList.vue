<template>
    <ul v-if="racers">
        <li
            v-for="racer in sortedRacers"
            :key="racer.id">
                <RouterLink :to="`/racers/${racer.id}`"> 
                    {{racer.name}}
                </RouterLink>
        </li>

    </ul>
</template>

<script>
export default {
    props: {
        racers: null
    },
    computed: {
        sortedRacers() {
            return this.racers.slice().sort((a, b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            });
        }
    }
};
</script>

<style scoped>
li {
    list-style: none;
}

</style>
