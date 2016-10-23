(function($){
  $.fn.smkValidate.Languaje = languaje = {
    // Mensaje de error para los input vacíos
    textEmpty        : 'Camp obligatoriu',
    // Mensaje de error para el input email
    textEmail        : 'Introdu o adresa de email valida',
    // Mensaje de error para el input alphanumeric
    textAlphanumeric : 'Sunt permise numai numere si/sau litere ',
    // Mensaje de error para el input number
    textNumber       : 'Sunt permise numai numere',
    // Mensaje de error para el input number range
    textNumberRange  : 'Intervalul numeric trebuie sa fie mai mare decat <b> {@} </b> si mai mic decat <b> {@} </b>',
    // Mensaje de error para el input decimal
    textDecimal      : 'Sunt permise numai numere cu zecimale',
    // Mensaje de error para el input currency
    textCurrency     : 'Te rugam sa introduci o valoare monetara corecta',
    // Mensaje de error para el input select
    textSelect       : 'Este obligatoriu sa selectezi o valoare',
    // Mensaje de error para el input checkbox y radio
    textCheckbox     : 'Este obligatoriu sa selectezi o optiune',
    // Mensaje de error para longitud de caracteres
    textLength       : 'Numarul de caractere este egal cu <b> {@} </b>',
    // Mensaje de error para rango de caracteres
    textRange        : 'Numarul de caractere trebuie sa fie mai mare decat <b> {@} </b> si mai mic decat <b> {@} </b>',
    // Mensaje de error para strongPass Default
    textSPassDefault : 'Minim 4 caractere',
    // Mensaje de error para strongPass Weak
    textSPassWeak    : 'Minim 6 caractere',
    // Mensaje de error para strongPass Madium
    textSPassMedium  : 'Minim 6 caractere si un numar',
    // Mensaje de error para strongPass Strong
    textSPassStrong  : 'Minim 6 caractere, un numar si o litera mare',
    textUrl          : 'Te rugam sa introduci un url valid',
    textTel          : 'Numarul de telefon nu este valid',
    textColor        : 'Te rugam sa introduci o culoare corecta in hexazecimal',
    textDate         : 'Te rugam sa introduci o data valida',
    textDatetime     : 'Te rugam sa introduci o data si o ora valide',
    textMonth        : 'Te rugam sa introduci o luna valida',
    textWeek         : 'Te rugam sa introduci o saptamana valida',
    textTime         : 'Te rugam sa introduci un timp valid',
    textPattern      : 'Introdu doar text'
  };

  $.smkEqualPass.Languaje = {
    // Mensaje de error para el input repassword
    textEqualPass    : 'Parolele nu coincid'
  };

  $.smkDate.Languaje = {
    shortMonthNames : ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
    monthNames : ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
  };

}(jQuery));
