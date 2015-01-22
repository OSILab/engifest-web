<?php
session_start();
require_once("./twitteroauth/twitteroauth/twitteroauth.php"); //Path to twitteroauth library

$notweets = 30;
$q = (isset($_GET['q']))?"%23".$_GET['q']:"abhinavdtu2012";
$consumerkey = "RT2rqef8HFh87eRoLiqGPVJrO";
$consumersecret = "aEklhInaFyShHtTcYqiiWJMITEhZbQ4S4gymje4a9h8O822E28";
$accesstoken = "1317696217-hTotRnOQuadN6ATg9jjMdGHUOn7Vbs6S5UoT43n";
$accesstokensecret = "Y04PYk74mD3ODT8QxdYWk3xoUedkfFm1v99bXOAWs7nNx";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
//$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
$tweets = $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=".$q."&result_type=mixed&count=".$notweets);
echo json_encode($tweets);
?>