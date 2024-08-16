import axios from "axios";
import apiUrl from "./apiUrl";

let api = new apiUrl();

class DeleteHandler {
  deleteProduct = async (id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.deleteProduct) + id,
        method: "delete",
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

  deleteCategory = async (id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.deleteCategory) + id,
        method: "delete",
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

  deleteQustions = async (id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.deleteQuestion) + id,
        method: "delete",
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

  deleteChoices = async (id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.deleteChoice) + id,
        method: "delete",
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

  

  deleteUser = async (id) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.deleteUser) + id,
        method: "delete",
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

  resetReview = async (qid) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.resetAnswers) + qid,
        method: "delete",
        headers: api.headers
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

  resetRating = async (fid) => {
    var result;
    try {
      await axios({
        url: api.joinUrl(api.endPoints.deleteRating) + fid,
        method: "delete",
        headers: api.headers
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
}

export default DeleteHandler;
