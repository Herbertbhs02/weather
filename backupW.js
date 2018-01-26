
 // 1. create a new XMLHttpRequest object -- an object like any other!
  function data(){
    var myRequest = new XMLHttpRequest();
    // 2. Get the location coordinates,open the request and pass the HTTP method name and the resource as parameters
       navigator.geolocation.getCurrentPosition(showPosition)
      function showPosition(position) {
     x = position.coords.latitude; 
     y = position.coords.longitude;

     myRequest.open('GET','https://fcc-weather-api.glitch.me/api/current?lat='+x+'&lon='+ y);
	 myRequest.send(); 
	 
                                       }
// 3. write a function that runs anytime the state of the AJAX request changes
    myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
        var weatherInfo = JSON.parse(myRequest.responseText);
        console.log(weatherInfo.main.temp);
        //console.log(myRequest.responseText);
     
      document.getElementById('weatherDisplay').innerHTML = weatherInfo.weather[0].description;
      document.getElementById('area').innerHTML = weatherInfo.name;
      document.getElementById('temp').innerHTML = weatherInfo.main.temp;
     // document.getElementById('country').innerHTML = weatherInfo.sys.country;
      document.getElementById('wind').innerHTML = weatherInfo.wind.speed;
      
      


                                     }
                                               }
                    }