<?php
  function getClientIp() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
        $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'unknown';

    return $ipaddress;
  }

  function getUserBrowser() {
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    if($userAgent == ''){
      $userAgent = "not available";
    }
    return $userAgent;
  }

  function timeSubmitted(){
    date_default_timezone_set('UTC');
    return date("D M j G:i:s T Y");
  }

?>
