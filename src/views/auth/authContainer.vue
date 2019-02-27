<template>
    <div>
        <b-row>
            <b-col md="4" style="padding: 0">
                <login/>
            </b-col>
            <b-col md="8" class="login-bg d-none d-md-block">
                
            </b-col>
        </b-row>
    </div>
</template>

<script>
import login from '@/views/auth/login.vue'

export default {
    components: {
        "login": login
    },
    data () {
        return {

        }
    }
}
</script>

<style>
    .login-bg{
        background: url('./../../assets/login.jpg');
        width: 100%;
        min-height: 100vh;
        background-position: center;
        background-size: cover;
    }
</style>
