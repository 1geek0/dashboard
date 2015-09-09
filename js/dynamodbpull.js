//Views
var refresh = document.getElementById('refreshButton');
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

refresh.addEventListener('click',reset);

reset();


function reset(){
	if(position<11){
		console.log("Reset Counter: ", position);
		if(resetOrNot == false){
	setTimeout(function(){getLast()},500);
		}
		else{
		console.log("Reached else");
		if(resetOrNot == true){
			console.log("Reset Mega");
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
                    var dateTime = new Date(returnedTimestamp);
                    
                        if(returnedGateId == 1){
                            console.log("Gotcha: ",position);
                        }
                        switch(returnedGateId){
                            case 1:
                                gate1 = returnedValue;
                                break;
                            case 2:
                                gate2 = returnedValue;
                                break;
                            case 3:
                                gate3 = returnedValue;
                                break;
                            case 4:
                                gate1 = returnedValue;
                                break;
                            case 5:
                                gate1 = returnedValue;
                                break;
                            case 6:
                                gate6 = returnedValue;
                                break;
                            case 7:
                                gate7 = returnedValue;
                                console.log("Gate 7: ",gate7);
                                break;
                            case 8:
                                gate8 = returnedValue;
                                break;
                            case 9:
                                gate9 = returnedValue;
                                break;
                            case 10:
                                gate10 = returnedValue;
                                break;
                        }
					megaCount += returnedValue;
					}else{
						console.log("Position: 0")
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
	//HTML Views
	var megaCountTextView = document.getElementById('megaCountText');
	megaCountTextView.innerHTML = megaCount;
    initMap();
}