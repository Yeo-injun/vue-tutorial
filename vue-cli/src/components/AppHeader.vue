<template>
    <header>
        <h1>{{ propsTitle }}</h1>
        <button v-on:click="sendEvent">Send</button>
    </header>
</template>

<script>
export default{
    props: ['propsTitle'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
        },
    },
}
</script>

<style>

</style>