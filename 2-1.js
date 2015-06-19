/*//--------------------------------------------------
//opcja pierwsza, z petla "do while"

var hashTag = "#";
do {
	console.log(hashTag);
	hashTag += "#";
} while (hashTag.length<8);



//--------------------------------------------------*/
//z petla "for"

var hashTag = "";
for (hashTag = "#"; hashTag.length <= 7; hashTag += "#") {
	console.log(hashTag);
//	hashTag += "#";
}

