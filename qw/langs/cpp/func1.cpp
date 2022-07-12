#include <fstream>
#include <iostream>
#include <string>
#include <map>
#include <regex>

using namespace std;

int main()
{
	//打开文件
	ifstream in("e:/newfile");

	string line;
	regex r("At/[0-9A-Za-z_/]*");
	smatch m;

	map<string, string> uniqMap;
	string k;

	if (in) {
		//提取
		while (getline(in, line)) {
			sregex_iterator pos(line.cbegin(), line.cend(), r);
			sregex_iterator end;

			for (; pos != end; ++pos) {
				//去重、输出
				k = pos->str(0);
				if (uniqMap.find(k) == uniqMap.end()) {
					uniqMap[k] = "true";
					cout << pos->str(0) << endl;
				}
			}
		}
	} else {
		cout << "no such file" << endl;
	}
}