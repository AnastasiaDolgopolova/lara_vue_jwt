<template>
    <div>
        <router-link v-if="accessToken" :to="{name: 'fruit.index'}" class="btn btn-outline-success"> List </router-link>
        <router-link v-if="accessToken" :to="{name: 'user.personal'}" class="btn btn-outline-secondary ms-3"> Personal </router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.login'}" class="btn btn-outline-primary ms-3"> Login </router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.register'}" class="btn btn-outline-primary ms-3"> Register </router-link>
        <a v-if="accessToken" @click.prevent="logout" href="#" class="btn btn-outline-primary ms-3">Logout</a>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
import api from "@/api.js";
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
        },

        logout() {
            api.post('/api/auth/logout')
                .then(res => {
                    localStorage.removeItem('access_token');
                    this.$router.push({name: 'user.login'});
                })
        }
    }

}
</script>

<style scoped>

</style>
