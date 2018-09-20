"use scrict;"


const fs = require('fs')
const glob = require("glob")
const path = require('path')
const camelCase = require('camelcase');

const scrivenerDir = 'scrivner';
const outputDir = 'output'
const scrivenerOutputDir = path.resolve(scrivenerDir,'output');
let globOptions = {
  cwd: scrivenerDir
}
console.log("Looking for Scrivener markdown output files in ", scrivenerDir)
glob("**/*.md", globOptions, function (er, files) {
  console.log('found:',files);
  files.forEach(f => {
    let n = path.resolve(scrivenerDir,f);
    if (fs.statSync(n).isFile()) {
      processMd(f)
    }
  })
})


function processMd(f) {
  let fn = path.parse(f).base,
    src = path.resolve(scrivenerDir,f),
      dst = path.resolve('.',fn);
    fs.readFile(src, 'utf8', function(err,contents) {
      let lines = contents.split('\n');
      let toc = [];
      let insertIndex = -1;
      lines.forEach( (aLine,inx) => {
        let r = new RegExp('(#+)([^#]*)(#+)','g');
        let m = r.exec(aLine);
        if(m) {
          if (insertIndex < 0 ) {
            insertIndex = inx
          }
          let level = m[1].length;
          let title = m[2].trim();
          let key = camelCase(title.replace(/(\W+)/g,''));
          // ### <a name="tith"></a>This is the Heading
          let newLine = m[1] + ' <a id="#'+key+'"></a>' + title + ' ' + m[1];
          let link = ' '.repeat(level-1) + '* [' + title + '](#' + key + ')'
          toc.push(link);
          lines[inx] = newLine;
          }
      })
      insertIndex = insertIndex < 0 ? 0 : insertIndex
      let tocList = toc.join('\n');
      lines.splice(insertIndex,0, tocList)
      let newContents = lines.join('\n')
      console.log("output in ", dst)
      fs.writeFileSync(dst,newContents)
      process.exit();
    })

  //fs.copyFileSync(src,dst)

}