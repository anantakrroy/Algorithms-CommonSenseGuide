import fs from 'node:fs'
import path from 'node:path'

function findDirectories(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file)

        if(fs.statSync(fullPath).isDirectory() && file !== '.' && file !== '..' && !file.match(/.git/i)) {
            findDirectories(fullPath);
        }
        console.log(fullPath);
    })
}

findDirectories('/Users/anantakumarroy/Desktop/Algorithms')