document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll(".article");
  const articleNav = document.querySelector(".article-nav");
  const middleSection = document.querySelector(".middle");

  // Clear existing radios just in case
  articleNav.innerHTML = "";

  // Dynamically create radios based on article count
  articles.forEach((_, i) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'articleSelect';
    input.dataset.index = i;
    if (i === 0) input.checked = true;
    articleNav.appendChild(input);
  });

  const radios = articleNav.querySelectorAll('input[name="articleSelect"]');

  function showArticle(index) {
    articles.forEach((article, i) => {
      article.style.display = i === index ? "block" : "none";
      if (radios[i]) radios[i].checked = (i === index);
    });
  }

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      const index = Number(radio.dataset.index);
      showArticle(index);
      middleSection.scrollIntoView({ behavior: "smooth" });
      if (articles[index].id) {
        window.history.replaceState(null, null, `#${articles[index].id}`);
      }
    });
  });

  // On page load: show article based on hash or default to 0
  const initialHash = window.location.hash.substring(1);
  const initialIndex = Array.from(articles).findIndex(article => article.id === initialHash);
  if (initialIndex !== -1) {
    showArticle(initialIndex);
    middleSection.scrollIntoView({ behavior: "smooth" });
  } else {
    showArticle(0);
  }

  // Listen to hash changes while on the same page
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.substring(1);
    const newIndex = Array.from(articles).findIndex(article => article.id === newHash);
    if (newIndex !== -1) {
      showArticle(newIndex);
      middleSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
