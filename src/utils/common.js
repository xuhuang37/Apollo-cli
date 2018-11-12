// myRequire
export let betterRequire = (absPath) => {
    let module = require(absPath)
    if (module.default) {
        console.log(module.default, 1);
        return module.default
    }
    console.log(module, 2);
    return module
}