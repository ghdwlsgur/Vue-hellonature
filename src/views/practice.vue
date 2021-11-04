
<script>
export default ({
    el: '#app-4',
    data() {
        return {
            todos: [
                { text: 'JavaScript 배우기'},
                { text: 'Vue 배우기'},
                { text: '무언가 멋진 것을 만들기'}
            ]
        }
    }
});
</script>

<template>
    <div id="app-4">
        <ol>
            <li v-for="todo in todos" :key="todo">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>

<style scoped>

</style>
