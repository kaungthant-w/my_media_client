<template>
    <div class="d-flex justify-content-center py-3">
    <div class="btn btn-danger text-white btn-sm me-4" @click="home()">Home</div>
    <div class="btn bg-dark text-white btn-sm" @click="loginPage()">Login</div>
  </div>
    <div class="container my-5 p-5 shadow-sm">
        <div class="form-group mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Email" v-model="userData.email">
        </div>
        <div class="form-group mb-3">
            <label for="password" class="form-label">Password:</label>
            <input type="password" id="password" class="form-control" placeholder="Enter Password" v-model="userData.password">
        </div>
        <button type="button" @click="accountLogin()" class="btn bg-primary">Login</button>
        <button class="btn mt-3" @click="check()">Check Token button</button>
    </div>
</template>
<script src="../js/login.js"></script>