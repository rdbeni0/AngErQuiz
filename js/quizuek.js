var quiz = [{
  "question": "Test jest jednokrotnego wyboru. Za każdą dobrą odpowiedź dodawany jest 1 punkt. Nie ma ograniczeń czasowych.",
  "choices": ["Rozumiem, chcę teraz zacząć."],
  "correct": "Rozumiem, chcę teraz zacząć."
}, {
  "question": "It was _____ so we didn't get it.",
  "choices": ["too expensive", "enough expensive", "expensive enough", "expensive most"],
  "correct": "too expensive"
}, {
  "question": "I don't think much of ____ of the candidates.",
  "choices": ["both", "either", "neither"],
  "correct": "either"
}, {
  "question": "Carlos and his brother Patrick ______ traveling across the country next winter.",
  "choices": ["is", "are"],
  "correct": "are"
}, {
  "question": "My brother ______ a tiger last year.",
  "choices": ["sees", "saw", "seen"],
  "correct": "saw"
}, {
  "question": "______ Julia and Betty at last month's meeting?",
  "choices": ["Was", "Is", "Are"],
  "correct": "Was"
}, {
  "question": "Mariah: 'I will eat steak for dinner.' Tom: 'Mariah said (that) she ___ eat steak for dinner.'",
  "choices": ["willing", "will", "would"],
  "correct": "would"
}, {
  "question": "The movie has already _______ .",
  "choices": ["begin", "begun", "began", "begined"],
  "correct": "begun"
}, {
  "question": "My sister has been ______ in bed all morning.",
  "choices": ["lie", "lay", "lying", "layed"],
  "correct": "lying"
}, {
  "question": "We left the dog out last night and it nearly ____ to death.",
  "choices": ["freeze", "freezed", "frozed", "frozen", "froze"],
  "correct": "froze"
}, {
  "question": "Socrates ______ the poisonous hemlock.'",
  "choices": ["drunked", "drunken", "drunk", "drank"],
  "correct": "drank"
}, {
  "question": "The bus wasn't there. It __________ already.",
  "choices": ["had left", "had been left", "has left"],
  "correct": "had left"
}, {
  "question": "Nobody's free this Saturday. I'll have to __________ the party till next week.",
  "choices": ["put up with", "put on", "put off", "put up", "put in"],
  "correct": "put off"
}, {
  "question": "Is it all right if I pay _________ cheque?",
  "choices": ["on", "from", "in", "by"],
  "correct": "by"
}, {
  "question": "I have been studying hard, I hope to ___________ my History exam.",
  "choices": ["get round", "get through", "get through to", "get up"],
  "correct": "get through"
}, {
  "question": "All the leaflets were __________ during the exhibition.",
  "choices": ["given out", "taken out", "put out", "kept up"],
  "correct": "given out"
}, {
  "question": "How long __________ each other when they got married?",
  "choices": ["would they know", "had they known", "have they known", "has they known"],
  "correct": "had they known"
}, {
  "question": "He has been operated __________ his leg.",
  "choices": ["on", "in", "for", "with", "by"],
  "correct": "on"
}, {
  "question": "Many species of moth __________ disappeared.",
  "choices": ["has", "had", "are", "is", "go", "have"],
  "correct": "have"
}, {
  "question": "Excuse me, can you tell me where the museum is?",
  "choices": ["I like it a lot", "No, it`s mine", "It`s at the end of this street", "I traveled last summer"],
  "correct": "It`s at the end of this street"
}, {
  "question": "My mother is a good cook.",
  "choices": ["I agree you", "I agree with you", "I agree to you", "I agree by you", "I agree for you"],
  "correct": "I agree with you"
}, {
  "question": "If he doesn't stop stealing he's going to ______ trouble with the police.",
  "choices": ["get up", "get on with", "get about", "get into", "get away"],
  "correct": "get into"
}, {
  "question": "Are you _____ yet?",
  "choices": ["through", "over", "gone", "done"],
  "correct": "through"
}, {
  "question": "I _____ the Germany two years ago.",
  "choices": ["have been to", "have been in", "was in", "was to"],
  "correct": "was in"
}, {
  "question": "May I ______ you home? ",
  "choices": ["follow", "walk", "lift", "see"],
  "correct": "see"
}, {
  "question": "Safe is an adjective. What is its related noun?",
  "choices": ["safely", "safety", "safeness", "safer"],
  "correct": "safety"
}, {
  "question": "I wish I hadn't said it. If only I could __________.",
  "choices": ["turn round the clock", "wind up the alarm-clock", "turn the clock back", "turn the clock forward"],
  "correct": "turn the clock back"
}, {
  "question": "We have got a chance. - Let's make __________ it.",
  "choices": ["a go of", "go", "a go with", "go of", "go away with"],
  "correct": "a go of"
}, {
  "question": "Tara is exhausted. She __________.",
  "choices": ["had been running", "has running", "has been running", "runed", "ran", "had running"],
  "correct": "has been running"
}, {
  "question": "I have _____ the Dunajec river four times.'",
  "choices": ["swum", "swim", "swam", "swimming"],
  "correct": "swum"
}, {
  "question": "When I arrived, Peter __________ with his Playstation.",
  "choices": ["played", "was playing", "had been played", "has been playing"],
  "correct": "was playing"
}];


