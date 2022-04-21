function KompleksniBroj(realni, imaginarni)
{
 this.rel = realni;
 this.imag = imaginarni;
}

var _kb = {
    ispisiKompleksanBroj: function(re, im)
    {
        if(im === '0') return ' Z= ' + re;
        if(re === 0) return ' Z= ' + im + 'i';
        if(im < 0) return ' Z= ' + re + im + 'i';
        return 'Z= ' + re + '+' + im + 'i';
    }
};

var kompl1 = new KompleksniBroj (4 ,2);
var kompl2 = new KompleksniBroj (2 ,4);
var kompl3 = new KompleksniBroj (7 ,1);
var kompl4 = new KompleksniBroj (9 ,12);
var kompl5 = new KompleksniBroj (2 ,2);

//console.log(_kb.ispisiKompleksanBroj(kompl1));
function complex_num_multiply(first, second) {
     var rel = (first.rel * second.rel)-(first.imag * second.imag);
    var imag = (first.rel * second.imag)+(first.imag * second.rel); 
     return _kb.ispisiKompleksanBroj(rel, imag);   
  }

function complex_num_add(first, second) {
    var real = first.rel + second.rel;
    var imaginary = first.imag + first.imag;
    return _kb.ispisiKompleksanBroj(real, imaginary);
  }
  console.log(complex_num_add(kompl1,kompl2)); 
   console.log(complex_num_multiply(kompl1,kompl2));


  

   function rezz() {
   var odabir = (document.getElementById("opc").value);
   var x = new KompleksniBroj(parseInt(document.getElementById("real1").value),parseInt(document.getElementById("imag1").value));
   var y = new KompleksniBroj(parseInt(document.getElementById("real2").value),parseInt(document.getElementById("imag2").value));
   parseInt(x);
   parseInt(y);
   if(odabir == "zbrajanje")
    {
        document.getElementById("rez").value = complex_num_add(x,y);
    }
    else
    {
        document.getElementById("rez").value = complex_num_multiply(x,y);
    }


}