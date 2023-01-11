// if (process.env.NODE_ENV != 'production'){
//     require('dotenv').config()
// }
const cors = require('cors')
const express = require('express')
// const fileUpload = require('express-fileupload');
const errorHandler = require('./middlewares/errorhandler')
const router = require('./routes')
const app = express()
const port = 3000
// const multer  = require('multer')

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })
// let upload = multer({ storage: storage })

// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));

app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// app.post('/profile-upload-single', upload.single('profile-file'), function (req, res, next) {
//     // req.file is the `profile-file` file
//     // req.body will hold the text fields, if there were any
//     console.log(JSON.stringify(req.file))
//     let response = '<a href="/">Home</a><br>'
//     response += "Files uploaded successfully.<br>"
//     response += `<img src="${req.file.path}" /><br>`
//     return res.send(response)
// })

// app.post('/upload', (req, res) => {
//     // Log the files to the console
//     console.log(req.files);

//     // All good
//     res.status(200).json()
// });
app.use(router)

app.use(errorHandler)

app.listen(port, () => {
    console.log("App on port " + port)
})

module.exports = app