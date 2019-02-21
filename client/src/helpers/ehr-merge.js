export default class EhrMerge {
  ehrMergeEhrData(one, two) {
    let pageKeys = this._ehrMergeObjectChildKeys(one, two)
    let results = {}
    pageKeys.forEach(key => {
      let pgFromOne = one[key]
      let pageFromTwo = two[key]
      let pg
      if (pgFromOne && pageFromTwo) {
        pg = this._ehrMergeAtPageLevel(pgFromOne, pageFromTwo)
      } else if (pgFromOne && !pageFromTwo) {
        pg = pgFromOne
      } else if (!pgFromOne && pageFromTwo) {
        pg = pageFromTwo
      }
      results[key] = this._sortObjByKeys(pg)
    })
    results = this._sortObjByKeys(results)
    return results
  }

  _ehrMergeAtPageLevel(pgFromOne, pageFromTwo) {
    let keys = this._ehrMergeObjectChildKeys(pgFromOne, pageFromTwo)
    let results = {}
    keys.forEach(key => {
      let childOne = pgFromOne[key]
      let childTwo = pageFromTwo[key]
      let child
      if (childOne && childTwo) {
        // concat arrays
        if (Array.isArray(childOne) && Array.isArray(childTwo)) {
          child = childOne.concat(childTwo)
        } else {
          // take the property from the second
          child = childTwo
        }
      } else if (childOne && !childTwo) {
        child = childOne
      } else if (!childOne && childTwo) {
        child = childTwo
      }
      results[key] = child
    })
    return results
  }

  _sortObjByKeys(obj) {
    let keys = Object.keys(obj)
    let results = {}
    keys.sort()
    keys.forEach(k => {
      results[k] = obj[k]
    })
    return results
  }

  _ehrMergeObjectChildKeys(obj1, obj2) {
    let pages1 = Object.keys(obj1)
    let pages2 = Object.keys(obj2)
    let combined = pages1.concat(pages2)
    combined.sort()
    return combined.filter(this._uniqueFilter)
  }

  _uniqueFilter(value, index, self) {
    return self.indexOf(value) === index
  }
}
