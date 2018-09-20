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
  /*
  The idea is to move any Scrivener exported images into the docs directory but this
  is not working. Perhaps because Scrivener saves embeded images as tiffs or perhaps
  because of some relative path problem.
  Leaving this code here in case someone wants to get it to work.
   */
  console.log('Search directory for images', dir)
  glob("**/*.tiff", {cwd: dir}, function (er, files) {
    console.log('found TIFFS:', files);
    files.forEach(f => {
      let src = path.resolve(dir,f);
      let dst = path.resolve('docs',f);
      console.log("Not rename ", src, dst)
      /*
      fs.rename(src,dst, function(err,stats){
        if(err) {
          console.err(err);
          return;
        }
      })
      */
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
          // this is where we'll insert the TOC, just above the first header
          insertIndex = inx
        }
        let level = m[1].length; // the ###
        let title = m[2].trim(); // the title text
        // remove all punctuation
        // note to ready this code for production we should remove everything but alpha
        let key = title.replace(/([!@#$%^&*(),\.:;"'{}[\]_\-\+=]+)/g, '')
        // prepend "user content" because GitHub markdown will make links with this prefix
        // for each header element. Links are lower case
        key = 'user content ' + key.toLowerCase();
        // spaces are replaced with hyphens
        key = key.replace(/\s/g, '-');
        // sample result
        // user-content-planning--management
        // indent the links to reflect the document structure
        let link = ' '.repeat((level-1)*2) + '* [' + title + '](#' + key + ')'
        toc.push(link);

        // insert a "back to top" just after the header
        lines[inx] = m[0] + '\n<a href="#toc">Top</a>\n';
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