"use scrict;"


const fs = require('fs')
const glob = require("glob")
const path = require('path')
const camelCase = require('camelcase');

const scrivenerDir = 'scrivner';
const outputDir = 'output'
const scrivenerOutputDir = path.resolve(scrivenerDir, 'output');
let globOptions = {
  cwd: scrivenerDir
}
console.log("Looking for Scrivener markdown output files in ", scrivenerDir)
glob("**/*.md", globOptions, function (er, files) {
  console.log('found:', files);
  files.forEach(f => {
    let n = path.resolve(scrivenerDir, f);
    if (fs.statSync(n).isFile()) {
      processMarkdownFile(f)
    }
    if (fs.statSync(n).isDirectory()) {
      processMarkdownDir(n)
    }
  })
})

function processMarkdownDir(dir) {
  console.log('Search directory for images', dir)
  glob("**/*.tiff", {cwd: dir}, function (er, files) {
    console.log('found TIFFS:', files);
    files.forEach(f => {
      let src = path.resolve(dir,f);
      let dst = path.resolve('docs',f);
      fs.rename(src,dst, function(err,stats){
        if(err) {
          console.err(err);
          return;
        }
      })
    })
  })
}

function processMarkdownFile(f) {
  let fn = path.parse(f).base,
      src = path.resolve(scrivenerDir, f),
      dst = path.resolve('docs', fn);
  fs.readFile(src, 'utf8', function (err, contents) {
    let lines = contents.split('\n');
    let toc = ['# Table of Contents  <a id="toc" class="anchor" aria-hidden="true" href="#toc">\n\n'];
    let insertIndex = -1;
    lines.forEach((aLine, inx) => {
      let r = new RegExp('(#+)([^#]*)(#+)', 'g');
      let m = r.exec(aLine);
      if (m) {
        if (insertIndex < 0) {
          insertIndex = inx
        }
        let level = m[1].length;
        let title = m[2].trim();
        let key = title.replace(/([!@#$%^&*(),\.:;"'{}[\]_\-\+=]+)/g, '')
        key = 'user content ' + key.toLowerCase();
        key = key.replace(/\s/g, '-');
        //console.log(key);
        // ### <a name="tith"></a>This is the Heading
        // user-content-planning--management


        //let newLine = m[1] + ' <a id="#'+key+'"></a>' + title + ' ' + m[1];
        lines[inx] = m[0] + '\n<a href="#toc">Top</a>\n';
        let link = ' '.repeat(level - 1) + '* [' + title + '](#' + key + ')'
        toc.push(link);
      }
    })
    toc.push(' ');
    insertIndex = insertIndex < 0 ? 0 : insertIndex
    let tocList = toc.join('\n');
    lines.splice(insertIndex, 0, tocList)
    let newContents = lines.join('\n')
    console.log("output in ", dst)
    fs.writeFileSync(dst, newContents)
    process.exit();
  })

  //fs.copyFileSync(src,dst)

}