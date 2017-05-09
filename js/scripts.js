// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

/**********************************
  REFERENCES
* Dropmark API: https://www.dropmark.com/support/api/
* `getJSON()` method: https://www.sitepoint.com/ajaxjquery-getjson-simple-example/
* `$.each()` method: https://www.sitepoint.com/jquery-each-function-examples/
* JS Template Literals: https://css-tricks.com/template-literals/
**********************************/ 

/**********************************
  CONFIGURE JSON CALL
**********************************/ 
// The API feed
var getStuff = 'https://taaylored.dropmark.com/420951.json';

// Optional settings for private collections. This is public, no settings needed. 
var setStuff = {};

// Do stuff with returned data
var doStuff = function(data) {

console.log(data.items);
//console.log(data.items[0].link);
//console.log(data.items[0].name);
//console.log(data.items[0].thumbnails.cropped);
//console.log(data.items[0].preview);

  // What do you want to do? Show (display on page) data? 
  showStuff(data);
  
};

/************************************
  GET JSON FROM API
************************************/ 
$.getJSON( getStuff, setStuff, doStuff);

//Display it
var showStuff = function(data) {
    
    // Put on Page
    $('h1').text(data.name);
//    $('p').text(data.items[0].description);
    $('p a').attr('href', data.url);
    
// Child Objects, May have many children
// Loop or cycle through all the data
// Disply data at each loop
    $.each(data.items, function(i) {
        
        //loop
        var stuff = '<p>' + data.items[i].name + '</p>';
        
        
        //Put onto Page
        $('#items').append(stuff);
        
    });
};


