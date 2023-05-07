
const { program } = require('commander')
const { translate } = require('@vitalets/google-translate-api')

program.usage("[text] [options]").option("-t, --target <target_lang>").option("-f, --from <from_lang>")

const parsedArgs = program.parse(process.argv)

const options = parsedArgs.opts()

const { from, target } = options

const text = program.args.join(" ")

if (!text) {
  program.outputHelp()
  process.exit(1)
}
translate(text, { to: target, from }).then(res => console.log(res.text))