

function getAPIdata() {


  // get latest weather
  // var test = fetch('http://apilayer.net/api/live?access_key=462a3e1441a5f40ea425cc80c1527c6b').response.json();
  
  // // parse to JSON format
  // .then(function(response) {
  //   return response.json();
  // })
  
  // // render weather per day
  // .then(function(response) {

  //   // show full JSON object
  //   console.log(response);

  //   document.getElementById('banktotem').innerHTML = response.quotes;

  //   var quotes;
  //   for (quotes = 0; quotes < 0; quotes++) {
  //   // Runs 5 times, with values of step 0 through 4.
    
  //   }
  var jsonData;
  fetch('http://apilayer.net/api/live?access_key=462a3e1441a5f40ea425cc80c1527c6b')
    .then(res => res.json())
    .then(data=> jsonData = data)
    .then(() => console.log(jsonData))
  var quotes = JSON.stringify(jsonData);

  document.getElementById('banktotem').innerHTML = quotes;
    return jsonData;

    

  // })
  
  // // catch error
  // .catch(function (error) {
  //   console.error('Request failed', error);
  // });
}

// init data stream
getAPIdata();

// function setMarker( lat, lng){

//   var atmMarker = new google.maps.Marker({
//     position:{
//       lat:,
//       lng:,
//     },
//     map:myMap,
//     title:''
//   }
// }



// Styles a map in night mode.
     var schiphol = {lat: 52.31, lng: 4.7569444444}
        var ingAmsterdam = {lat: 52.313709, lng: 4.952394}
        var ingDenHaag = {lat: 52.077334, lng: 4.315017}
        var ingUtrecht = {lat: 52.093835, lng: 5.11436}    

function initMap() {  
       
  var map = new google.maps.Map(document.getElementById('map'), {
    center: schiphol,
    zoom: 12
  });
  var marker = new google.maps.Marker({
    position: schiphol,
    map: map
  });
  styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ]
}
         // var marker = new google.maps.marker({
         //  position: schiphol,
         //  map: map,
         //  icon: icon

         // }
      

      



