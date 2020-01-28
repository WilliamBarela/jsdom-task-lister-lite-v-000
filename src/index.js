document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitter = document.querySelectorAll("input")[1];
  
  submitter.addEventListener('click', (e) => {
      e.preventDefault();
  })
});
