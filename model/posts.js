module.exports = {

    posts: [
        { id: '0spk0a16t', title: 'Título Teste', description: 'Descrição Teste.' }
    ],


    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateId(), title, description });
    },

    delete(id) {
        for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].id == id) {
                this.posts.splice(i, 1);

                return true;
            }
        }
        return false;
    }
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}