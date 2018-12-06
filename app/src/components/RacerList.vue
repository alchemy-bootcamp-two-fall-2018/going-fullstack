<template>
    <ul v-if="racers">
        <li
            v-for="racer in racers"
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
    }
};
</script>

<style>

</style>
