function onloading() {
    setTimeout(function () { document.getElementById("mainpage").style.transition = "opacity 3s"; }, 1000);
    setTimeout(function () { document.getElementById("mainpage").style.opacity = "1"; }, 1000);
}

function mainpagetocontent() {
    document.body.style.overflow = "visible";
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("content").style.display = "block";
    setTimeout(function () { document.getElementById("title").style.opacity = "1" }, 500);
    document.getElementById("whatis").style.display = "block";
    setTimeout(function () { document.getElementById("whatistitle").style.opacity = "1" }, 2500);
    setTimeout(function () { document.getElementById("whatistext1").style.opacity = "1" }, 4000);
    setTimeout(function () { document.getElementById("whatistext2").style.opacity = "1" }, 5000);
    setTimeout(function () { document.getElementById("whatistext3").style.opacity = "1" }, 6000);
    setTimeout(function () { document.getElementById("whatistext4").style.opacity = "1" }, 7000);
    setTimeout(function () { document.getElementById("whatistext5").style.opacity = "1" }, 8000);
    setTimeout(function () { document.getElementById("whatisnext").style.opacity = "1" }, 9000);
}

function howtoplay() {
    document.getElementById("whatis").style.display = "none";
    document.getElementById("howtoplay").style.display = "block";
    setTimeout(function () { document.getElementById("howtoplaytitle").style.opacity = "1" }, 500);
    setTimeout(function () { document.getElementById("howtoplaytext1").style.opacity = "1" }, 2000);
    setTimeout(function () { document.getElementById("howtoplaytext2").style.opacity = "1" }, 3000);
    setTimeout(function () { document.getElementById("howtoplaytext3").style.opacity = "1" }, 4000);
    setTimeout(function () { document.getElementById("howtoplaytext4").style.opacity = "1" }, 5000);
    setTimeout(function () { document.getElementById("howtoplaytext5").style.opacity = "1" }, 6000);
    setTimeout(function () { document.getElementById("howtoplaytext6").style.opacity = "1" }, 7000);
    setTimeout(function () { document.getElementById("howtoplaytext7").style.opacity = "1" }, 8000);
    setTimeout(function () { document.getElementById("howtoplaytext8").style.opacity = "1" }, 9000);
    setTimeout(function () { document.getElementById("howtoplaytext9").style.opacity = "1" }, 10000);
    setTimeout(function () { document.getElementById("howtoplaytext10").style.opacity = "1" }, 11000);
    setTimeout(function () { document.getElementById("howtoplaynext").style.opacity = "1" }, 12000);
}

var alrcho = [];
var ucards = 0;
var dcards = 0;
var dhidden;
var card;
var check = 0;
var utotal = 0;
var dtotal = 0;

function game() {
    document.getElementById("howtoplay").style.display = "none";
    document.getElementById("game").style.display = "block";
    setTimeout(function () {
        for (i = 1; i <= 5; i++) {
            document.getElementById("u" + i).style.transform = "scale(1)";
        }
        for (i = 1; i <= 5; i++) {
            document.getElementById("d" + i).style.transform = "scale(1)";
        }
    }, 500);
}

function reset() {
    if (confirm("Reset everything?")) {
        alrcho.length = 0;
        ucards = 0;
        dcards = 0;
        check = 0;
        utotal = 0;
        dtotal = 0;
        document.getElementById("bet").value = "100";
        document.getElementById("bet").disabled = false;
        document.getElementById("allin").disabled = false;
        document.getElementById("placebet").disabled = false;
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("coins").innerHTML = 50000;
        document.getElementById("info").innerHTML = "";
        for (i = 1; i <= 5; i++) {
            document.getElementById("u" + i).src = "https://i.imgur.com/30QXYPT.png";
        }
        for (i = 1; i <= 5; i++) {
            document.getElementById("d" + i).src = "https://i.imgur.com/30QXYPT.png";
        }
    }
}

