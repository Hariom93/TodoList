let todolist = [];  
  display()

  function addTodo(){
    let inputelement = document.querySelector('#todoinput');
    let inputdate = document.querySelector('#tododate');
    let todoitem = inputelement.value;
    let tododate = inputdate.value;
    todolist.push({item: todoitem , date: tododate});
    inputelement.value = ' ';
    inputdate.value =' ';
    display();
  }
  function display(){
    let containerElement = document.querySelector('.todocontainer');
    let newHtml  = '';
    for(let i = 0 ; i < todolist.length ; i++)
    
    {
      let item = todolist[i].item;
      let date = todolist[i].date;
       newHtml += ` 
       <span>${item}</span>
       <span>${date}</span>
       <button onclick="todolist.splice(${i},1); display()" class="btn">Delete</button>
       `;
    }
    containerElement.innerHTML = newHtml;
  }