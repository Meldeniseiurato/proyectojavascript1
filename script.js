function Comprar() {
    let respuesta= prompt ('Ingresa tu E-mail')
}
Comprar()

let precios [70000,30000,75000,120000,40000,45000,30000,60000,50000,40000,135000,60000,55000]

for(let i =0;<precios.length;i++){
    consol.console.log(i);
    
}
document.querySelectorAll(".boton-comprar").forEach((button) => {
    button.addEventListener('click', (evento) => {
        console.log(evento.target.value)
        confirm("Comprar por valor de: "+evento.target.value)
    });
});