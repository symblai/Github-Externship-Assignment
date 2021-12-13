"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixEquation = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var FixEquation = /** @class */ (function () {
    function FixEquation() {
        this.a = "";
        this.b = "";
        this.c = "";
        this.d = "";
    }
    FixEquation.prototype.hasMissingDigit = function (input) {
        return input.includes('?');
    };
    FixEquation.prototype.getQuestionMark = function (original, mask) {
        // console.log(original, mask);
        if (original.length !== mask.length)
            return "";
        for (var i = 0; i < mask.length; i++) {
            if (mask[i] === '?') {
                return original[i];
            }
            else if (original[i] != mask[i]) {
                return "";
            }
        }
        return "";
    };
    FixEquation.prototype.findMissingDigit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var missingDigit, resultant, resultant, resultant, resultant;
            return __generator(this, function (_a) {
                missingDigit = "-1";
                // console.log(this.d)
                // is ? present in d -> compute lhs
                if (this.hasMissingDigit(this.d)) {
                    resultant = parseInt(this.a) * parseInt(this.b) + parseInt(this.c);
                    missingDigit = this.getQuestionMark(resultant.toString(), this.d);
                    missingDigit = missingDigit === "" ? "-1" : missingDigit;
                }
                else if (this.hasMissingDigit(this.c)) {
                    resultant = parseInt(this.d) - parseInt(this.a) * parseInt(this.b);
                    missingDigit = this.getQuestionMark(resultant.toString(), this.c);
                    missingDigit = missingDigit === "" ? "-1" : missingDigit;
                }
                else if (this.hasMissingDigit(this.a)) {
                    resultant = (parseInt(this.d) - parseInt(this.c)) / parseInt(this.b);
                    missingDigit = this.getQuestionMark(resultant.toString(), this.a);
                    missingDigit = missingDigit === "" ? "-1" : missingDigit;
                }
                else if (this.hasMissingDigit(this.b)) {
                    resultant = (parseInt(this.d) - parseInt(this.c)) / parseInt(this.a);
                    missingDigit = this.getQuestionMark(resultant.toString(), this.b);
                    missingDigit = missingDigit === "" ? "-1" : missingDigit;
                }
                else {
                    console.error("No ? found");
                }
                return [2 /*return*/, parseInt(missingDigit)];
            });
        });
    };
    FixEquation.prototype.getInput = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: "input",
                                name: "Equation",
                                message: "Input the equation"
                            }
                        ])];
                    case 1:
                        answers = _a.sent();
                        return [2 /*return*/, answers["Equation"]];
                }
            });
        });
    };
    FixEquation.prototype.parseEquation = function (equation) {
        var params = equation.split(" ");
        this.a = params[0];
        this.b = params[2];
        this.c = params[4];
        this.d = params[6];
    };
    return FixEquation;
}());
exports.FixEquation = FixEquation;
if (require.main === module) {
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var app, equation, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = new FixEquation();
                    return [4 /*yield*/, app.getInput()];
                case 1:
                    equation = _a.sent();
                    app.parseEquation(equation);
                    return [4 /*yield*/, app.findMissingDigit()];
                case 2:
                    result = _a.sent();
                    console.log("The missing digit is: ", result);
                    return [2 /*return*/];
            }
        });
    }); })();
}
