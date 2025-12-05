
// Store user's answers
let answer = {
  q1: null,
  q2: null,
  q3: null
};

// Get global elements
let startScreen = document.getElementById('start-screen');
let question1Screen = document.getElementById('question1-screen');
let question2Screen = document.getElementById('question2-screen');
let question3Screen = document.getElementById('question3-screen');
let resultsScreen = document.getElementById('results-screen');

// Get buttons
let startBtn = document.getElementById('start-btn');
let retakeBtn = document.getElementById('retake-btn');
let viewAllBtn = document.getElementById('view-all-btn');

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
    answer.q1 = button.getAttribute('data-value');
    showScreen(question2Screen);
  });
});

// Question 2 - click any texture
let question2Buttons = document.querySelectorAll('[data-question="2"]');
question2Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer.q2 = button.getAttribute('data-value');
    showScreen(question3Screen);
  });
});

// Question 3 - click any flavor
let question3Buttons = document.querySelectorAll('[data-question="3"]');
question3Buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    answer.q3 = button.getAttribute('data-value');
    showResults();
  });
});



const personalities = [
  {
    title:'Bold Explorer',
    description:'You\'re adventurous and love intense flavors! You\'re not afraid to try new things and enjoy complex taste experiences.',
    image:'https://www.hillcountrychocolate.com/cdn/shop/articles/pairing-pleasure-is-chocolate-and-red-wine-a-good-combo-804059.jpg?v=1713829638',
    combinations: [
      {
        matches: ['dark','nuts-crunchy','spicy'],
        pairing:'Dark chocolate bark with chili-roasted almonds and a smoky mezcal on the side.',
        whyItWorks:'The chili\'s capsaicin makes the cocoa flavors taste deeper and richer, while roasted nuts add umami and crunch; mezcal\'s smoky notes mirror dark chocolate\'s earthy aromatics, so everything feels intentionally intense instead of just "too bitter."'
      },
      {
        matches: ['dark','plain','spicy'],
        pairing:'Simple 70–80% dark chocolate with a chili–cinnamon hot chocolate or chili-infused black tea.',
        whyItWorks:'With no extra toppings, you get a clean triangle of bitter + sweet + heat, where capsaicin heightens your perception of cocoa\'s fruity notes and the spice warmth lingers pleasantly instead of burning.'
      },
      {
        matches: ['dark','nuts-crunchy','coffee'],
        pairing:'Dark chocolate with hazelnuts alongside a short, intense espresso.',
        whyItWorks:'Roasted nuts and coffee share similar Maillard "roasty" aromas with dark chocolate, so the combo feels layered but still coherent—like turning the volume up on the same flavor family, not mixing random tracks.'
      },
      {
        matches: ['dark','nuts-crunchy','boozy'],
        pairing:'Bold dark chocolate with nuts and boozy flavors pairs excellently with a rich whiskey or dark rum.',
        whyItWorks:'The nuts provide a savory contrast to the sweetness, while the alcohol\'s warmth enhances the chocolate\'s depth and creates a sophisticated aftertaste.'
      },
      {
        matches: ['dark','smooth-creamy','spicy'],
        pairing:'Dark chocolate ganache with a hint of chili, served with chai-spiced dark hot chocolate.',
        whyItWorks:'The extra fat from cream buffers the spice, so you get a slow, cozy warmth instead of a harsh burn, and the spices (cardamom, ginger, cinnamon) echo chocolate\'s naturally warm, baked notes.'
      },
      {
        matches: ['dark','nuts-crunchy','fruity'],
        pairing:'Dark chocolate with hazelnuts and dried cherries, plus a medium-bodied red wine like Merlot.',
        whyItWorks:'Cherries and red wine bring acidity and red-fruit aromas that cut through cocoa\'s bitterness, while the nuts add texture and a bit of fat to soften tannins in both the chocolate and the wine.'
      },
      {
        matches: ['dark','smooth-creamy','fruity'],
        pairing:'Dark chocolate mousse with fresh raspberries and a splash of raspberry liqueur.',
        whyItWorks:'The airy, creamy mousse softens dark chocolate\'s edge, and tart berries add brightness that keeps the dessert from feeling heavy, a classic sweet-acid balance used by chocolatiers.'
      },
      {
        matches: ['dark','smooth-creamy','boozy'],
        pairing:'Pair creamy dark chocolate with brandy or tawny port.',
        whyItWorks:'Port\'s dried-fruit notes echo cocoa\'s natural raisin aromas, while brandy\'s vanilla compounds complement chocolate\'s sweetness. The creaminess lowers alcohol burn, making each sip smoother.'
      },
      {
        matches: ['dark','smooth-creamy','classic-sweet'],
        pairing:'Dark creamy chocolate with classic sweetness pairs beautifully with a warm cup of black tea or coffee.',
        whyItWorks:'Tea tannins grip onto cocoa particles and create a longer, smoother finish.'
      },
      {
        matches: ['dark','nuts-crunchy','classic-sweet'],
        pairing:'Try dark chocolate with walnut banana bread or toasted nut loaf.',
        whyItWorks:'Banana\'s esters bring out cocoa\'s tropical notes, and nuts provide contrast to dark chocolate\'s bitterness. Warm baked goods increase aromatic release — making the chocolate taste sweeter.'
      },
      {
        matches: ['dark','plain','classic-sweet'],
        pairing:'Simple dark chocolate with classic sweetness pairs perfectly with a strong cup of coffee or espresso.',
        whyItWorks:'The simplicity allows both flavors to shine, while dark chocolate\'s bitterness balances the classic sweetness, creating a sophisticated and energizing combination.'
      }
    ]
  },
  {
    title:'Classic Loyalist',
    description:'You appreciate the familiar and comforting. You love traditional flavors that bring back happy memories.',
    image:'https://www.thehighfivecompany.com/wp-content/uploads/2022/01/THFC_BlogPost_24012022_900x600.jpg',
    combinations: [
      {
        matches: ['milk','smooth-creamy','classic-sweet'],
        pairing:'Enjoy your milk chocolate with a warm cup of lavendar tea or a glass of cold milk for the perfect cozy moment.',
        whyItWorks:'The extra dairy echoes milk chocolate\'s creamy profile, while gentle floral/vanilla notes add complexity without adding more sugar. Studies on fat–sweetness interaction show that fat can dampen bitterness and make sweetness feel rounder and more "full," which is exactly what\'s happening in this cozy combo.'
      },
      {
        matches: ['milk','plain','classic-sweet'],
        pairing:'Classic milk chocolate is perfect with a glass of cold milk or a warm cookie.',
        whyItWorks:'Milk chocolate was invented in Switzerland in 1875, and pairing it with milk creates a harmonious flavor profile that highlights its smooth, creamy nature.'
      },
      {
        matches: ['milk','smooth-creamy','coffee'],
        pairing:'Creamy milk chocolate with coffee notes pairs beautifully with a warm vanilla latte or cappuccino.',
        whyItWorks:'The vanilla notes complement milk chocolate\'s sweetness, while the coffee adds depth and the warm temperature enhances the creamy texture, creating a comforting and energizing combination.'
      },
      {
        matches: ['milk','nuts-crunchy','classic-sweet'],
        pairing:'Milk chocolate with nuts and classic sweetness goes perfectly with a warm cup of chai tea or hot chocolate.',
        whyItWorks:'The spices in chai tea enhance the chocolate\'s flavor, while the nuts add texture and the warmth brings out the chocolate\'s creamy richness.'
      },
      {
        matches: ['milk','smooth-creamy','fruity'],
        pairing:'Creamy milk chocolate with fruity notes pairs wonderfully with a fruit smoothie or fresh orange juice.',
        whyItWorks:'The fruit\'s natural acidity cuts through the chocolate\'s richness, while the creamy texture creates a smooth, refreshing combination that\'s both indulgent and light.'
      },
      {
        matches: ['milk','nuts-crunchy','coffee'],
        pairing:'Milk chocolate with nuts and coffee notes pairs perfectly with a warm mocha or coffee with cream.',
        whyItWorks:'The nuts add texture and protein, while the coffee enhances the chocolate\'s flavor, creating a satisfying and energizing combination that\'s both indulgent and comforting.'
      },
      {
        matches: ['milk','smooth-creamy','spicy'],
        pairing:'Creamy milk chocolate with spicy flavors pairs excellently with a spicy chai latte or ginger tea.',
        whyItWorks:'Dairy fat suppresses perceived bitterness and tempers spice burn. That lets warm spices feel cozy and aromatic instead of aggressive, which is why “spiced hot chocolate” is such a common tradition.'
      },
      {
        matches: ['milk','plain','spicy'],
        pairing:'Simple milk chocolate with spicy notes pairs wonderfully with a spicy hot chocolate or Mexican chocolate drink.',
        whyItWorks:'Traditional Mexican chocolate drinks rely on exactly this trio: sweet cocoa, warm spice, gentle heat. Milk chocolate echoes that profile, so the pairing feels culturally natural and sensorially balanced.'
      },
      {
        matches: ['milk','plain','boozy'],
        pairing:'Simple milk chocolate with boozy flavors pairs perfectly with a creamy liqueur or Bailey\'s Irish Cream.',
        whyItWorks:'Cream liqueurs share milk chocolate’s core flavors: dairy, vanilla, sweetness. Alcohol lifts aromatics and adds a warm finish so it feels more like a composed dessert than just “hot chocolate with a shot.”'
      },
      {
        matches: ['milk','plain','coffee'],
        pairing:'Simple milk chocolate with coffee notes pairs beautifully with a warm latte or cappuccino.',
        whyItWorks:'The simplicity allows both flavors to complement each other, while milk chocolate\'s sweetness balances coffee\'s bitterness, creating a harmonious and energizing combination.'
      }
    ]
  },
  {
    title:'Playful Dreamer',
    description:'You have refined taste and appreciate delicate, sophisticated flavors. You enjoy the finer things in life and live for fun.',
    image:'https://ottawabaskets.ca/cdn/shop/files/BrocktonChampagne_ChocolateDippedStrawberriesGift_2000x.jpg?v=1729089316',
    combinations: [
      {
        matches: ['white','smooth-creamy','fruity'],
        pairing:'White chocolate panna cotta topped with raspberries and passion fruit.',
        whyItWorks:'White chocolate is basically cocoa butter + sugar, so it loves acidity. Tart fruit cuts through the fat and makes the dessert taste bright instead of cloying. Many chocolatiers recommend pairing white chocolate with berries and tropical fruits for this reason.'
      },
      {
        matches: ['white','plain','fruity'],
        pairing:'Simple white chocolate with a citrus salad (orange, lime, grapefruit).',
        whyItWorks:'Acidic citrus juices and aromatic zest slice right through cocoa butter’s richness and clean your palate between bites. Pairing guides often recommend citrus with white or milk chocolate for exactly this “refresh & reset” effect.'
      },
      {
        matches: ['white','smooth-creamy','classic-sweet'],
        pairing:'Creamy white chocolate with classic sweetness pairs wonderfully with vanilla ice cream or a warm vanilla custard.',
        whyItWorks:'Vanilla doubles down on white chocolate’s sweet, creamy profile, turning it into a “birthday cake / bakery” flavor. Soft bread or ice cream adds comforting texture and just enough starch or cold to keep it from feeling too rich.'
      },
      {
        matches: ['white','nuts-crunchy','fruity'],
        pairing:'White chocolate with pistachios and dried cranberries, plus chilled coconut water or a spritzer.',
        whyItWorks:'Salty, crunchy nuts keep sweetness in check, while dried fruit adds tang and chewiness. A light, refreshing drink (coconut water, spritzer) avoids piling on more sugar and helps reset your palate.'
      },
      {
        matches: ['white','nuts-crunchy','spicy'],
        pairing:'White chocolate bark with candied ginger and toasted pecans.',
        whyItWorks:'Ginger’s heat is more aromatic than aggressive; paired with nuts and creamy sweetness it feels warm, cozy, and complex. You get sweetness, spice, and crunch all in one bite.'
      },
      {
        matches: ['white','nuts-crunchy','coffee'],
        pairing:'White chocolate–macadamia biscotti with a latte or earthy Indonesian coffee.',
        whyItWorks:'white chocolate with earthy, lower-acidity coffees (e.g., Indonesia) keep things from becoming too sharp. Nuts add a buttery crunch that matches the body of the coffee.'
      },
      {
        matches: ['white','nuts-crunchy','classic-sweet'],
        pairing:'White chocolate–cashew clusters with a sprinkle of flaky sea salt.',
        whyItWorks:'Salty crunch stops white chocolate from feeling “one-note.” Research shows sodium ions can suppress bitterness and boost perceived sweetness and fruity/floral notes in chocolate, which makes each bite taste more defined.'
      },
      {
        matches: ['white','smooth-creamy','spicy'],
        pairing:'Creamy white chocolate with spicy flavors pairs beautifully with a spicy hot chocolate or chai latte.',
        whyItWorks:'White chocolate adds body and sweetness; chai adds structure (tannins) and aromatic warmth. Because white chocolate has no cocoa solids, it “borrows” character from the spice blend and tea.'
      },
      {
        matches: ['white','smooth-creamy','coffee'],
        pairing:'Creamy white chocolate with coffee notes pairs wonderfully with a white chocolate latte or coffee with cream.',
        whyItWorks:'The creamy texture enhances white chocolate\'s buttery richness, while the coffee adds depth and complexity, creating a sophisticated and energizing combination.'
      },
      {
        matches: ['white','plain','spicy'],
        pairing:'Simple white chocolate with spicy notes pairs excellently with a spicy Mexican hot chocolate or ginger tea.',
        whyItWorks:'The simplicity allows the spice to shine, while white chocolate\'s sweetness balances the heat, creating an unexpected and exciting flavor profile.'
      },
      {
        matches: ['white','plain','coffee'],
        pairing:'Simple white chocolate with coffee flavors pairs perfectly with a warm latte or coffee with a splash of cream.',
        whyItWorks:'The simplicity allows both flavors to complement each other, while white chocolate\'s buttery richness enhances the coffee, creating a smooth and energizing combination.'
      },
      {
        matches: ['white','plain','classic-sweet'],
        pairing:'Simple white chocolate with classic sweetness pairs beautifully with vanilla ice cream or a warm vanilla custard.',
        whyItWorks:'The simplicity allows both flavors to shine, while white chocolate\'s buttery richness complements the classic sweetness, creating a harmonious and indulgent combination.'
      }
    ]
  },
  {
    title:'Refined Connoisseur',
    description:'You value simplicity and quality. You prefer pure, uncomplicated flavors that speak for themselves.',
    image:'https://stonestreetcoffee.com/cdn/shop/articles/flavored-chocolate-coffee_1600x.jpg?v=1726759186',
    combinations: [
      {
        matches: ['dark','plain','coffee'],
        pairing:'Dark chocolate and coffee are a match made in heaven - try them together for a rich, energizing treat.',
        whyItWorks:'The darker the chocolate, the less sugar it contains. 70% dark chocolate has about 30% sugar, which balances perfectly with coffee\'s natural bitterness for a sophisticated flavor profile.'
      },
      {
        matches: ['dark','smooth-creamy','coffee'],
        pairing:'Dark creamy chocolate with coffee notes pairs perfectly with a strong espresso or dark roast coffee.',
        whyItWorks:'The creamy texture softens the intensity of dark chocolate while the coffee\'s robust flavor enhances the chocolate\'s depth, creating a luxurious mouthfeel.'
      },
      {
        matches: ['dark','plain','boozy'],
        pairing:'Simple dark chocolate with boozy notes pairs wonderfully with a rich port wine or dark beer.',
        whyItWorks:'The simplicity allows the alcohol\'s complex flavors to shine, while dark chocolate\'s bitterness complements the wine\'s tannins or beer\'s hops, creating a sophisticated pairing.'
      },
      {
        matches: ['dark','plain','fruity'],
        pairing:'Simple dark chocolate with fruity notes pairs perfectly with a light red wine or fruit-infused water.',
        whyItWorks:'The fruit\'s acidity cuts through dark chocolate\'s richness, while the simplicity allows both flavors to shine without overwhelming each other.'
      }
    ]
  },
  {
    title:'Playful Adventurer',
    description:'You love variety and excitement! You enjoy mixing textures and flavors for a fun, dynamic experience.',
    image:'https://media.istockphoto.com/id/157506007/photo/milk-chocolate-chunks.jpg?s=612x612&w=0&k=20&c=gUOS1APckPKIZymJY6H5qtFfcaoz_Npw_kKamtyA764=',
    combinations: [
      {
        matches: ['milk','nuts-crunchy','fruity'],
        pairing:'Milk chocolate with nuts and fruit goes perfectly with a light white wine or sparkling water.',
        whyItWorks:'The combination of chocolate and nuts provides protein, making it more satisfying, while the fruity notes complement the wine\'s acidity and the nuts add a satisfying crunch that contrasts with the smooth chocolate.'
      },
      {
        matches: ['milk','nuts-crunchy','spicy'],
        pairing:'Milk chocolate with nuts and spicy flavors pairs excellently with a spicy chai latte or ginger tea.',
        whyItWorks:'The milk chocolate\'s sweetness balances the spice, while the nuts add texture and protein, creating a warming and satisfying combination that\'s both comforting and exciting.'
      },
      {
        matches: ['milk','nuts-crunchy','boozy'],
        pairing:'Milk chocolate with nuts and boozy notes pairs wonderfully with a creamy liqueur or Irish coffee.',
        whyItWorks:'The nuts provide a savory contrast to the sweetness, while the alcohol enhances the chocolate\'s richness and creates a sophisticated, indulgent flavor profile.'
      },
      {
        matches: ['milk','plain','fruity'],
        pairing:'Simple milk chocolate with fruity flavors pairs perfectly with fresh fruit or a fruit-based dessert wine.',
        whyItWorks:'The simplicity of plain chocolate allows the fruit\'s natural sweetness to shine, while milk chocolate\'s creaminess creates a smooth, refreshing combination.'
      }
    ]
  },
  {
    title:'Quiet Edgy',
    description:'You take people by surprise. You love rich, decadent flavors that have a spark.',
    image:'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1',
    combinations: [
      {
        matches: ['white','smooth-creamy','boozy'],
        pairing:'White chocolate with boozy flavors pairs excellently with champagne or even rum!.',
        whyItWorks:'Chocolate and alcohol have been paired together for centuries! The sweetness of white chocolate balances the dryness of champagne, while rum\'s caramel notes enhance the chocolate\'s buttery richness.'
      },
      {
        matches: ['white','nuts-crunchy','boozy'],
        pairing:'White chocolate with nuts and boozy notes pairs wonderfully with a nutty liqueur or amaretto.',
        whyItWorks:'The nuts complement the liqueur\'s flavor profile, while white chocolate\'s sweetness balances the alcohol\'s intensity, creating a harmonious and sophisticated pairing.'
      },
      {
        matches: ['white','plain','boozy'],
        pairing:'Simple white chocolate with boozy flavors pairs perfectly with a light dessert wine or prosecco.',
        whyItWorks:'The simplicity allows the alcohol\'s flavors to shine, while white chocolate\'s buttery richness complements the wine\'s effervescence and creates an elegant, refined combination.'
      }
    ]
  },
  {
    title:'Intense Perfectionist',
    description:'You seek depth and intensity in everything. You appreciate complex flavors and aren\'t afraid of bold choices.',
    image:'https://www.tasteofhome.com/wp-content/uploads/2025/02/GettyImages-2181217380-scaled-e1739904698896.jpg',
    combinations: [
      {
        matches: ['dark','smooth-creamy','coffee'],
        pairing:'Dark creamy chocolate with coffee notes pairs perfectly with a strong espresso or dark roast coffee.',
        whyItWorks:'Dark chocolate contains theobromine, which gives you a gentle energy boost without the crash! Combined with coffee\'s caffeine, this creates a sustained energy lift while the creamy texture balances the intensity of both flavors.'
      },
      {
        matches: ['dark','nuts-crunchy','spicy'],
        pairing:'Dark chocolate with nuts and spicy flavors pairs excellently with a bold red wine or spicy hot chocolate.',
        whyItWorks:'The nuts add protein and texture, while the spice creates an exciting contrast with dark chocolate\'s bitterness, resulting in a complex and energizing flavor combination.'
      },
      {
        matches: ['dark','plain','boozy'],
        pairing:'Simple dark chocolate with boozy notes pairs wonderfully with a rich port wine or dark beer.',
        whyItWorks:'The simplicity allows the alcohol\'s complex flavors to shine, while dark chocolate\'s bitterness complements the wine\'s tannins or beer\'s hops, creating a sophisticated pairing.'
      }
    ]
  },
  {
    title:'Nostalgic Traditionalist',
    description:'You cherish simple pleasures and classic flavors. You find joy in the familiar and timeless.',
    image:'https://blog.skipscandies.com/wp-content/uploads/2019/05/white-Dark-and-Milk-chocolates.jpg?fit=1024%2C536&ssl=1',
    combinations: [
      {
        matches: ['milk','plain','classic-sweet'],
        pairing:'Classic milk chocolate is perfect with a glass of cold milk or a warm cookie.',
        whyItWorks:'Milk chocolate is the most popular type of chocolate in the world! The cold milk enhances the chocolate\'s creaminess, while warm cookies create a comforting contrast of temperatures and textures that brings back childhood memories.'
      },
      {
        matches: ['milk','smooth-creamy','boozy'],
        pairing:'Creamy milk chocolate with boozy notes pairs beautifully with a creamy liqueur or Irish cream.',
        whyItWorks:'The creamy liqueur enhances the chocolate\'s smoothness, while the alcohol adds sophistication to the familiar milk chocolate flavor, creating a nostalgic yet elegant combination.'
      },
      {
        matches: ['milk','nuts-crunchy','classic-sweet'],
        pairing:'Milk chocolate with nuts and classic sweetness pairs perfectly with a warm nut bread or banana bread.',
        whyItWorks:'The nuts in both the chocolate and bread create a harmonious texture, while the warm bread enhances the chocolate\'s flavor and creates a satisfying, homey combination.'
      }
    ]
  },
];

