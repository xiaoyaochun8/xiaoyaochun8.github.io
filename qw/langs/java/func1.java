/**
* 用于快速提取并去重面板内的引用资源
*/

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.regex.*;
import java.util.HashMap;

public class func1 {
    public static void main(String[] args) throws IOException {
        
        //打开文件
        FileInputStream inputStream = new FileInputStream("e:/newfile");
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        
        String str;
        String pattern = "At[0-9a-zA-Z_/]*";
        Pattern r = Pattern.compile(pattern);
        Matcher m;
        HashMap<String, String> uniqMap = new HashMap<String, String>();
        String k;
        int matcher_start = 0;
        
        //提取
        while((str = bufferedReader.readLine()) != null){
            m = r.matcher(str);
            matcher_start = 0;
            while(m.find(matcher_start)){

                //System.out.println(m.groupCount());
                str = m.group();
                //去重、输出
                k = str.replaceAll("/", "_");
                //System.out.println(k);

                if(uniqMap.get(k) == null){
                    uniqMap.put(k, "true");
                    System.out.println(str);
                }
                matcher_start = m.end();

            }
        }
        //System.out.println(uniqMap);
        inputStream.close();
        bufferedReader.close();
    }
}