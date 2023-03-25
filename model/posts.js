module.exports = {

    posts: [
        {
            id: "232323232",
            title: "teste mural",
            description: "descrição mural teste"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description){

        this.posts.push({id:generateID(),title,description})

    },


}

function generateID() {
    return Math.random().toString(36).substring(2,9)
}