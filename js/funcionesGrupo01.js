/*funcion para mostrar pop up  */
$(document).ready(function(){


         function showPopup(){
            $('.popup').addClass('show');
            $('.popup1').addClass('show');
         }
         $("#close").click(function(){
            $('.popup').removeClass('show');
            $('.popup1').removeClass('show');
         })
         setTimeout (showPopup, 2000);
      }); 
      

      /*funcion calculo de fechas hay 2 problemas, 1, se abre automaticamente la pagina de inicio y se lee el cartel de bienvenida, 2 una vez que se ingresa, el pop up se vuelve a abrir */
      
      function calculateAge() {
         var d = document.getElementById("date").value;
            var inDate = new Date(d);
            var anio = inDate.getFullYear();
            var fec_actual = new Date() ; 
         var fec_anio = fec_actual.getFullYear() ;
            var edad   =  fec_anio -anio ;
            if (edad >= 18) {
               document.getElementById("resultado").innerHTML = " Bienvenido";
               
               window.open('popup_terminos.html','_self');
               
              
            } else
            {
            document.getElementById("resultado").innerHTML = "Para navegar en DevPlant tenes que ser mayor de 18 años";
            }

           
        }