// adds all the reviews to the page
function populateReview(reviewList){
    let reviewBody = document.getElementById("reviewBody");
    for (review of reviewList){
        console.log(review);
        let builtReview = buildReview(review.reviewName,review.reviewContent)
        builtReview.style.backgroundImage = "url("+getRandomReviewBackground()+")";
        reviewBody.append(builtReview);
    }
}

// builds the review DOM elements
function buildReview(name,content){
    let reviewDiv=document.createElement("div");
    reviewDiv.className="review";
    let review = document.createElement("p");
    review.innerHTML = "<b>"+name+"</b><br>"+content;
    reviewDiv.append(review);
    return reviewDiv;
}

// function: choose a random background image
// this way each time you look at the review page it is new
function getRandomReviewBackground(){
    const baseURLImage="../images/reviews/";
    const reviewImages=[
        "blue.jpg",
        "green.jpg",
        "orange.jpg",
        "pink.jpg",
        "teal.jpg",
        "yellow.jpg"
    ]

    const image = Math.floor(Math.random() * reviewImages.length);
    return baseURLImage+reviewImages[image];
}