module.exports = (app) => {
    const videos = require('../controllers/videoController')
    const router = require('express').Router()

    router.get('/', videos.findAll)
    app.use('/api/videos', router)
}