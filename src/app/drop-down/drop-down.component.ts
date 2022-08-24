import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  @Input() currenciesList: string[] = [];
  @Output() selectedCurrency = new EventEmitter<string>();
  @Input() defaultCurrency: string = '';
  isShow = false;
  currentCurrecy = '';

  toggleMenu() {
    this.isShow = !this.isShow;
  }
  clickedOutside() {
    this.isShow = false;
  }

  selectCurrency(currency: string) {
    this.currentCurrecy = currency;
    this.selectedCurrency.emit(this.currentCurrecy);
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.toggleButton.nativeElement &&
        e.target !== this.menu.nativeElement &&
        this.isShow === true
      ) {
        this.isShow = false;
      }
    });
  }

  ngOnInit(): void {
    this.currentCurrecy = this.defaultCurrency;
  }
}
