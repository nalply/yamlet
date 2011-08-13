"use strict";

exports.parse = parse

function parse(str) {
  var lines = str.split(/\r?\n/)  
  var first = lines.shift().trim()
  if (lines.length) lines = undent(lines)
  if (!lines.length) return first
  
  // remove comments
  lines = lines.map(function(line) { return line[0] == '#' ? '' : line })
  
  // Array or map: First line will be either "- value" or "key: value"
  return lines[0].charAt(0) === "-" ? parseArray(lines) : parseMap(lines)
}

function parseArray(lines) {
  var out = []
  var key = 0
  var val = []
  
  for (var i = 0, l = lines.length; i < l; i ++) {
    var line = lines[i]
    if (line.charAt(0) === "-") {
      if (val.length) {
        out[key ++] = parse(val.join("\n"))
        val.length = 0
      }
      val.push(line.substr(1).trim())
    } 
    else if (line.charAt(0) === " ") val.push(line)
    else return []
  }
  if (val.length) out[key++] = parse(val.join("\n"))
  return out
}

function parseMap(lines) {
  var out = {}
  var val = []
  var key = null

  for (var i = 0, l = lines.length; i < l; i ++) {
    var line = lines[i]
    if (line.charAt(0) === " ") {
      val.push(line)
      continue
    }
    // some key:val
    if (val.length) {
      out[key] = parse(val.join("\n"))
      val.length = 0
    }
    // parse out the quoted key
    var first
    if (line.charAt(0) === "\"") {
      for (var ii = 1, ll = line.length, esc = false; ii < ll; ii ++) {
        var c = line.charAt(ii)
        if (c === "\\") esc = !esc
        else if (c === "\"" && !esc) break
      }
      key = JSON.parse(line.substr(0, ii + 1))
      line = line.substr(ii + 1)
      first = line.substr(line.indexOf(":") + 1).trim()
    } 
    else {
      var kv = line.split(":")
      key = kv.shift()
      first = kv.join(":").trim()
    }
    // now we've set a key, and "first" has the first line of the value.
    val.push(first.trim())
  }
  if (val.length) out[key] = parse(val.join("\n"))
  
  delete out['']

  return out
}

function undent (lines) {
  var i = lines[0].match(/^\s*/)[0].length
  return lines.map(function (line) { return line.substr(i) })
}

