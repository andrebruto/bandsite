const baseUrl = "https://project-1-api.herokuapp.com";
const apiKey = "abc123";

const getComments = () => {
  return axios.get(`${baseUrl}/comments?api_key=${apiKey}`).then((result) => {
    // console.log(result.data);
    return result.data;
  });
};

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

const deletePost = (id) => {
  return axios.delete(`${baseUrl}/comments/${id}?api_key=${apiKey}`);
};
