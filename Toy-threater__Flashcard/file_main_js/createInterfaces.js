export function createText(x, y, text, scene) {
    return scene.add.text(x, y, text, {
      fontSize: "32px",
      fill: "#000",
      fontFamily: "Arial",
    });
  }

export function createCenteredText(x, y, text, fontSize = "64px", scene) {
    return scene.add
      .text(x, y, text, {
        fontSize,
        fontStyle: "bold",
        color: "#000",
        fontFamily: "Arial",
        align: "center",
      })
      .setOrigin(0.5);
  }
export function createOperationBoard(boardX, boardY, buttonSizeX, buttonSizeY, spacing, scene) {
      scene.operationBoard = scene.add.container(boardX, boardY);
  
      let operations = [
        { symbol: "+", type: "add" },
        { symbol: "-", type: "subtract" },
        { symbol: "×", type: "multiply" },
        { symbol: "÷", type: "divide" },
      ];
  
      let selectedButton = null;
  
      operations.forEach((operation, index) => {
        let yOffset = index * (buttonSizeY + spacing);
  
        let button = scene.add
          .rectangle(0, yOffset, buttonSizeX, buttonSizeY, 0xffffff)
          .setStrokeStyle(2, 0x000000)
          .setOrigin(0, 0)
          .setInteractive({ useHandCursor: true });
  
        let text = scene.add
          .text(buttonSizeX / 2, yOffset + buttonSizeY / 2, operation.symbol, {
            fontSize: "48px",
            fontStyle: "bold",
            color: "#000",
          })
          .setOrigin(0.5);
  
        if (index === 0) {
          selectedButton = button;
          button.setFillStyle(HExA_BUTTON);
          scene.currentOperatorType = operation.type;
          scene.currentSymbol = operation.symbol;
          scene.updateMathQuestion(scene.currentOperatorType, scene.currentSymbol);
        }
  
        button.on("pointerdown", () => {
          if (selectedButton && selectedButton !== button) {
            selectedButton.setFillStyle(0xffffff);
          }
  
          selectedButton = button;
          button.setFillStyle(HExA_BUTTON);
  
          scene.currentOperatorType = operation.type;
          scene.currentSymbol = operation.symbol;
        });
  
        button.on("pointerover", () => {
          if (selectedButton !== button) button.setFillStyle(0xdddddd);
        });
  
        button.on("pointerout", () => {
          if (selectedButton !== button) button.setFillStyle(0xffffff);
        });
  
        scene.operationBoard.add([button, text]);
      });
  
      scene.add.existing(scene.operationBoard);
    }