import { Component, OnInit, ViewEncapsulation } from '@angular/core';


interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddBookingComponent implements OnInit {

  public locale: any;
  public services: Options[] = [
    {value: 'haircut', viewValue: 'haircut'},
    {value: 'hair-coloring', viewValue: 'hair-coloring'},
    {value: 'hair-washing', viewValue: 'hair-washing'},
    {value: 'hair-straightening', viewValue: 'hair-straightening'},
  ];

  constructor() {

    console.log('navigator.language: ',navigator.language);
    

    if (navigator.language === 'es') { // Español
      
      this.locale = { // Español
        firstDayOfWeek: 0,
        dayNames: ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr','May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        today: 'Hoy',
        clear: 'Limpiar',
        dateFormat: 'dd/mm/yy'
      }

      
    } else {
      
      this.locale = {
        firstDayOfWeek: 0,
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        monthNames: ['January', 'February','March','April','May','June','July','August','September','October','November','December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'dd/mm/yy',
        weekHeader: 'Wk'
      }

    }

   }

  ngOnInit(): void {

  
  }

}
