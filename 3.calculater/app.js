function pressBtn(e){
    document.getElementById("inp").value += e
    
}

function eq(){
    let a = document.getElementById('inp')
    let b = document.getElementById('inp1')
    b.value = eval(a.value)
}

function clr(){
    document.getElementById('inp').value = ' '
    document.getElementById('inp1').value = ' '
}

function ccc(){
    var a = document.getElementById('inp')
    a.value = a.value.slice(0,-1)
}