$(document).ready(function () {
      
    /* función para que aparezca el menú  */
    $('#btn-click').click(function (e) {
        $('#submenu').show(200);  
        $('#btn-click').hide();      
    }); 

    /* función para que cerrar el menú  */
    $('#btn-close').click(function (e) {
        $('#btn-click').show(200);  
        $('#submenu').hide();      
    });

    tamano='';
    i=1;
    ConvertirTexto();
    setInterval(Animar,90);
});

function ConvertirTexto(){
    resultado='';
    cadena=$('#text-animation').html();
    tamano=cadena.length;
      for (var i = 0; i< tamano; i++) {
          letra=cadena.charAt(i);
          resultado+='<span class="ta-letra ">'+letra+'</span>';
      }
    
    $('#text-animation').html(resultado);
}

function Animar(){
    if(i<=tamano){
        $('.ta-letra:nth-child('+i+')').css('color','#fff');
    }
    i++;
}