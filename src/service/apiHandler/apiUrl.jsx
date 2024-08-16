class apiUrl {
   headers = {
    "Content-Type": "application/json",
    "X-AuthToken": localStorage.getItem("token"),
  };
  constructor() {
    // this.baseUrl = "https://akko-menu-server.vercel.app";
    // this.baseUrl = "http://localhost/qrMenuServer/public";  
    this.baseUrl = "https://qrmenu.livebetes.net/qrMenuServer/public";
    var headers = {
      "Content-Type": "application/json",
      "X-AuthToken": localStorage.getItem("token"),
    };
    this.endPoints = {
      food: "test",
      catagory: "cat",
      login: "user/login",
      register: "User",
      userUpdate: "user/userUpdate",
      deleteUser:"User/deleteUser/",
      getCategory: "category/getCategory",
      addCategory: "category",
      getOneCatagory: "category/getOneCatagory/",
      updateCategory: "category/updateCategory/",
      deleteCategory: "category/deleteCategory/",
      // listActiveCategory: "api/category/active",
      // makeCategoryActive: "api/category/makeActive",
      getProductCount: "Products/getProductCount",
      getOneProduct: "Products/getProductByCategoryIdOnly/",
      addFood: "products",
  productsSingle: "products/getProductByIdWithPrice/",
      updateFood: "products/updateProduct/",
      updateProductOrder : "products/updateProductOrder/",
      deleteProduct: "products/deleteProduct/",
      // getPrice: "api/price",
      // product: "api/food/product",
      getOneUser: "user/getOneUser/",
      getAllUsers: "user/ListAllUser",
      // getSearch: "api/food/search",
      getCategoryInOrder: "category/getCategory",
      getCategoryInOrderfor: "category/updateCategoryOrder/",
      getProductInOrder: "api/food/order",
      deleteChoice: "QuestionChoose/deleteChoice/",
      deleteQuestion: "FeedBackQuestions/deleteQuestion/",
      getFeedBackQuestion: "FeedBackQuestions/getFeedBackQuestion",
      addFeedbackQuestion: "FeedBackQuestions",
      updateFeedBackQuestions: "FeedBackQuestions/updateFeedBackQuestions/",
      updateQuestionsChoose: "QuestionChoose/updateQuestionsChoose/",
      getOneQuestionChoose: "QuestionChoose/getOneQuestionChoose/",
      getQuestionChoose: "QuestionChoose/getQuestionChoose",
      addChooseQuestion: "QuestionChoose",
      addRating: "rating",
      getRattingAvg: "rating/getRattingAvg/",
      getOneFeedBackQuestion: "FeedBackQuestions/getOneFeedBackQuestion/",
      getAnswerWithChiceByProduct: "answer/getAnswerWithChiceByProduct/",
      // getsingleQ: "api/feedback/singleQ",
      getRattingCount: "rating/getRattingCount",
      limitRating: "rating/getratingLimit/",
      getRattingCompareGte: 'rating/getRattingCompareGte/',
      getRattingCompareLes: 'rating/getRattingCompareLes/',
      // ratingAvg: "api/feedback/rattingAvg",
      // ratingAvgDate: "api/feedback/ratingLimitDate",
      // deleteQuestion: "api/feedback/choice",
      // ratingGte: "api/feedback/ratingCompareGte",
      // ratingLs: "api/feedback/ratingCompareLs",
      // questionWithChoice: "api/feedback/questionWithChoice",
      catWithProduct: "products/getProductByCategoryWithPrice/",
      // foodCount: "api/food/count/count",
      ratingcount: "rating/getRattingCount",
      // resetAnswers: "api/feedback/delReview",
      resetRating: "rating/deleteRating",
    };
  }

  joinUrl(endPoint) {
    return `${this.baseUrl}/${endPoint}`;
  }
}

export default apiUrl;
