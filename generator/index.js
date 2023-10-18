module.exports = function(api) {
    const pkg = {
        dependencies: {
          "imask": "^7.1.3",
        },
    }
    
    api.extendPackage(pkg)
    api.render('./template')
}
