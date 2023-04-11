function sendPageContentToAPI(content) {
    const apiURL = "https://api.lavrenov.io/fanfiction";
    fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
sendPageContentToAPI(document.documentElement.outerHTML);