<template>
    <div>
        <router-link v-if="accessToken" :to="{name: 'fruit.index'}" class="btn btn-outline-success"> List </router-link>
        <router-link v-if="accessToken" :to="{name: 'user.personal'}" class="btn btn-outline-secondary ms-3"> Personal </router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.login'}" class="btn btn-outline-primary ms-3"> Login </router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.register'}" class="btn btn-outline-primary ms-3"> Register </router-link>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            accessToken: null,
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token');
        }
    }

}
</script>

<style scoped>

</style>
