// JavaScript Document

//Utilitaires pour modifier le DOM//

function changeTitle(title) {
  document.getElementById ("quest_title").innerHTML = title;
}

function changeAnimal(animal) {
	document.getElementById ("quest_animal").src = animal;
}

function appendAnswer(answer, index) {
  document.getElementById("quest_answer")
    .insertAdjacentHTML(
      'beforeend',
      '<input type="radio" name="answer" id="' + index + '" value="' + index + '" onclick="onAnswerChange(event)" required /> <label for="' + index + '">' + answer + '</label><br>',
    );
}



function clearAnswers() {
  document.getElementById ("quest_answer").innerHTML = '';
}

function goNext () {
  currentQuest++;
	if (currentQuest >=titles.length) {
	var total = 0;
		for (var indexQuest=0; indexQuest<userAns.length; indexQuest++){
			var indexAns = Number(userAns [indexQuest])
			total=total+points[indexQuest][indexAns]
		}
	if (total>=23) {
		document.getElementById ("naturalistic").style.display="grid";
			} 
			else if (total>=20) {
				document.getElementById ("ecologistic").style.display="grid";
			}
			else if (total>=18) {
				document.getElementById ("humanistic").style.display="grid";
			}
			else if (total>=15) {
				document.getElementById ("moralistic").style.display="grid";
			}
			else if (total>=14) {
				document.getElementById ("scientistic").style.display="grid";
			}
			else if (total>=10) {
				document.getElementById ("aesthetic").style.display="grid";
			}
			else if (total>=7) {
				document.getElementById ("utilitarian").style.display="grid";
			}
			else if (total>=5) {
				document.getElementById ("dominionistic").style.display="grid";
			}
			else {
				document.getElementById ("negativistic").style.display="grid";
			}
        document.getElementById ("att_struc").style.display="grid";
	document.getElementById ("questions").style.display="none";
	document.getElementById ("start").style.display="none";
	} else {
		  render ();
	}
}

function render () {
  clearAnswers();
  
  changeTitle (titles[currentQuest]);
  var i; 
  for (i=0; i < answers[currentQuest].length; i++) {
    appendAnswer(answers[currentQuest][i], i);
  }
  document.getElementById("questions").className = "question"+ currentQuest;

	changeAnimal (animals[currentQuest]);
}

//Variables//

var titles = [
	'<h6>Question 1</h6><br> Finish the statement: I like squirrels because...', 
	'<h6>Question 2</h6><br>Coyotes are seen more and more in the city. <br>What adjective would you use to describe a coyote?', 
	'<h6>Question 3</h6><br>You are walking on a city park trail when you suddenly encounter a brown snake. You...',
	'<h6>Question 4</h6><br>It\'\s morning. There is house sparrow singing outside your bedroom window. You...',
	'<h6>Question 5</h6><br>You are at a popular lookout spot in the city. While enjoying the view you look down and notice a family of raccoons. What is your first thought?'
];

var answers = [
  ["They're cute", "They're good scavengers", "I don't like squirrels", "They bring life to the city", "They can be easily hunted"],
  ["Majestic", "Dangerous", "Mischevious", "Furry", "Fast"],
  ["Jump back, scream, and run in the opposite direction", "Pause and observe them", "You grab the nearest stick and and relocate them off the trail", "You think about how you could use their skin to make a purse", "You take a selfie with the snake and post it to your Instagram story"],
  ["Look outside to try to locate them", "Sigh, roll over and cover your ears with a pillow", "You Google 'house sparrow meaning'", "You Google 'do house sparrows actually live in houses?'", "You Google 'house sparrow population in the city'"],
  ["You wonder how if the city is monitoring raccoons around the lookout", "You think they are adoble and take out your phone to snap a photo", "You worry that they will attack people at the lookout spot", "You think that they would be much better off outside the city", "You think about how lucky you are to see them"]
]

var points = [
    [4,3,0,5,1],
    [4,0,2,1,3],
    [0,3,5,1,4],
	[5,0,2,3,4],
	[4,3,0,1,2],
]

var userAns = [];
var currentAns;

var currentQuest = -1;

var animals = [
	'../animated_squirrel.gif',
	'../animated_coyote.gif',
	'../animated_snek.gif',
	'../animated_borb.gif',
	'../animated_raccoon.gif'
]

//Events//

document.getElementById ("quest_form").onsubmit = function (e){
  e.preventDefault();
  userAns[currentQuest] = currentAns;
  
  goNext ();
}

function onAnswerChange(e) {
  currentAns = e.target.value;
}

goNext ();
