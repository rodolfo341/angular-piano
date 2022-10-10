import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'piano-angular';

    aplicarSonido(num: number): void {
        const audio = new Audio();
        audio.src = "../assets/sonidos/note" + num + ".wav";
        audio.load();
        audio.play();
    }
}
