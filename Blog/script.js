document.addEventListener("DOMContentLoaded", function () {
  // === CHAT BOX FUNCTIONALITY ===
  const chatMessages = document.getElementById("chatMessages");
  const messageInput = document.getElementById("messageInput");
  const sendMessageBtn = document.getElementById("sendMessage");

  if (sendMessageBtn && messageInput && chatMessages) {
    sendMessageBtn.addEventListener("click", function () {
      const message = messageInput.value;
      if (message.trim() !== "") {
        appendMessage("You", message);
        messageInput.value = "";
      }
    });

    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  // === BLOG SEARCH FUNCTIONALITY ===
  const searchInput = document.querySelector('header nav .search input');
  const blogCards = document.querySelectorAll('.blog-card');

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      const query = e.target.value.toLowerCase();

      let visibleCount = 0;

      blogCards.forEach(card => {
        const title = card.querySelector('h2').innerText.toLowerCase();
        const description = card.querySelector('p').innerText.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
          card.style.display = 'flex'; // or 'block' if you're not using flex
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const noResults = document.getElementById("noResultsMessage");
      if (noResults) {
        noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
      }
    });
  }
});
