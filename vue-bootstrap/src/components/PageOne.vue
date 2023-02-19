<template>
    <div>
        <h1>This is page 1.</h1>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $("#PageOne").css("border-color", "#42b883");
    },
    unmounted(){
        $("#PageOne").css("border-color", "transparent");
    }
}
</script>

<style scoped>

</style>