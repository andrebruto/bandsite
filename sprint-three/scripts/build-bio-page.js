const commentsSection = document.getElementById("comments");
const commentsBlock = document.getElementById("comments-output");
const commentForm = document.getElementById("commentForm");

const loadComments = () => {
  getComments()
    .then((result) => {
      // console.log(result);
      // sorts through comments dates
      const sortedArry = result.sort((a, b) => b.timestamp - a.timestamp);

      for (let i = 0; i < sortedArry.length; i++) {
        // calls the function with the loops to pass each object of the array
        const commentBlock = createCommentBlock(result[i]);
        commentsBlock.appendChild(commentBlock);
      }

      return;
    })
    .catch((error) => console.log(error));
};

const deleteComment = (event) => {
  console.log(event.target.value);
  const targetCommentId = event.target.value;
  deletePost(targetCommentId).then(() => {
    const child = document.getElementById(targetCommentId);
    commentsBlock.removeChild(child);
  });
};

const createCommentBlock = (comment) => {
  // creates the div that will store each full comment structure
  const commentsComment = document.createElement("div");
  commentsComment.classList.add("comments__comment");
  commentsComment.setAttribute("id", comment.id);

  // creates the image of the author of the comment
  const commentPhoto = document.createElement("img");
  commentPhoto.classList.add("comments__comment-photo");
  commentsComment.appendChild(commentPhoto);

  // creates a div to store the full comment structure but the image
  const commentFilledForm = document.createElement("div");
  commentFilledForm.classList.add("comments__comment-filledForm");
  commentsComment.appendChild(commentFilledForm);

  // creates a div to store both the comment author and the comment date
  const commentsCommentTitle = document.createElement("div");

  commentsCommentTitle.classList.add("comments__comment-title");
  commentFilledForm.appendChild(commentsCommentTitle);

  // adds the author of the comment
  const commentsCommentAuthor = document.createElement("h4");
  commentsCommentAuthor.classList.add("comments__comment-author");
  commentsCommentAuthor.innerText = comment.name;
  commentsCommentTitle.appendChild(commentsCommentAuthor);

  // adds the date of the comment
  const commentsCommentDate = document.createElement("h5");
  commentsCommentDate.classList.add("comments__comment-date");
  const unixToDate = new Date(comment.timestamp);
  commentsCommentDate.innerText = unixToDate.toLocaleDateString("en-US");
  commentsCommentTitle.appendChild(commentsCommentDate);

  //adds the text of the comment
  const commentsCommentText = document.createElement("p");
  commentsCommentText.classList.add("comments__comment-text");
  commentsCommentText.innerText = comment.comment;
  commentFilledForm.appendChild(commentsCommentText);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.value = comment.id;
  deleteButton.addEventListener("click", deleteComment);
  commentsCommentTitle.appendChild(deleteButton);

  return commentsComment;
};

const submitForm = (event) => {
  event.preventDefault();

  const commentAuthor = event.target.commentAuthor.value;
  const commentText = event.target.commentText.value;

  if (commentAuthor.trim(" ") === "" && commentText.trim(" ") === "") {
    alert("Name and Comment must be filled");
    return;
  }

  createComment({
    name: commentAuthor,
    comment: commentText,
  })
    .then((result) => {
      // console.log(result);
      console.log("form was submitted");
      const commentBlock = createCommentBlock(result.data);
      commentsBlock.prepend(commentBlock);
    })
    .catch((error) => {
      console.log(error);
    });

  event.target.reset();
};

commentForm.addEventListener("submit", submitForm);

loadComments();
