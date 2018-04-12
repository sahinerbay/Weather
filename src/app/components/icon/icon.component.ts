import { Component, Input } from '@angular/core';
import { HttpService } from './../../shared/services/http.service';
import { Icons } from '@app/shared/models/icons';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.css']
})
export class IconComponent {

	constructor(private httpService: HttpService) { }

	@Input()
	public set icon(val: number) {
		this.getIcon(val);
	}

	iconURL: Icons;

	getIcon(code: number) {
		this.httpService.getIcons().subscribe((res: Array<Icons>) => {
			this.iconURL = res.find((n: Icons) => n.code === code)
		})
	}
}
