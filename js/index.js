function down_arrow() {
  var element = document.getElementById('downarrow')
  element.scrollIntoView();
}

function firstsection_display() {
  var email = document.getElementById('email')
  var first = document.getElementById('firstfirst');
  var second = document.getElementById('firstsecond');
  if (!email.value) {
    alert("please enter your email adress")
    return;
  }
  if ((first.className == "firstsection show") || (first.className == "")) {
    if (second.className == "firstsection hide") {
      second.className = "firstsection show"
    }
    first.className = "firstsection hide";
  }
}

function fourthsection_display() {
  var email = document.getElementById('emailfourth')
  var first = document.getElementById('fourthfirst');
  var second = document.getElementById('fourthsecond');
  if (!email.value) {
    alert("please enter your email adress")
    return;
  }
  if ((first.className == "fourthsection show") || (first.className == "")) {
    if (second.className == "fourthsection hide") {
      second.className = "fourthsection show"
    }
    first.className = "fourthsection hide";
  }
}
