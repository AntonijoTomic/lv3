
function Grad(naziv, brojstan, latituda, longituda)
{
 this.m_naziv = naziv;
 this.m_brojstan = brojstan;
 this.m_latituda = latituda;
 this.m_longituda = longituda;
}

var oVirovitica = new Grad(Virovitica, 21.291, 45.83194, 17.38389);
var oSlatina = new Grad(Slatina, 13.686, 45.70333, 17.70278);
var oBjelovar = new Grad(Bjelovar, 40.276, 45.89861, 16.84889);
var oOsijek = new Grad(Osijek, 75.916, 45.554962, 18.695514);
var oZagreb = new Grad(Zagreb, 806.341, 45.8150108, 15.981919);

Grad.prototype.velicina = function ()
{
 
 if (this.brojstan < 30000 )
 {
console.log(this.naziv + " ima" + this.brojstan);
 }
 else if(this.brojstan > 30000 && this.brojstan < 200000)
 {
console.log(this.naziv + " ima" + this.brojstan);
 }
 else if( this.brojstan > 200000)
 {
 	console.log(this.naziv + " ima" + this.brojstan);
 }
}
oSlatina.palindrom(); 
