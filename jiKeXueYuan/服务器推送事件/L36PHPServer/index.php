<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-11 02:22:01
 * @version $Id$
 */

header('Content-Type:text/event-stream');

for($i = 0; $i<100;$i++){
    date_default_timezone_set("Asia/Shanghai");
    echo "event:newDate\n";
    echo 'data:'.date('Y-m-d H-i-s');
    echo "\n\n";
    flush();
    sleep(1);
}