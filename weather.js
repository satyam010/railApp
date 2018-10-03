$(document).ready(function(){
    
    $("#submitCity").click(function(){
        return getWeather();
    });
    
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           //url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
          url: 'https://api.railwayapi.com/v2/pnr-status/pnr/'+city+'/apikey/ip5dtorqbr/',

            type: "GET",
            dataType: "json",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
}

function showResults(data){
    var text =  "<br><br>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Source Station</strong>: "+data.from_station.name+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Destination Station</strong>: "+data.to_station.name+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Boarding Point</strong>: "+data.boarding_point.name+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Date Of Journey</strong>: "+data.doj+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Train Name</strong>: "+data.train.name+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Train Number</strong>: "+data.train.number+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>Status</strong>: "+data.passengers[0].booking_status+";</h5>"+
            "<h4 style='padding-left:80px; padding-bottom:30px;'><strong>No of passengers</strong>: "+data.total_passengers+";</h5>";

return text;
}












