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
                console.log(word);
                console.log(m);
                let cpos = cypherWordPositionEcuation(m ,a, b, n);
                console.log(cpos);
                console.log(alphabet[cpos]);
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

        let frecuencies = buildWordFrecuencies(inputText);
        console.log("--------Frecuencias");
        console.log(frecuencies);
        let sortedFrecuencies = sortFrecuencies(frecuencies);
        console.log("--------Frecuencias ordenadas de mayor a menor");
        console.log(sortedFrecuencies);

        

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