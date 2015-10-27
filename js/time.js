
$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=19.432608&lng=-99.133208&username=demo",
  success: function( data ) {
    $("#Mexico").html(data.time); 
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=34.052234&lng=-118.243685&username=demo",
  success: function( data ) {
    $("#LA").html(data.time); 
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=40.712784&lng=-74.005941&username=demo",
  success: function( data ) {
    $("#NYC").html(data.time); 
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=48.856614&lng=2.352222&username=demo",
  success: function( data ) {
    $("#Paris").html(data.time); 
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=48.856614&lng=2.352222&username=demo",
  success: function( data ) {
    $("#Paris").html(data.time); 
  }
});

$.ajax({
  url: "http://api.geonames.org/timezoneJSON?lat=35.689487&lng=139.691706&username=demo",
  success: function( data ) {
    $("#Tokio").html(data.time); 
  }
});

/*
var lugares = [
{
	coords: "lat=40.712784&lng=-74.005941",
	nombre: "#NYC"
}
];

for (var i = lugares.length - 1; i >= 0; i--) {	
	$.ajax({
  url: "http://api.geonames.org/timezoneJSON?"+lugares[i].coords+"&username=demo",
  success:
  	function( data ) {
    	$("#NYC").html(data.time); 
  	}
});
};
*/
