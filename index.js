let fetchedData = [];

async function fetchData() {
  const res = await fetch('data.json');
  const data = await res.json();

  fetchedData = data;

  renderHours("daily");
}

let periodButtons = document.querySelectorAll('.period-btn')

periodButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    periodButtons.forEach(b => b.classList.remove('active'));

    btn.classList.add('active');

    const period = btn.dataset.period;
    renderHours(period)
  })
})

function renderHours(period) {

  let hours = document.querySelectorAll('.hours');
  let previous = document.querySelectorAll('.previous');

  hours.forEach((cnt, i) => {
    cnt.textContent = `${fetchedData[i].timeframes[period].current}hrs`
  })

  previous.forEach((cnt, i) => {
    let label = 
      period === "daily"
      ? "Yesterday"
      : period === "weekly"
      ? "Last Week"
      : "Last Month";

    cnt.textContent = `${label} - ${fetchedData[i].timeframes[period].current}hrs`
  })

}


fetchData();




