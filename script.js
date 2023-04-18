fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
  display(jsondata);
});

const chartContainer = document.querySelector('.chart-container');
const data = JSON.parse(localStorage.getItem("data"));
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


const display = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
}

function showExpenses() {
  if (!data) return;
  chartContainer.innerHTML = '';
  
  data.forEach((obj) => {
    const currentDate = new Date();
    const weekDay = currentDate.getDay();
    //console.log(weekDay);
    let charts = `
        <div class="chart-box">
          <div class="chart">
            <div class="chart-bar" style="background-color: ${days[weekDay-1] == obj.day ? 'var(--cyan)' : 'var(--soft-red)'}; height: ${((obj.amount / 65) * 10.5)}rem"></div>
            <div class='amount-box'>$${obj.amount}</div>
          </div>
          <p>${obj.day}</p>
        </div>`;
        
    chartContainer.insertAdjacentHTML("beforeend", charts);
  });
}

showExpenses();