function showPersonality(userData, appData)  {
  //console.log(Object.values(userData)[0]);
  let foundMatch = false;
  appData.forEach( item => {
    // skip default personality 
    if (!item.combinations || item.combinations.length === 0) {
      return;
    }
    
    // Check each combination for this personality
    item.combinations.forEach( combo => {
      if (combo.matches[0] == Object.values(userData)[0] && combo.matches[1] == Object.values(userData)[1] && combo.matches[2] == Object.values(userData)[2]) {
        console.log('we have a match');
        // Pass both personality and the matched combination
        printMatch(item, combo);
        foundMatch = true;
        return;
      }  
      else {
        console.log('we do not have a match');
      }
    });
  });
  
  // If no match found, show error or default message
  if (!foundMatch) {
    console.log('No match found for combination:', userData);
  }
}

function printMatch(personality, combination){
  console.log(personality);
  console.log(combination);
  
  // Get all result elements
  let resultImage = document.querySelector('.result-emoji');
  let resultTitle = document.getElementById('personality-title');
  let resultDescription = document.getElementById('personality-description');
  let pairingSuggestion = document.getElementById('pairing-suggestion');
  let funFact = document.getElementById('fun-fact');

  resultImage.innerHTML = '<img src="' + personality.image + '" alt="Chocolate result">';
  resultTitle.textContent = personality.title;
  resultDescription.textContent = personality.description;
  // Use combination's pairing if available, otherwise use default message
  pairingSuggestion.textContent = combination ? combination.pairing : 'Take the risk and pair your chocolate with spicy salsa, sharp cheddar cheese, or a cold beer!';
  // Use combination's whyItWorks if available, otherwise use default message
  funFact.textContent = combination ? combination.whyItWorks : 'Chocolate makes you smarter, so if you like chocolate, you are smart!';
  
  // Show all sections
  resultDescription.style.display = 'block';
  document.querySelector('.pairing-section').style.display = 'block';
  document.querySelector('.fun-fact').style.display = 'block';
  
  showScreen(resultsScreen);
  
  // confetti 
  confetti({
    colors:[
      '#8C5A3C',
      '#d78f63ff',
      '#f2d9c9ff',
      '#2a1f18ff'
    ]
  });
}

// Show results page
function showResults() {
  showPersonality(answer, personalities);
}

// Retake quiz button - go back to start
if (retakeBtn) {
retakeBtn.addEventListener('click', function() {
    answer.q1 = null;
    answer.q2 = null;
    answer.q3 = null;
  showScreen(startScreen);
});
}

// View all chocolate pairings button - redirects to pairings page
if (viewAllBtn) {
  viewAllBtn.addEventListener('click', function() {
    window.location.href = 'pairings.html';
  });
}

