// JavaScript Document

//jQuery Select Birth Month still working on this
   // $(document).ready(function(){
      //  $("#submit").on("click", function(){
       // date = parseInt($('#a').val());
      //      console.log(date);
       // });
  //  });

//jQuery Accordian
  $( function() {
    $( "#accordion" ).accordion();
  } );

//equal check
function areEqual(){
   var len = arguments.length;
   for (var i = 1; i< len; i++){
      if (arguments[i] === null || arguments[i] !== arguments[i-1])
         return false;
   }
   return true;
}
//card descriptions
var cardDescription = [
	{name: "Ace of Wands", suit: "wands", interpretation: "a new idea, something not before considered, a new way of looking at things, creative thought, invention, enterprise."},
	{name: "Ace of Swords", suit: "swords", interpretation: "A new action, or act of will. A step forward becomes possible. Initiative, courage."},
	{name: "Ace of Cups", suit: "cups", interpretation: "A new way of feeling-- beginning of emotion. Intuition. Inspiration."},
	{name: "Ace of Pentacles", suit: "pentacles", interpretation: "A new skill, a new source of income, a new person, a new possibility for growth. Fertility."},
	{name: "Two of Wands", suit: "wands", interpretation: "Ideas begin to move, have force, expand. Wisdom is the mover."},
	{name: "Two of Swords", suit: "swords", interpretation: "Forceful action, will power. Action does not have energy behind it. Querent can move if he or she has found the proper direction in which to do so."},
	{name: "Two of Cups", suit: "cups", interpretation: "Emotion has impetus or can give impetus. Strong intuition. Inspiration."},
	{name: "Two of Pentacles", suit: "pentacles", interpretation: "Physical force, physical energy, movement. Good work."},
	{name: "Three of Wands", suit: "wands", interpretation: "Thoughts have form and therefore direction. They have taken shape and have become clear. Understanding."},
	{name: "Three of Swords", suit: "swords", interpretation: "A direction is possible for action. Action by or for the Goddess. Motherhood in all senses."},
	{name: "Three of Cups", suit: "cups", interpretation: "Emotion, intuition takes on form, becomes more defined, more restricted."},
	{name: "Three of Pentacles", suit: "pentacles", interpretation: "Pregnancy, change in weight, skill in work, acquisition of property or material goods."},
	{name: "Four of Wands", suit: "wands", interpretation: "Mental stability, organized thought, a sense of order, finding others of like mind, guidance from Ancient Ones. A coming together of ideas."},
	{name: "Four of Swords", suit: "swords", interpretation: "Constructive action, effective action, building, putting in order. Will put in order to become useful. Energy now has a project to be directed to."},
	{name: "Four of Cups", suit: "cups", interpretation: "Devotion, perfect love, expansion of emotion. Emotion in the right place, growth in circle of loved ones, a desire to serve the gods. Forgiveness."},
	{name: "Four of Pentacles", suit: "pentacles", interpretation: "Safety, security, your house is in order. Financial security. Health-- your body is achieving its correct archetype."},
	{name: "Five of Wands", suit: "wands", interpretation: "Changing ideas, getting rid of outmoded thoughts, lessons, learned, will power, a restriction of thought. Extra attention to certain areas. That which is unnecessary will be blown away."},
	{name: "Five of Swords", suit: "swords", interpretation: "Tempering, purifying, cutting away. Energy, courage, defense of the wronged, might for the right. That which is temporal shall be cut away or burned away."},
	{name: "Five of Cups", suit: "cups", interpretation: "Strong emotions, righteous anger. That which is temporal will wash away."},
	{name: "Five of Pentacles", suit: "pentacles", interpretation: "Loss of weight, loss of money, but in order to teach a lesson. Any losses represented by fives are usally Karmic, and can therefore be less painful if you will strive to undersatnd them. Illness could be a warning to slow down."},
	{name: "Six of Wands", suit: "wands", interpretation: "Illumination, realization of bigger things, teaching, spiritual growth, humility, realization that there is a pattern to the universe. This often comes after an extremely difficult an trying period in life."},
	{name: "Six of Swords", suit: "swords", interpretation: "Self-sacrifice, the right action, a step toward spirituality, one who tries to better the world by acton. If Querent or subject of reading has not made this step, he or she will, MUST. Rebirth."},
	{name: "Six of Cups", suit: "cups", interpretation: "Devotion, love of life in all aspects, spirtual uplifting."},
	{name: "Six of Pentacles", suit: "pentacles", interpretation: "Prosperity, healing, financial balance."},
	{name: "Seven of Wands", suit: "wands", interpretation: "Creativity, inspiration, the arts, attraction, achievement of goals. Victory. Go!"},
	{name: "Seven of Swords", suit: "swords", interpretation: "Creative action, especially artistic. Energy flows into creative projects. Development of skills in artistic fields."},
	{name: "Seven of Cups", suit: "cups", interpretation: "Success in love, attraction, magnetism, love in many forms, emotion is inspiring, achievement of ideas."},
	{name: "Seven of Pentacles", suit: "pentacles", interpretation: "Achievement of physical goal. Harvest."},
	{name: "Eight of Wands", suit: "wands", interpretation: "Science, books, learning, Truthfulness, communication."},
	{name: "Eight of Swords", suit: "swords", interpretation: "Directed activity, specific movements with specific boundaries. Action can move you toward success if carefully thought out. Legal action."},
	{name: "Eight of Cups", suit: "cups", interpretation: "Emotion without thought-- common sense, logic prevails. Mind and heart are in accord."},
	{name: "Eight of Pentacles", suit: "pentacles", interpretation: "Mind has a positive effect on body. Sensible health program-- no nerve problems. Wealth can be obtained by solid, logical action."},
	{name: "Nine of Wands", suit: "wands", interpretation: "open psychic passages, deeper levels of consciousness."},
	{name: "Nine of Swords", suit: "swords", interpretation: "Results are about to manifest it is almost time to move."},
	{name: "Nine of Cups", suit: "cups", interpretation: "Intuitive feelings, divination is effective. What you feel is probably correct. Your wish will probably come true."},
	{name: "Nine of Pentacles", suit: "pentacles", interpretation: "Fertility, possible conception. Coming growth. Potential is great."},
	{name: "Ten of Wands", suit: "wands", interpretation: "That which the mind has built will come to pass. Discrimination."},
	{name: "Ten of Swords", suit: "swords", interpretation: "You will see the physical results of your actions-- their pleasantness or unpleasantness, depending on the action."},
	{name: "Ten of Cups", suit: "cups", interpretation: "True feelings manifest. Feelings no longer unsure. That which you intuited comes to pass."},
	{name: "Ten Pentacles", suit: "pentacles", interpretation: "Solidity, permance in health and wealth. Financial stability. Happy, healthy home."},
];

