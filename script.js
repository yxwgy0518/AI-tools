
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const toolList = document.getElementById("toolList");

  const tools = [
    { name: "ChatGPT", description: "AI-powered chatbot by OpenAI.", link: "https://chat.openai.com/" },
    { name: "DALL·E", description: "Image generation AI by OpenAI.", link: "https://openai.com/dall-e/" },
    { name: "Hugging Face", description: "AI models and datasets hub.", link: "https://huggingface.co/" },
    { name: "Runway ML", description: "AI tools for creatives.", link: "https://runwayml.com/" }
  ];

  const displayTools = (filteredTools) => {
    toolList.innerHTML = "";
    filteredTools.forEach((tool) => {
      const toolCard = document.createElement("div");
      toolCard.className = "tool-card";
      toolCard.innerHTML = `
        <h2>${tool.name}</h2>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank">Visit Tool</a>
      `;
      toolList.appendChild(toolCard);
    });
  };

  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredTools = tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm)
    );
    displayTools(filteredTools);
  });

  displayTools(tools);
});
