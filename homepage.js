// JavaScript for basic navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile devices
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show-menu');
        });

        // Close the menu when a nav link is clicked (for small screens)
        navMenu.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                navMenu.classList.remove('show-menu');
            }
        });
    }

    // Example: Handling form submission
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Perform form validation or submission handling here
            // Example: Redirecting to another page after form submission
            window.location.href = 'dashboard.html';
        });
    }

    // Example: Fetching data from backend and populating options in dropdown
    const schemeFilter = document.getElementById('scheme-filter');

    if (schemeFilter) {
        // Replace with actual backend API call to fetch schemes
        fetch('backend/schemes')
            .then(response => response.json())
            .then(data => {
                data.forEach(scheme => {
                    const option = document.createElement('option');
                    option.textContent = scheme.name;
                    option.value = scheme.id;
                    schemeFilter.appendChild(option);
                });
            })
            .catch(error => console.error('Error fetching schemes:', error));
    }

    // Example: Pagination handling
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    let currentPage = 1;

    if (prevPageBtn && nextPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePageNumber(currentPage);
                // Implement function to fetch and display previous page data
                // fetchPreviousPageData();
            }
        });

        nextPageBtn.addEventListener('click', function() {
            currentPage++;
            updatePageNumber(currentPage);
            // Implement function to fetch and display next page data
            // fetchNextPageData();
        });
    }

    function updatePageNumber(page) {
        const pageNumberElem = document.getElementById('page-number');
        if (pageNumberElem) {
            pageNumberElem.textContent = page;
        }
    }

    // Add more JavaScript as needed for specific functionalities on your pages
});
