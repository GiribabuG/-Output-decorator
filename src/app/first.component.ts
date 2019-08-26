import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { SecondComponent } from './second.component';

@Component({
    selector:'first',
    templateUrl : './first.component.html'
})

export class FirstComponent {

    //for single value change using @viewchil()

    // @ViewChild(SecondComponent,{static:true})

    // private _second : SecondComponent;

    // clickMe(){
    //     this._second.var_one = "Angular9",
    //     this._second.var_two = "RactNative"
    // }

    //for multiple values changes using @viewChildren

    @ViewChildren(SecondComponent)

    private _second :QueryList<SecondComponent> = new QueryList();
    my_array :Array<any>=[]

    ngAfterViewInit(){
        this.my_array = this._second.toArray();
    }
clickMe(){
    this.my_array.forEach(el=>{
        el.var_one ="Angular9";
        el.var_two = "NodeJS";
    });
  }
}