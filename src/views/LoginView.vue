<template>
    <div class="flex justify-center items-center h-screen bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-96">
            <h2 class="text-2xl font-bold mb-4">登录</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="username" class="block text-gray-700 text-sm font-bold mb-2">用户名</label>
                    <input type="text" id="username" v-model="username" class="border border-gray-300 p-2 w-full rounded">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700 text-sm font-bold mb-2">密码</label>
                    <input type="password" id="password" v-model="password" class="border border-gray-300 p-2 w-full rounded">
                </div>
                <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">登录</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
    // 这里可以添加实际的登录逻辑，如发送请求到后端验证
    router.push('/services')
}
</script>

<style scoped>
</style>    