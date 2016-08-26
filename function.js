//let js wait for some time
//drawbacks , because synchronized so the page will pending for some time 
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
	 end = new Date().getTime();
  }
}

//dynamic loading js file 

function loadJS(url) {
	//url is URL of external file, implementationCode is the code
	//to be called from the file, location is the location to
	//insert the <script> element

	var scriptTag = document.createElement('script');
	scriptTag.src = url;

	document.body.appendChild(scriptTag);
}

// get url parameter
function getCurrentUrlVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
}

//**blob to dataURL**
function blobToDataURL(blob, callback) {
	var a = new FileReader();
	a.onload = function(e) {
		callback(e.target.result);
	}
	a.readAsDataURL(blob);
}

//where the object contains the  propertiy
function isExistInType(obj, id) {

	for (var variable in obj) {
		if (obj[variable].id == id) {
			return true;
		}
	}
	return false;
}

//html　ｅｌｅｍｅｎｔ　ｉｎｓｅｒｔ　ａｆｔｅｒ　
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// get element by class
function getElementsByClassName(classname, node){
    if (!node) {
        node = document.getElementsByTagName('body')[0];
    }
 
    var a = [], re = new RegExp('\\b' + classname + '\\b');
    els = node.getElementsByTagName('*');
    for (var i = 0, j = els.length; i < j; i++) {
        if (re.test(els[i].className)) {
            a.push(els[i]);
        }
    }
    return a;
}

// get scroll width/height of page visitors' browser window
function getScrollXY() {
    var scrOfX = 0, scrOfY = 0;
 
    if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
}
//Get current size of page visitors' browser window
function getWindowSize() {
    var myWidth = 0, myHeight = 0;
 
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return [ myWidth, myHeight ];
}


//It adds or removes a class from an element depending if the class name is already present or not.
function toggleClass(id, className) {
  var element = document.getElementById(id);
  var classes = element.className.split(/s+/);
  var length = classes.length;
  var found = classes.inArray(className);
  if (found !== false)
    classes.splice(found, 1);
  // The className is not found
  if (length === classes.length)
    classes.push(className);
  element.className = classes.join(" ");
}
//convert to capitialized first letter 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//object deep copy with jquery 
function cloneObject(obj) {
    var newObj = jQuery.extend(true, {}, obj);
    return newObj;
}