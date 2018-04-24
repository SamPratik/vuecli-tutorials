<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model="blog.title" required />
            <label>Blog Content:</label>
            <!-- press tab to see the change in the DOM -->
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <p>Blog Categories:</p>
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories" />
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" />
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories" />
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories" />
            </div>
            <div id="select">
                <label>Author Name:</label>
                <select v-model="blog.author">
                    <option v-for="author in authors">{{author}}</option>
                </select>
            </div><br>
            <div>
                <button type="button" v-on:click.prevent="post">Add Blog</button>
            </div>
        </form>
        <div class="">
            <h1 v-if="submitted">Thanks for adding you blog</h1>
        </div>
        <div id="preview">
            <h3>Preview blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>Author Name:</p>
            <p>{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: [
                'Pratik', 'Affan', 'Shihab'
            ],
            submitted: false
        }
    },
    methods: {
        post: function() {
            this.$http.post('https://vuecli-tutorials.firebaseio.com/posts.json', this.blog)
            .then(function(data) {
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
