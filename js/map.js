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
		map : map
	});
	
	var rokdobaInfoWindow = new google.maps.InfoWindow({
		content : rokdobaTitle
	});
	
	rokdobaMarker.addListener('click', function(){
		rokdobaInfoWindow.open(map, rokdobaMarker);
	});
	//Amardham
	var amardhamLatLong = {lat:19.99866, lng:73.79690};
	var amardhamTitle = "Amardham Exit";
	
	var amardhamMarker = new google.maps.Marker({
		position : amardhamLatLong,
		animation: google.maps.Animation.DROP,
		title : amardhamTitle,
		map : map
	});
	
	var amardhamInfoWindow = new google.maps.InfoWindow({
		content : amardhamTitle
		});
	
	amardhamMarker.addListener('click', function(){
		amardhamInfoWindow.open(map, amardhamMarker);
	});
	//MarkerClustering
	var markerClustererCollection = [amardhamMarker,rokdobaMarker];
	var markerClustererOptions = {gridSize: 50, maxZoom: 15};
	var markerClusterer = new MarkerClusterer(map, markerClustererCollection, markerClustererOptions);
}