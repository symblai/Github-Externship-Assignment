const tests = [
    "42 * 47 + 2 = 1?76",
    "4? * 47 + 2 = 1976",
    "42 * ?7 + 2 = 1976",
    "42 * ?47 + 2 = 1976",
    "2 * 12? + 2 = 247",
    "42 * 47 + 2 = 1?77",
    "42 * 47 + ? = 1976",
    "0 * ? + 2 = 2",
    "0 * 0 + ? = 0",
    "? * 0 + 0 = 0",
]

module.exports = {tests}