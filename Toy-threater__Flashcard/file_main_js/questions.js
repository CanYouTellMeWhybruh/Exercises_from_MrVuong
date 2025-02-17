export function updateMathQuestion(operatorType, symbol, scene) {
    let [number1, number2] = scene.generateNumbers(operatorType);
    scene.correctAnswer = scene.calculateAnswer(number1, number2, operatorType);
    scene.options = scene.generateOptions(scene.correctAnswer);
    scene.createChoice(scene.options);

    scene.questionTextNumber1.setText(`${number1}`);
    scene.questionTextNumber2.setText(`${symbol}   ${number2}`);

    scene.answerButtons.forEach((choice, index) => {
      choice.txt.setText(scene.options[index]);
      choice.btn.setInteractive({ useHandCursor: true });
    });
    scene.answerButtons.forEach((choice) =>
      choice.btn.setInteractive({ useHandCursor: true })
    );
    scene.answerContainer.setVisible(true);

    scene.updateChoices();
}

export function checkAnswer(selected, scene) {
    scene.answerButtons.forEach((choice) => choice.btn.disableInteractive());

    if (selected === scene.correctAnswer) {
      scene.correctCount++;
      scene.correctText.setText(`Correct: ${correctCount}`);
      scene.answerText.setText(selected);
      scene.successAnimation();
      scene.sparkles.setVisible(true);
      scene.sparkles.play("sparkle");
    } else {
      scene.incorrectCount++;
      scene.incorrectText.setText(`Incorrect: ${incorrectCount}`);
      scene.answerText.setText(selected);
      scene.failureAnimation();
    }

    scene.time.delayedCall(1500, () => {
      scene.sparkles.setVisible(false);
      scene.answerText.setText("");
      scene.dropCardAnimation(() => {
        scene.catchAnimation();
        scene.updateMathQuestion(scene.currentOperatorType, scene.currentSymbol);
      });
    });
}