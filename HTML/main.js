const skills = ["HTML", "CSS", "JavaScript", "Python", "C#", "Unity", "Node.JS", "MySQL",]
const goToProjects = document.getElementById("toProjects");
const resumePath = 'docs/Bradley_Petersen_Resume_2024-2.pdf'

const skillsContainer = document.getElementById("sillsPart");
const resumeButton = document.getElementById("resumeButton");

skills.forEach(skill => {
    const skillBox = document.createElement("div");
    skillBox.className = "skill-box";
    skillBox.textContent = skill;

    skillsContainer.appendChild(skillBox);

});