var text = require('./colours')

console.log(text.style('hey', 'bold'))
process.stdout.write(text.bg('hey', 'blue'))
process.stdout.write('\n')

console.log(text.colour('hey', 'green'))
console.log(text.colour('\u2714', 'green'))
console.log(text.style(text.colour('\u2714', 'green'), 'bold'))

process.stdout.write(text.style(text.colour('hey', 'green'), 'bold'))
process.stdout.write('\n')

console.log(text.colour('hey', 'red'))
console.log(text.style(text.colour('\u2716', 'red'), 'bold'))

process.stdout.write(text.style(text.colour('hey', 'red'), 'bold'))
process.stdout.write('\n')