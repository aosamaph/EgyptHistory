document.addEventListener("DOMContentLoaded", function() {
    // Fetch team members data from JSON file
    fetch('members.json')
        .then(response => response.json())
        .then(teamMembers => {
            // Generate team members list
            const teamMembersList = document.getElementById("team-members");
            teamMembers.forEach(member => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${member.name}</strong> - ${member.role}`;
                teamMembersList.appendChild(listItem);
            });
        });

    // Fetch dynasty categories data from JSON file
    fetch('dynasties.json')
        .then(response => response.json())
        .then(dynastyCategories => {
            // Generate dynasty categories list
            const dynastyCategoriesList = document.getElementById("dynasty-categories");
            dynastyCategories.forEach(category => {
                const listItem = document.createElement("li");
                listItem.classList.add("category-item"); // Add class for styling

                // Create video thumbnail container
                const videoThumbnail = document.createElement("div");
                videoThumbnail.classList.add("video-thumbnail");

                // Add video thumbnail image
                const thumbnailImage = document.createElement("img");
                thumbnailImage.src = category.imageLink; // Replace with actual thumbnail source
                thumbnailImage.alt = "Video Thumbnail";
                videoThumbnail.appendChild(thumbnailImage);

                // Append video thumbnail to category item
                listItem.appendChild(videoThumbnail);

                // Create category info container
                const categoryInfo = document.createElement("div");
                categoryInfo.classList.add("category-info");

                // Create a link to the video page with the video URL and category name as query parameters
                const videoPageLink = document.createElement("a");
                const videoUrl = `video_page.html?video=${encodeURIComponent(category.videoLink)}`;
                const categoryName = `&title=${encodeURIComponent(category.name)}`;
                videoPageLink.href = videoUrl + categoryName;
                videoPageLink.textContent = category.name;
                categoryInfo.appendChild(videoPageLink);

                // Add description
                const description = document.createElement("p");
                description.textContent = category.description;
                categoryInfo.appendChild(description);

                // Append category info to category item
                listItem.appendChild(categoryInfo);

                // Add the category item to the list
                dynastyCategoriesList.appendChild(listItem);
            });
        });
		
});

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', function() {
	var scrollToTopBtn = document.getElementById('scrollToTopBtn');
	if (window.scrollY > 100) {
		scrollToTopBtn.style.display = 'block';
	} else {
		scrollToTopBtn.style.display = 'none';
	}
});

// Scroll to top function
document.getElementById('scrollToTopBtn').addEventListener('click', function(e) {
	e.preventDefault();
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

