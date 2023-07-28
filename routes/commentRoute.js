module.exports = (app) => {
    const comments = require('../controllers/commentController')
    const router = require('express').Router()

    router.get('/:videoId', comments.findAll)
    router.post('/:videoId', comments.addComment)
    app.use('/api/comments', router)
}