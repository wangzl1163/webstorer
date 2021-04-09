const package = require('./package.json')
var today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1 // January is 0!
const yyyy = today.getFullYear()

if (dd < 10) {
   dd = '0' + dd
}

if (mm < 10) {
   mm = '0' + mm
}

var today = dd + '/' + mm + '/' + yyyy

exports.banner = `@license :${package.name} - V${package.version} - ${today}
https://github.com/wangzl1163/webstorer
Copyright (c) ${yyyy} @wangzl1163; Licensed ${package.license}`
