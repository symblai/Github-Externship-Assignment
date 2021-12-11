class FixEquation {
    findMissingDigit(equation) {
      const arr = equation.split(/[*,+,=]/);
      let A = arr[0].trim();
      let B = arr[1].trim();
      let C = arr[2].trim();
      let D = arr[3].trim();
  
      if (A.includes("?")) {
        let b = parseInt(B);
        let c = parseInt(C);
        let d = parseInt(D);
  
        let solution = (d - c) / b;
        return this.finalAns(A, solution);
      }
  
      if (B.includes("?")) {
        let a = parseInt(A);
        let c = parseInt(C);
        let d = parseInt(D);
  
        let solution = (d - c) / a;
        return this.finalAns(B, solution);
      }
  
      if (C.includes("?")) {
        let a = parseInt(A);
        let b = parseInt(B);
        let d = parseInt(D);
  
        let solution = d - a * b;
        return this.finalAns(C, solution);
      }
  
      if (D.includes("?")) {
        let a = parseInt(A);
        let b = parseInt(B);
        let c = parseInt(C);
  
        let solution = a * b + c;
        return this.finalAns(D, solution);
      }
    }
    finalAns(p, q) {
      q = q.toString();
  
      if (p.length != q.length) return -1;
  
      let index = p.indexOf("?");
      return q[index];
    }
  }
  
  const obj = new FixEquation();
  
  const test = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247",
  ];
  
  //function to run test cases...
  function runtests() {
    test.forEach((testcase) => console.log(obj.findMissingDigit(testcase)));
  }
  
  runtests();
  