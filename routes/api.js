const express = require('express');
const router = express.Router();

const cors = require('cors');

let posts = require('../model/posts');

const options = {
    origin: "http://localhost:5000"
}
router.use(cors(options));

router.get('/all', (request, response) => {
    response.send(JSON.stringify(posts.getAll()));
})

router.post('/new', (request, response) => {
    let title = request.body.title;
    let description = request.body.description;

    posts.newPost(title, description);

    response.send('New entry added.')
})

router.delete('/del', (request, response) => {
    let id = request.body.id;

    let result = posts.delete(id);

    if (result) {
        response.send('Entry deleted.');
    } else {
        response.send('Entry not found.');
    }

})


module.exports = router;