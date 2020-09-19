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
});