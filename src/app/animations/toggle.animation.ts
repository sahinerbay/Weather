import { trigger, state, animate, transition, style, query, stagger } from '@angular/animations';

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
        transition('hide => show', animate('400ms 500ms ease-in'))
    ])

export const SlideToggleAnimation =
    trigger('slideState', [
        state('show', style({
            transform: 'translateY(-20px)'
        })),
        /*Initial state is 'hide'*/
        state('hide', style({
            transform: 'translateY(-150px)'
        })),
        transition('show => hide', animate('900ms 500ms ease-out')),
        transition('hide => show', animate('400ms ease-in'))
    ])