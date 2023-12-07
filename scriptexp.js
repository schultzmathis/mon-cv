document.addEventListener('DOMContentLoaded', function () {
  const experiences = [
      {
          title: "Apprenti Conducteur de travaux en alternance",
          date: "Septembre 2022 à octobre 2024",
          company: "<a href='https://www.eurovia.fr'>Eurovia PACA</a> (13)",
          mainText: "Formation au métier de chef de chantier, pour diriger une équipe, écrire des rapports, organiser les missions du chantier et garantir la qualité du travail. <br> Préparation en amont d'un chantier, budgétisation, négociation client et suivi.",
          images: [
              "images/japon.jpeg",
              "images/japon.jpeg",
              "images/japon.jpeg"
          ]
      },
      {
        title: "Apprenti Conducteur de travaux en alternance",
        date: "Septembre 2022 à octobre 2024",
        company: "<a href='https://www.eurovia.fr'>Eurovia PACA</a> (13)",
        mainText: "Formation au métier de chef de chantier, pour diriger une équipe, écrire des rapports, organiser les missions du chantier et garantir la qualité du travail. <br> Préparation en amont d'un chantier, budgétisation, négociation client et suivi.",
        images: [
            "images/wei.jpeg",
            "images/wei.jpeg",
            "images/wei.jpeg"
        ]
    },
    {
        title: "Apprenti Conducteur de travaux en alternance",
        date: "Septembre 2022 à octobre 2024",
        company: "<a href='https://www.eurovia.fr'>Eurovia PACA</a> (13)",
        mainText: "Formation au métier de chef de chantier, pour diriger une équipe, écrire des rapports, organiser les missions du chantier et garantir la qualité du travail. <br> Préparation en amont d'un chantier, budgétisation, négociation client et suivi.",
        images: [
            "images/wei.jpeg",
            "images/wei.jpeg",
            "images/wei.jpeg"
        ]
    },
      // Add more experiences as needed
  ];

  const experienceContainer = document.getElementById('experienceContainer');
  const prevExperienceBtn = document.getElementById('prevExperienceBtn');
  const nextExperienceBtn = document.getElementById('nextExperienceBtn');
  let currentIndex = 0;

  function showExperience(index) {
      if (index >= 0 && index < experiences.length) {
          const currentExperience = experiences[index];
          const experienceDiv = document.createElement('div');
          experienceDiv.className = 'experience';
          experienceDiv.innerHTML = `
              <h2>${currentExperience.title}</h2>
              <em>${currentExperience.date}, ${currentExperience.company}</em><br>
              <div class="detail">${currentExperience.mainText}</div>
              
              <!-- Pictures for the current experience -->
              <div class="picture-container">
                  ${currentExperience.images.map(image => `<div class="picture"><img src="${image}" alt="Experience Image"></div>`).join('')}
              </div>
          `;
          experienceContainer.innerHTML = '';
          experienceContainer.appendChild(experienceDiv);
      }
  }

  function showNextExperience() {
      currentIndex = (currentIndex + 1) % experiences.length;
      showExperience(currentIndex);
  }

  function showPrevExperience() {
      currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
      showExperience(currentIndex);
  }

  // Display the first experience on page load
  showExperience(currentIndex);

  // Add event listeners to navigation buttons
  nextExperienceBtn.addEventListener('click', showNextExperience);
  prevExperienceBtn.addEventListener('click', showPrevExperience);
});