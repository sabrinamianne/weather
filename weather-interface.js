$(document).ready(function(){
  $('#weatherLocation').click(function(){
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47d7b9fa9e313991f765f7cf4a951647`,
      type:`GET`,
      data: {
        format: `json`
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
