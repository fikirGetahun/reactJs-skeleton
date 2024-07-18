class apiUrl {
   headers = {
    "Content-Type": "application/json",
    "X-AuthToken": localStorage.getItem("token"),
  };
  constructor() {
    // this.baseUrl = "https://akko-menu-server.vercel.app";
    this.baseUrl = "http://localhost/qrMenuServer/public";
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