function replacecard(card, id) {
    setTimeout(function () {
        document.getElementById(id).style.transform = "scale(0)";
    }, 500);
    setTimeout(function () {
        switch (card) {
            case 1:
                document.getElementById(id).src = "https://i.imgur.com/6niblpZ.png";
                break;
            case 2:
                document.getElementById(id).src = "https://i.imgur.com/7AtUOJO.png";
                break;
            case 3:
                document.getElementById(id).src = "https://i.imgur.com/O2BCcO8.png";
                break;
            case 4:
                document.getElementById(id).src = "https://i.imgur.com/mwFtoBM.png";
                break;
            case 5:
                document.getElementById(id).src = "https://i.imgur.com/iddTJ7s.png";
                break;
            case 6:
                document.getElementById(id).src = "https://i.imgur.com/163xek4.png";
                break;
            case 7:
                document.getElementById(id).src = "https://i.imgur.com/YIV3Na0.png";
                break;
            case 8:
                document.getElementById(id).src = "https://i.imgur.com/h9Amtc4.png";
                break;
            case 9:
                document.getElementById(id).src = "https://i.imgur.com/gAmNfn2.png";
                break;
            case 10:
                document.getElementById(id).src = "https://i.imgur.com/QRZNCjj.png";
                break;
            case 11:
                document.getElementById(id).src = "https://i.imgur.com/INRrh1W.png";
                break;
            case 12:
                document.getElementById(id).src = "https://i.imgur.com/05xAcKn.png";
                break;
            case 13:
                document.getElementById(id).src = "https://i.imgur.com/ArmYdO8.png";
                break;
            case 14:
                document.getElementById(id).src = "https://i.imgur.com/HFORgVP.png";
                break;
            case 15:
                document.getElementById(id).src = "https://i.imgur.com/JRcOlU4.png";
                break;
            case 16:
                document.getElementById(id).src = "https://i.imgur.com/7ZT9HK6.png";
                break;
            case 17:
                document.getElementById(id).src = "https://i.imgur.com/Qbn6C4I.png";
                break;
            case 18:
                document.getElementById(id).src = "https://i.imgur.com/XR2fY2y.png";
                break;
            case 19:
                document.getElementById(id).src = "https://i.imgur.com/8w5DECz.png";
                break;
            case 20:
                document.getElementById(id).src = "https://i.imgur.com/UNhR3bH.png";
                break;
            case 21:
                document.getElementById(id).src = "https://i.imgur.com/oTw5M2k.png";
                break;
            case 22:
                document.getElementById(id).src = "https://i.imgur.com/Pr58GuX.png";
                break;
            case 23:
                document.getElementById(id).src = "https://i.imgur.com/SaIU4Ew.png";
                break;
            case 24:
                document.getElementById(id).src = "https://i.imgur.com/Ikgms93.png";
                break;
            case 25:
                document.getElementById(id).src = "https://i.imgur.com/9UMKPrc.png";
                break;
            case 26:
                document.getElementById(id).src = "https://i.imgur.com/jf6VqSo.png";
                break;
            case 27:
                document.getElementById(id).src = "https://i.imgur.com/ro6cvGK.png";
                break;
            case 28:
                document.getElementById(id).src = "https://i.imgur.com/yAzvqt5.png";
                break;
            case 29:
                document.getElementById(id).src = "https://i.imgur.com/al3xJJZ.png";
                break;
            case 30:
                document.getElementById(id).src = "https://i.imgur.com/3h2eS3N.png";
                break;
            case 31:
                document.getElementById(id).src = "https://i.imgur.com/tt7iN5N.png";
                break;
            case 32:
                document.getElementById(id).src = "https://i.imgur.com/IzMg8vh.png";
                break;
            case 33:
                document.getElementById(id).src = "https://i.imgur.com/0QZn7eg.png";
                break;
            case 34:
                document.getElementById(id).src = "https://i.imgur.com/sGXX1iY.png";
                break;
            case 35:
                document.getElementById(id).src = "https://i.imgur.com/piHPL6o.png";
                break;
            case 36:
                document.getElementById(id).src = "https://i.imgur.com/o619hdg.png";
                break;
            case 37:
                document.getElementById(id).src = "https://i.imgur.com/HRczEnS.png";
                break;
            case 38:
                document.getElementById(id).src = "https://i.imgur.com/eHA13wu.png";
                break;
            case 39:
                document.getElementById(id).src = "https://i.imgur.com/2n7ejot.png";
                break;
            case 40:
                document.getElementById(id).src = "https://i.imgur.com/EVPBHXg.png";
                break;
            case 41:
                document.getElementById(id).src = "https://i.imgur.com/ySTIR4r.png";
                break;
            case 42:
                document.getElementById(id).src = "https://i.imgur.com/QTWe7Hq.png";
                break;
            case 43:
                document.getElementById(id).src = "https://i.imgur.com/I9eLkAM.png";
                break;
            case 44:
                document.getElementById(id).src = "https://i.imgur.com/ST3oMwz.png";
                break;
            case 45:
                document.getElementById(id).src = "https://i.imgur.com/KURYKMn.png";
                break;
            case 46:
                document.getElementById(id).src = "https://i.imgur.com/a5hW5C3.png";
                break;
            case 47:
                document.getElementById(id).src = "https://i.imgur.com/k363h0W.png";
                break;
            case 48:
                document.getElementById(id).src = "https://i.imgur.com/pMk69Su.png";
                break;
            case 49:
                document.getElementById(id).src = "https://i.imgur.com/MRpynbW.png";
                break;
            case 50:
                document.getElementById(id).src = "https://i.imgur.com/gR8p8Oe.png";
                break;
            case 51:
                document.getElementById(id).src = "https://i.imgur.com/1AE3uFt.png";
                break;
            case 52:
                document.getElementById(id).src = "https://i.imgur.com/QRLHcuc.png";
                break;
            default:
                document.getElementById(id).src = "https://i.imgur.com/hOt935h.png";
                break;
        }
        document.getElementById(id).style.transform = "scale(1)";
    }, 1500);
}

