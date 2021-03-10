function addWords(obj, wrds) {
    obj.words += ' ' + wrds;
    obj.words = obj.words.replace(/\s+/g, ' ').trim()
    let arr = obj.words.split(' ');
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) arr.splice(j, 1);
        }
    }
    obj.words = arr[0];
    for(let i = 1; i < arr.length; i++) {
        obj.words += ' ' + arr[i];
    }
    
}
function removeWords(obj, wrds) {
    obj.words = obj.words.replace(/\s+/g, ' ').trim()
    let arr = obj.words.split(' ');
    wrds = wrds.replace(/\s+/g, ' ').trim();
    let del_arr = wrds.split(' ');
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < del_arr.length; j++) {
            if (arr[i] === del_arr[j]) arr.splice(i, 1);
        }
    }
    obj.words = arr[0];
    for(let i = 1; i < arr.length; i++) {
        obj.words += ' ' + arr[i];
    }
}
function changeWords(obj, oldWrds, newWrds) {
    obj.words = obj.words.replace(/\s+/g, ' ').trim()
    let arr = obj.words.split(' ');
    oldWrds = oldWrds.replace(/\s+/g, ' ').trim();
    let old_arr = oldWrds.split(' ');
    newWrds = newWrds.replace(/\s+/g, ' ').trim();
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < old_arr.length; j++) {
            if (arr[i] === old_arr[j]) arr[i] = arr[i].replace(arr[i], newWrds);
        }
    }
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) arr.splice(j, 1);
        }
    }
    obj.words = arr[0];
    for(let i = 1; i < arr.length; i++) {
        obj.words += ' ' + arr[i];
    }
}