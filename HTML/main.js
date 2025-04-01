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
    { name: "MarketCarting", link: "https://github.com/ReflexAngle/MarketCharting"}];

const projectsContainer = document.getElementById("projectContainer"); // Corrected ID

const skillsContainer = document.getElementById("skillsContainer");
const goToSkills = document.getElementById("toSkills");
const goToProjects = document.getElementById("toProjects");
const goToResearch = document.getElementById("toResearch");
const goToContact = document.getElementById("toContact");

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

// loops through the projects array and creates a div for each project
projects.forEach((project, index) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("projectBox"); // Add a class for styling
    projectBox.textContent = project;
    projectsContainer.appendChild(projectBox);


});
