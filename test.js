fetch("http://127.0.0.1:8080/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.review_status);
      const ReviewElements = document.querySelectorAll("._27M-vq"); // it is all review section/page

      // here we are scripting the review page with 2 diffrent colour ( 1-green / 0-red )
      let counter = 0; // index for the response array
      ReviewElements.forEach((select) => {
        if (data.review_status[counter] == 1) {
          color = "#afffaf";
        } else {
          color = "#ff9e9e";
        }
        select.style.backgroundColor = color;

        counter++;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
