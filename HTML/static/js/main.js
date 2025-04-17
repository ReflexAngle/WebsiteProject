const skills = [
    { name: "HTML", file: "1_html-5.png" },
    { name: "CSS", file: "2_css-3.png" },
    { name: "JavaScript", file: "3_js.png" },
    { name: "Python", file: "4_python.png" },
    { name: "C#", file: "5_c-sharp.png" },
    { name: "Unity", file: "6_unity.png" },
    { name: "Node.JS", file: "7_nodeJS.png" },
    { name: "MySQL", file: "8_mysql.png" }
];
// eventually should be moves to an SQL database
// but this works for now.
const projects = [
    { name: "lockBox", link: "https://github.com/ReflexAngle/LockBox"},
    { name: "MarketCarting", link: "https://github.com/ReflexAngle/MarketCharting"},
    { name: "Website", link: "https://github.com/ReflexAngle/WebsiteProject"},
    { name: "Claw Warfare", link: ""},
];

const projectsContainer = document.getElementById("projectContainer"); // Corrected ID

const skillsContainer = document.getElementById("skillsContainer");
const goToSkills = document.getElementById("toSkills");
const goToProjects = document.getElementById("toProjects");
const goToResearch = document.getElementById("toResearch");
const goToContact = document.getElementById("toContact");
const backToTopButton = document.getElementById("toTop");
//const backToTopButton = document.getElementById("toTop");
// call information from the json file
document.addEventListener("DOMContentLoaded", function () {
    fetch("static/docs/information.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").textContent = data.name;
            document.getElementById("description").textContent = data.decription;
        })
});

goToSkills.addEventListener("click", function(){
    document.getElementById("skillsPart").scrollIntoView({ behavior: "smooth" });
});
goToProjects.addEventListener("click", function(){
    document.getElementById("projectsPart").scrollIntoView({ behavior: "smooth" });
});
goToResearch.addEventListener("click", function(){
    document.getElementById("researchPart").scrollIntoView({ behavior: "smooth" });
});
goToContact.addEventListener("click", function(){
    document.getElementById("contactPart").scrollIntoView({ behavior: "smooth" });
});
backToTopButton.addEventListener("click", function(){
    const headerSection = document.getElementById("headerPart");
    const headerSectionRect = headerSection.getBoundingClientRect().top;

    if (Math.abs(headerSectionRect) > 1) {
        document.getElementById("headerPart").scrollIntoView({behavior: "smooth"});
    }else {
        alert("Would you look at that.")
    }
});
// backToTopButton.addEventListener("click", function(){
//     document.getElementById("headerPart").scrollIntoView({ behavior: "smooth" });
// });

// loops through the skills array and creates a div for each skill
// with an image and a name, then appends it to the skills container
skills.forEach((skill, index) => {
    const skillBox = document.createElement("div");
    skillBox.classList.add("skillBox"); // Add a class for styling

    // Create an img element for the skill icon
    const skillImage = document.createElement("img");
    skillImage.src = `IconPics/${skill.file}`; // Use the file name from the mapping
    skillImage.alt = `${skill.name} Icon`;
    skillImage.style.width = "100px"; // Set the width of the image
    skillImage.style.height = "100px"; // Set the height of the image

    // Append the image to the skill box
    skillBox.appendChild(skillImage);

    // Append the skill box to the container
    skillsContainer.appendChild(skillBox);
});


// when the user isnt on the main section of the page, the button will appear
// when clicked the page will scroll to the top
function showBackToTopButton(){
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        backToTopButton.style.display = "block";
    }

}

document.addEventListener("DOMContentLoaded", function () {
    fetchGitHubProjects();
});

function fetchGitHubProjects(){
    const username = "ReflexAngle";
    const pinnedRepos = ["lockBox", "MarketCharting", "WebsiteProject", "Education_VR_Project"];
    const projectContainer = document.getElementById("projectContainer");

    // gets the projects from the GitHub API
    // and creates a div for each project with the name and a link to the project
    pinnedRepos.forEach(repoName => {
        fetch(`https://api.github.com/repos/${username}/${repoName}`)
            .then(response => response.json())
            .then(repo => {
                const card = document.createElement("div");
                card.classList.add("projectCard");
                // Adds the project name and description to the card
                // and a link to the project on GitHub
                card.innerHTML = `
                    <div class="githubCardHeader">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo">
                        <span>GitHub - ${repo.full_name}</span>
                    </div>
                    <p class="projectTitle">${repo.name}</p>
                    <p class="projectDesc">${repo.description || "No description provided."}</p>
                    <a href="${repo.html_url}" class="githubLink" target="_blank">View on GitHub</a> 
                `;// turn the <a> to a button to make it look more clean 

                projectContainer.appendChild(card);
            })
            // fail safe in case the API fails to fetch the data
            // or the project does not exist
            .catch(error => {
                console.error(`Failed to fetch ${repoName}:`, error);
            });
    });
}
