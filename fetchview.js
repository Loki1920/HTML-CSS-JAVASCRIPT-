document.getElementById("btn").addEventListener('click',fetchData());

function fetchData(){
      fetch('https://dummy.restapiexample.com/api/v1/employees',{method:'GET'}).then(response=>response.json())
      .then(data=>{GenTable(data.data);}).catch(error => {console.error("Error message",error);});
}

function GenTable(data) {
    const tableBody = document.querySelector('#gentable tbody');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const r = document.createElement('tr');
        const ids = document.createElement('td');
        ids.textContent = item.id;
        const names = document.createElement('td');
        names.textContent = item.employee_name;
        const salary = document.createElement('td');
        salary.textContent = item.employee_salary;
        const age = document.createElement('td');
        age.textContent = item.employee_age;

        r.appendChild(ids);
        r.appendChild(names);
        r.appendChild(salary);
        r.appendChild(age);
        tableBody.appendChild(r);
    });
}