<template>
    <div>
        <h1>This is page 2.</h1>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $("#PageTwo").css("border-color", "#42b883");
    },
    unmounted(){
        $("#PageTwo").css("border-color", "transparent");
    }
}
</script>

<style scoped>

</style>