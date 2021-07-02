<template>
<div>
    

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">    
    <router-link to="/" class="navbar-brand" >Problems</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">         
        <li class="nav-item">          
          <router-link to="/todo" class="nav-link">Todo</router-link>
        </li>                
        <li class="nav-item">                      
          <router-link to="/member_list" class="nav-link">Members</router-link>
        </li>                
                 
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>