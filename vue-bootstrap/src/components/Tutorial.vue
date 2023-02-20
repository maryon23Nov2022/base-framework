<template>
    <div>
        <h1>This is tutorial page.</h1>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $("#Tutorial").css({"color": "#42b883", "filter":"brightness(100%)"});
    },
    unmounted(){
        $("#Tutorial").css({"color": "#e1e1e1", "filter":"brightness(70%)"});
    }
}
</script>


<style scoped>

</style>