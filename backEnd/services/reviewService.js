const Review = require('../models/review');
const reviewFileAccess = require('../daos/reviewFileAccess.js');

let reviewList=[];


function getReviewList(){
    if(reviewList.length == 0){
        reviewList = reviewFileAccess.readReviews();
    }
    return reviewList;
}

function createReview(name,content){
    let newId = reviewList.length+1;
    let newReview = new Review(newId,name,content);
    reviewList.push(newReview);
    reviewFileAccess.writeReviews(reviewList);
    return newReview;
}

function getReview(num){
    for(review of reviewList){
        if(review.reviewId == num){
            return review;
        }
    }
    return undefined;
}

module.exports = {
   reviewList,
   createReview,
   getReview
}