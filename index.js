// Write your code here!
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

// Displays each post as an <li> containing an <h1> (title) and <p> (body)
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Fetches posts using async/await, then displays them
async function fetchPosts() {
  try {
    const response = await fetch(POSTS_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

fetchPosts();