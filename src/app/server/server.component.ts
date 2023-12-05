import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    serverCreationStatus = 'No server was created!';
    allowNewServer = false;
    serverName = 'Testserver';
    serverCreated = false;
    servers = ['Testserver', 'Testserver 2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true
        }, 2000);
    }

    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
      }
    
      onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
      }

 }