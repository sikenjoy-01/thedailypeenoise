// dynamicArticles.js

// Set this to your GitHub repo name or "" if your site is deployed at root domain
const basePath = "/thedailypeenoise"; // e.g. "/philippine-history-blog" or "" if root

// List of all articles site-wide: title, description, URL (no leading slash)
const allArticles = [
  {
    title: "The Arrival of the Spaniards",
    description: "A firsthand account of the first Spanish contact in Butuan, 1521.",
    url: "pages/spanish.html#arrival-of-spaniards"
  },
  {
    title: "The Galleon Trade",
    description: "How Manila became a global trade hub through the Manila-Acapulco galleon.",
    url: "pages/spanish.html#galleon-trade"
  },
  {
    title: "The Propaganda Movement",
    description: "Filipino expatriates in Madrid advocate for reform and equality.",
    url: "pages/spanish.html#propaganda-movement"
  },
  {
    title: "The Philippine Revolution",
    description: "The defiant act that ignited the war for independence in 1896.",
    url: "pages/spanish.html#philippine-revolution"
  },
  {
    title: "Education and Government Reforms",
    description: "The American period's push for public education and political change.",
    url: "pages/american.html#education-government-reforms"
  },
  {
    title: "Philippine-American War",
    description: "The struggle against American colonization and quest for sovereignty.",
    url: "pages/american.html#philippine-american-war"
  },
  {
    title: "Nationalism and Independence Movement",
    description: "The rise of Filipino nationalism under American rule.",
    url: "pages/american.html#nationalism-independence"
  },
  {
    title: "Life Under Japanese Rule",
    description: "Surviving the hardships and oppression of Japanese occupation.",
    url: "pages/japanese.html#life-under-japanese-rule"
  },
  {
    title: "Guerrilla Movements",
    description: "Filipino resistance fighters wage war in the shadows.",
    url: "pages/japanese.html#guerrilla-movements"
  },
  {
    title: "Liberation of the Philippines",
    description: "The Allied campaign that freed the islands from Japanese control.",
    url: "pages/japanese.html#liberation"
  },
  {
    title: "Road to Philippine Independence",
    description: "The political journey from colonial rule to self-governance.",
    url: "pages/independence.html#road-to-independence"
  },
  {
    title: "Commonwealth Period",
    description: "Preparing the nation for freedom amidst looming war.",
    url: "pages/independence.html#commonwealth-period"
  },
  {
    title: "Post WWII Recovery",
    description: "Rebuilding a nation after the devastation of war.",
    url: "pages/independence.html#post-wwii-recovery"
  },
  // Add more articles as needed
];

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Safe function to join basePath and article URL without double slashes
function joinPaths(base, path) {
  if (!base.endsWith('/')) base += '/';
  if (path.startsWith('/')) path = path.substring(1);
  return base + path;
}

// Main function to populate dynamic articles
function loadDynamicArticles(containerId = 'articles-list', numberToShow = 5) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';

  const shuffledArticles = shuffleArray([...allArticles]).slice(0, numberToShow);

  shuffledArticles.forEach((article, idx) => {
    const li = document.createElement('li');
    li.classList.add('dynamic-article-item');

    // Build the full URL with basePath prefix
    const fullUrl = joinPaths(basePath, article.url);

    console.log("Generated URL:", fullUrl); // Debug log to verify URLs

    li.innerHTML = `
      <strong><a href="${fullUrl}">${article.title}</a></strong><br>
      <span class="dynamic-article-description">${article.description}</span>
    `;
    container.appendChild(li);

    // Add <hr> except after last item
    if (idx !== shuffledArticles.length - 1) {
      container.appendChild(document.createElement('hr'));
    }
  });
}

// Run on DOMContentLoaded to ensure container exists
document.addEventListener('DOMContentLoaded', () => {
  loadDynamicArticles();
});
