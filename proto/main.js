'use strict';

/**
 * Module dependencies.
 */
var config = require('./config'),
    chalk = require('chalk');
const TYPES = config.dataDefs.types;
const SCHEMA = config.dataDefs.schema;

go();

function go() {
  let values = {};
  createValuesFromDefs(SCHEMA, values);
  console.log("RESULTS: " + JSON.stringify(values, null, 2));
}

function createValuesFromDefs(schemaElement, values) {
  if (typeof schemaElement === 'object') {
    Object.entries(schemaElement).forEach(([key, element]) => {
      if (typeof element === 'object') {
        if (element.type) {
          switch (element.type) {
            case TYPES.timeBasedValue:
              timeBasedValue(key, element, values);
              break;
            case TYPES.text:
            case TYPES.textArea:
              textValue(key, element, values);
              break;
            case TYPES.boolean:
              booleanValue(key, element, values);
              break;
            case TYPES.number:
              numberValue(key, element, values);
              break;
            case TYPES.date:
              dateValue(key, element, values);
              break;
            case TYPES.time:
              timeValue(key, element, values);
              break;
            case TYPES.inlineBase64Image:
              imageValue(key, element, values);
              break;
            case TYPES.select:
              selectValue(key, element, values);
              break;
            case TYPES.checklist:
              checklistValue(key, element, values);
              break;
            default:
              console.log(chalk.red(("no type found for " + key + " " + element.type)));
          }
        } else {
          // element is a complex object
          objectValue(key, element, values);
        }
      } else {
        console.log(chalk.red((`Schema element for ${key} is not an object. '${element}' `)));
      }
    })
  }
}

function objectValue(key, def, values) {
  let anObject = {}
  createValuesFromDefs(def, anObject);
  values[key] = anObject
}


function timeBasedValue(key, def, values) {
  //console.log("found timeBasedValue ", def);
  let anArray = []
  let d = {};
  createValuesFromDefs(def.valueType, d);
  anArray.push(d)
  values[key] = anArray;
}


function booleanValue(key, def, values) {
  values[key] = false
}

function numberValue(key, def, values) {
  values[key] = 0
}

function dateValue(key, def, values) {
  //console.log("found date");
  values[key] = '0000-00-00'
}

function timeValue(key, def, values) {
  //console.log("found date");
  values[key] = '00:00'
}

function textValue(key, def, values) {
  //console.log("found text");
  values[key] = ""
}

function imageValue(key, def, values) {
  //console.log("found text");
  values[key] = ""
}


function selectValue(key, def, values) {
  //console.log("found select ", def);
  if (!def.options) {
    console.error("Select element missing options")
    throw "Select element missing options";
  }
  let defValue = def.options.filter((option) => {
    return option.default
  });
  values[key] = defValue;
}

function checklistValue(key, def, values) {
  let list = def.options.map((option) => {
    let d = {};
    createValuesFromDefs(option, d);
    return d;
  });
  values[key] = list;
}