<template>
    <div id="block-header">
        <h1 id="title">Have you visited every state</h1>
    </div>
</template>

<script>

// exporting Page header 

export default {
    name:'PageHeader',
}

</script>

<style scoped>

#block-header {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: brown;
    background-image: url('~@/assets/map_header.jpg');
    background-position: center;
    background-size: cover;
}

#title {
    font-weight: 500;
    color: whitesmoke;
}

</style>