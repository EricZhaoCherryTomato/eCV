import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eric Zhao e-Resume';
  //note = 'Accenture and ATO is Awsome';

   private itemsList:Object[] = [
        {
          title: 'Jan 2015 - Current   Domino’s Pizza Enterprise',
          projects: [ { name : 'Dominos Team App', tech: 'Angular, TypeScript, Gulp, AWS, C# Web Api, Autofac DI'},
                      { name : 'Star Rating', tech: 'KnockoutJS, AJAX, CSS'},
                      { name : 'Online Order Responsive Redesign', tech: 'SASS, HTML5, KnockoutJS'},
                      { name : 'Timed Guaranteed Product Delivery', tech: 'JQuery, SASS, HTML5'},
                      { name : 'New Payment Gateway', tech: 'C# Web Api'},
                      { name : 'SMS ordering', tech: 'C# Web Api'},]
        },
        {
          title: 'Mar 2014 - Jan 2015   Axial Group Ltd',
          projects: [ { name : 'Internal and Public website', tech: 'JQuery HTML5'},
                      { name : 'Student Enrollment System', tech: 'JQuery CSS HTML5'},
                      { name : 'Purchase Order System', tech: 'JQuery CSS HTML5'}]
        },
        {
          title: 'Dec 2012 - Mar 2014   Zidea Robot Co. Ltd',
          projects: [ { name : 'Smart Warehouse', tech: 'VS2010, C#, WinForm, MSSQL 2008'}
                    ]
        }
    ]
    
    constructor() {
        
    }
}
