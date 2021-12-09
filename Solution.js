class FixEquation {
  findMissingDigit(equation) {
    const values = this.parseString(equation);
    const [location, markLocation] = this.checkLocation(values);
    let convertedValues = [];
    let number;

    for (let i = 0; i < values.length; i++) {
      if (i !== location) {
        convertedValues.push(Number(values[i]));
      }
    }

    if (location === 0 || location === 1) {
      number = (convertedValues[2] - convertedValues[1]) / convertedValues[0];
    } else if (location === 2) {
      number = convertedValues[2] / (convertedValues[1] * convertedValues[0]);
    } else {
      number = convertedValues[0] * convertedValues[1] + convertedValues[2];
    }

    number = number.toString();
    if (values[location].length !== number.length) {
      return -1;
    }

    values[location] = values[location].replace("?", number[markLocation]);

    if (values[location] === number) {
      return Number(number[markLocation]);
    }

    return -1;
  }

  parseString(eqn) {
    let num = "";
    let values = [];
    for (let char of eqn) {
      if (char === "*" || char === "+") {
        values.push(num);
        num = "";
      } else if (char === "=") {
        values.push(num);
        num = "";
      } else if (char !== " ") {
        num += char;
      }
    }
    values.push(num);

    return values;
  }
  checkLocation(values) {
    let location;
    let markLocation;
    for (let i = 0; i < values.length; i++) {
      if (isNaN(Number(values[i]))) {
        location = i;
        break;
      }
    }

    for (let i = 0; i < values[location].length; i++) {
      if (values[location][i] === "?") {
        markLocation = i;
      }
    }

    return [location, markLocation];
  }
}

function main() {
  fix = new FixEquation();

  const tests = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247",
  ];
  tests.forEach((test, idx) => {
    console.log(`Test Case # ${idx}:\nOutput:`);
    console.log(fix.findMissingDigit(test));
  });
}

main();
