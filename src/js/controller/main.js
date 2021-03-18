/**
 * Cypher Event
 */
function cypher(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    let inputText = document.getElementById("inputTextArea").value;
    inputText = trimfield(inputText);
    try{
        validateCoprimosAB(a, b);
        validateInputText(inputText);
        
        inputText = inputText.toUpperCase();

        let cypherText = "";
        let n = inputText.length
        for(let i = 0; i < n; i++){
            let word = inputText[i];
            if(word != " "){
                let m = alphabet.findIndex(w => w == word);
                let cpos = cypherWordPositionEcuation(m ,a, b, alphabet.length);
                cypherText = cypherText + alphabet[cpos];
            } else {
                cypherText = cypherText + word;
            }            
        }

        document.getElementById("resultTextArea").value=cypherText;

    } catch(err){
        alert(err.message);
    }
} 

/**
 * Descypher Event
 */
function descypher(){
    let inputText = document.getElementById("inputTextArea").value;
    inputText = trimfield(inputText);
    try{
        validateInputText(inputText);
        
        inputText = inputText.toUpperCase();

        let {arr, total} = buildWordFrecuencies(inputText);
        let totalWords = total;
        let frecuencies = arr;
        let sortedFrecuencies = sortFrecuencies(frecuencies);

        let tableHTML = buildTableFrecuenciesHTML(frecuencies, totalWords);
        document.getElementById("stats").innerHTML = tableHTML;

        let W = alphabet.findIndex(w => w == sortedFrecuencies[0].word);
        let K = alphabet.findIndex(w => w == sortedFrecuencies[1].word);
        let E = alphabet.findIndex(w => w == ES_LAN_CONST[1]);

        console.log(W);
        console.log(K);
        console.log(K);

        let posWordCypher2 = 0;
        let posWordCypher1 = 0;
        if(W > K){
            posWordCypher2 = W;
            posWordCypher1 = K;
        } else {
            posWordCypher2 = K;
            posWordCypher1 = W;
        }

        let n = alphabet.length;
        console.log(n);

        let b = E;

        let a = findA(posWordCypher2, posWordCypher1, b, n)

        console.log(a);

        let descypherText = "";
        for(let i = 0; i < inputText.length; i++){
            let word = inputText[i];
            if(word != " "){
                let c = alphabet.findIndex(w => w == word);
                let cpos = descypherWordPositionEcuation(c, a, b, n);
                console.log("FOR");
                console.log(cpos);
                descypherText = descypherText + alphabet[cpos];
            } else {
                descypherText = descypherText + word;
            }            
        }

        document.getElementById("resultTextArea").value=descypherText;

    } catch(err){
        alert(err.message);
    }
}

/**
 * Coprimos Event
 */
function validateAB(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    try{
        let cop = validateCoprimosAB(a, b);
        alert("MCD = " + cop + " - Sí son coprimos");
    } catch(err){
        alert(err.message);
    }
}

function validateCoprimosAB(a, b){    
    try{
        validateInputsAB(a, b);
        return validateCoprimos(a, b);
    } catch(err){
        throw new Error(err.message);
    }
}

/**
 * Clean Event
 */
function clean(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("inputTextArea").value = "";
    document.getElementById("resultTextArea").value = "";
    document.getElementById("stats").innerHTML = "";
}

/**
 * General functions
 */

function validateInputsAB(a, b){
    if(a == null || a == ""){
        throw new Error("Contante decimación vacía");
    } 

    if(b == null || b == ""){
        throw new Error("Contante desplazamiento vacía");
    } 
}

function validateInputText(text){
    if(text == null || text == ""){
        throw new Error("Dato de entrada vaćío");
    }
}

function trimfield(str){ 
    return str.replace(/^\s+|\s+$/g,''); 
}