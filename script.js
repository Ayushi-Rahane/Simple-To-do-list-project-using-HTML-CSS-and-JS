var addTask = document.getElementById("add_task");
        var addBtn = document.getElementById("add_btn");
        var completeItemDiv = document.getElementById("completeItemDiv");
        var taskList = document.getElementById('task-list');
        var completeList = document.getElementById('complete-list');
  function add_task_btn(){
    addTask.style.visibility='visible';
    addBtn.style.visibility='visible';
  }
  
  function add_task(){
    if(addTask.value.length !=0){
        var ckcbox = document.createElement('input');
        var label = document.createElement('label')
        label.style.color="#FDF0F0";
        label.style.fontSize='23px';
        var taskItem = document.createElement('li');
        taskItem.style.listStyleType = 'none'; 
        label.innerHTML = addTask.value;

        
     
        taskItem.appendChild(ckcbox).type = 'checkbox';
        taskItem.appendChild(label);
         taskList.appendChild(taskItem);

        ckcbox.addEventListener('change', function () {
                if (this.checked) {
                    completeItemDiv.style.visibility='visible';
                    var completeItem  = document.createElement('li');
                    var span = document.createElement('span');
                     span.className='complete-text-item-label';
                    completeItem.style.listStyleType='none';
                    completeItem.appendChild(span);
                    completeList.appendChild(completeItem);
                    span.textContent = " ✓ "+label.innerHTML;
                    label.remove();
                    ckcbox.remove();
                    taskItem.remove();
                }
            });
        addTask.value="";
        addTask.style.visibility='hidden';
        addBtn.style.visibility='hidden';
        
    }
  }
