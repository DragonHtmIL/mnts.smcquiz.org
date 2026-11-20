function liLoader() {
  for (var i = 0, l = listQuestions.length; i < l; i++) {
    const li = document.createElement('li');
    const qTspan = document.createElement('span');
    const aTspan = document.createElement('span');
    const question = document.createElement('a');
    const answer = document.createElement('div');
    const hint = document.createElement('span');
    const li2 = document.createElement('li');
    li.className = "hide";
    qTspan.className = "label no-txt-select";
    qTspan.setAttribute("type", "left");
    qTspan.setAttribute("for", "questionTitle");
    qTspan.innerHTML = "Question " + [i + 1] + ":";
    aTspan.className = "label no-txt-select";
    aTspan.setAttribute("type", "right");
    aTspan.setAttribute("for", "answerTitle");
    aTspan.innerHTML = "Answer " + [i + 1] + ":";
    question.className = "clumb question";
    question.setAttribute("type", "left");
    question.innerHTML = listQuestions[i] + "?";
    answer.className = "clumb answer";
    answer.setAttribute("type", "right");
    answer.innerHTML = listAnswers[i];
    hint.setAttribute("for", "hintTitle");
    hint.innerHTML = listHints[i] + ".";
    li2.innerHTML = [i + 1] + ": <a>" + listQuestions[i] + "</a>";
    document.getElementById("quizlist").appendChild(li);
    document.getElementById("quizlist2").appendChild(li2);
    li.appendChild(qTspan);
    li.appendChild(aTspan);
    li.appendChild(question);
    li.appendChild(answer);
    li.appendChild(hint);
  }
};