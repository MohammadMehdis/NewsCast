"use strict";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a44a1ec248a447e2b115f433ffb4f5de`;
let currentIndex = 0;

async function fetchNews() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("I Cant Not Match", error);
    return [];
  }
}

function createNewsSlide(article) {
  const li = document.createElement("li");
  li.className = "slide-item";

  const a = document.createElement("a");
  a.href = article.url;
  a.target = "_blank";

  a.innerHTML = `
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="red" />
        </svg>
        ${article.title}
    `;

  li.appendChild(a);
  return li;
}

async function displayNews() {
  const newsSlides = document.getElementById("news-slides");
  const articles = await fetchNews();

  if (articles.length === 0) {
    newsSlides.innerHTML = '<li class="slide-item">There is no news<li>';
    return;
  }

  articles.forEach((article) => {
    const slide = createNewsSlide(article);
    newsSlides.appendChild(slide);
  });

  const clones = newsSlides.innerHTML;
  newsSlides.innerHTML += clones;

  setInterval(() => {
    currentIndex++;
    if (currentIndex >= articles.length) {
      newsSlides.style.transition = "none";
      currentIndex = 0;
      newsSlides.style.transform = `translateX(0)`;
      newsSlides.offsetHeight;
      newsSlides.style.transition = "transform 0.5s ease";
    } else {
      newsSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, 4000);
}

displayNews();