/* zdefiniowanie elementów */
var content = $("content"),
  questionContainer = $("question"),
  choicesContainer = $("choices"),
  scoreContainer = $("score"),
  submitBtn = $("submit");

/* zainicjowanie podstawowych zmiennych*/
var currentQuestion = 0,
  score = -1,
  askingQuestion = true;

function $(id) { /*skrot dla: document.getElementById */
  return document.getElementById(id);
}

function askQuestion() {
  var choices = quiz[currentQuestion].choices,
    choicesHtml = "";

  /* zapętlenie wyborów, stworzenie przycisków do formularza */
  for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }

  /* zaladowanie pytan */
  questionContainer.textContent = "Pytanie " + (currentQuestion) + ". " +
    quiz[currentQuestion].question;

  /* zaladowanie wyboru */
  choicesContainer.innerHTML = choicesHtml;

  /* ustaw na pierwszy raz */
  if (currentQuestion === 0) {
    scoreContainer.textContent = "PUNKTY: Brak poprawnych odpowiedzi na " +
      (quiz.length - 1) + " możliwych. Rozpocznij test językowy!";
    submitBtn.textContent = "ZAZNACZ i PODAJ ODPOWIEDŹ";
  }
}

function checkAnswer() {
  /* pytanie o odpowiedź czy procedowanie następnej odpowiedzi?? */
  if (askingQuestion) {
    submitBtn.textContent = "NASTĘPNE PYTANIE";
    askingQuestion = false;

    /* ustaw ktory przycisk jest zaznaczony */
    var userpick,
      correctIndex,
      radios = document.getElementsByName("quiz" + currentQuestion);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) { /* jezeli ten przycisk jest zaznaczony */
        userpick = radios[i].value;
      }

      /* zbierz index poprawnych odpowiedzi*/
      if (radios[i].value == quiz[currentQuestion].correct) {
        correctIndex = i;
      }
    }

    /* zmienne pozwalajace sprawdzic poprawnosc albo blad w odpowiedziach, policzyc wynik*/
    if (score == -1) { score++;
    } else
         {
    var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
    labelStyle.fontWeight = "bold";
    if (userpick == quiz[currentQuestion].correct) {
      score++;
      labelStyle.color = "green";
    } else {
      labelStyle.color = "red";
    }
        }

    scoreContainer.textContent = "PUNKTY: " + score + " poprawnych odpowiedzi na " +
      (quiz.length - 1) + " możliwych.";
  } else { /*nastepne pytanie*/
    /* ustawienia pozwalajace na odpowiedz na pytania */
    askingQuestion = true;
    /* zmiana przycisku na "PODAJ ODPOWIEDZ" */
    submitBtn.textContent = "ZAZNACZ i PODAJ ODPOWIEDŹ";
    /*  jezeli pytanie nie jest ostatnie, zmien numer pytania */
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      askQuestion();
    } else {
      showFinalResults();
    }
  }
}

