/**
 * Created by Max on 01.10.2015.
 */
var hours = process.argv[2];
var minutes = process.argv[3];
var romanDigits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var romanDecims = ['', 'X', 'XX', 'XXX', 'XL', 'L'];

function parseNumber(number)
{
    if (number === "00")
        return "--";
    var digits = number % 10;
    var decims = (number - digits)/ 10;
    return romanDecims[decims] + romanDigits[digits];
}

function main()
{
    if (hours > 23 || minutes > 59 || hours < 0 || minutes < 0)
    {
        console.log('Время указано неверно');
        return;
    }
    res = parseNumber(hours) + ':' + parseNumber(minutes);
    console.log(res);
}

main();
