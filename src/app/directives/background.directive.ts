import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appBackground]'
})
export class BackgroundDirective {

	constructor(private el: ElementRef,
		private renderer: Renderer2) { }

	background;

	@Input('appBackground')
	set code(text: string) {
		this.background = this.getWeatherImage(text); 
		let part = this.el.nativeElement.parentNode;
		this.renderer.setStyle(part, 'backgroundColor', this.background.color);
	}

	getWeatherImage(text: string) {
		let path = './../../assets/';
		switch (true) {
			case text.includes('rain') || text.includes('drizzle'):
				return {
					color: '#8e8e8e',
				}

			case text.includes('snow'):
				return {
					color: '#8c8b77',
				}

			case text.includes('Sunny'):
				return {
					color: '#00abef',
				}
			
				case text.includes('Partly cloudy'):
				return {
					color: '#1a5b9c',
				}

			case text.includes('Cloudy'):
				return {
					color: '#b3c5cc',
				}

			default:
				return {
					color: '#33495f',
				}
		}
	}
}

interface Background {
	color: string,
	imageURL: string
}
