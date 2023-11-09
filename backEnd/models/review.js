class Review{
    reviewId = null;
    reviewName = null;
    reviewContent = null;

    constructor (id,name,content){
        this.reviewId = id;
        this.reviewName = name;
        this.reviewContent = content;
    }
}

module.exports = Review;