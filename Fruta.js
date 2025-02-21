const Fruta = document.getElementById('Fruta');
const Trocar = document.getElementById('Trocar');
const Destrocar = document.getElementById('Destrocar');

function isMorangoTroca(){
    return lamp.src.indexOf('quebrada')> -1;}

function Trocar(){
    if(!isMorangoTroca()){
        lamp.src= 'Sorvete.jpg';}}
        
function Destrocar(){
    if(!isMorangoTroca()){
        lamp.src= 'Morango.jpg';}}

function LampBroken(){
        lamp.src = 'Maca.jpg';
}
Trocar.addEventListener('click',Trocar);
Destrocar.addEventListener('click',Destrocar);
Fruta.addEventListener('mouseover',LampOn);
Fruta.addEventListener('mouseleave',LampOff);
Fruta.addEventListener('dblclick',LampBroken);