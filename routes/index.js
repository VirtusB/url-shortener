const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route   GET /:urlCode
// @desc    Redirect to longUrl
router.get('/:urlCode', async (req, res) => {
   try {
       const url = await Url.findOne({ urlCode: req.params.urlCode });

       if (url) {
           return res.redirect(url.longUrl);
       } else {
           return res.status(404).json('Not found');
       }
   } catch (e) {
        console.error(e);
        res.status(500).json('Server error');
   }
});

module.exports = router;