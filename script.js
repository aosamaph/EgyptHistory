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

                // Add category name and description
                categoryInfo.innerHTML = `<a href="${category.videoLink}">${category.name}</a>
                                          <p>${category.description}</p>`;

                // Append category info to category item
                listItem.appendChild(categoryInfo);

                // Add the category item to the list
                dynastyCategoriesList.appendChild(listItem);
            });
        });
});
