<template>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <p class="pt-3" style="text-align: center;">Enter your email address and password to log in.</p>
            <form @submit.prevent="login">
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="E-mail*" v-model="Email" required>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password*" v-model="Password" required>
                </div>
                <a href="#" class="d-block mb-3">Forgot password?</a>
                <button type="submit" class="btn btn-outline-secondary">LOG IN</button>
            </form>
        </div>
        <div class="col-4"></div>
    </div>
</template>

<script>
export default {
    name: "LogIn",
    data() {
        return {
            Email: '',
            Password: '',
        };
    },
    methods: {
        login() {
            const formData = {
                Email: this.Email,
                Password: this.Password,
            };

            fetch('http://localhost:3000/api/userLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    throw new Error('Invalid email or password');
                } else {
                    throw new Error('Failed to log in');
                }
            })
            .then(data => {
                console.log(data);
                alert('Login successful');
                // Handle further actions after successful login, such as redirecting to another page
            })
            .catch(error => {
                console.error('Error logging in: ', error);
                alert(error.message); // Display the error message from the server
            });
        }

    }
};
</script>