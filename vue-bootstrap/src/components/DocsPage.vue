<template>
    <div class="base">
        <div class="docs-index">
            <h3>Docs</h3>
            <div class="horizontal-line"></div>
            <router-link class="normal-link vertical-gap dim-text hover-bright" to="/docs/guide" id="Guide">Guide</router-link>
            <router-link class="normal-link vertical-gap dim-text hover-bright" to="/docs/tutorial" id="Tutorial">Tutorial</router-link>
            <router-link class="normal-link vertical-gap dim-text hover-bright" to="/docs/guide" id="Examples">Examples</router-link>
            <router-link class="normal-link vertical-gap dim-text hover-bright" to="/docs/guide" id="quick-start">Quick start</router-link>
        </div>
        <div class="docs-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    mounted(){
        $("#Docs").css("border-color", "#42b883");
    },
    unmounted(){
        $("#Docs").css("border-color", "transparent");
    }
}
</script>


<style scoped>
.base{
    display: flex;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 24px 32px;
}
.docs-index{
    display: flex;
    padding: 0 16px;
    margin-right: 32px;
    flex-direction: column;
    width: 24%;
}
.normal-link{
    text-decoration: none;
    color: #e1e1e1;
    font-weight: 500;
    transition: 300ms;
}
.dim-text{
    filter: brightness(70%);
}
.vertical-gap{
    padding: 3px 0;
}
.hover-green:hover{
    color: #42b883;
}
.hover-bright:hover{
    filter: brightness(100%);
}
.horizontal-line{
    border: solid;
    border-width: 0 0 1px 0;
    border-color: #525252;
    margin: 16px 0;
}
</style>