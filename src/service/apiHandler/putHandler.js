import axios from "axios";
import apiUrl from "./apiUrl";
const api = new apiUrl();

class PutHandler {
  headers = {
    "Content-Type": "application/json",
    "X-AuthToken":localStorage.getItem("token"),    
  };

  updateCategory = async (body, id) => {
    var result;
    let headers = {
       "X-AuthToken":localStorage.getItem("token"),    
    };
    try {
      await axios({
        url: api.joinUrl(api.endPoints.updateCategory) + id,
        method: "patch",
        data: body,
        headers: headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };

  updateProduct = async (body, fid, pid) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.updateFood) + fid + "/" + pid,
        method: "patch",
        data: body,
        headers: api.headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };

  updateUserData = async (body) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.userUpdate),
        method: "patch",
        data: body,
        headers: this.headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        // this is the ultimate error response handler
        // i was straglling with this for a long time
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };

  updateCategoryOrder = async (body, id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.getCategoryInOrderfor) + id,
        method: "patch",
        data: body,
        headers: api.headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        // this is the ultimate error response handler
        // i was straglling with this for a long time
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };

  updateProductOrder = async (body, id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.updateProductOrder) + id,
        method: "patch",
        data: body,
        headers: api.headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        // this is the ultimate error response handler
        // i was straglling with this for a long time
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };

  updateQuestion = async (body, id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.updateFeedBackQuestions) + id,
        method: "patch",
        data: body,
        headers: this.headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        // this is the ultimate error response handler
        // i was straglling with this for a long time
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };

  updateQuestionChoice = async (body, id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.updateQuestionsChoose) + "choice/" + id,
        method: "patch",
        data: body,
        headers: this.headers,
      }).then((res) => {
        result = res;
      });
    } catch (err) {
      if (err.response) {
        // this is the ultimate error response handler
        // i was straglling with this for a long time
        return err.response.data;
      } else if (err.request) {
        return err.request;
      } else {
        return err.message();
      }
    }
    return result;
  };
}

export default PutHandler;
