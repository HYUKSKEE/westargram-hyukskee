const commentInput = document.querySelector("#comment-input");
const commentDiv = document.querySelector(".article-comment");

function a(event) {
  const value = event.currentTarget.value;
  console.log(value);
}

commentInput.addEventListener("click", a);
