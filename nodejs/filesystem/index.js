const fs = require('fs').promises;
const path = require('path');

// leitura de arquivos
/*
fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e));
*/

// função assync que lista todas as pastas

async function readdir(rootDir) {
    rootDir = rootDir || __dirname;
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

// função assync que pega todos os caminhos e especifica
async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullpath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullpath);

        if(/\.git/g.test(fileFullpath)) continue;
        if(/node_modeles/g.test(fileFullpath)) continue;
        //if(!/html$/g.test(fileFullpath)) continue;
        if(!/css$/g.test(fileFullpath)) {
        continue;
        }
        if(stats.isDirectory()) {
            readdir(fileFullpath);
            continue;
        };

        console.log(file, stats.isDirectory())
    }
}

// listando todas as pastas da pasta javascript
readdir('/Users/Pichau/OneDrive/Documentos/estudos/javascript/');