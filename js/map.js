//Gate Counts
var gate1 = 0;
var gate2 = 0;
var gate3 = 0;
var gate4 = 0;
var gate5 = 0;
var gate6 = 0;
var gate7 = 0;
var gate8 = 0;
var gate9 = 0;
var gate10 = 0;
var gate1IsOpened = false;
var gate2IsOpened = false;
var gate3IsOpened = false;
var gate4IsOpened = false;
var gate6IsOpened = false;
var gate7IsOpened = false;
var gate8IsOpened = false;
var gate9IsOpened = false;
var gate10IsOpened = false;
var gate1Stamp = "";
var gate2Stamp = "";
var gate3Stamp = "";
var gate4Stamp = "";
var gate5Stamp = "";
var gate6Stamp = "";
var gate7Stamp = "";
var gate8Stamp = "";
var gate9Stamp = "";
var gate10Stamp = "";

function initMap() {
	//Main Map
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 20.0000, lng: 73.7800},
		zoom: 13,
		'mapTypeId': google.maps.MapTypeId.ROADMAP
	});
	//Rokdoba
	var rokdobaLatLong = {lat:20.00294, lng:73.79324};
	var rokdobaTitle = "Rokdoba Exit";
	
	var rokdobaMarker = new google.maps.Marker({
		position : rokdobaLatLong,
		animation: google.maps.Animation.DROP,
		title : rokdobaTitle,
		map : map,
        count : gate2
	});
	
	var rokdobaInfoWindow = new google.maps.InfoWindow({
		content :   '<span id="totalCountTitle" class="card-title" style="pointer-events: auto; margin-left: 0px; margin-top: 0px; text-align: center; text-decoration: none; font-weight: 500; font-size: 38px;text-color:">Rokdoba Exit Gate</span>'+
                    '<h1 id="megaCountText" style="font-size: 30px;text-align: center;">'+gate8+'</h1>'
	});
	
	rokdobaMarker.addListener('click', function(){
        if(gate1IsOpened == true){
		rokdobaInfoWindow.open(map, rokdobaMarker);
            gate1IsOpened = false;
        } else if(gate1IsOpened == false){
            rokdobaInfoWindow.close();
            gate1IsOpened = true;
        }
	});
	//Amardham
	var amardhamLatLong = {lat:19.99866, lng:73.79690};
	var amardhamTitle = "Amardham Exit";
	
	var amardhamMarker = new google.maps.Marker({
		position : amardhamLatLong,
		animation: google.maps.Animation.DROP,
		title : amardhamTitle,
		map : map,
        count : gate1
	});
	
	var amardhamInfoWindow = new google.maps.InfoWindow({
		content : amardhamTitle
		});
	
	amardhamMarker.addListener('click', function(){
        if(gate2isOpened == true){
		amardhamInfoWindow.open(map, amardhamMarker);
            gate2IsOpened = false;
        } else if(gate2IsOpened == false){
            amardhamInfoWindow.close();
            gate2IsOpened = true;
        }
	});
	//MarkerClustering
	var markerClustererCollection = [amardhamMarker,rokdobaMarker];
    var totalCount = 0;
    for(var i=0;i<markerClustererCollection.length;i++){
        totalCount += markerClustererCollection[i].count;
    }
	var markerClustererOptions = {gridSize: 50, maxZoom: 15, count: totalCount};
	var markerClusterer = new MarkerClusterer(map, markerClustererCollection, markerClustererOptions);
}