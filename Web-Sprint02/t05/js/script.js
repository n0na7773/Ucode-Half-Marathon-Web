function total(addCount, addPrice, currentTotal = 0) {
    let res = addCount*addPrice + currentTotal;
    return Number(res.toFixed(2));
}