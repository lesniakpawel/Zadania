var string = "";
var size = prompt("Podaj wymiar szachownicy:");
for (i = 1; i <= size; i++) {
	for (j = 1; j <= size; j++) {
		if ((i + j) % 2 == 0) {
			string += " ";
		}
		else string += "#";
	}
string += "\n";
}
console.log(string);

