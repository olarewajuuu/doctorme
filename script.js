// loading.js

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  const mainContent = document.getElementById('mainContent');

  // Set a minimum loading duration of 2 seconds
  setTimeout(() => {
    loadingScreen.classList.add('hidden');  // Hide loading screen
    mainContent.classList.remove('hidden'); // Show main content
  }, 1000); // 2000 milliseconds = 2 seconds
});


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
  { symptoms: 'cough', diagnosis: 'This could be due to a cold, allergies, or a respiratory infection.' },
  { symptoms: 'headache', diagnosis: 'Headaches can be caused by stress, dehydration, or a migraine.' },
  { symptoms: 'stomach ache', diagnosis: 'This could be related to indigestion, food poisoning, or a stomach virus.' },
  { symptoms: 'sore throat', diagnosis: 'You might have a throat infection, cold, or possibly strep throat.' },
  { symptoms: 'fatigue', diagnosis: 'Fatigue can be caused by lack of sleep, stress, or nutritional deficiencies.' },
  { symptoms: 'runny nose', diagnosis: 'This could be due to a cold, allergies, or sinusitis.' },
  { symptoms: 'nausea', diagnosis: 'This may be related to food poisoning, a stomach virus, or motion sickness.' },
  { symptoms: 'muscle ache', diagnosis: 'This could result from physical exertion, stress, or a viral infection.' },
  { symptoms: 'rash', diagnosis: 'A rash might be due to an allergic reaction, eczema, or an infection.' },
  { symptoms: 'shortness of breath', diagnosis: 'Could be a sign of asthma, anxiety, or a heart or lung condition.' },
  { symptoms: 'dizziness', diagnosis: 'Dizziness can be caused by low blood pressure, dehydration, or vertigo.' },
  { symptoms: 'chest pain', diagnosis: 'Chest pain can be related to heart issues, indigestion, or anxiety.' },
  { symptoms: 'joint pain', diagnosis: 'Joint pain may be due to arthritis, injury, or an autoimmune disorder.' },
  { symptoms: 'blurred vision', diagnosis: 'Could be due to eye strain, dehydration, or high blood sugar.' },
  { symptoms: 'frequent urination', diagnosis: 'This can indicate a urinary tract infection or diabetes.' },
  { symptoms: 'itching', diagnosis: 'Itching could be due to allergies, eczema, or a fungal infection.' },
  { symptoms: 'insomnia', diagnosis: 'Insomnia might be due to stress, caffeine intake, or sleep disorders.' },
  { symptoms: 'weight loss', diagnosis: 'Unintended weight loss can be due to thyroid issues, diabetes, or malnutrition.' },
  { symptoms: 'constipation', diagnosis: 'Constipation can be caused by dehydration, diet, or digestive disorders.' },
  { symptoms: 'diarrhea', diagnosis: 'Could be due to food poisoning, a stomach virus, or food intolerance.' },
  { symptoms: 'swollen glands', diagnosis: 'Swollen glands can be due to an infection or, in some cases, an autoimmune condition.' },
  { symptoms: 'sensitivity to light', diagnosis: 'This might be related to migraines, eye strain, or a concussion.' },
  { symptoms: 'tremors', diagnosis: 'Tremors could be due to anxiety, caffeine intake, or a neurological disorder.' },
  { symptoms: 'memory loss', diagnosis: 'Memory loss can be due to aging, stress, or neurological issues.' },
  { symptoms: 'difficulty swallowing', diagnosis: 'Could be related to throat infections, acid reflux, or neurological issues.' },
  { symptoms: 'heart palpitations', diagnosis: 'May be caused by anxiety, caffeine, or an underlying heart condition.' },
  { symptoms: 'dry mouth', diagnosis: 'Dry mouth can be due to dehydration, medication, or stress.' },
  { symptoms: 'hair loss', diagnosis: 'Hair loss can result from stress, nutritional deficiencies, or hormonal imbalances.' },
  { symptoms: 'sweating', diagnosis: 'Excessive sweating can be due to stress, heat, or hyperthyroidism.' },
  { symptoms: 'irritability', diagnosis: 'This may be due to stress, sleep deprivation, or hormonal changes.' },
  { symptoms: 'bad breath', diagnosis: 'Bad breath can be due to poor oral hygiene, dry mouth, or digestive issues.' },
  { symptoms: 'hearing loss', diagnosis: 'This could be due to aging, ear infections, or exposure to loud sounds.' },
  { symptoms: 'anxiety', diagnosis: 'Anxiety may be a result of stress, hormonal imbalance, or mental health conditions.' },
  { symptoms: 'depression', diagnosis: 'Depression can be caused by hormonal changes, life events, or mental health issues.' },
  { symptoms: 'low blood pressure', diagnosis: 'Low blood pressure might be due to dehydration, diet, or a heart condition.' },
  { symptoms: 'high blood pressure', diagnosis: 'High blood pressure can result from stress, diet, or lifestyle.' },
  { symptoms: 'frequent bruising', diagnosis: 'This could indicate vitamin deficiencies or blood clotting issues.' },
  { symptoms: 'tingling sensation', diagnosis: 'May be due to nerve compression, anxiety, or a vitamin deficiency.' },
  { symptoms: 'swollen legs', diagnosis: 'Swollen legs can be caused by fluid retention, injury, or circulation issues.' },
  { symptoms: 'irregular heartbeat', diagnosis: 'Could be due to stress, heart condition, or electrolyte imbalance.' },
  { symptoms: 'difficulty concentrating', diagnosis: 'This can result from stress, fatigue, or nutrient deficiencies.' },
  { symptoms: 'yellowing skin', diagnosis: 'Yellowing skin can be due to jaundice, liver issues, or anemia.' },
  { symptoms: 'ringing in ears', diagnosis: 'This might be due to exposure to loud noises, aging, or ear infections.' },
  { symptoms: 'dry eyes', diagnosis: 'Dry eyes can be caused by allergies, screen strain, or environmental factors.' },
  { symptoms: 'difficulty breathing', diagnosis: 'Could be due to asthma, allergies, or a respiratory infection.' },
  { symptoms: 'night sweats', diagnosis: 'Night sweats may indicate an infection, hormonal changes, or anxiety.' },
  { symptoms: 'loss of appetite', diagnosis: 'Loss of appetite can be due to stress, infections, or stomach issues.' },
  { symptoms: 'lightheadedness', diagnosis: 'Lightheadedness could result from dehydration, low blood pressure, or anemia.' },
  { symptoms: 'hoarseness', diagnosis: 'This can be due to throat infections, overuse of vocal cords, or allergies.' },
  { symptoms: 'hiccups', diagnosis: 'Hiccups can occur due to overeating, spicy foods, or stomach issues.' },
  { symptoms: 'loss of balance', diagnosis: 'Loss of balance could be due to inner ear issues or neurological disorders.' },
  { symptoms: 'back pain', diagnosis: 'Back pain may be due to muscle strain, posture, or kidney issues.' },
  { symptoms: 'cold hands and feet', diagnosis: 'This could be due to poor circulation, anemia, or hypothyroidism.' },
  { symptoms: 'swelling', diagnosis: 'Swelling may be due to injury, fluid retention, or inflammation.' },
  { symptoms: 'painful urination', diagnosis: 'Could indicate a urinary tract infection or kidney stones.' },
  { symptoms: 'hot flashes', diagnosis: 'Hot flashes are common during menopause or with hormone fluctuations.' },
  { symptoms: 'restlessness', diagnosis: 'Restlessness can be due to anxiety, stress, or poor sleep habits.' },
  { symptoms: 'frequent infections', diagnosis: 'Frequent infections may be due to a weakened immune system.' },
  { symptoms: 'difficulty waking up', diagnosis: 'Could be due to sleep disorders, stress, or poor sleep hygiene.' },
  { symptoms: 'vomiting', diagnosis: 'Vomiting can be related to food poisoning, infections, or pregnancy.' },
  { symptoms: 'blood in stool', diagnosis: 'Blood in stool may indicate gastrointestinal issues like hemorrhoids or ulcers.' },
  { symptoms: 'difficulty seeing at night', diagnosis: 'This could be due to vitamin A deficiency or cataracts.' },
  { symptoms: 'painful joints', diagnosis: 'Painful joints may indicate arthritis or an inflammatory condition.' },
  { symptoms: 'dry skin', diagnosis: 'Dry skin can result from dehydration, environmental factors, or eczema.' },
  { symptoms: 'nosebleeds', diagnosis: 'Nosebleeds can be caused by dry air, allergies, or injury.' },
  { symptoms: 'loss of taste', diagnosis: 'Loss of taste may be due to respiratory infections, allergies, or aging.' },
  { symptoms: 'loss of smell', diagnosis: 'Loss of smell can be due to sinus infections, allergies, or COVID-19.' },
  { symptoms: 'muscle weakness', diagnosis: 'This may result from nutrient deficiencies, fatigue, or neurological issues.' },
  { symptoms: 'pale skin', diagnosis: 'Pale skin can indicate anemia, poor circulation, or shock.' },
  { symptoms: 'cramps', diagnosis: 'Muscle cramps can be due to dehydration, overuse, or mineral deficiency.' },
  { symptoms: 'flushed skin', diagnosis: 'Flushed skin may result from fever, exercise, or skin conditions.' },
  { symptoms: 'swollen ankles', diagnosis: 'Swollen ankles may be due to fluid retention, injury, or heart issues.' },
  { symptoms: 'itchy eyes', diagnosis: 'Itchy eyes can be due to allergies, irritation, or conjunctivitis.' },
  { symptoms: 'frequent thirst', diagnosis: 'Frequent thirst can be due to dehydration, diabetes, or dry mouth.' },
  { symptoms: 'abdominal bloating', diagnosis: 'Bloating can be due to digestive issues, food intolerance, or PMS.' },
  { symptoms: 'irregular periods', diagnosis: 'Irregular periods can be due to hormonal imbalances or stress.' },
  { symptoms: 'burning sensation', diagnosis: 'Burning sensation could indicate nerve damage or acid reflux.' },
  { symptoms: 'numbness', diagnosis: 'Numbness may result from nerve compression, diabetes, or circulation issues.' },
  { symptoms: 'persistent coughing', diagnosis: 'Persistent cough can indicate bronchitis, asthma, or allergies.' },
  { symptoms: 'difficulty urinating', diagnosis: 'Could indicate urinary tract issues or prostate enlargement.' },
  { symptoms: 'loss of coordination', diagnosis: 'Loss of coordination may be due to neurological issues or injury.' },
  { symptoms: 'body odor', diagnosis: 'Body odor can be influenced by diet, stress, or hormonal changes.' },
  { symptoms: 'constantly cold', diagnosis: 'Feeling constantly cold may be due to anemia, hypothyroidism, or poor circulation.' },
  { symptoms: 'tight chest', diagnosis: 'A tight chest can be due to anxiety, asthma, or heart conditions.' },
  { symptoms: 'discolored nails', diagnosis: 'Discolored nails may indicate fungal infections or nutrient deficiencies.' },
  { symptoms: 'leg cramps', diagnosis: 'Leg cramps could be due to dehydration, poor circulation, or overexertion.' },
  { symptoms: 'belching', diagnosis: 'Belching can be related to indigestion, acid reflux, or swallowing air.' },
  { symptoms: 'loss of interest', diagnosis: 'Loss of interest may indicate depression or mental health concerns.' }
];




