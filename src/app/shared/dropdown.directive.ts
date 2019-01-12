import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';
import { isProceduralRenderer } from '@angular/core/src/render3/interfaces/renderer';

@Directive({
    'selector': '[appDropdown]'
})

export class AppDropdown {
    dropdown = null;
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') onButtonClick() {
        const type = this.isOpen ? 'remove' : 'add';
        this.element.nativeElement.classList[type]('show');
        this.element.nativeElement.querySelector('.dropdown-menu').classList[type]('show');
        this.isOpen = !this.isOpen;
    }

    constructor(private element: ElementRef) {
    }
}
