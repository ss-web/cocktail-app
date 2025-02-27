import { Component, Input } from '@angular/core';

@Component({
	selector: '[appImage]',
	standalone: true,
	imports: [],
	templateUrl: './image.component.html'
})
export class ImageComponent {
	@Input() src: string;
	@Input() alt: string;

	constructor() {
		this.src = ''; 
		this.alt = '';
	}
}
