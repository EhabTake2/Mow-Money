const jobs = [
  { id: 1, address: "12 Kowhai St", lawnSizeM2: 350, lastMowedDaysAgo: 5, status: "complete" },
  { id: 2, address: "45 Rimu Rd", lawnSizeM2: 500, lastMowedDaysAgo: 18, status: "pending" },
  { id: 3, address: "78 Totara Ave", lawnSizeM2: 200, lastMowedDaysAgo: 10, status: "pending" },
  { id: 4, address: "3 Pohutukawa Dr", lawnSizeM2: 650, lastMowedDaysAgo: 30, status: "pending" }
];

const RATE_PER_M2 = 0.80;


const jobList = document.getElementById('job-list');

function render(data) {
  const listOfJobs = data.map(job => `<li>Address: ${job.address}<br>Size: ${job.lawnSizeM2}<br>Days since ${job.lastMowedDaysAgo}<br>Status: ${job.status}
    <br>
    </li>`).join('');
  jobList.innerHTML = listOfJobs;
}


function renderPricing(data) {
  const listOfJobs = data.map(job => `
    <li>${job.address}<br>$${job.totalPrice}

    </li>`).join('');
  jobList.innerHTML = listOfJobs;
}


// reset
render(jobs);

function handleShowPending() {
  const handleShowPending = jobs.filter(job => job.status === "pending")
  console.log(handleShowPending)
  render(handleShowPending);

}

function addPricing() {
  const calculatedPrice = jobs.map(jobs => {
    return {
      id: jobs.id,
      address: jobs.address,
      totalPrice: jobs.lawnSizeM2 * 0.80
    }
  })


  renderPricing(calculatedPrice)
  console.log(calculatedPrice)

}




function handleShowAlerts() {
  const overdueAlerts = jobs.filter((job) => job.status === "pending" && job.lastMowedDaysAgo > 14)
  render(overdueAlerts)
}


function handleShowExpensiveJobs() {
  const expensiveJobs = jobs.filter(pricy => pricy.lawnSizeM2 * 0.80 > 300)


  render(expensiveJobs)
  console.log(expensiveJobs)
}



function handleSearch() {
  //take search bar input
  const searchWord = document.getElementById("search-input").value

  //use search input as filter
  search = jobs.filter(lookUp => lookUp.address
    .toLowerCase()
    .includes(searchWord
      .toLowerCase()))
  console.log(search)

  //filter jobs array
  //render filter]
  render(search)
}
