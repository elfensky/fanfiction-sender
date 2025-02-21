function extractStoryText() {
    const storyTextElement = document.getElementById("storytext");
    const paragraphs = Array.from(storyTextElement.getElementsByTagName("p"));
    return paragraphs.map((paragraph) => paragraph.textContent);
  }
  
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

  console.log("fanfiction sender is running");
  
  const storyText = extractStoryText();
  console.log(storyText);
  sendPageContentToAPI(storyText);