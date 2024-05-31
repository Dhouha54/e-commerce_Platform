<template>
    <div class="row">
        <div class="text-center col-12">
            <h3 class="pt-3">Welcome to DHOUHA WORLD</h3>
        </div>
    </div>
    <div class="tab-container">
        <div :class="{'tab': true, 'active-tab': isLogin}" @click="showLogin">Log in</div>
        <div :class="{'tab': true, 'active-tab': !isLogin}" @click="showRegister">to register</div>
    </div>
    <div>
        <div v-if="isLogin" class="login-container">
            <LogIn></LogIn>
        </div>
        <div v-else>
            <RegisterUser></RegisterUser>
        </div>
    </div>
</template>

<script>
import LogIn from '../components/LogIn.vue';
import RegisterUser from '../components/RegisterUser.vue';

export default {
    name: "LoginRegister",
    components : {RegisterUser, LogIn},
    data() {
        return {
            isLogin: true
        };
    },
    methods: {
        showLogin() {
            this.isLogin = true;
        },
        showRegister() {
            this.isLogin = false;
        }
    }
}
</script>

<style scoped>
.tab-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
}

.tab {
    padding: 10px 20px;
    cursor: pointer;
    color: #999;
    font-weight: bold;
}

.active-tab {
    color: #000;
    border-bottom: 2px solid #000;
}

.tab-content {
    margin-top: 20px;
    text-align: center;
}
</style>