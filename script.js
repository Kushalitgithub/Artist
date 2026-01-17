const projects = [
  {
    title: "Charcoal Portrait",
    image: "Photos/Charcoal1.jpeg",
    description: "Hand-drawn charcoal portrait with fine details."
  },
   {
    title: "Charcoal Portrait",
    image: "Photos/Charcoal2.jpeg",
    description: "Hand-drawn charcoal portrait with fine details."
  },
  {
    title: "Graphite Portrait",
    image: "Photos/Graphite1.jpeg",
    description: "Realistic graphite pencil portrait artwork."
  },
    {
    title: "Graphite Portrait",
    image: "Photos/Graphite2.jpeg",
    description: "Realistic graphite pencil portrait artwork."
  },
   {
    title: "Charcoal Portrait",
    image: "Photos/Charcoal1.jpeg",
    description: "Hand-drawn charcoal portrait with fine details."
  },
   {
    title: "Charcoal Portrait",
    image: "Photos/Charcoal2.jpeg",
    description: "Hand-drawn charcoal portrait with fine details."
  },
  {
    title: "Graphite Portrait",
    image: "Photos/Graphite1.jpeg",
    description: "Realistic graphite pencil portrait artwork."
  },
    {
    title: "Graphite Portrait",
    image: "Photos/Graphite2.jpeg",
    description: "Realistic graphite pencil portrait artwork."
  },
];

const grid = document.getElementById("projectGrid");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
div.innerHTML = `
  <div class="project-img">
    <img src="${project.image}" alt="${project.title}">
  </div>
  <div class="project-info">
    <strong>${project.title}</strong>
    <p>${project.description}</p>
  </div>
`;

  grid.appendChild(div);
});

/* Smooth reveal animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project").forEach(project => {
  observer.observe(project);
});
