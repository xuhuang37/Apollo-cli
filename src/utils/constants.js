import { version } from '../../package.json'

// Current version number
export const VERSION = version

// Find the home path
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
    // Locate the rc file
export const RC = `${HOME}/.apollorc`

// Configuration where to pull template
export const DEFAULT = {
    registry: 'apollo-web-template',
    type: 'users'
}