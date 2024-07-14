class apiUrl {
  constructor() {
    // this.baseUrl = "https://akko-menu-server.vercel.app";
    this.baseUrl = "http://localhost/qrMenuServer/public";
    this.headers = {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    };
    this.endPoints = {
      food: "test",
      catagory: "cat",
      login: "user/login",
      register: "User",
      getCategory: "category/getCategory",
      addCategory: "category",
      getOneCatagory: "category/getOneCatagory",
      updateCategory: "category/updateCategory",
      deleteCategory: "category/deleteCategory",
      // listActiveCategory: "api/category/active",
      // makeCategoryActive: "api/category/makeActive",
      getOneProduct: "Products/getProductByCategoryIdOnly/",
      addFood: "products",
      updateFood: "products/updateProduct",
      deleteProduct: "products/deleteProduct",
      // getPrice: "api/price",
      // product: "api/food/product",
      getOneUser: "user/getOneUser/",
      getAllUsers: "user/ListAllUser",
      // getSearch: "api/food/search",
      getCategoryInOrder: "category/getCategory",
      // getProductInOrder: "api/food/order",
      deleteQuestion: "FeedBackQuestions/deleteQuestion",
      getFeedBackQuestion: "FeedBackQuestions/getFeedBackQuestion",
      addFeedbackQuestion: "FeedBackQuestions",
      updateFeedBackQuestions: "FeedBackQuestions/updateFeedBackQuestions",
      updateQuestionsChoose: "FeedBackQuestions/updateQuestionsChoose",
      getOneQuestionChoose: "QuestionChoose/getOneQuestionChoose",
      getQuestionChoose: "QuestionChoose/getQuestionChoose",
      addChooseQuestion: "QuestionChoose",
      addRating: "rating",
      getRattingAvg: "rating/getRattingAvg",
      // addAnswer: "api/feedback/answer",
      // getsingleQ: "api/feedback/singleQ",
      // limitRating: "api/feedback/ratingLimit",
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
