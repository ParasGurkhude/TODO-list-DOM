let  myForm = document.querySelector('form');
let inp1 = document.getElementById('task');
let inp2 = document.getElementById('priority');
let tbody = document.querySelector('tbody');

let ALLTask = []

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let Data = {};
    Data.task = inp1.value;
    Data.priority = inp2.value;
    
    ALLTask.push(Data)
    console.log(ALLTask)
    tbody.innerHTML = null;


    
    ALLTask.map((ele) => 
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement("td");
       
        td1.innerText = ele.task;
        td2.innerText = ele.priority;

        if (ele.priority === "High") {
            td2.style.backgroundColor = "red"; // Change to your desired color
        } else if (ele.priority === "Low") {
            td2.style.backgroundColor = "green"; // Change to your desired color
        }

        row.append(td1, td2, td3);
        tbody.append(row);
        
    })
    
})
