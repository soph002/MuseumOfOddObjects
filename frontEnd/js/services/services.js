function buildFetchOptions(method,bodyObject){
    let fetchOptions = {};
    fetchOptions.method = method.toLowerCase();
    if (fetchOptions.method == 'post' || fetchOptions.method == 'put'){
        fetchOptions.body = JSON.stringify(bodyObject);
        fetchOptions.headers = {"Content-Type":"application/json"};
    }
    return fetchOptions;
}

async function makeAPICall(url,method,idParam,bodyObject){
    let fetchOptions = buildFetchOptions(method,bodyObject);
    if (idParam && idParam != null){
        url += "/"+idParam;
    }
    let apiResponse = await fetch(url,fetchOptions);
    if(apiResponse.status !=200) return undefinedl
    let apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
}

async function getReviewList(){
    let reviewList = await makeAPICall(getReviewsURL, "get");
    return courseList;
}

async function loadReviews(){
    let reviewList = await getReviewList();
    populateReview(reviewList);
}

async function getReview(num){
    let review = await makeAPICall(getReviewURL,"get",num);
    return review;
}

async function addReview(reviewNum,reviewName,reviewContent){
    let newReview = new Review(reviewNum,reviewName,reviewContent);
    let reviewResponse = await makeAPICall(createReviewURL,"post",undefined,newReview);
    if(reviewResponse){
        loadReviews();
    }
}