<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name : 'home'}">Home<span class="sr-only">(current)</span></router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name : 'about'}">About<span class="sr-only">(current)</span></router-link> 
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 mx-auto">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="width: 500px;">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link fas fa-user" :to="{name : 'LoginRegister'}">
          Log in, register<span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link fas fa-heart" :to="{name : 'wishesItems'}">  <span class="sr-only">(current)</span></router-link> 
      </li>
      <li class="nav-item">
        <router-link class="nav-link fas fa-shopping-basket" :to="{name : 'shopping_bascket'}">  <span class="sr-only">(current)</span></router-link> 
      </li>
    </ul>
  </div>
</nav>
</template>

  
  
