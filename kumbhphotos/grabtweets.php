<?

//We use already made Twitter OAuth library
//https://github.com/mynetx/codebird-php
require_once ('codebird.php');

//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 'opTrbdYkmnkjNEb6gOetNCU0o';
$CONSUMER_SECRET = 'xn42a4JSRS5ku2jM28DFuRjUEmIXxZ7ijj1OS8ZdCVAclUZdM3';
$ACCESS_TOKEN = '2992356198-0WRUTrijJJRPJvDLlD2ShV5sfaY7aM4hohRRfo9';
$ACCESS_TOKEN_SECRET = 'ZVgl2ejQ6Bqk5dkutvF4ncT0iwhzeE1A8IZkEGMoajqrT';

//Get authenticated
Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
$cb = Codebird::getInstance();
$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);


//retrieve posts
$q = $_POST['q'];
$count = $_POST['count'];
$api = $_POST['api'];

//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets
$params = array(
	'screen_name' => $q,
	'q' => $q,
	'count' => $count
);

//Make the REST call
$data = (array) $cb->$api($params);

$data1 = file_get_contents("https://post-cache.tagboard.com/search/Kumbhmela?count=100");
//Output result in JSON, getting it ready for jQuery to process
echo json_encode($data1);

?>
