#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

function copySync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to)
  }
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element))
    } else {
      copySync(path.join(from, element), path.join(to, element))
    }
  })
}

copySync(
  path.join(path.join(__dirname, `./template`)),
  path.join(process.cwd(), process.argv[2]),
)
