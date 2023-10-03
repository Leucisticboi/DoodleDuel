const router = require('express').Router();
const fs = require('fs');

router.post('/', (req, res) => {
    try {
        console.log('POST REQUEST RECIEVED');
        const userId = req.session.user_id;
        const imageDataUrl = req.body.imageDataUrl;
        const promptId = req.body.promptId;
        const base64Data = imageDataUrl.replace(/^data:image\/png;base64,/, '');
        const fileName = `${userId}_${promptId}.jpeg`;  // Set a custom name for the file

        fs.writeFile(`./public/doodles/${fileName}`, base64Data, 'base64', (err) => {
            if (err) {
                res.status(500).send('Error saving image.');
            } else {
                res.status(200).send('Image saved successfully.');
            }
        });
        } catch (error) {
            console.error('Error saving image:', error);
            res.status(500).send('Error saving image.');
        }
    
});

module.exports = router;