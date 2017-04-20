// // if( typeof jQuery == 'undefined' ){
// // console.log('jQuery missing');
// // }else{
// // console.log( jQuery.fn.jquery )};

// /*1. Proszę zmienić tło ( kolor, czcionkę, wielkość itp. ) dla elementów <p>
//  dla wszystkich
//  dla drugiego ( ostatniego ) w divie
//  dla <p> poza divem
//  dla pierwszego <p> zmienić naraz 2 właściwości css */

$('p').css('color', 'red');
$('div div p').last().css('background-color', 'lightblue');
$('p').last().css('background-color', 'yellow');
$('p').first().css({'font-size':'18px', 'font-weight':'bold'});

// /*2. Proszę zmienić kolor tła dla strony*/

$('body').css('background-color', '#fffbe2');

// /*3. Dla formularza
//  schować inputy tekstowe
//  schować przycisk submit
//  Dla inputa odpowiedzialnego za nazwisko dodać właściwość 'placeholder'
// o wartości 'Podaj nazwisko'*/

// $('form input:text').hide();
// $('form input:submit').hide();
$('form input[name=lastName]').attr('placeholder', 'Podaj nazwisko');

/*4. Dla elementu formularza typu select
 Pobrać etykietę dla elementu o wartości 3
 Pobrać wartość dla wybranego (zaznaczonego) elementu
 Dodać czwarty element np. 0 =>1 Biały i uczynić go wybranym
( aktywnym )*/

$('#kolory option[value="3"]').text();
$('#kolory option:selected').val();
$('#kolory option').first().before('<option value="0" selected> Bialy </option>');

/*5. Mając tablicę kolorów lub obiekt zawierający kolory stworzyć select */

var colors = { 1 : 'Złoty', 2 : 'Srebrny', 3 : 'Brązowy' };

$.map(colors, function(value, index){
  $('#kolory2').append(new Option(value, index));
})

/*6. W formularzu
 ustalić który radio button jest zaznaczony
 zmienić zaznaczenia na inny element*/

$('input[type=radio]').prop('checked', function(i, val){
  return console.log(i, val);
})
$('input:radio').each( function(){
  if($(this).is(':checked')){
    $(this).prop("checked", false);
  } else {
    $(this).prop('checked', true);
  }
})

/*7. Do elementu body dodać nagłówek h1
 Na końcu
 Na początku*/

$('#Zad7 p').before('<h1>Szakalak</h1>');
$('#Zad7 p').after('<h1>Szakalaka</h1>');

/*8. Na elementach listy:
 Drugi element zrobić boldem
 Trzeci element „przerobić” na linka*/

$('#Zad8 ul li').eq(1).css('font-weight', 'bold');
$('#Zad8 ul li').last().wrap('<a href="#"></a>');

/*9 Stworzyć dowolny element o treści „Kliknij mnie” i po akcji myszką
polegającą na kliknięciu zmienić napić na „Kliknięto”, a przy podwójnym
kliknięciu na „Kliknięto 2x”*/

$('#Zad9 button').click(function(){
  $(this).text('Kliknięto');
})
$('#Zad9 button').dblclick(function(){
  $(this).text('Kliknięto 2x');
})

/*10 W formularzu pola typu input:
 Przy wejściu w pole usuwać domyślny napis ( np. wypełnij to pole )
 Przy wyjściu z pola i jego nie wypełnieniu napis na myć przywracany
 * napis dedykowany dla każdego pola można np. przechować w atrybucie
rel np. wypełnij pole imię*/
$('#zad10 form input').each(function(){
  $(this).focus(function(){
    $(this).attr("placeholder", "");
  });
  $(this).blur(function(){
    $(this).attr('placeholder', $(this).attr('rel'));
  })
})

/*11 Po kliknieciu myszką ustalić pozycję kursora w px względem strony*/

var $info = $('#info');
$(document).click(function(event){
  $info.text('x :' + event.pageX + ', y:' + event.pageY);
})

/*12. Dla pierwszego linka na stronie wyłączyć jego działanie*/

$('#zad12 a').first().click(function(event){
  event.preventDefault();
  console.log(event.isDefaultPrevented());
})

/*13. Wykryć i podać nazwę taga HTML jaki został kliknięty*/
var $show = $('#zad13 p').last();
$('#zad13').click(function(event){
  $show.text('Kliknieto w ' + event.target.nodeName);
})

/*14. Wykryć, który element z listy został kliknięty
Podać dane elementu klikniętego np. pozycja w indexu w kolekcji, jego id, text*/

$('#zad14').click(function(event){
  $('#zad14 span').html('Kliknieto w element:' + event.target.nodeName
                       + '<br/>' + 'o indexie: ' + $(event.target).index()
                       + '<br/>' + 'z tekstem: ' + $(event.target).text()
                       + '<br/>' + 'o identyfikatorze: ' + event.target.id);
})

/*15. W formularzu na start strony po jej załadowaniu zrobić by pierwszy input
typu text był aktywny ( miał ustawiony znak zachety )*/

$(document).ready(function(){
  $('#zad15 input').first().focus();
})

/*16. Dla diva o kształcie kwadratu i rozmiarze np. 150px stworzyć 2 akcje na
przyciskach.
 Celem powiększenia go np. o 100%
 Celem powrotu do normalnej wielkości
 * można użyć efektu animacji*/

var $box = $('#zad16 #box');
$('#btnResize').click(function(){
  $box.animate({width: '300px', height: '300px'}, 1000);
})
$('#btnReset').click(function(){
  $box.animate({width: '150px', height: '150px'}, 1000);
})
