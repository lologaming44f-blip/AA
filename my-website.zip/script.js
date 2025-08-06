let allProjects = [];

fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    allProjects = data;
    displayProjects(allProjects);
  });

function displayProjects(projects) {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <span class="type-label">${project.type}</span>
      <br />
      <button class="details-btn">عرض التفاصيل</button>
    `;
    container.appendChild(card);
  });
}

function filterProjects(type) {
  if (type === 'الكل') {
    displayProjects(allProjects);
  } else {
    const filtered = allProjects.filter(project => project.type === type);
    displayProjects(filtered);
  }
}
