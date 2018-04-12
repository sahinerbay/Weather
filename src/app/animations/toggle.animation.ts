import { trigger, state, animate, transition, style } from '@angular/animations';

export const ToggleAnimation =

    trigger('popOverState', [
        state('show', style({
            opacity: 1
        })),
        /*Initial state is 'hide'*/
        state('hide', style({
            opacity: 0
        })),
        transition('show => hide', animate('900ms  ease-out')),
        transition('hide => show', animate('900ms 300ms ease-in'))
    ])

export const SlideToggleAnimation =
    trigger('slideState', [
        state('show', style({
            transform: 'translateY(0px)'
        })),
        /*Initial state is 'hide'*/
        state('hide', style({
            transform: 'translateY(-120px)'
        })),
        transition('show => hide', animate('900ms 330ms ease-out')),
        transition('hide => show', animate('400ms ease-in'))
    ])