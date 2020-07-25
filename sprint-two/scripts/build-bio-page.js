const commentsSection = document.getElementById("comments");

const comments = [
  {
    author: "Micheal Lyons",
    date: new Date("12/18/2018"),
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    author: "Gary Wong",
    date: new Date("12/18/2018"),
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    author: "Theodore Duncan",
    date: new Date("11/15/2018"),
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

function loopThroughComments(commentsArr) {
  for (let i = 0; i < commentsArr.length; i++) {
    // loops into the comments array
    createCommentElement(commentsArr[i]); // calls the function with the loops to pass each object of the array
  }
}

function createCommentElement(comment) {
  // creates the div that will store each full comment structure
  const commentsComment = document.createElement("div");
  commentsComment.classList.add("comments__comment");
  const commentsBlock = document.getElementById("comments-output");
  commentsBlock.appendChild(commentsComment);

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
  commentsCommentAuthor.innerText = comment.author;
  commentsCommentTitle.appendChild(commentsCommentAuthor);

  // adds the date of the comment
  const commentsCommentDate = document.createElement("h5");
  commentsCommentDate.classList.add("comments__comment-date");
  commentsCommentDate.innerText = comment.date.toDateString();
  commentsCommentTitle.appendChild(commentsCommentDate);

  //adds the text of the comment
  const commentsCommentText = document.createElement("p");
  commentsCommentText.classList.add("comments__comment-text");
  commentsCommentText.innerText = comment.comment;
  commentFilledForm.appendChild(commentsCommentText);
}

loopThroughComments(comments);

const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  //   console.log("form was submitted");

  var commentAuthor = event.target.commentAuthor.value;
  var commentText = event.target.commentText.value;
  var commentDate = new Date();

  if (commentAuthor !== "" && commentText !== "") {
    comments.push({
      author: commentAuthor,
      comment: commentText,
      date: commentDate,
    });
    // console.log(comments);
    // commentsSection.innerHTML = "";
    const commentsBlock = document.getElementById("comments-output");
    commentsBlock.innerHTML = "";
    loopThroughComments(comments);
    event.target.reset();
  }
}
