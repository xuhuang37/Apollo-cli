import { betterRequire } from './utils/common'
import { resolve } from 'path'

//ApplyBus
let apply = (action, ...args) => {
    let absPath = resolve(__dirname, `./${action}`)
    console.log(absPath)
    betterRequire(absPath)(...args)
}

export default apply