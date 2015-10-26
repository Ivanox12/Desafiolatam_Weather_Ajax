$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?id=3530597&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric",
  success: function( data ) {

    $("#estado").html(data.weather[0].description);
    $("#temperatura").html(data.main.temp);
    $("#presion").html(data.main.pressure);
    $("#humedad").html(data.main.humidity);
    $("#viento").html(data.wind.speed);
  }
});


