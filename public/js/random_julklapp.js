
// Den här funktionen kommer då kallas av knappen
function slumpaJulklapp() {
  var senasteVal = document.getElementById('vald-julklapp');
  if (senasteVal != null) senasteVal.id = '';
  //reset id så när man slumpar en ny klapp så reset id
  var julklappar = document.getElementsByClassName('julklappar'); // Hämtar in alla julklapp element och lägger in i en lista

  // Den här kommer att välja ut en random julklapp från 'julklappar'
  var slumpadJulklapp = julklappar[Math.floor(Math.random() * julklappar.length)];
  slumpadJulklapp.id = 'vald-julklapp'; // Lägger till id:n

}
