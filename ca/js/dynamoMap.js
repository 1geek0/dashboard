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
var gates = []
//Gate Latitudes
var gate1Lat = 0.0;
var gate2Lat = 0.0;
var gate3Lat = 0.0;
var gate4Lat = 0.0;
var gate5Lat = 0.0;
var gate6Lat = 0.0;
var gate7Lat = 0.0;
var gate8Lat = 0.0;
var gate9Lat = 0.0;
var gate10Lat = 0.0;
//Gate Longitudes
var gate1Long = 0.0;
var gate2Long = 0.0;
var gate3Long = 0.0;
var gate4Long = 0.0;
var gate5Long = 0.0;
var gate6Long = 0.0;
var gate7Long = 0.0;
var gate8Long = 0.0;
var gate9Long = 0.0;
var gate10Long = 0.0;

//DynamoDB initialization
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'us-east-1:08e41de7-9cb0-40d6-9f04-6f8956ed25bb'
});
AWS.config.region = 'us-east-1';
var db = new AWS.DynamoDB();

//Utility Variables
var megaCount = 0; //Int for the megacount
var position = 0;
var resetOrNot = false;
var beBack = false;
var upVotes = [];

setInterval(function(){reset();},60000);

reset();

function reset(){
	if(position<11){
		if(resetOrNot == false){
	setTimeout(function(){getLast()},500);
		}
		else{
		console.log("Reached else");
		if(resetOrNot == true){
			updateMegaCount();
			megaCount = 0;
			resetOrNot = false;
		}
		resetOrNot = false;
		position = -1;
	}
	} else{
		position = -1;
	}
}

function getLast(){
        var marams = {
            TableName : 'ashioto2',
            KeyConditionExpression :  "gateID=:gateId",
			ExpressionAttributeValues :
			{
				":gateId":{
				N: position.toString()
			},
			},
            ScanIndexForward : false,
			Limit : 1,
			ReturnConsumedCapacity : "TOTAL"
        }
        db.query(marams, function(err, data){
            if(err) console.log(err, err.stack);
            else{
				try{
					if(position!=-1){
                	var returnedValue = parseInt(data.Items[0].outcount.N);
                    var returnedGateId = parseInt(data.Items[0].gateID.N);
                    var returnedTimestamp = parseInt(data.Items[0].timestamp.N);
                    var returnedLatitude = parseFloat(data.Items[0].latitude.N);
                    var returnedLongitude = parseFloat(data.Items[0].longitude.N);
                    var dateTime = new Date(returnedTimestamp);
                        
                        switch(returnedGateId){
                            case 1:
                                gate1 = returnedValue;
                                gates.push({id : "1", count : gate1});
                                gate1Lat = returnedLatitude;
                                gate1Long = returnedLongitude;
                                break;
                            case 2:
                                gate2 = returnedValue;
                                gates.push({id : "2", count : gate2});
                                gate2Lat = returnedLatitude;
                                gate2Long = returnedLongitude;
                                break;
                            case 3:
                                gate3 = returnedValue;
                                gates.push({id : "3", count : gate3});
                                gate3Lat = returnedLatitude;
                                gate3Long = returnedLongitude;
                                break;
                            case 4:
                                gate4 = returnedValue;
                                gates.push({id : "4", count : gate4});
                                gate4Lat = returnedLatitude;
                                gate4Long = returnedLongitude;
                                break;
                            case 5:
                                gate5 = returnedValue;
                                gates.push({id : "5", count : gate5});
                                gate5Lat = returnedLatitude;
                                gate5Long = returnedLongitude;
                                break;
                            case 6:
                                gate6 = returnedValue;
                                gates.push({id : "6", count : gate6});
                                gate6Lat = returnedLatitude;
                                gate6Long = returnedLongitude;
                                break;
                            case 7:
                                gate7 = returnedValue;
                                gates.push({id : "7", count : gate7});
                                gate7Lat = returnedLatitude;
                                gate7Long = returnedLongitude;
                                console.log("Gate 7: ",gate7);
                                break;
                            case 8:
                                gate8 = returnedValue;
                                gates.push({id : "8", count : gate8});
                                gate8Lat = returnedLatitude;
                                gate8Long = returnedLongitude;
                                break;
                            case 9:
                                gate9 = returnedValue;
                                gates.push({id : "9", count : gate9});
                                gate9Lat = returnedLatitude;
                                gate9Long = returnedLongitude;
                                break;
                            case 10:
                                gate10 = returnedValue;
                                gates.push({id : "10", count : gate10});
                                gate10Lat = returnedLatitude;
                                gate10Long = returnedLongitude;
                                break;
                        }
					megaCount += returnedValue;
					}else{
						resetOrNot = true;
						reset();
					}
				} catch(err){
			if(err.name == 'TypeError'){
			}
		}
            }
        });
		position++;
	reset(false);
}
function updateMegaCount(){
    initMap();
}