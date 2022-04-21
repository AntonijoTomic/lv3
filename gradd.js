
function Grad(naziv, brojstan, latituda, longituda)
{
 this.m_naziv = naziv;
 this.m_brojstan = brojstan;
 this.m_latituda = latituda;
 this.m_longituda = longituda;
}

var oVirovitica = new Grad("Virovitica", 21.291, 45.83194, 17.38389);
var oSlatina = new Grad("Slatina", 13.686, 45.70333, 17.70278);
var oBjelovar = new Grad("Bjelovar", 40.276, 45.89861, 16.84889);
var oOsijek = new Grad("Osijek", 75.916, 45.554962, 18.695514);
var oZagreb = new Grad("Zagreb", 806.341, 45.8150108, 15.981919);

Grad.prototype.velicina = function (Grad)
{
 
 if (Grad.m_brojstan < 30000 )
 {
console.log(Grad.m_naziv + " ima " + Grad.m_brojstan);
 }
 else if(Grad.m_brojstan > 30000 && Grad.m_brojstan < 200000)
 {
console.log(Grad.m_naziv + " ima " + Grad.m_brojstan);
 }
 else if( Grad.m_brojstan > 200000)
 {
 	console.log(Grad.m_naziv + " ima " + Grad.m_brojstan);
 }
}
oSlatina.velicina(oBjelovar); 

function dajUdaljenost(grad1, grad2){
    lat1 = grad1.m_latituda;
    lng1 = grad1.m_longituda;
    lat2 = grad2.m_latituda;
    lng2 = grad2.m_longituda;

    function deg2rad(deg){return deg * (Math.PI/180);}
  function square(x){return Math.pow(x, 2);}
  var r=6371; // radius of the earth in km
  lat1=deg2rad(lat1);
  lat2=deg2rad(lat2);
  var lat_dif=lat2-lat1;
  var lng_dif=deg2rad(lng2-lng1);
  var a=square(Math.sin(lat_dif/2))+Math.cos(lat1)*Math.cos(lat2)*square(Math.sin(lng_dif/2));
  var d=2*r*Math.asin(Math.sqrt(a));
  return d;//return km

}
console.log(dajUdaljenost(oVirovitica, oZagreb) + " km");