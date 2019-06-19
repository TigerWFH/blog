var global = 'monkey';
function getGlobal() {
    console.log(global); //抛异常
    let globalS = 'cat';
}
getGlobal();