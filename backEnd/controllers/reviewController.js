const reviewService = require('../services/reviewService.js');

function getReviewListAPI(req,res){
    res.json(reviewService.getReviewList());
}

function getReviewAPI(req,res){
    const reviewNum = parseInt(req.params.id);
    const review = reviewService.getReview(reviewNum);
    if(review){
        res.json(review);
    } else{
        res.status(404).json({message: 'Review not found'});
    }
}

function createReviewAPI(req,res){
    const newReview = reviewService.createReview(req.body.reviewName,req.body.reviewContent);
    res.json(newReview);
}

module.exports = {
    getReviewListAPI,
    getReviewAPI,
    createReviewAPI
}