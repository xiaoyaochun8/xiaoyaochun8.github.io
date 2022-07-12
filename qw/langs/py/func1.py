# -*- coding: UTF-8 -*-

'''
#用于快速提取并去重面板内的引用资源
'''

import re

#打开文件
fo = open("e:/newfile", "r")
uniqDict = {}
line = "aaa"

#提取
while line:
    line = next(fo)
    
    if line:
        pattern = re.compile( r'At/[0-9a-zA-Z_/]*' )
        it = re.finditer( pattern, line )
        
        if it:
            for item in it:
                k = item.group().replace('/', '_')
                #去重、输出
                if k not in uniqDict:
                    uniqDict[k] = 'true'
                    print(item.group())

fo.close()
