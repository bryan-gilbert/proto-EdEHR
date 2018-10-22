'use strict';

/**
 * Module dependencies.
 */
var config = require('./config');
const TYPES = config.dataDefs.types;
const SCHEMA = config.dataDefs.schema;

class DataDefinition {
  createDataDefinitions() {
    let values = {};
    this.createValuesFromDefs(SCHEMA,values);
    return values;
  }

  createValuesFromDefs(schemaElement, values) {
    if (typeof schemaElement === 'object') {
      Object.entries(schemaElement).forEach(([key, element]) => {
        if (typeof element === 'object') {
          if (element.type) {
            switch (element.type) {
              case TYPES.timeBasedValue:
                this.timeBasedValue(key, element, values);
                break;
              case TYPES.url:
              case TYPES.text:
              case TYPES.textArea:
                this.textValue(key, element, values);
                break;
              case TYPES.boolean:
                this.booleanValue(key, element, values);
                break;
              case TYPES.number:
                this.numberValue(key, element, values);
                break;
              case TYPES.date:
                this.dateValue(key, element, values);
                break;
              case TYPES.time:
                this.timeValue(key, element, values);
                break;
              case TYPES.inlineBase64Image:
                this.imageValue(key, element, values);
                break;
              case TYPES.select:
                this.selectValue(key, element, values);
                break;
              case TYPES.checklist:
                this.checklistValue(key, element, values);
                break;
              default:
                console.log(chalk.red(("no type found for " + key + " " + element.type)));
            }
          } else {
            // element is a complex object
            this.objectValue(key, element, values);
          }
        } else {
          console.log(chalk.red((`Schema element for ${key} is not an object. '${element}' `)));
        }
      })
    }
  }

   objectValue(key, def, values) {
    let anObject = {}
    this.createValuesFromDefs(def, anObject);
    values[key] = anObject
  }


 timeBasedValue(key, def, values) {
    //console.log("found timeBasedValue ", def);
    let anArray = []
    let d = {};
    this.createValuesFromDefs(def.valueType, d);
    anArray.push(d)
    values[key] = anArray;
  }


 booleanValue(key, def, values) {
    values[key] = false
  }

 numberValue(key, def, values) {
    values[key] = 0
  }

 dateValue(key, def, values) {
    //console.log("found date");
    values[key] = '0000-00-00'
  }

 timeValue(key, def, values) {
    //console.log("found date");
    values[key] = '00:00'
  }

 textValue(key, def, values) {
    //console.log("found text");
    values[key] = ""
  }

 imageValue(key, def, values) {
    //console.log("found text");
    values[key] = ""
  }


 selectValue(key, def, values) {
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

 checklistValue(key, def, values) {
    let list = def.options.map((option) => {
      let d = {};
      this.createValuesFromDefs(option, d);
      return d;
    });
    values[key] = list;
  }

}

module.exports = DataDefinition;
