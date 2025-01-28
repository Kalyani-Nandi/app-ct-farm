document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("worker-list");
    const setUpButton = document.getElementById("set-up-btn");
    const demoButton = document.getElementById("demo-button");
    const closeButton = document.getElementById("close-modal");
    const demoModal = document.getElementById("demo-modal");
    const demoWorkerBtn = document.getElementById("demo-worker-btn");
    const demoWorkerModal = document.getElementById("demo-worker-modal");
  

    fetch('components/shared/navbar.html')
      .then(response => response.text())
      .then(data => {
        console.log(data);
        
        document.getElementById('navbar').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading the navbar:', error);
      });

// Load a Card Component
fetch('components/shared/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });
    // Initially disable the "Set Up" button
    setUpButton.disabled = true;
    setUpButton.classList.add("opacity-50");

  
    // Show the modal when the "Demo" button is clicked
    demoButton.addEventListener("click", () => {
      demoModal.classList.remove("hidden");
    });
  
    // Switch from demo modal to demo worker modal when the "Demo Worker" button is clicked
    demoWorkerBtn.addEventListener("click", () => {
      demoModal.classList.add("hidden");
      demoWorkerModal.classList.remove("hidden");
    });
  
    // Close the modal when the "Close" button is clicked
    // closeButton.addEventListener("click", () => {
    //   demoModal.classList.add("hidden");
    // });
  
    // Add click event to all list items
    list.addEventListener("click", (event) => {
      const target = event.target;
  
      // Ensure the clicked item is a list item
      if (target.tagName === "LI") {
  
        // Remove the active class from all list items
        Array.from(list.children).forEach((li) => {
          li.classList.remove("text-yellow-400");
          li.classList.add("text-white");
        });
  
        // Add active state to the selected item
        target.classList.add("text-yellow-400");
  
        // Enable the "Set Up" button
        setUpButton.disabled = false;
        setUpButton.classList.remove("opacity-50");

      }
    });
    setUpButton.addEventListener("click", (event) => {
      demoWorkerModal.classList.add("hidden");
    });
  });
  