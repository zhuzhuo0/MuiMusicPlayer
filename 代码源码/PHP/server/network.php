<?php
$host_name = exec("hostname");  
$host_ip = gethostbyname($host_name);
echo "你的IP地址是：".$host_ip;
?>