//first card drawn
function threeCardTarot() {
	cardOne = Math.floor((Math.random() * 40));
	console.log(cardDescription[cardOne].name);
	cardOneDisplay = cardDescription[cardOne].name;
    document.getElementById("card_display1").innerHTML = cardOneDisplay;
	document.getElementById( "dealer" ).setAttribute( "onClick", "javascript: threeCardTarotTwo();" );
}

//second card drawn
function threeCardTarotTwo() {
cardTwo = Math.floor((Math.random() * 40));
	if (areEqual(cardOne,cardTwo)){
		var cardTwo = Math.floor((Math.random() * 40));
	}
	else {
		console.log(cardDescription[cardTwo].name);
		cardTwoDisplay = cardDescription[cardTwo].name;
document.getElementById("card_display2").innerHTML = cardTwoDisplay;
	}
	document.getElementById( "dealer" ).setAttribute( "onClick", "javascript: threeCardTarotThree();" );
}

//third card drawn
function threeCardTarotThree() {
	var cardOne = cardOne;
	var cardTwo = cardTwo;
cardThree = Math.floor((Math.random() * 40));
	if (areEqual(cardOne,cardTwo,cardThree)){
		var cardThree = Math.floor((Math.random() * 40));
	}
	//I don't think this is needed anymore//
	//else if(cardTwo == cardThree){
	//	var cardThree = Math.floor((Math.random() * 40));
	//}
	else {
		console.log(cardDescription[cardThree].name);
		cardThreeDisplay = cardDescription[cardThree].name;
document.getElementById("card_display3").innerHTML = cardThreeDisplay;
	}
	document.getElementById( "dealer" ).setAttribute( "onClick", "javascript: threeCardTarotComplete();" );
}
	//final message
function threeCardTarotComplete() {
document.getElementById("card_display4").innerHTML = "Hmmm...lets's take a look. The Divine will guide you with... " + cardDescription[cardOne].interpretation;
}
