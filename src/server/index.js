// Configure the environment variables

require('dotenv').config()
const mockAPIResponse = require('./mockAPI.js')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const PORT = 8081

// Add Configuration to be able to use env variables
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = process.env.API_KEY

// Create an instance for the server
const app = express()

// Configure cors to avoid cors-origin issue
app.use(cors())

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
// a route that handling post request for new URL that coming from the frontend
//    1. GET the url from the request body
//    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
//    3. Fetch Data from API
//    4. Send it to the client
app.post('/add-url', async(request, respond) => {
    const { articleURL} = request.body
    const meaningcloud = `${apiUrl}?key=${apiKey}&url=${articleURL}&lang=en`
    try
    {
        const
        {
            data : 
            {
                sentence_list,
                score_tag,
                agreement,
                subjectivity,
                confidence,
                irony
            },
        } = await axios(meaningcloud)
            respond.send({
                text: sentence_list[0].text || '',
                score_tag: score_tag,
                agreement: agreement,
                subjectivity: subjectivity,
                confidence: confidence,
                irony: irony
            })
        }
        catch(error)
        {
            console.log(error.message)
        }
    }
)

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
module.exports = {app}