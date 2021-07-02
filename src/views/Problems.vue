<template>
<div class="container">
<div class="row">
    <div class="col-12 col-sm-4 mt-4  " >
        <ul class="shadow sticky-top sticky-sm-top p-0 m-0">
            <a href="#1" class="list-group-item">Uri Online gudge</a>    
            <a href="#2" class="list-group-item">Hacker-rank</a>    
            <a href="#3" class="list-group-item">up coming</a>    
        </ul>
    </div>
    <div class="col-12 col-sm-8 " >
        <div class="dev_1 rounded shadow mb-4 mt-4" id="1">
            <section-1/>
        </div>
        <div class="dev_2 rounded shadow mb-4" id="2">
            up coming
        </div>
        <div class="dev_3 rounded shadow mb-4" id="3">
            up coming
        </div>
    </div>
</div>
</div>
</template>

<script>
import Section1 from "../components/problem/section_one.vue"
export default {
    components: { 
        Section1,
    },

}
</script>

<style scoped>

.dev_1,.dev_2,.dev_3{
    height: 100vh;   
    width: 100%; 
    background-color: rgb(228, 234, 235);
}

</style>