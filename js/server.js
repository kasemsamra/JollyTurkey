const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('photo'), (req, res) => {
    res.send('File uploaded successfully');
});

app.post('/upload-logo', upload.single('logo'), (req, res) => {
    const oldLogoPath = path.join(__dirname, 'uploads', 'logo.jpg');
    if (fs.existsSync(oldLogoPath)) {
        fs.unlinkSync(oldLogoPath);
    }
    fs.rename(req.file.path, path.join(req.file.destination, 'logo.jpg'), (err) => {
        if (err) {
            res.status(500).send('Failed to upload logo');
            return;
        }
        res.json({ filename: 'logo.jpg' });
    });
});

app.get('/gallery', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) {
            res.status(500).send('Failed to load gallery');
            return;
        }
        const photos = files.filter(file => file !== 'logo.jpg').map(file => `/uploads/${file}`);
        res.json({ photos });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
