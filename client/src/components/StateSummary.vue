<template>
    <div>

        <p>There are a total of  {{ states.length }} states and the District of Columbia </p>
        <p>You have visited {{ totalVisited }} {{units}}</p>
        
<!-- display message if all states are visited -->
        <p id="all-visited-message" v-if="areAllVisited">You have visited all the states and the District of Columbia!</p>
 
    </div>

</template>

<script>

export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        totalVisited() {
            let visitedCount = 0 
            this.states.forEach( state => {
                if (state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        units() { // computed method (units )
            if(this.totalVisited == 1 ){
                return 'state'
            }else {
                return 'states'
            }
        },
        areAllVisited() { // computed method 
            return this.totalVisited === this.states.length
        }
    }
}

</script>

<style>

/* Adding color to message when all states are visited  */

#all-visited-message {
    color: blue;
    font-weight: 600;
}
</style>