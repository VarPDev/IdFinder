//chrome.runtime.onMessage.addListener(
//  function(request, sender, sendResponse) {
 //   if( request.message === "clicked_browser_action" ) {
 //     var firstHref = $("a[href^='http']").eq(0).attr("href");

 //     console.log(firstHref);
//    }
//  }
//);

//chrome.extension.onRequest.addListener(function(request, sender, callback) {
  //  if (request.action == "getSource") {
    //    callback(document.getElementsByTagName('html')[0].innerHTML);
   // }
//});

var images = document.getElementsByTagName("img");
var inputs = document.getElementsByTagName("input");
var divs = document.getElementsByTagName("div");
var spans = document.getElementsByTagName("span");
var ps = document.getElementsByTagName("p");
var uls = document.getElementsByTagName("ul");
var lis = document.getElementsByTagName("li");
var ols = document.getElementsByTagName("ol");
var tds = document.getElementsByTagName("td");
var bs = document.getElementsByTagName("b");
var selects = document.getElementsByTagName("select");
var h1s = document.getElementsByTagName("h1");
var h2s = document.getElementsByTagName("h2");
var h3s = document.getElementsByTagName("h3");
var h4s = document.getElementsByTagName("h4");
var h5s = document.getElementsByTagName("h5");
var h6s = document.getElementsByTagName("h6");


var cList = $('ul.mylist')
$.each(divs, function(i)
{
    var li = $('<li/>')
        .addClass('divs')
        .attr('role', 'menuitem')
        .text(countries[i].)
		.appendTo(cList);
});