function callBack(){
    return 2*2;
}
function receivesAFunction(callBack){
    return callBack();
}
function returnsANamedFunction(){
    return function add(){3+4};
}
function returnsAnAnonymousFunction(){
    return function (){`Dune Part 2 is great.`};
}