import { Directive, ElementRef, OnInit,Renderer,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective {

@Input() defaultColor:string ='lightgrey';
@Input('appBorderHighlight') bColor : string = 'lightgrey';
@HostBinding('style.borderColor') borderColor:string;
@HostBinding('style.borderWidth') bWidth:string;
constructor(private elRef: ElementRef,private renderer : Renderer) {
   }

ngOnInit(){
  	this.borderColor=this.bColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.borderColor="red";
    this.bWidth="3px";
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.borderColor=this.bColor;
    this.bWidth="1px";
  }
}
