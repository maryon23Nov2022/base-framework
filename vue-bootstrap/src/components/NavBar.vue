<template>
<div class="board">
    <div class="navbar">
        <div class="logo text-link">
            <router-link class="option" to="/" id="HomePage">
                <span>
                    <img src="../assets/logo.png" style="height: 42px; width: 42px;">
                    closed-doors
                </span>
            </router-link>
        </div>
        <div class="main-menu text-link">
            <a class="option drop-down-link" id="Docs" style="cursor: pointer;">
                <span>Docs<i class="arrow">&lt;</i></span>
            </a>
            <router-link class="option" to="/pageOne" id="PageOne">
                <span>PageOne</span>
            </router-link>
            <router-link class="option" to="/pageTwo" id="PageTwo">
                <span>PageTwo</span>
            </router-link>
        </div>
        <div class="social-links">
            <a href="https://github.com/maryon23Nov2022/base-framework.git" target="__blank">
                <img src="../assets/github.jpg" title="github">
            </a>
            <a href="https://threejs.org/" target="__blank">
                <img src="../assets/threejs.jpg" title="three.js">
            </a>
            <a href="https://vuejs.org/" target="__blank">
                <img src="../assets/vue.png" title="vue">
            </a>
        </div>
    </div>
</div>
</template>

<style scoped>
.board{
    display: flex;
    width: 100vw;
    height: 64px;
    position: relative;
    left: -20px;
    margin-bottom: 8px;
    box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 8px 5px 0px rgba(0,0,0,0.75);
}
.navbar{
    display: flex;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
    /* background-color: aquamarine; */
}
.text-link{
    height: 100%;
    display: flex;
    /* background-color: red; */
}
.main-menu > .option{
    display: flex;
    color: #e1e1e1;
    text-decoration: none;
    font-weight: 500;
    padding: 0 16px;
    transition: 500ms;
    /* background-color: aquamarine; */
    height: 100%;
    border: solid;
    border-width: 0 0 1px 0;
    border-color: transparent;
}
.option:hover{
    color: #42b883;
}
#HomePage{
    display: flex;
    color: #e1e1e1;
    text-decoration: none;
    font-weight: 500;
    padding: 0 16px;
    transition: 300ms;
    height: 100%;
}
#HomePage:hover{
    filter: brightness(60%);
}
.drop-down-link:hover{
    color: #979797;
}
.logo{
    font-size: large;
}
a > span{
    align-self: center;
}
a > img{
    border-radius: 50%;
    height: 28px;
    width: 28px;
    align-self: center;
    margin: 0 8px;
    filter: brightness(70%);
    transition: 300ms;
}
a > img:hover{
    filter: brightness(100%);
}
.arrow{
    display: inline-block;
    transform: rotate(-90deg) scale(0.8, 1.4) translateX(-4px);
    font-style: normal;
    margin-left: 4px;
}
</style>