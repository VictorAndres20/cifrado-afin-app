function buildWordFrecuencies(text){
    let arr = [];
    let total = 0;

    for(let i=0;i<text.length;i++){
        let word = text[i];
        if(word != " " && word != "\n" && word != "\t"){
            let index = findWord(word, arr);
            if(index === -1){
                arr = addNewWord(word, arr);
            } else {
                arr = addFecuency(index, arr);
            }
            total++;
        }
    }

    return {arr, total};
}

function buildTableFrecuenciesHTML(arr, total){
    let html = '<table class="table">';
    html += '<thead class="thead-dark">';
    html += '<tr><th scope="col">Letra</th><th scope="col">Cantidad</th><th scope="col">Procentaje</th></tr>';
    html += '<thead class="thead-dark">';
    html += '</thead>';
    html += '<tbody>';
    
    for(let i=0;i<arr.length;i++){
        let frec = arr[i];
        let {word, f} = frec;
        html += '<tr>';
        html += `<td>${word}</td>`;
        html += `<td>${f}</td>`;
        html += `<td>${f/total * 100} %</td>`;
        html += '</tr>';
        
    }

    html += '</tbody>';
    html += '</table>';

    return html;
}

function sortFrecuencies(arr){
    return arr.sort(function (a, b) {
        if (a.f < b.f) {
          return 1;
        }
        if (a.f > b.f) {
          return -1;
        }
        // a must be equal to b
        return 0;
    });
} 

// If return -1 the word is not present
function findWord(word, arr){
    return arr.findIndex(a => a.word === word);
}

function addFecuency(index, arr){
    let w = arr[index];
    let f = w.f;
    w.f = f + 1;
    arr[index] = w;
    return arr;
}

function addNewWord(word, arr){
    arr.push({
        word:word,
        f:1
    });
    return arr;
}

