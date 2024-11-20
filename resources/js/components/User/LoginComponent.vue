<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Login</div>

                        <div class="card-body">

                                <div class="row mb-3">
                                    <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>

                                    <div class="col-md-6">
                                        <input id="email" v-model="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus>

<!--                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror-->
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" v-model="password" type="password" class="form-control" name="password" required autocomplete="current-password">

<!--                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                        @enderror-->
                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button @click.prevent="login" type="submit" class="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LoginComponent",
    data() {
        return {
            email: null,
            password: null,
        }
    },

    methods: {
        login() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password,
            })
                .then(res => {
                  localStorage.setItem('access_token', res.data.access_token);
                   // localStorage.setItem('some_data', JSON.stringify(data)); //for put obj
                   // JSON.parse(localStorage.getItem('some_data')); //for get obj
                   // localStorage.access_token = res.data.access_token;
                })
        },
    }
}

</script>

<style scoped>

</style>
