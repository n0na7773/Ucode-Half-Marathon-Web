function getFormattedDate(dateObject) {
    let date = '';
    
    if (dateObject.getDate() < 10) {
        date += '0' + dateObject.getDate() + '.';
    }
    else date += dateObject.getDate() + '.';

    if (dateObject.getMonth() < 9) {
        date += '0' + (dateObject.getMonth() + 1) + '.';
    }
    else date += (dateObject.getMonth() + 1) + '.';
    
    date += dateObject.getFullYear() + ' ';

    if (dateObject.getHours() < 10) {
        date += '0' + dateObject.getHours() + ':';
    }
    else date += dateObject.getHours() + ':';

    if (dateObject.getMinutes() < 10) {
        date += '0' + dateObject.getMinutes() + ' ';
    }
    else date += dateObject.getMinutes() + ' ';

    switch (dateObject.getDay()) {
        case 0: date += 'Sunday'; break;
        case 1: date += 'Monday'; break;
        case 2: date += 'Tuesday'; break;
        case 3: date += 'Wednesday'; break;
        case 4: date += 'Thursday'; break;
        case 5: date += 'Friday'; break;
        case 6: date += 'Saturday'; break;
    }

    return date;
}



