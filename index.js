const result = document.getElementById("result");

async function callAPI() {
  try {
    const response = await fetch("https://glimpaxe-momento.onrender.com");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      result.innerHTML = data.message ?? JSON.stringify(data);
    } else {
      const text = await response.text();
      result.innerHTML = text;
    }
  } catch (error) {
    console.error(error);
    result.innerHTML = "Error fetching data";
  }
}

// Initial call on page load
callAPI();

// Call every 30 seconds
setInterval(callAPI, 30000);
