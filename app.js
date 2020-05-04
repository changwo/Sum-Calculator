
// CALCULATOR CONTROLER (Not needed for this)

let calculatorControler = (function () {



  return {

  };

})()




// UI CONTROLER

let UIController = (function () {

  // Setup DOM strings
  var DOMstrings = {
    input1 : ".add__number1",
    input2 : ".add__number2",
    inputBtn : ".AddBtn",
    sumValue : ".result__value",
    resetBtn : ".resetBtn"
  };

  // Give the Global App controller access to the DOMstrings
  return {

    getDOMstrings : function() {
      return DOMstrings;
    },

    getinput : function () {
      return {
        value1 : parseFloat(document.querySelector(DOMstrings.input1).value),
        value2 : parseFloat(document.querySelector(DOMstrings.input2).value)
      };
    },

    updateSum : function (value) {
      document.querySelector(DOMstrings.sumValue).textContent = value;
    },

    resetUI : function () {
      document.querySelector(DOMstrings.sumValue).textContent = 0;
      document.querySelector(DOMstrings.input1).value = 0;
      document.querySelector(DOMstrings.input2).value = 0;
    }

  };

})()

// GLOBAL APP CONTROLER

let controller = (function (calcCtrl, UICtrl) {

  

  const calcSum = function() {
    console.log("clicked add!")
    
    let inputs, sum;

    inputs = UICtrl.getinput();

    sum = inputs.value1 + inputs.value2

    if (!isNaN(inputs.value1) && !isNaN(inputs.value2)) {
      UICtrl.updateSum(sum)
    }

  }

  const resetCalc = function () {
    console.log("clicked reset!");

    UICtrl.resetUI();

  }

  const setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    console.log(DOM)
    document.querySelector(DOM.inputBtn).addEventListener('click', calcSum);
    document.querySelector(DOM.resetBtn).addEventListener('click', resetCalc)
  }



  return {
    init : function() {
      console.log("Application has started")
      setupEventListeners();
    }
  };

})(calculatorControler, UIController)

controller.init();