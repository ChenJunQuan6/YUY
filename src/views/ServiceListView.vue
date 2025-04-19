<template>
    <div class="p-8">
        <h2 class="text-2xl font-bold mb-4">服务项目列表</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="service in services" :key="service.id" class="bg-white p-4 rounded shadow-md">
                <h3 class="text-lg font-bold mb-2">{{ service.name }}</h3>
                <p class="text-gray-600 mb-2">{{ service.description }}</p>
                <p class="text-green-500 font-bold">价格: {{ service.price }} 元</p>
                <button @click="goToBooking(service.id)" class="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">预约</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const services = [
    {
        id: 1,
        name: '面部护理',
        description: '深层清洁肌肤，补水保湿',
        price: 200
    },
    {
        id: 2,
        name: '身体按摩',
        description: '缓解身体疲劳，放松肌肉',
        price: 300
    },
    {
        id: 3,
        name: '美甲服务',
        description: '多种款式可选，打造时尚指甲',
        price: 150
    }
]

const goToBooking = (serviceId) => {
    router.push(`/booking/${serviceId}`)
}
</script>

<style scoped>
</style>    