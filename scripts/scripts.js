// Store user's answers
let answer1 = '';
let answer2 = '';
let answer3 = '';

// Get global elements
let startScreen = document.getElementById('start-screen');
let question1Screen = document.getElementById('question1-screen');
let question2Screen = document.getElementById('question2-screen');
let question3Screen = document.getElementById('question3-screen');
let resultsScreen = document.getElementById('results-screen');

// Get buttons
let startBtn = document.getElementById('start-btn');
let retakeBtn = document.getElementById('retake-btn');
let shareBtn = document.getElementById('share-btn');

// Show a screen 
function showScreen(screen) {
  //  Hide all screens
  startScreen.classList.remove('active');
  question1Screen.classList.remove('active');
  question2Screen.classList.remove('active');
  question3Screen.classList.remove('active');
  resultsScreen.classList.remove('active');
  
  // Show the screen 
  screen.classList.add('active');
  
  // Scroll to top of page
  window.scrollTo(0, 0);
}

// Start button - go to question 1
startBtn.addEventListener('click', function() {
  showScreen(question1Screen);
});

// Question 1 - click any chocolate type
let question1Buttons = document.querySelectorAll('[data-question="1"]');
question1Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer1 = button.getAttribute('data-value');
    showScreen(question2Screen);
  });
});

// Question 2 - click any texture
let question2Buttons = document.querySelectorAll('[data-question="2"]');
question2Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer2 = button.getAttribute('data-value');
    showScreen(question3Screen);
  });
});

// Question 3 - click any flavor
let question3Buttons = document.querySelectorAll('[data-question="3"]');
question3Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer3 = button.getAttribute('data-value');
    showResults();
  });
});

