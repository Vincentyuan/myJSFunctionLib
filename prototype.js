

// combining two object with javascript Object.prototype.extend = function() {
Object.prototype.extend = function() {
  if (arguments.length === 0)
    return this;

  for (var i = 0; i < arguments.length; i++) {
    for (var property in arguments[i]) {
      if (arguments[i].hasOwnProperty(property))
        this[property] = arguments[i][property];
    }
  }
  return this;
};
// object equals function 
Object.prototype.equals = function(x) {
  var p;
  for(p in this) {
    if (typeof(x[p]) == "undefined")
      return false;
  }
  for(p in this) {
    if (this[p]) {
      switch(typeof(this[p])) {
        case "object":
          if (!this[p].equals(x[p]))
            return false;
          break;
        case "function":
          if (typeof(x[p]) == "undefined" ||
             (p != "equals" && this[p].toString() != x[p].toString()))
            return false;
          break;
        default:
          if (this[p] != x[p])
            return false;
      }
    }
    else {
      if (x[p])
        return false;
    }
  }
  for(p in x) {
    if(typeof(this[p])=="undefined")
      return false;
  }
  return true;
}

// whether one array contains one element 
// not worked for the object actually because this just conpare the value ,while for object this means reference.
Array.prototype.inArray = function (value) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === value)
      return true;
  }
  return false;
};
// in Array method enhanced by the equal() function before .
Array.prototype.inArray = function (value) {
  for (var i = 0; i < this.length; i++) {
    if (typeof value === "object") {
      // If both are objects, uses the equals function
      if (typeof this[i] === "object" && value.equals(this[i]))
          return i;
    }
    else if (this[i] === value)
      return i;
  }
  return false;
};
//delete element in arry 
/*other function to do this 
var index = array.indexOf(item);
array.splice(index, 1);
*/
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};