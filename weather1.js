
 $(document).ready(function(){
    $('#city').on('keyup', function(e){let req = e.target.value; console.log(req);
  //make request for weather info.
  $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?q='+req+'&APPID=ff365662c9c1a8add9e703a891c19fc7'
    //data:{client_id:'',
          //client_secret:''    }
  }).done(function(info){
    var te = info.main.temp - 273
    var fa = 1.8*(info.main.temp-273)+32
       
     document.getElementById('description').innerHTML = info.name+' '+info.sys.country+'<br>Weather condition: '+info.weather[0].description+'<br>Temperature:'+te.toFixed(1)
     +' Celsius/ ' +fa.toFixed(1)+' Fahrenheit <br>Wind speed:'+info.wind.speed+'<br>Visibility:'+info.visibility;})
  })
  ;});