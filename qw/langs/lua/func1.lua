--[[
用于快速提取并去重面板内的引用资源
]]--

--//打开文件
file = io.open("e:/newfile", "r")
io.input(file)
str = "aa"
uniqTable = {}
while(str ~= nil) do
    --//提取
    str = io.read()
    if str ~= nil then
        for ret in string.gmatch(str, "At/[0-9a-zA-Z_/]*") do
            --//去重、输出
            key = ret
            if uniqTable[key] ~= 'true' then
                uniqTable[key] = 'true'
                print(ret)
            end
            
        end
    end
end
io.close(file)