/*
用于快速提取并去重面板内的引用资源
 */
package main

import (
    "regexp"
	"os"
    "fmt"
	"io"
    "bufio"
)

func main() {
	//打开文件
	f, err := os.Open("e:/newfile")
	if err != nil {
		panic(err)
	}
	defer f.Close()
	//提取
	rd := bufio.NewReader(f)
	var uniqMap map[string]string
	uniqMap = make(map[string]string)

	for {
		str, err := rd.ReadString('\n')
		if err != nil || io.EOF == err {
			break
		}
		ret := regexp.MustCompilePOSIX(`At/[0-9a-zA-Z_/]*\.`).FindAllString(str, -1)
		if len(ret) > 0 {
			for _, v := range ret {
				//去重、输出
				if uniqMap[v] != "true" {
					uniqMap[v] = "true"
					fmt.Println( v )
				}
			}
		}
	}
}