import program from 'commander'
import { VERSION } from './utils/constants'
import main from './apply'

/*
 1.actionMap
 2.apollo-cli config set a 1
 3.apollo-cli install
 4.*
*/

let actionMap = {
    install: {
        alias: 'i',
        description: 'install templete',
        examples: [
            'apollo-cli i',
            'apollo-cli install'
        ]

    },
    config: {
        alias: 'c',
        description: 'config apollorc',
        examples: [
            'apollo-cli config set <k> <v>',
            'apollo-cli config get <k>',
            'apollo-cli config remove <k>',
        ]
    },
    '*': {
        description: 'Can not find any cmd key words like this~',
        examples: []
    }
}

Object.keys(actionMap).forEach(action => {
    program.command(action).description(actionMap[action].description).
    alias(actionMap[action].alias).
    action(() => {
        // deal with conditional
        if (action === 'config') {
            main(action, ...process.argv.slice(3))
        } else if (action === 'install') {
            main(action)
        }
    })
});

function help() {
    console.log('\r\n' + 'how to use cmd')
    Object.keys(actionMap).forEach(action => {
        actionMap[action].examples.forEach((example) => {
            console.log('  - ' + example)
        })
    })
}

// listen some cmds
program.on('-h', help)
program.on('--help', help)
    // handle cmd of version
program.version(VERSION, '-v --version').parse(process.argv)