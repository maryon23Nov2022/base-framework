<template>
<div class="board">
    <div class="navbar">
        <div class="logo">closed-doors</div>
        <!-- <div class="option"><button class="option">search</button></div>
        <div class="option"><button class="option">option1</button></div>
        <div class="option"><button class="option">option2</button></div>
        <div class="option"><button class="option">option3</button></div> -->
        <button class="option"><span class="button-text">option4</span></button>
    </div>
</div>
</template>

<script>
</script>

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
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
    /* background-color: aquamarine; */
}
.option{
    height: 100%;
    border-style: solid;
    border-width: 0 0 8px 0;
    border-color: transparent transparent greenyellow transparent;
}
.button-text{
    position: relative;
    bottom: -4px;
}
</style>