// Mock data for available doctors
const doctorsDatabase = {
  fever: [
    { name: 'Dr. John Smith', specialty: 'General Practitioner', picture: './images/user1.svg', phone: '(123) 456-7890' },
    { name: 'Dr. Jane Doe', specialty: 'Infectious Disease Specialist', picture: './images/user2.svg', phone: '(123) 456-7891' },
  ],
  headache: [
    { name: 'Dr. Emily Davis', specialty: 'Neurologist', picture: './images/user3.svg', phone: '(123) 456-7892' },
    { name: 'Dr. Mark Wilson', specialty: 'Pain Management Specialist', picture: './images/user2.svg', phone: '(123) 456-7893' },
  ],
  cough: [
    { name: 'Dr. Sarah Brown', specialty: 'Pulmonologist', picture: './images/user3.svg', phone: '(123) 456-7894' },
    { name: 'Dr. Chris Johnson', specialty: 'Allergist', picture: './images/user1.svg', phone: '(123) 456-7895' },
  ],
  // Add more doctors as needed
};


// Function to find diagnosis based on input symptom
function findDiagnosis(symptom) {
  const entry = mockSymptomsDatabase.find(item => item.symptoms.toLowerCase() === symptom.toLowerCase());
  return entry ? entry.diagnosis : 'Diagnosis not found';
}

