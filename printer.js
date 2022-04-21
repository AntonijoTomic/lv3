function Printer(nivotonera, dvostranoIspisivanje)
{
 this.toner = nivotonera;
 this.dvost = dvostranoIspisivanje;
 this.ukupanBrojStranica =0;

if(this.toner > 100 )
{
    this.toner = 100;
}
else if(this.toner < 0)
{
    this.toner =0;
}
}

var Samsung_M283x = new Printer (40 ,true);
var Epson_Sx105 = new Printer ( 101, false);
var Cannon_Pixma = new Printer( 20, true);
var HP_Smart_tank_500 = new Printer( 50, true);

Printer.prototype.dodajboju= function (Printer)
{
 
 if (Printer.toner < 25 )
 {
    console.log("Stanje tonera prije dodavanja -->" + Printer.toner);
    Printer.toner = 100;
    console.log("Stanje tonera nakon dodavanja -->" + Printer.toner);
}
 else if (Printer.toner > 25 )
 {
    console.log("U printeru ima dovoljno boje");
 }
}
Samsung_M283x.dodajboju(HP_Smart_tank_500); 
var o = 60;
Printer.prototype.printaj= function (Printer, o)
{
    if(Printer.dvost == true)
    {
        let x = o * 0.1 ;  
        let kolicina =Printer.toner;
        Printer.toner = kolicina - x; 
       var broj = Math.round(o/2);
        Printer.ukupanBrojStranica = Printer.ukupanBrojStranica + broj;
        if(Printer.toner == 0 || Printer.toner < 0)
         {
             console.log("greska");
         }
         console.log("Ukupno isprintano stranica je --> " + Printer.ukupanBrojStranica);
         console.log("Trenutan nivo tonera --> " + Printer.toner);
    }
    else if(Printer.dvost == false)
    {
        let x = o * 0.1;  
        let kolicina =Printer.toner;
        Printer.toner = kolicina - x; 
        Printer.ukupanBrojStranica = Printer.ukupanBrojStranica + o;
        if(Printer.toner == 0 || Printer.toner < 0)
         {
             console.log("greska");
         }
         console.log("Ukupno isprintano stranica je --> " + Printer.ukupanBrojStranica);
         console.log("Trenutan nivo tonera --> " + Printer.toner);
    }
}
Samsung_M283x.printaj(HP_Smart_tank_500, 23); 