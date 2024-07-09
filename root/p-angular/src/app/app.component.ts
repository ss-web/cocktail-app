import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppAsideComponent } from '~/components/blocks/aside/aside.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AppAsideComponent],
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'p-angular';
}