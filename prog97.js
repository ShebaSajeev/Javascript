//object inheritance

baleno={
    model:'hatch black',

    manufacturer:'tmaruti',
    varient:['automatic','manuel']

}
glanza={
    manufacturer:'toyoto'
}
glanza.__proto__=baleno
console.log(glanza.model);