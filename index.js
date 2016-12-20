'use strict'

let cobolscript = require('cobolscript')
let SCRIPT = './serverless.cbl'

const hookConsoleLog = (logs) => { console.log = (d) => logs.push(d) }

exports.handler = (event, context, callback) => {
    var logs = []
    hookConsoleLog(logs)

    var program = cobolscript.compileProgramFile(SCRIPT)
    program.run(cobolscript.getRuntime())
    callback(null, { statusCode: 200, body: logs.join('\n') })
}
