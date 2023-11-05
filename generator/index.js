module.exports = function(api) {
    const pkg = {
        dependencies: {
          "imask": "^7.1.3",
          "lodash": "^4.17.21",
          "vue": "^3.2.13"
        },
    }
    
    api.extendPackage(pkg)
    api.render('./template')
}
