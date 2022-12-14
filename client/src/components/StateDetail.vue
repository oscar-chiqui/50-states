<template>
<!-- Span the class  -->

    <div class="state-info">

        <span class="state-name">{{state.name}}</span>

<!--The input is created for each state  -->
        <div>
            <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
        </div>

        <div>
            <!-- /We choose the map and state for the map and state as selected on the checkbox -->
            <router-link v-bind:to="{name: 'StateMap', params: {state: state.name }}">
                <img class="map-icon" src="@/assets/icons8-map-marker-94.png">
            </router-link>

        </div>

    </div>

</template>

<script>

export default {
    name:'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object   // I can't modify props
    },
    data() {
        return {
            visited: this.state.visited  // modify data
        }
    }, // methods based on state.name
    methods: {
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}

</script>

<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gainsboro solid;
    border-radius: .3rem;
    background-color: whitesmoke;
}

.visit-state {
    margin: 1rem;
}

.map-icon {
    width: 4rem;
    height: 4rem;
}

</style>