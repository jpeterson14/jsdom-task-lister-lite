document.addEventListener("DOMContentLoaded", () => {
  handleForm()
});
const handleForm = () => {
const taskForm = document.querySelector('#create-task-form')
taskForm.addEventListener('submit',(event) => {
  event.preventDefault()
  const taskInput = event.target.querySelector('#new-task-description')
    const taskLi = document.createElement('li')
    taskLi.innerText = taskInput.value
    const tasksParrent = document.querySelector('#list')
    tasksParrent.appendChild(taskLi)
    event.target.reset()
})
}
