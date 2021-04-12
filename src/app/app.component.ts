import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventbinding';

  months = ["January", "Feburary", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];
  date = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  year = ['1996', '1997', '1998', '1999', '2000', '2001',
    '2002', '2003', '2004', '2005', '2006', '2007', '2008',
    '2009', '2010', '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020', '2021'];
  gender = ['Male','Female'];
  isavailable = true;
  myClickFunction(event: any) {
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event: any) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
}
