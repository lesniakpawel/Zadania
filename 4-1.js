function range(start, end, step) {
    var table = [];
    if (arguments.length < 3) {
        step = 1;
    }
    if (!step) {
        console.log('wrong step value');
        step = 1;
    }
    step = Math.abs(step);
    if (start > end) {
        for (i = start; i >= end; i -= step) {
            table.push(i);
        }
        return table;
    }
    for (i = start; i <= end; i += step) {
        table.push(i);
    }
    return table;
}

function sum(someArray) {
    return someArray.reduce(function(a, b) {
        return a + b;
    });
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(range(10, 1, null));