const functions = require("firebase-functions");
const express = require("express")
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/test', (req, res) => {
    res.send('it works')
})

exports.app = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
