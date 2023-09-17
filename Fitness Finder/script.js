const fitnessData = [
    {
      name: 'Yoga',
      description: 'Yoga is a physical, mental, and spiritual practice that originated in ancient India.',
    },
    {
      name: 'Running',
      description: 'Running is a cardiovascular exercise that involves moving at a fast pace on foot.',
    },
    {
      name: 'Weightlifting',
      description: 'Weightlifting is a strength training exercise that involves lifting weights to build muscle mass.',
    },
    {
      name: 'Cycling',
      description: 'Cycling is a low-impact exercise that involves riding a bicycle to improve cardiovascular fitness.',
    },
    {
      name: 'Abs',
      description: 'The abdominal muscles are located between the ribs and the pelvis on the front of the body. The abdominal muscles support the trunk, allow movement and hold organs in place by regulating internal abdominal pressure.',
    },
    {
      name: 'Biceps',
      description: 'The biceps brachii (BB), commonly know as the biceps, is a large, thick muscle on the ventral portion of the upper arm.',
    },
    {
      name: 'Triceps',
      description: 'The triceps brachii is a large, thick muscle on the dorsal part of the upper arm. It often appears in the shape of a horseshoe on the posterior aspect of the arm. The primary function of the triceps is the extension of the elbow joint.',
    },
    

    // Add more fitness activities here
  ];
  
  function searchFitness() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase().trim();
  
    if (searchText === '') {
      alert('Please enter a fitness activity to search.');
      return;
    }
  
    const fitnessResult = document.getElementById('fitnessResult');
    fitnessResult.innerHTML = '';
  
    const results = fitnessData.filter(fitness => fitness.name.toLowerCase().includes(searchText));
  
    if (results.length === 0) {
      fitnessResult.innerHTML = '<p>No results found.</p>';
    } else {
      results.forEach(result => {
        const div = document.createElement('div');
        div.innerHTML = `
          <h2>${result.name}</h2>
          <p>${result.description}</p>
        `;
        fitnessResult.appendChild(div);
      });
    }
  }
  