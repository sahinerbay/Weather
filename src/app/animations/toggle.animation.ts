import { trigger, state, animate, transition, style } from '@angular/animations';

export const ToggleAnimation =

    trigger('popOverState', [
        state('show', style({
				opacity: 1,
				transform: 'translateY(-40px)'
        })),
        /*Initial state is 'hide'*/
        state('hide', style({
				opacity: 0,
				transform: 'translateY(-50px)'
        })),
        transition('show => hide', animate('900ms  ease-out')),
        transition('hide => show', animate('700ms 350ms ease-in'))
    ])

export const SlideToggleAnimation =
    trigger('slideState', [
        state('show', style({
            transform: 'translateY(-80px)'
        })),
        /*Initial state is 'hide'*/
        state('hide', style({
            transform: 'translateY(-120px)'
        })),
        transition('show => hide', animate('700ms 250ms ease-out')),
        transition('hide => show', animate('900ms ease-in'))
    ])