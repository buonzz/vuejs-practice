<template>
    <div class="grid-container">
        <div class="left-column">This is the sidebar</div>
        <div class="right-column"><slot/></div>
        <h4>You are using the Two Column Sidebar Layout</h4>
    </div>
</template>
<style scoped>
    .grid-container{
        width:100%;
    }
    .left-column {
        width: 20%;
    }
    .right-column {
        width: 80%;
    }
</style>