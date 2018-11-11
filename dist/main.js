'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _apply = require('./apply');

var _apply2 = _interopRequireDefault(_apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// apollo-cli config set a 1
// apollo-cli install

let actionMap = {
    install: {
        alias: 'i',
        description: 'install templete',
        examples: ['apollo-cli i', 'apollo-cli install']

    },
    config: {
        alias: 'c',
        description: 'config apollorc',
        examples: ['apollo-cli config set <k> <v>', 'apollo-cli config get <k>', 'apollo-cli config remove <k>']
    },
    '*': {
        description: 'can not find cmd key word like this',
        examples: []
    }
};

Object.keys(actionMap).forEach(action => {
    _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
        // deal with conditional
        if (action === 'config') {
            (0, _apply2.default)(action, ...process.argv.slice(3));
        } else if (action === 'install') {
            (0, _apply2.default)(action);
        }
    });
});

function help() {
    console.log('\r\n' + 'how to use cmd');
    Object.keys(actionMap).forEach(action => {
        actionMap[action].examples.forEach(example => {
            console.log('  - ' + example);
        });
    });
}

// listen some cmds
_commander2.default.on('-h', help);
_commander2.default.on('--help', help);
// handle cmd of version
_commander2.default.version(_constants.VERSION, '-v --version').parse(process.argv);