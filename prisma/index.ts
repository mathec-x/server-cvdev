console.clear()
var isalpha = function (ch) {
    return /^[A-Z]$/i.test(ch);
}

function printf(...args: any) {
    console.log(...args)
}



var l, w, s, result;

function count(data: string) {
    var letters = 0;
    var words = 1;
    var sentences = 0;

    for (var i = 0; data[i] != null; i++) {
        if (isalpha(data[i])) {
            l++;
        }
        if (data[i] == ' ') {
            w++;
        }
        if (data[i] == '.' || data[i] == '!' || data[i] == '?') {
            s++;
        }
    }
    l = letters;
    w = words;
    s = sentences;
}

function calc(a: number, b: number, c: number)
{
    result = Math.round(0.0588 * (a / (b / 100)) - 0.296 * (c / (b / 100)) - 15.8);
}

function main(): void {
    var text = "loren ipsun";
    count(text);
    calc(l, w, s);

    if (result < 1) {
        printf("Before Grade 1\n");
    }
    else if (result >= 16) {
        printf("Grade 16+\n");
    }
    else {
        printf("Grade ", result);
    }
}

















main();