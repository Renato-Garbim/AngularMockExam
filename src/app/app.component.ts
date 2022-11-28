import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalR'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CRUD Mock com SignalR';

  private _hubConnection!: HubConnection;


  constructor(private messageService: MessageService){
    
    this.createConnection();
    this.startConnection();
    this.registeOnServerEvents();
  }

  ngOnInit(): void {
    
  
  }

  private createConnection(){

    this._hubConnection = new HubConnectionBuilder()
    .withUrl('https://localhost:5001/clientHub').build();

  }

  private startConnection(){
    this._hubConnection.start();
  }

private registeOnServerEvents() : void {

  //console.log('Chamou o SignalR');

  this._hubConnection.on('Send', (message: string) => {

    console.log('SignalR:' + message);

    this.messageService.add('SignalR API: ' + message);

  });
}


}