function allin() {
    document.getElementById("bet").value = Number(document.getElementById("coins").innerHTML);
    placebet();
}

function placebet() {
    for (i = 1; i <= 5; i++) {
        document.getElementById("u" + i).src = "https://i.imgur.com/30QXYPT.png";
    }
    for (i = 1; i <= 5; i++) {
        document.getElementById("d" + i).src = "https://i.imgur.com/30QXYPT.png";
    }
    if (document.getElementById("bet").value < 100) {
        alert("The minimum bet is 100");
        document.getElementById("bet").value = 100;
        return;
    }
    if (document.getElementById("bet").value > Number(document.getElementById("coins").innerHTML)) {
        if (Number(document.getElementById("coins").innerHTML) == 0) {
            alert("You are bankrupt. Use RESET to start over.");
            document.getElementById("bet").value = 100;
            return;
        }
        alert("Getting ahead of ourselves, aren't we? Bet should be less than available balance.");
        document.getElementById("bet").value = 100;
        return;
    }
    if (document.getElementById("bet").value % 100 != 0) {
        alert("Bet has to be a multiple of 100");
        document.getElementById("bet").value = 100;
        return;
    }
    if (document.getElementById("bet").value == Number(document.getElementById("coins").innerHTML)) {
        if (confirm("Really wanna go all in?") == false) {
            document.getElementById("bet").value = 100;
            return;
        }
    }
    document.getElementById("bet").disabled = true;
    document.getElementById("allin").disabled = true;
    document.getElementById("placebet").disabled = true;
    document.getElementById("coins").innerHTML = Number(document.getElementById("coins").innerHTML) - document.getElementById("bet").value;
    card = Math.floor(Math.random() * 52) + 1;
    alrcho.push(card);
    ucards++;
    replacecard(card, "u1");
    card = card % 13;
    if (card == 1) {
        utotal = 11;
    }
    else if ((card > 10 && card <= 12) || card == 0) {
        utotal = 10;
    }
    else {
        utotal = card;
    }
    do {
        card = Math.floor(Math.random() * 52) + 1;
        check = 0;
        for (i = 0; i < alrcho.length; i++) {
            if (card == alrcho[i]) {
                check = 1;
                break;
            }
        }
    } while (check == 1);
    alrcho.push(card);
    ucards++;
    replacecard(card, "u2");
    card = card % 13;
    if (card == 1) {
        utotal += 11;
        if (utotal > 21) {
            utotal = 12;
        }
    }
    else if ((card > 10 && card <= 12) || card == 0) {
        utotal += 10;
    }
    else {
        utotal += card;
    }
    do {
        card = Math.floor(Math.random() * 52) + 1;
        check = 0;
        for (i = 0; i < alrcho.length; i++) {
            if (card == alrcho[i]) {
                check = 1;
                break;
            }
        }
    } while (check == 1);
    alrcho.push(card);
    dcards++;
    replacecard(card, "d1");
    card = card % 13;
    if (card == 1) {
        dtotal = 11;
    }
    else if ((card > 10 && card <= 12) || card == 0) {
        dtotal = 10;
    }
    else {
        dtotal = card;
    }
    do {
        card = Math.floor(Math.random() * 52) + 1;
        check = 0;
        for (i = 0; i < alrcho.length; i++) {
            if (card == alrcho[i]) {
                check = 1;
                break;
            }
        }
    } while (check == 1);
    alrcho.push(card);
    dcards++;
    dhidden = card;
    replacecard(0, "d2");
    card = card % 13;
    if (card == 1) {
        dtotal += 11;
        if (dtotal > 21) {
            dtotal = 12;
        }
    }
    else if ((card > 10 && card <= 12) || card == 0) {
        dtotal += 10;
    }
    else {
        dtotal += card;
    }
    if (utotal == 21) {
        ublackjack();
        return;
    }
    document.getElementById("info").innerHTML = "Use the above buttons to hit or stand.";
    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;
    return;
}

