const ReviewService = require('./services/reviewService.js');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const reviewController = require('./controllers/reviewController.js');

const app = express();
const port = 9011;

app.use(bodyParser.json());
app.use(cors());

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
});

app.get("/reviews",reviewController.getReviewListAPI);
app.get("/review/:id",reviewController.getReviewAPI);
app.post("/review",reviewController.createReviewAPI);