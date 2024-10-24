document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });
  
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
    });
  });
  



// Mock API - List of symptoms and corresponding diagnoses
const mockSymptomsDatabase = [
  { symptoms: 'fever', diagnosis: 'You might have a viral infection or the flu.' },
  { symptoms: 'headache', diagnosis: 'This could be caused by stress, tension, or a migraine.' },
  { symptoms: 'cough', diagnosis: 'You might have a respiratory infection like bronchitis or a cold.' },
  { symptoms: 'stomach ache', diagnosis: 'This could be due to indigestion or food poisoning.' },
  { symptoms: 'sore throat', diagnosis: 'This might be a viral infection or strep throat.' },
  { symptoms: 'fatigue', diagnosis: 'You may be experiencing exhaustion due to lack of sleep or an underlying condition.' },
  { symptoms: 'rash', diagnosis: 'This could be an allergic reaction or a skin infection.' },
  { symptoms: 'dizziness', diagnosis: 'You might be dehydrated, or it could be related to vertigo or low blood pressure.' },
  { symptoms: 'nausea', diagnosis: 'This could be related to food poisoning or pregnancy.' },
  { symptoms: 'chest pain', diagnosis: 'Chest pain can be a serious sign of a heart condition. Seek medical attention.' }
];

// Get references to form elements
const symptomForm = document.getElementById('symptomForm');
const symptomsInput = document.getElementById('symptomsInput');
const diagnosisResult = document.getElementById('diagnosisResult');

// Handle form submission
symptomForm.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form from refreshing the page

  // Get user input
  const enteredSymptoms = symptomsInput.value.trim().toLowerCase();

  // Find matching diagnosis based on the user's input
  const matchingSymptom = mockSymptomsDatabase.find(item => enteredSymptoms.includes(item.symptoms));

  // Display result based on match
  if (matchingSymptom) {
    diagnosisResult.innerHTML = `<h3 class="text-lg font-semibold">Diagnosis:</h3>
      <p class="mt-2">${matchingSymptom.diagnosis}</p>`;
  } else {
    diagnosisResult.innerHTML = '<p class="text-red-500">No matching diagnosis found. Please try different symptoms.</p>';
  }

  diagnosisResult.classList.remove('hidden');
});