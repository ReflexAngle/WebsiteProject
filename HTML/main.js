const skills = ["HTML", "CSS", "JavaScript", "Python", "C#", "Azure", "Node.JS", "MySQL",];
const skillsContainer = document.querySelector("#skillsPart > div");
const goToSkills = document.getElementById("toSkills");
const goToProjects = document.getElementById("toProjects");
const goToResearch = document.getElementById("toResearch");

goToSkills.addEventListener("click", function(){
    document.getElementById("skillsPart").scrollIntoView({ behavior: "smooth" });
});
goToProjects.addEventListener("click", function(){
    document.getElementById("projectsPart").scrollIntoView({ behavior: "smooth" });
});
goToResearch.addEventListener("click", function(){
    document.getElementById("researchPart").scrollIntoView({ behavior: "smooth" });
});

skills.forEach(skill => {
    const skillBox = document.createElement("div");
    skillBox.classList.add("skillBox");
    skillBox.textContent = skill;
    skillsContainer.appendChild(skillBox);
});
