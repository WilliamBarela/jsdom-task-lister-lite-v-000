document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitter = document.querySelectorAll("input")[1];
  let todos = document.createElement('ul');
  
  submitter.addEventListener('click', (e) => {
      e.preventDefault();
  })
  
  submitter.onclick = function(){
    
  }
});
