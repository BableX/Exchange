let valuta = prompt("Выбери обмен (USD-TRY или TRY-USD)");
let nummber = prompt("Сколько хочешь обменять?");
let result;

switch (valuta) {
    case "USD-TRY":
        result = nummber * 34.5;
        alert(`${nummber} USD = ${result} TRY`);
        break;

    case "TRY-USD":
        result = nummber / 34.5;
        alert(`${nummber} TRY = ${result} USD`);
        break;

    default:
        alert("Такой пары валют нет 😕 (используй USD-TRY или TRY-USD)");
        break;
}
