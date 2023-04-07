<template>
  <div class="d-flex justify-content-center py-3">
    <div class="btn btn-danger text-white btn-sm me-4" @click="home()">Home</div>
    <div class="btn bg-dark text-white btn-sm" @click="loginPage()" v-if="!tokenStatus">Login</div>
    <div class="btn bg-dark text-white btn-sm" @click="logout()" v-if="tokenStatus">Logout</div>
  </div>
    <div class="container my-5 p-5 shadow-sm">
        <div class="alert alert-danger" v-if="userStatus">
            The Credential Do Not Match!
        </div>
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="userData.email">
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" id="password" class="form-control" placeholder="Enter Password" v-model="userData.password">
        </div>
        <button type="button" @click="accountLogin()" class="btn bg-primary">Login</button>
    </div>
</template>
<script src="../js/login.js"></script>