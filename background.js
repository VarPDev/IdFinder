// Called when the user clicks on the browser action.
//chrome.browserAction.onClicked.addListener(function() {
  //  var w = 440;
    //var h = 220;
    //var left = (screen.width/2)-(w/2);
    //var top = (screen.height/2)-(h/2); 

    //chrome.windows.create({'url': 'popup.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , function(window) {
    //});
//});

//var elements = document.getElementsByTagName("BODY")[0];

//chrome.tabs.getSelected(null, function (tab) {
  //          chrome.tabs.sendRequest(tab.id, {action: "getSource"}, function(source) {
    //            alert(source);
      //      });
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
        .text(countries[i])
		.appendTo(cList);
});