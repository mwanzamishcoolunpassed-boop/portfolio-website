class Calculator {
  constructor(displayId) {
    this.display = document.getElementById(displayId);
    this.value = "";
    this.historyList = document.getElementById("history");
  }



addToHistory(expression, result) {
  const li = document.createElement("li");
  li.textContent = `${expression} = ${result}`;
  
  
  li.addEventListener("click", () => {
    this.value = result; 
    this.updateDisplay();
  });

  this.historyList.appendChild(li);
}

reciprocal() {
  let val = eval(this.expression);

  if (val === 0) {
    this.value = "Error";
    return;
  }

  let result = 1 / num;
  this.value = result.toString();
  this.updateDisplay();
}



  updateDisplay() {
    this.display.value = this.value;
  }

        
  add(val) {
  let last = this.value.slice(-1);

  
  if (val === "(" && last && !isNaN(last)) {
    this.value += "*(";
  } else {
    this.value += val;
  }

  this.updateDisplay();
}

  clear() {
    this.value = "";
    this.updateDisplay();
  }

calculate() {
  try {
    let exp = this.value;
    let result = eval(exp).toString();

    this.addToHistory(exp, result);

    this.value = result;
  } catch {
    this.value = "iyee";
  }
  this.updateDisplay();
}
  
  

  // Scientific functions
  sin() {
    this.value = Math.sin(eval(this.value)).toString();
    this.updateDisplay();
  }

  cos() {
    this.value = Math.cos(eval(this.value)).toString();
    this.updateDisplay();
  }

  tan() {
    this.value = Math.tan(eval(this.value)).toString();
    this.updateDisplay();
  }

  sqrt() {
    this.value = Math.sqrt(eval(this.value)).toString();
    this.updateDisplay();
  }

  square() {
    this.value = Math.pow(eval(this.value), 2).toString();
    this.updateDisplay();
  }
  power() {
  this.value = this.value.replace("^", "**");
  this.updateDisplay();
}

  log() {
    this.value = Math.log10(eval(this.value)).toString();
    this.updateDisplay();
  }

  pi() {
    this.value += Math.PI.toString();
    this.updateDisplay();
  }
}

const calc = new Calculator("display");


const toggleBtn = document.getElementById("toggleHistory");
console.log("Button:", toggleBtn); 

const historyBox = document.getElementById("history");

toggleBtn.addEventListener("click", () => {
  historyBox.classList.toggle("hidden");
});
const clearBtn = document.getElementById("clearHistory");


clearBtn.addEventListener("click", () => {
  historyBox.innerHTML = "";
});

document.body.classList.add("dark"); // default

function toggleMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
