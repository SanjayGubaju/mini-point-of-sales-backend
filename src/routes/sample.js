const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        return res.json({
            result: 'ok',
        });
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

module.exports = router;