// Function to find doctors based on symptom
function findDoctors(symptom) {
  return doctorsDatabase[symptom.toLowerCase()] || [];
}

// Get references to form elements
const symptomForm = document.getElementById('symptomForm');
const symptomsInput = document.getElementById('symptomsInput');
const diagnosisResult = document.getElementById('diagnosisResult');
const doctorList = document.getElementById('doctorList');
const loadingScreen = document.getElementById('loadingScreen');


// Chat elements
const chatInterface = document.getElementById('chatInterface');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessageButton = document.getElementById('sendMessage');

// Handle form submission
symptomForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from refreshing the page

    // Show loading screen
    loadingScreen.classList.remove('hidden');
    diagnosisResult.textContent = ''; // Clear any previous result
    doctorList.innerHTML = ''; // Clear previous doctor list
    chatMessages.innerHTML = ''; // Clear previous chat messages

    // Get user input
    const enteredSymptoms = symptomsInput.value.trim().toLowerCase();

    // Simulate a loading delay of 2 seconds before showing the diagnosis
    setTimeout(() => {
        // Hide loading screen
        loadingScreen.classList.add('hidden');

        // Find matching diagnosis based on the user's input
        const matchingSymptom = mockSymptomsDatabase.find(item => enteredSymptoms.includes(item.symptoms));

        // Display result based on match
        if (matchingSymptom) {
            diagnosisResult.innerHTML = `<h3 class="text-lg font-semibold">Diagnosis:</h3>
                <p class="mt-2">${matchingSymptom.diagnosis}</p>`;

            // Find and display available doctors for the matching symptom
            const doctors = findDoctors(matchingSymptom.symptoms);
            if (doctors.length > 0) {
                doctors.forEach(doctor => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('flex', 'items-center', 'space-x-4', 'border', 'p-4', 'rounded');

                    listItem.innerHTML = `
                        <img src="${doctor.picture}" alt="${doctor.name}" class="w-24 h-24 rounded-full">
                        <div>
                            <h4 class="font-semibold">${doctor.name}</h4>
                            <p>${doctor.specialty}</p>
                            <p class="text-sm text-gray-600">${doctor.phone}</p>
                            <button class="bg-blue-500 text-white px-2 py-1 mt-2 rounded" onclick="startChat('${doctor.name}')">Chat</button>
                        </div>
                    `;
                    doctorList.appendChild(listItem);
                });
            } else {
                doctorList.innerHTML = '<li>No doctors available for this symptom.</li>';
            }
        } else {
            diagnosisResult.innerHTML = '<p class="text-red-500">No matching diagnosis found. Please try different symptoms.</p>';
        }

        diagnosisResult.classList.remove('hidden');
    }, 2000); // 2000 ms = 2 seconds
});

// Function to start chat with a doctor
function startChat(doctorName) {
    chatInterface.classList.remove('hidden'); // Show the chat interface
    chatMessages.innerHTML += `<div class="text-gray-600">You are now chatting with ${doctorName}.</div>`;
}

// Handle sending messages
sendMessageButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        // Display user message
        chatMessages.innerHTML += `<div class="text-right text-blue-500">You: ${message}</div>`;
        chatInput.value = ''; // Clear input

        // Simulate a doctor response after a short delay
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="text-left text-gray-600">Doctor: Thank you for your message. How can I assist you?</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll to bottom
        }, 1000); // 1 second delay for doctor response
    }
});


// Handle scroll event for navbar transparency
let lastScrollTop = 0; // Keep track of last scroll position
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('navbar-transparent'); // Add transparent class
    } else {
        // Scrolling up
        navbar.classList.remove('navbar-transparent'); // Remove transparent class
    }
    lastScrollTop = scrollTop; // Update last scroll position
});