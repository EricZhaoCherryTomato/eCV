import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test e-Resume';
  //note = 'I am here with the brilliant guys at TSWG!';

   private itemsList:Object[] = [
        {
          title: 'Jan 2015 - Test One',
          projects: [ { name : 'App', tech: 'Angular, TypeScript, Gulp, AWS, C# Web Api, Autofac DI'},
                      { name : 'Project', tech: 'KnockoutJS, AJAX, CSS'},
        {
          title: 'Mar 2014 - Jan 2015 Test Two',
          projects: [ { name : 'Internal and Public website', tech: 'JQuery HTML5'},
        },
        {
          title: 'Dec 2012 - Mar 2014   Test Three',
          projects: [ { name : 'Smart App', tech: 'VS2010, C#, WinForm, MSSQL 2008'}
                    ]
        }
    ]
    
    constructor() {
        
    }
}
