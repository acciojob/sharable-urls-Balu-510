// your code here
// Get DOM elements
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlHeading = document.getElementById("url");

button.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent page reload on form submit

  const nameVal = nameInput.value.trim();
  const yearVal = yearInput.value.trim();

  let baseUrl = "https://localhost:8080/";
  const queryParams = [];

  if (nameVal) {
    queryParams.push(`name=${encodeURIComponent(nameVal)}`);
  }

  if (yearVal) {
    queryParams.push(`year=${encodeURIComponent(yearVal)}`);
  }

  if (queryParams.length > 0) {
    baseUrl += "?" + queryParams.join("&");
  }

  urlHeading.textContent = baseUrl;
});