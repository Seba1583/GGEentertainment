import { trigger, transition, query, style, animate, group } from "@angular/animations";

const speed = "300ms";

export const slider =
    trigger('routeAnimations', [
        transition('0 => 1', slideTo('right', speed)),
        transition('0 => 2', slideTo('right', speed)),
        transition('0 => 3', slideTo('right', speed)),

        transition('1 => 0', slideTo('left', speed)),
        transition('1 => 2', slideTo('right', speed)),
        transition('1 => 3', slideTo('right', speed)),


        transition('2 => 0', slideTo('left', speed)),
        transition('2 => 1', slideTo('left', speed)),
        transition('2 => 3', slideTo('right', speed)),

        transition('3 => 0', slideTo('left', speed)),
        transition('3 => 1', slideTo('left', speed)),
        transition('3 => 2', slideTo('left', speed)),
    ])

function slideTo(dir, speed) {
    const opt = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                [dir]: 0,
                width: '100%'
            })
        ], opt),
        query(':enter', [
            style({
                [dir]: '-100%'
            })
        ], opt),
        group([
            query(':leave', [
                animate(speed + ' ease', style({[dir]: '100%'}))
            ], opt),
            query(':enter', [
                animate(speed + ' ease', style({[dir]: '0%'}))
            ], opt)
        ])
    ];
}