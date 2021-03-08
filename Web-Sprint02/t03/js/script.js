var num = Number(prompt("Choose a finger from 1 to 10?"));
while (!(num > 0) || !(num <= 10)) {
    num = Number(prompt("Choose a finger from 1 to 10?"));
}

switch (num) {
    case 1:
        alert('Back to square 1');
        break;
    case 2:
        alert('Goody 2-shoes');
        break;
    case 3:
        alert('Two\'s company, three\'s a crowd');
        break;
    case 4:
        alert('Counting sheep');
        break;
    case 5:
        alert('Take five');
        break;
    case 6:
        alert('Two\'s company, three\'s a crowd');
        break;
    case 7:
        alert('Seventh heaven');
        break;
    case 8:
        alert('Behind the eight-ball');
        break;
    case 9:
        alert('Counting sheep');
        break;
    case 10:
        alert('Cheaper by the dozen');
        break;
}