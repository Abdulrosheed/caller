const result = document.getElementById("result");

function callAPI() {
  fetch("https://alazea.onrender.com/")
    .then(response => response.json())
    .then(data => {
        console.log(data);
      result.innerHTML = data.message;
    })
    .catch(error => {
      console.log(error);
      result.innerHTML = "Error fetching data";
    });
}

callAPI(); // Call the API initially on page load

setInterval(callAPI, 300000); 