// Function to determine personality based on answers
function getPersonality() {
  let personality = {
    title: '',
    description: '',
    image: '',
    pairing: '',
    funFact: ''
  };
  
  // Check combinations using if-else
  if (answer1 === 'dark' && answer2 === 'nuts-crunchy' && answer3 === 'spicy') {
    personality.title = 'Bold Explorer';
    personality.description = 'You\'re adventurous and love intense flavors! You\'re not afraid to try new things and enjoy complex taste experiences.';
    personality.image = 'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638';
    personality.pairing = 'Pair your dark chocolate with a bold red wine or espresso for the ultimate flavor experience.';
    personality.funFact = 'Dark chocolate contains antioxidants that can improve heart health!';
  }
  else if (answer1 === 'milk' && answer2 === 'smooth-creamy' && answer3 === 'classic-sweet') {
    personality.title = 'Classic Loyalist';
    personality.description = 'You appreciate the familiar and comforting. You love traditional flavors that bring back happy memories.';
    personality.image = 'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg';
    personality.pairing = 'Enjoy your milk chocolate with a warm cup of lavendar tea or a glass of cold milk for the perfect cozy moment.';
    personality.funFact = 'Milk chocolate was invented in Switzerland in 1875 by Daniel Peter!';
  }
  else if (answer1 === 'white' && answer2 === 'smooth-creamy' && answer3 === 'fruity') {
    personality.title = 'Playful Dreamer';
    personality.description = 'You have refined taste and appreciate delicate, sophisticated flavors. You enjoy the finer things in life and live for fun.';
    personality.image = 'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316';
    personality.pairing = 'White chocolate pairs beautifully with fresh berries, especially with some sparkling wine and raspberries.';
    personality.funFact = 'White chocolate isn\'t technically chocolate - it\'s made from cocoa butter, not cocoa solids!';
  }
  else if (answer1 === 'dark' && answer2 === 'plain' && answer3 === 'coffee') {
    personality.title = 'Refined Connoisseur';
    personality.description = 'You value simplicity and quality. You prefer pure, uncomplicated flavors that speak for themselves.';
    personality.image = 'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186';
    personality.pairing = 'Dark chocolate and coffee are a match made in heaven - try them together for a rich, energizing treat.';
    personality.funFact = 'The darker the chocolate, the less sugar it contains. 70% dark chocolate has about 30% sugar!';
  }
  else if (answer1 === 'milk' && answer2 === 'nuts-crunchy' && answer3 === 'fruity') {
    personality.title = 'Playful Adventurer';
    personality.description = 'You love variety and excitement! You enjoy mixing textures and flavors for a fun, dynamic experience.';
    personality.image = 'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764=';
    personality.pairing = 'Milk chocolate with nuts and fruit goes perfectly with a light white wine or sparkling water.';
    personality.funFact = 'The combination of chocolate and nuts provides protein, making it a more satisfying snack!';
  }
  else if (answer1 === 'white' && answer2 === 'smooth-creamy' && answer3 === 'boozy') {
    personality.title = 'Quiet Edgy';
    personality.description = 'You take people by surprise. You love rich, decadent flavors that have a spark.';
    personality.image = 'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1';
    personality.pairing = 'White chocolate with boozy flavors pairs excellently with champagne or even rum!.';
    personality.funFact = 'Chocolate and alcohol have been paired together for centuries - it\'s a classic combination!';
  }
  else if (answer1 === 'dark' && answer2 === 'smooth-creamy' && answer3 === 'coffee') {
    personality.title = 'Intense Perfectionist';
    personality.description = 'You seek depth and intensity in everything. You appreciate complex flavors and aren\'t afraid of bold choices.';
    personality.image = 'https://www.tasteofhome.com/wp-content/uploads/2025/02/GettyImages-2181217380-scaled-e1739904698896.jpg';
    personality.pairing = 'Dark creamy chocolate with coffee notes pairs perfectly with a strong espresso or dark roast coffee.';
    personality.funFact = 'Dark chocolate contains theobromine, which gives you a gentle energy boost without the crash!';
  }
  else if (answer1 === 'milk' && answer2 === 'plain' && answer3 === 'classic-sweet') {
    personality.title = 'Nostalgic Traditionalist';
    personality.description = 'You cherish simple pleasures and classic flavors. You find joy in the familiar and timeless.';
    personality.image = 'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1';
    personality.pairing = 'Classic milk chocolate is perfect with a glass of cold milk or a warm cookie.';
    personality.funFact = 'Milk chocolate is the most popular type of chocolate in the world!';
  }
  else {
    // for any other combination
    personality.title = 'Uniquely You';
    personality.description = 'Your taste preferences are uniquely yours! You enjoy exploring different combinations and finding what works for you.';
    personality.image = 'https://www.machineryworld.com/wp-content/uploads/2019/07/imagesblogice-cream-flavours.jpg';
    personality.pairing = 'Take the risk and pair your chocolate with spicy salsa, sharp cheddar cheese, or a cold beer!';
    personality.funFact = 'Chocolate makes you smarter, so if you like chocolate, you are smart!';
  }
  
  return personality;
}

// Show results page
function showResults() {
  let result = getPersonality();
  
  // Get all result elements
  let resultImage = document.querySelector('.result-emoji');
  let resultTitle = document.getElementById('personality-title');
  let resultDescription = document.getElementById('personality-description');
  let pairingSuggestion = document.getElementById('pairing-suggestion');
  let funFact = document.getElementById('fun-fact');

  resultImage.innerHTML = '<img src="' + result.image + '" alt="Chocolate result">';
  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
  pairingSuggestion.textContent = result.pairing;
  funFact.textContent = result.funFact;
  
  
  // Show all sections
  resultDescription.style.display = 'block';
  document.querySelector('.pairing-section').style.display = 'block';
  document.querySelector('.fun-fact').style.display = 'block';
  
  showScreen(resultsScreen);
  
  // confetti 
  confetti();
}

// Retake quiz button - go back to start
retakeBtn.addEventListener('click', function() {
  answer1 = '';
  answer2 = '';
  answer3 = '';
  showScreen(startScreen);
});

// link share results to social media platforms

