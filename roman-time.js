/**
 * Created by Max on 01.10.2015.
 */
var hours = process.argv[2];
var minutes = process.argv[3];

var romanGraphicDigits = [
    [
        '',
        '',
        '',
        '',
        ''
    ],
    [
        '.___ ',
        '|   |',
        '|   |',
        '|   |',
        '|___|'
    ],
    [
        '.___ .___ ',
        '|   ||   |',
        '|   ||   |',
        '|   ||   |',
        '|___||___|'
    ],
    [
        '.___ .___ .___ ',
        '|   ||   ||   |',
        '|   ||   ||   |',
        '|   ||   ||   |',
        '|___||___||___|'
    ],
    [
        '._______   ____',
        '|   \\   \\ /   /',
        '|   |\\   Y   / ',
        '|   | \\     /  ',
        '|___|  \\___/   '
    ],
    [
       '____   ____',
       '\\   \\ /   /',
       ' \\   Y   / ',
       '  \\     /  ',
       '   \\___/   '
    ],
    [
        '____   ____.___ ',
        '\\   \\ /   /|   |',
        ' \\   Y   / |   |',
        '  \\     /  |   |',
        '   \\___/   |___|'
    ],
    [
        '____   ____.___ .___ ',
        '\\   \\ /   /|   ||   |',
        ' \\   Y   / |   ||   |',
        '  \\     /  |   ||   |',
        '   \\___/   |___||___|'
    ],
    [
        '____   ____.___ .___ .___ ',
        '\\   \\ /   /|   ||   ||   |',
        ' \\   Y   / |   ||   ||   |',
        '  \\     /  |   ||   ||   |',
        '   \\___/   |___||___||___|'
    ],
    [
        '._______  ___',
        '|   \\   \\/  /',
        '|   |\\     / ',
        '|   |/     \\ ',
        '|___/___/\\__\\'
    ]
];

var graphicColon = [
    '    ',
    ' /\\ ',
    ' \\/ ',
    ' /\\ ',
    ' \\/ '
];

var graphicZero = [
    '         ',
    '         ',
    '  ______ ',
    '         ',
    '         '
];

var romanGraphicDecims = [
    [
        '',
        '',
        '',
        '',
        ''
    ],
    [
        '____  ___',
        '\\   \\/  /',
        ' \\     / ',
        ' /     \\ ',
        '/___/\\__\\'
    ],
    [
        '____  _______  ___',
        '\\   \\/  /\\   \\/  /',
        ' \\     /  \\     / ',
        ' /     \\  /     \\ ',
        '/___/\\__\\/___/\\__\\'
    ],
    [
        '____  _______  _______  ___ ',
        '\\   \\/  /\\   \\/  /\\   \\/  / ',
        ' \\     /  \\     /  \\     /  ',
        ' /     \\  /     \\  /     \\  ',
        '/___/\\__\\/___/\\__\\/___/\\__\\'
    ],
    [
        '____  ___.____     ',
        '\\   \\/  /|    |    ',
        ' \\     / |    |    ',
        ' /     \\ |    |___ ',
        '/___/\\__\\|________|'
    ],
    [
        '.____     ',
        '|    |    ',
        '|    |    ',
        '|    |___ ',
        '|________|'
    ]
];

var romanDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romanDecims = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

function parseNumber(number) {
    if (number === 0)
        return "--";
    var digits = number % 10;
    var decims = (number - digits)/ 10;
    return romanDecims[decims] + romanDigits[digits];
}

function draw(hours, minutes) {
    var hoursDigits = romanGraphicDigits[hours % 10];
    var hoursDecims = romanGraphicDecims[(hours - (hours % 10)) / 10];
    var minutesDigits = romanGraphicDigits[minutes % 10];
    var minutesDecims = romanGraphicDecims[(minutes - (minutes % 10)) / 10];

    if (hours == 0) {
        hoursDigits = hoursDecims = graphicZero;
    }
    if (minutes == 0) {
        minutesDigits = minutesDecims = graphicZero;
    }

    for (var i = 0; i < 5; i++) {
        console.log(hoursDecims[i], hoursDigits[i], graphicColon[i],
            minutesDecims[i], minutesDigits[i]);
    }
}

function main() {
    if (hours > 23 || minutes > 59 || hours < 0 || minutes < 0 ||
        Math.floor(hours) != hours || Math.floor(minutes) != minutes) {
        console.log('Время указано не верно');
        return;
    }
    
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    var res = parseNumber(hours) + ':' + parseNumber(minutes);
    console.log(res);

    draw(hours, minutes);
}

main();
