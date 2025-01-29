document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("worker-list");
  const setUpButton = document.getElementById("set-up-btn");
  const demoButton = document.getElementById("demo-button");
  const closeButton = document.getElementById("close-modal");
  const demoModal = document.getElementById("demo-modal");
  const demoWorkerBtn = document.getElementById("demo-worker-btn");
  const demoWorkerModal = document.getElementById("demo-worker-modal");
  const container = document.getElementById("demo-worker-ctn");

  const groupContainer = document.querySelector("#group-container"); // Target the Groups section
  let selectedWorker = null; // To store the selected worker

  // Initially disable the "Set Up" button
  setUpButton.disabled = true;
  setUpButton.classList.add("opacity-50");

  // Fetch data from API (Move this above the function call)
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        console.log(data); // Log fetched posts
        displayPosts(data); // Call function to display posts
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Show the modal when the "Demo" button is clicked
  demoButton.addEventListener("click", () => {
    demoModal.classList.remove("hidden");
  });

  // Switch from demo modal to demo worker modal when the "Demo Worker" button is clicked
  demoWorkerBtn.addEventListener("click", () => {
    demoModal.classList.add("hidden");
    demoWorkerModal.classList.remove("hidden");
    fetchData(); // ✅ Now fetchData is defined before this call
  });

  // Close the modal when the "Close" button is clicked
  closeButton?.addEventListener("click", () => {
    demoModal.classList.add("hidden");
  });

  // Function to add click event listener dynamically after fetching data
  function addListClickEvent() {
    const list = document.getElementById("worker-list");
    if (!list) return;

    list.addEventListener("click", (event) => {
      const target = event.target;

      if (target.tagName === "LI") {
        // Remove active class from all list items
        Array.from(list.children).forEach((li) => {
          li.classList.remove("text-yellow-400");
          li.classList.add("text-white");
        });

        // Add active state to the selected item
        target.classList.add("text-yellow-400");
        selectedWorker = target.dataset.value;

        // Enable the "Set Up" button
        setUpButton.disabled = false;
        setUpButton.classList.remove("opacity-50");
      }
    });
  }

  // Function to display posts dynamically
  function displayPosts(posts) {
    container.innerHTML = `
      <ul id="worker-list"
          class="w-full text-sm text-medium max-h-60 overflow-y-auto border-t border-gray-600 divide-y divide-gray-600">
        ${posts
          .map(
            (post) => `
          <li class="py-2 cursor-pointer hover:bg-gray-700 text-white" data-value="${post.title}">
            ${post.title}
          </li>`
          )
          .join("")}
      </ul>
    `;

    addListClickEvent(); // Add click event after rendering
  }

  // Hide the worker modal when "Set Up" button is clicked
  setUpButton.addEventListener("click", () => {
    demoWorkerModal.classList.add("hidden");
    console.log(selectedWorker);
    groupContainer.innerHTML = `
    <div class="bg-gray-800 p-4 rounded-lg shadow-md">
    <h3 class="text-sm font-bold mb-2">Groups: 1</h3>
    <div class="bg-gray-700 p-2 rounded-lg">
      <div class="flex justify-between items-center">
        <span>${selectedWorker}</span>
        <span>507954 H/s</span>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-400">
        <span>Online: 5 / 5</span>
        <span>0.00000086 BTC</span>
      </div>
    </div>
  </div>`;
  });
});
