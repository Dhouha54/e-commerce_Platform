<template>
    <div class="container">
        <div class="row">
            <div class="text-center col-12">
                <h3 class="pt-3"> Add Category</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>  
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="categoryName">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="text" class="form-control" v-model="imageUrl">
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">Submit</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categoryName: '',
            description: '',
            imageUrl: ''
        };
    },
    methods: {
        addCategory() {
            const formData = {
                id: 5,
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl
            };

            fetch('http://localhost:3000/api/addData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add category');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log success message
                // Optionally, clear form fields or update UI
            })
            .catch(error => {
                console.error('Error adding category:', error);
            });
        }
    }
};
</script>