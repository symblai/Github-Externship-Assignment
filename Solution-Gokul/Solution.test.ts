import { expect } from "chai";
import { FixEquation } from "./Solution";


const app = new FixEquation();
const runApp = async (equation: string): Promise<number> => {
  app.parseEquation(equation);
  let result = await app.findMissingDigit();
  return result;
}

describe("Find the missing digit: ", () => {
  it("Test case 1", async () => {
    const result = await runApp("42 * 47 + 2 = 1?76");
    expect(result).to.be.equal(9);
  })

  it("Test case 2", async () => {
    const result = await runApp("4? * 47 + 2 = 1976");
    expect(result).to.be.equal(2);
  })

  it("Test case 3", async () => {
    const result = await runApp("42 * ?7 + 2 = 1976");
    expect(result).to.be.equal(4);
  })

  it("Test case 4", async () => {
    const result = await runApp("42 * ?47 + 2 = 1976");
    expect(result).to.be.equal(-1);
  })

  it("Test case 5", async () => {
    const result = await runApp("2 * 12? + 2 = 247");
    expect(result).to.be.equal(-1);
  })
})



