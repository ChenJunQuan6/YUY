<template>
    <div class="p-8">
        <h2 class="text-2xl font-bold mb-4">预约服务</h2>
        <div class="bg-white p-4 rounded shadow-md">
            <p class="text-lg font-bold mb-2">服务项目: {{ service.name }}</p>
            <p class="text-gray-600 mb-2">{{ service.description }}</p>
            <p class="text-green-500 font-bold">价格: {{ service.price }} 元</p>
            <form @submit.prevent="handleBooking">
                <div class="mb-4">
                    <label for="date" class="block text-gray-700 text-sm font-bold mb-2">预约日期</label>
                    <input type="date" id="date" v-model="bookingDate" class="border border-gray-300 p-2 w-full rounded">
                </div>
                <div class="mb-4">
                    <label for="time" class="block text-gray-700 text-sm font-bold mb-2">预约时间</label>
                    <input type="time" id="time" v-model="bookingTime" class="border border-gray-300 p-2 w-full rounded">
                </div>
                <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">提交预约</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const bookingDate = ref('')
const bookingTime = ref('')

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

const service = ref({})

onMounted(() => {
    const serviceId = parseInt(route.params.serviceId)
    service.value = services.find(s => s.id === serviceId)
})

const handleBooking = () => {
    // 这里可以添加实际的预约逻辑，如发送请求到后端保存预约信息
    alert('预约成功！')
}
</script>

<style scoped>
</style>    