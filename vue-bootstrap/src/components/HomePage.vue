<template>
    <div>
        <h1>This is home page.</h1>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $("#HomePage").css("border-color", "#42b883");
    },
    unmounted(){
        $("#HomePage").css("border-color", "transparent");
    }
}
</script>


<style scoped>

</style>