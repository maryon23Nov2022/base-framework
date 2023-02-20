<template>
    <div id="app">
        <NavBar/>
        <router-view></router-view>
        <ul>
            <li>this is the 1st li</li>
            <li>this is the 2nd li</li>
            <li>this is the 3rd li</li>
            <li>this is the 3rd li</li>
            <li>this is the 3rd li</li>
            <li>this is the 3rd li</li>
            <li>this is the 3rd li</li>
            <li>this is the 3rd li</li>
            <li>this is the 3rd li</li>
            <li>type = {{ job.type }}</li>
            <li>salary = {{ job.salary }}</li>
            <li>gender.value = {{ gender }}</li>
        </ul>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </button>
            <ul class="dropdown-menu">
                <li><button class="dropdown-item" type="button">{{ name }}</button></li>
                <li><button class="dropdown-item" type="button">{{ age }}</button></li>
                <li><button class="dropdown-item" type="button">{{ gender }}</button></li>
            </ul>
        </div>
        <button @click="sayHello">button</button>
    </div>
</template>

<script>
    import { ref } from "vue"
    import NavBar from "./components/NavBar.vue"

    export default {
        setup(){
            let name = "zs";
            let age = 18;
            let gender = ref("man");
            let job = ref({
                type: "chef",
                salary: 30000,
            })

            function sayHello(){
                gender.value = "woman";
                job.value.type = "dishwasher"
                console.log(gender.value);
            }
            return {
                name, age, gender, job, sayHello
            }
        },
        components: {
            NavBar,
        }
    }
</script>

<style scoped>
/* li{
    background-color: pink;
} */
</style>
