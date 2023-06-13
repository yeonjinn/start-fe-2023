//start...
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".new-task");
    var taskList = document.querySelector("ul");
  
    loadTasks();
    
    // 할일 입력
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      var taskInput = form.querySelector("input[name='text']");
      var taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        addTask(taskText); // completed는 불러오기 시에만 인자를 받아 사용
  
        taskInput.value = "";
  
        saveTasks();
      }
    });
    
    //삭제 버튼, 체크버튼에 따라 이벤트 분기
    taskList.addEventListener("click", function (event) {
      var target = event.target;
  
      if (target.className === "delete") {
        var listItem = target.parentNode;
        taskList.removeChild(listItem);
  
        saveTasks();
      } else if (target.className === "toggle-checked") {
        var listItem = target.parentNode;
        listItem.classList.toggle("checked");
  
        saveTasks();
      }
    });
  
    // 투두리스트 불러오기
    function loadTasks() {
      var json = localStorage.getItem("tasks");
  
      if (json) {
        var taskData = JSON.parse(json);
  
        taskData.forEach(function (task) {
          addTask(task.text, task.completed);
        });
      }
    }
    
    // 할일 요소 생성
    function addTask(text, completed = false) {
      var listItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "toggle-checked";
      checkbox.checked = completed;
      var span = document.createElement("span");
      span.className = "text";
      span.textContent = text;
      var deleteButton = document.createElement("button");
      deleteButton.className = "delete";
      deleteButton.textContent = "×";
  
      listItem.appendChild(deleteButton);
      listItem.appendChild(checkbox);
      listItem.appendChild(span);
      taskList.appendChild(listItem);
        
      // completed 분기에 따라 스타일적용여부 판단
      if (completed) {
        listItem.classList.add("checked");
      }
    }
  
    // 투두 리스트 저장
    function saveTasks() {
      var tasks = taskList.querySelectorAll("li");
      var taskData = [];
  
      tasks.forEach(function (task) {
        var taskText = task.querySelector(".text").textContent;
        var isCompleted = task.classList.contains("checked");
  
        taskData.push({ text: taskText, completed: isCompleted });
      });
  
      var json = JSON.stringify(taskData);
      localStorage.setItem("tasks", json);
    }
  });
  