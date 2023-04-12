
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form') 
  form.addEventListener('submit', (e) =>{
  e.preventDefault();
  let p = document.createElement('p');
  let description = e.target['new-task-description'].value
  const select = document.getElementById("select")
  if ( description === ""){
   p.textContent = ("- " + select.value + " ");
    } else {
  p.textContent = ("- " + description + " ");
  }
  document.querySelector('#tasks').appendChild(p)
  form.reset()
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteTask);
  btn.textContent = 'X'
  p.appendChild(btn)
  });

function deleteTask(e){
  e.target.parentNode.remove();
  }

});
