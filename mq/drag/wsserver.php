<?php
//swoole-cli wsserver.php
$server = new Swoole\Websocket\Server('127.0.0.1', 9502);
$fdArr = [];

$server->on('start', function ($server) {
    echo "Websocket Server is started at ws://127.0.0.1:9502\n";
});

$server->on('open', function($server, $req) {
	global $fdArr;
    echo "connection open: {$req->fd}\n";
	if(!in_array($req->fd, $fdArr)){
		$fdArr[] = $req->fd;
	}
	var_dump($fdArr);
});

$server->on('message', function($server, $frame) {
	global $fdArr;
    echo "received message: {$frame->data}\n";
    //$server->push($frame->fd, json_encode(['hello', 'world', $frame->data]));
	foreach($fdArr as $fd){
		$server->push($fd, $frame->data);
	}
});

$server->on('close', function($server, $fd) {
	global $fdArr;
    echo "connection close: {$fd}\n";
	foreach($fdArr as $k => $fdItem){
		if($fdItem == $fd){
			unset($fdArr[$k]);
		}
	}
	var_dump($fdArr);
});

$server->start();