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
            <button class="search">
                <svg width="16" height="16" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span>Search</span>
                <div class="search-icon green-border hover-green l-size">Ctrl K</div>
            </button>
        </div>
        <div style="display:flex; justify-content:flex-end; height: 100%;">
            <div class="main-menu text-link">
                <a class="option drop-down-link" id="Docs" style="cursor: pointer;">
                    <span>
                        Docs<i class="arrow">&lt;</i>
                        <div class="drop-content">
                            <router-link class="dpdown-option" to="/docs/guide">Guide</router-link>
                            <router-link class="dpdown-option" to="/docs/tutorial">Tutorial</router-link>
                            <router-link class="dpdown-option" to="/">Examples</router-link>
                            <router-link class="dpdown-option" to="/">Quick&nbsp;Start</router-link>
                        </div>
                    </span>
                </a>
                <router-link class="option" to="/pageOne" id="PageOne">
                    <span>PageOne</span>
                </router-link>
                <router-link class="option" to="/pageTwo" id="PageTwo">
                    <span>PageTwo</span>
                </router-link>
                <router-link class="option" to="/pageTwo" id="PageTwo">
                    <span>PageThree</span>
                </router-link>
                <div class="vertical-line" style="margin-left: 24px"></div>
                <a class="option drop-down-link" id="Account" style="cursor: pointer;">
                    <span>
                        Account<i class="arrow">&lt;</i>
                        <div class="drop-content" style="width: 192px">
                            <div v-if="this.$store.state.logged">
                                <div class="dpdown-text">Signed in as:</div>
                                <div class="dpdown-text" style="width: 100%; text-align: right">{{ this.$store.state.username }}</div>
                                <div class="horizontal-line"></div>
                                <router-link class="dpdown-option" to="/">Your&nbsp;profile</router-link>
                                <router-link class="dpdown-option" to="/">Your&nbsp;repositories</router-link>
                                <div class="horizontal-line"></div>
                                <router-link class="dpdown-option" to="/">Help</router-link>
                                <router-link class="dpdown-option" to="/">Settings</router-link>
                                <div class="horizontal-line"></div>
                                <a class="dpdown-option">Sign&nbsp;out</a>
                            </div>
                            <div v-else>
                                <router-link class="dpdown-option" to="/">Sign&nbsp;in</router-link>
                                <router-link class="dpdown-option" to="/">Create&nbsp;account</router-link>
                                <div class="horizontal-line"></div>
                                <router-link class="dpdown-option" to="/">Help</router-link>
                                <router-link class="dpdown-option" to="/">Settings</router-link>
                            </div>
                        </div>
                    </span>
                </a>
                <div class="vertical-line" style="margin-right: 24px"></div>
            </div>
            
            <div class="social-links" style="align-self: center">
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
    background-color: #202124;
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
.drop-down-link > span{
    position: relative;
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
.drop-down-link:hover .drop-content{
    height: auto;
    padding: 16px 0;
    border: solid;
    border-width: 1px;
    opacity: 1;
    transition: 168ms;
}
.drop-content{
    position: absolute;
    opacity: 0;
    height: 0;
    margin: 8px 0;
    width: 168px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #202124;
    border-radius: 8px;
    border-color: #979797;
    transition: 256ms;
}
.dpdown-option{
    display: flex;
    color: #e1e1e1;
    text-decoration: none;
    padding: 4px 16px;
    transition: 500ms;
}
.dpdown-option:hover{
    color: #42b883;
}
.vertical-line{
    align-self: center;
    border: solid;
    border-width: 0 1px 0 0;
    border-color: #525252;
    height: 24px;
}
.search{
    display: flex;
    background-color: transparent;
    color: #e1e1e1;
    border: none;
    filter: brightness(60%);
    transition: 300ms;
}
.search > *{
    align-self: center;
    margin: 0 4px;
    /* padding: 8px 8px; */
}
.search:hover{
    filter: brightness(100%);
}
.green-border{
    border: solid;
    border-width: 1px;
    border-radius: 4px;
    padding: 0 4px;
    transition: 300ms;
}
.search:hover .hover-green{
    border-color: #42b883;
    color: #42b883;
    transition: 300ms;
}
.l-size{
    font-size: small;
}
.dpdown-text{
    color: #979797;
    padding: 4px 16px;
    cursor: default;
}
.horizontal-line{
    border: solid;
    border-width: 0 0 1px 0;
    border-color: #525252;
    margin: 16px 0;
}
</style>