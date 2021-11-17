
const IP = '192.168.1.3';


document.addEventListener('DOMContentLoaded', () => {
    updatePostCards();
})

function updatePostCards() {

    fetch('http://' + IP + ':5000/api/all').then(response => {
        return response.json();
    }).then(json => {
        let postElements = '';

        json.forEach(element => {
            let postElement = `<div id=${element.id} class="card mb-4">
                                    <div class="card-header">
                                        <h3 class="card-title">${element.title}</h3>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-test">${element.description}</p>
                                    </div>
                                </div>`;

            postElements += postElement;
        })

        document.getElementById('posts').innerHTML = postElements;
    })

}

function newPost() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    let newPost = { title, description };


    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(newPost)
    }

    fetch('http://' + IP + ':5000/api/new', options).then(response => {
        console.log(response);
        updatePostCards();
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    })

}