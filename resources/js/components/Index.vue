<script setup>

</script>

<template>
    <div>
        <router-link :to="{name: 'fruit.index'}" class="btn btn-outline-success"> List </router-link>
        <router-link :to="{name: 'user.login'}" class="btn btn-outline-primary ms-3"> Login </router-link>
        <router-link :to="{name: 'user.register'}" class="btn btn-outline-primary ms-3"> Register </router-link>
        <router-link :to="{name: 'user.personal'}" class="btn btn-outline-secondary ms-3"> Personal </router-link>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
