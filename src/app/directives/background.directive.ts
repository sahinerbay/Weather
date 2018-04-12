import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appBackground]'
})
export class BackgroundDirective {

	constructor(private el: ElementRef,
		private renderer: Renderer2) { }

		backgroundColor: string

	@Input('appBackground')
	set code(text: string) {
		this.backgroundColor = this.getWeatherImage(text);
		let part = this.el.nativeElement.parentNode;
		this.renderer.setStyle(part, 'backgroundColor', this.backgroundColor);
	}

	getWeatherImage(text: string): string {
		let path = './../../assets/';
		switch (true) {
			case text.includes('rain') || text.includes('drizzle'):
				return '#8e8e8e'

			case text.includes('snow'):
				return '#8c8b77'

			case text.includes('Sunny'):
				return '#00abef'

			case text.includes('Partly cloudy'):
				return '#1a5b9c'

			case text.includes('Cloudy'):
				return '#b3c5cc'

			default:
				return '#33495f'
		}
	}
}