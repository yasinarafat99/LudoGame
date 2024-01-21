let call = function(bigNumber,smallNumber) {
    let result = Math.ceil(Math.random() * bigNumber, smallNumber);
    console.log("hello")
    const s = document.getElementById('show')
    s.innerText= result;
}