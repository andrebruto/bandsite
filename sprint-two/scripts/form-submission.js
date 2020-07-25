const form = document.querySelector(".comments__form");

function createNewComment(comment) {
  // const commentAuthor
  // const commentPost
  const commentDate = document.createElement("p");

  const newDate = new Date();
  const setDateFormat = newDate.toDateString();
  document.querySelector(".comments__form-button").innerHTML = setDateFormat;

  commentDate.className = "container__block--card-input";
  commentDate.innerText = commentDate.target.setDateFormat.value;
}
