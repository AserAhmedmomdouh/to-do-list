let inputTask = document.getElementById('inputTask');
let AddButton = document.getElementById('AddButton');
let allTasks = document.getElementById('allTasks');
let noTasks = document.getElementById('noTasks');
let count = document.getElementById('count');

function show() {
    
    if (allTasks.childElementCount > 0) {
        noTasks.classList.add('none');
    } else {
        noTasks.classList.remove('none');
    }

    
    count.innerText = allTasks.childElementCount;
}

let addNewTask = () => {

    let data = inputTask.value;

    let newdata = data.trim();

    if (newdata.length == 0) {
        window.alert('Please Enter Your Task First!');
    } else if (newdata.length <= 3) {
        window.alert('Task Should be greater than 3 character');
    } else if (newdata.length > 50) {
        window.alert('Task Should be Less than 50 character');
    }
    else {
        // add new task
        allTasks.innerHTML += ` <div class=" check"> ${data}
            <button class="btn btn-danger btn-sm float-end delete"><i class="fa-solid fa-trash"></i></button>
        </div> `;

        // remove value from input
        inputTask.value = '';

        // check no tasks
        show();
    }
}
AddButton.addEventListener('click', addNewTask);


// delete task
document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();

        // check no tasks
        show();

    }
} );


// complet task
document.addEventListener('dblclick' , (e)=>{
    if( e.target.classList.contains('check') ){
        e.target.classList.toggle('checked');
       
    }
});

