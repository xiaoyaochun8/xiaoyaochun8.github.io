<?php
/*
用于快速提取并去重面板内的引用资源
 */

//打开文件
$fileName = 'e:/newfile';
$mode = 'r';
$handle = fopen($fileName, $mode);
if($handle){
    $line = 1;
    $arr = [];
    $uniqArr = [];
    //提取
    while (($buffer = fgets($handle)) !== false){
        preg_match_all("/At\/[\w\/]*/", $buffer, $matches);
        if(count($matches) > 0){
            if(count($matches[0]) > 0){
                foreach($matches[0] as $m){
                    //去重、输出
                    $k = str_replace('/', '_', $m);
                    if(!isset($uniqArr[$k])){
                        $uniqArr[$k] = 'true';
                        $arr[] = $m;
                        echo $m."\r\n";
                    }
                }
            }
        }
    }
    if (!feof($handle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($handle);
}