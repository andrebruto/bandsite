const baseUrl = "https://project-1-api.herokuapp.com";
const apiKey = "abc123";

// -------- GET COMMENTS --------
const getComments = () => {
  return axios.get(`${baseUrl}/comments?api_key=${apiKey}`).then((result) => {
    // console.log(result.data);
    return result.data;
  });
};

// -------- CREATE COMMENTS  --------
const createComment = (body) => {
  return axios({
    method: "post",
    url: `${baseUrl}/comments?api_key=${apiKey}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  });
};

// -------- DELETE COMMENTS --------
const deletePost = (id) => {
  return axios.delete(`${baseUrl}/comments/${id}?api_key=${apiKey}`);
};

// -------- GET SHOWS --------
const getShows = () => {
  return axios.get(`${baseUrl}/showdates?api_key=${apiKey}`).then((result) => {
    // console.log(result.data);
    return result.data;
  });
};

getShows();
