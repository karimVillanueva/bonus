const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const rl = readline.createInterface({ input, output })

const ulcase = (str) => {
  let flag = false
  const res = []

  for (const l of str) {
    if (l === '.') {
      flag = true
    }
    res.push(flag ? l.toLowerCase() : l.toUpperCase())
  }

  return res.join('')
}

rl.question('Input a string: ', (answer) => {
  const output = ulcase(answer)
  console.log(output)
  rl.close()
})
module.exports = ulcase
