const constrDna = ["ATGCCGAAATTTGCG"]
const letras = constrDna.indexOf("ATGCCGAAATTTGCG")
if (letras !== 1){
    constrDna[letras] = "UACGGCUUUAAACGC"
}
console.log(`O segmento do RNA é ${constrDna}`)