<template>
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <p class="pt-3" style="text-align: center;">Fill in the fields to track your orders online and benefit from a faster payment process.</p>
            <form @submit.prevent="addUser">
                <div class="form-group">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail*" v-model="Email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password*" v-model="Password">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="FirstName" placeholder="First Name*" v-model="FirstName">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="LastName" placeholder="Last Name*" v-model="LastName">
                </div>
                <div class="form-group">
                    <input type="date" class="form-control" id="birthday" placeholder="Birthday Date*" v-model="Birthday">
                </div>
                <div class="form-group">
                    <select id="gender-select" class="form-control" v-model="Gender">
                        <option value="">--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to answer">I prefer not to answer</option>
                    </select>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <input type="tel" class="form-control" id="phoneNumber" placeholder="Enter phone number" aria-describedby="phoneNumberHelp" v-model="TelNumber">
                    </div>
                    <small id="phoneNumberHelp" class="form-text text-muted">Please enter your telephone number</small>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-outline-secondary">Join Now</button>
            </form>
        </div>
        <div class="col-4"></div>
    </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
        return {
            Email: '',
            Password: '',
            FirstName: '',
            LastName: '',
            Birthday: '',
            Gender: '',
            TelNumber: ''
        };
    },
    methods: {
        addUser() {
            const formData = {
                Email: this.Email,
                Password: this.Password,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Birthday: this.Birthday,
                Gender: this.Gender,
                TelNumber: this.TelNumber
            };

            fetch('http://localhost:3000/api/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add user');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert('User added successfully');
            })
            .catch(error => {
                console.error('Error adding user: ', error);
                alert('Failed to add user');
            });
        }
    }
};
</script>