function showFinalResults() {
 var koniec = Math.round(score / (quiz.length - 1) * 100);
/* ewentualnie mozna edytowac ten fragment!*/
    if (koniec<21){ content.innerHTML = "<h2>Koniec!</h2>" +
    "<h2><font color=red>Twoje wyniki są następujące:</h2>" +
    "<h3>" + score + " poprawnych odpowiedzi na " + (quiz.length - 1) + " pytań, czyli " + koniec + "%.</font></h3><h4><br> <font color=brown>Wynik nie jest satysfakcjonujący. Musisz jeszcze pouczyć się języka angielskiego. Niestety, ale z takim rezultatem nie zakwalifikujesz się np. do programu Erasmus. Czeka cię dużo pracy!</font></h4>"; }

else if (koniec<51){ content.innerHTML = "<h2>Koniec!</h2>" +
    "<h2><font color=red>Twoje wyniki są następujące:</h2>" +
    "<h3>" + score + " poprawnych odpowiedzi na " + (quiz.length - 1) + " pytań, czyli " + koniec + "%.</font></h3><h4><br> <font color=brown>Ten wynik nie jest satysfakcjonujący. Jednak jakąś wiedzę już posiadasz. Jesteś blisko wystarczającego poziomu, ale brakuje ci umiejętności. Musisz jeszcze trochę pouczyć się języka, aby mieć wieksze szanse zakwalifikowaia się np. do programu Erasmus. Powodzenia! </font></h4>"; }

else if (koniec<71){ content.innerHTML = "<h2>Koniec!</h2>" +
    "<h2><font color=green>Twoje wyniki są następujące:</h2>" +
    "<h3>" + score + " poprawnych odpowiedzi na " + (quiz.length - 1) + " pytań, czyli " + koniec + "%.</font></h3><h4><br> <font color=brown>Twój poziom językowy jest przeciętny. Z takimi wynikami masz szansę zakwalifikowania się np. do programu Erasmus. Jednak zawsze może być lepiej. Wyniki są wystarczające, lecz powinny zostać poprawione. Popracuj jeszcze nad tym!</font></h4>"; }

else if (koniec<91){ content.innerHTML = "<h2>Koniec!</h2>" +
    "<h2><font color=green>Twoje wyniki są następujące:</h2>" +
    "<h3>" + score + " poprawnych odpowiedzi na " + (quiz.length - 1) + " pytań, czyli " + koniec + "%.</font></h3><h4><br> <font color=brown>Twój wynik jest przyzwoity, ale brakuje ci trochę do perfekcji. Osiągając takie rezultaty jest szansa, że zostaniesz zakwalifikowany np. do programu Erasmus. Jesteś już blisko posiadania wysokich umiejętności językowych, ale może być lepiej!  </font></h4>"; }

else if (koniec<101){ content.innerHTML = "<h2>Koniec!</h2>" +
    "<h2><font color=green>Twoje wyniki są następujące:</h2>" +
    "<h3>" + score + " poprawnych odpowiedzi na " + (quiz.length - 1) + " pytań, czyli " + koniec + "%.</font></h3><h4><br> <font color=brown>Twój poziom językowy jest naprawdę niezły! Gratulacje, jeseś w okolicach górnej normy, czyli powyżej 90% dobrych odpowiedzi! Z takimi wynikami masz duże szanse np. aby zakwalifikować się do programu Erasmus. Oczywiście, możesz popracować jeszcze nad swoim językiem. Praktyka czyni mistrza!</font></h4>"; }

}


/*ewentualne policzenie wyników w zależności od odpowiedzi: http://www.w3schools.com/jsref/jsref_round.asp*/

window.addEventListener("load", askQuestion, false);
submitBtn.addEventListener("click", checkAnswer, false);