function hit() {
    do {
        card = Math.floor(Math.random() * 52) + 1;
        check = 0;
        for (i = 0; i < alrcho.length; i++) {
            if (card == alrcho[i]) {
                check = 1;
                break;
            }
        }
    } while (check == 1);
    alrcho.push(card);
    ucards++;
    replacecard(card, "u" + ucards);
    card = card % 13;
    if (card == 1) {
        utotal += 11;
        if (utotal > 21) {
            utotal -= 10;
        }
    }
    else if ((card > 10 && card <= 12) || card == 0) {
        utotal += 10;
    }
    else {
        utotal += card;
    }
    if (utotal > 21) {
        ubust();
    }
    else if (utotal == 21) {
        ublackjack();
    }
    else if (ucards == 5) {
        ufive();
    }
}

function ubust() {
    document.getElementById("info").innerHTML = "You busted! Your total went over 21. Place bet again.";
    replacecard(dhidden, "d2");
    var bet = document.getElementById("bet");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    bet.value = 100;
}

function ublackjack() {
    document.getElementById("info").innerHTML = "BLACKJACK!!! You profit 2x of your bet. Place bet again.";
    replacecard(dhidden, "d2");
    var bet = document.getElementById("bet");
    var coins = document.getElementById("coins");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    coins.innerHTML = Number(coins.innerHTML) + (3 * bet.value);
    bet.value = 100;
}

function ufive() {
    document.getElementById("info").innerHTML = "You drew 5 cards without going bust. Enjoy your profit. Place bet again.";
    replacecard(dhidden, "d2");
    var bet = document.getElementById("bet");
    var coins = document.getElementById("coins");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    coins.innerHTML = Number(coins.innerHTML) + (2 * bet.value);
    bet.value = 100;
}

function stand() {
    replacecard(dhidden, "d2");
    if (dtotal == 21) {
        dblackjack();
        return;
    }
    else if (dtotal >= 17) {
        checktotal();
        return;
    }
    var dcheck = 0;
    do {
        do {
            card = Math.floor(Math.random() * 52) + 1;
            check = 0;
            for (i = 0; i < alrcho.length; i++) {
                if (card == alrcho[i]) {
                    check = 1;
                    break;
                }
            }
        } while (check == 1);
        alrcho.push(card);
        dcards++;
        replacecard(card, "d" + dcards);
        card = card % 13;
        if (card == 1) {
            dtotal += 11;
            if (dtotal > 21) {
                dtotal -= 10;
            }
        }
        else if ((card > 10 && card <= 12) || card == 0) {
            dtotal += 10;
        }
        else {
            dtotal += card;
        }

        if (dtotal > 21) {
            dcheck = 1;
            dbust();
        }
        else if (dtotal == 21) {
            dcheck = 1;
            dblackjack();
        }
        else if (dtotal >= 17) {
            dcheck = 1;
            checktotal();
        }
        else if (dcards == 5) {
            dcheck = 1;
            dfive();
        }
    } while (dcheck == 0)
}

function dbust() {
    document.getElementById("info").innerHTML = "Dealer busted! You win this round. Place bet again.";
    var bet = document.getElementById("bet");
    var coins = document.getElementById("coins");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    coins.innerHTML = Number(coins.innerHTML) + (2 * bet.value);
    bet.value = 100;
}

function dblackjack() {
    document.getElementById("info").innerHTML = "DEALER's BLACKJACK!!! You lose this round. Place bet again.";
    var bet = document.getElementById("bet");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    bet.value = 100;
}

function dfive() {
    document.getElementById("info").innerHTML = "Dealer drew 5 cards without going bust. Unlucky for you. Place bet again.";
    var bet = document.getElementById("bet");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    bet.value = 100;
}

function checktotal() {
    if (utotal > dtotal) {
        document.getElementById("info").innerHTML = "Your total is greater than the dealer's. You win. Place bet again.";
        var bet = document.getElementById("bet");
        var coins = document.getElementById("coins");
        coins.innerHTML = Number(coins.innerHTML) + (2 * bet.value);
    }
    else if (dtotal > utotal) {
        document.getElementById("info").innerHTML = "Dealer's total is greater than yours. You lose. Place bet again.";
    }
    else {
        document.getElementById("info").innerHTML = "Both totals are equal. Its a tie. Place bet again.";
        var bet = document.getElementById("bet");
        var coins = document.getElementById("coins");
        coins.innerHTML = Number(coins.innerHTML) + (1 * bet.value);
    }
    var bet = document.getElementById("bet");
    bet.disabled = false;
    document.getElementById("allin").disabled = false;
    document.getElementById("placebet").disabled = false;
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    alrcho.length = 0;
    ucards = 0;
    dcards = 0;
    check = 0;
    utotal = 0;
    dtotal = 0;
    bet.value = 100;
}