import { Component } from "@angular/core";
import { Page } from "ui/page"
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-mid-margin",
    moduleId: module.id,
    templateUrl: "./neg-mid-margin.component.html",
})
export class NegMidMarginComponent {
    routerExtensions: RouterExtensions;

    constructor(
        page: Page, 
        routerExtensions: RouterExtensions
    ) {
        page.actionBarHidden = true;
        page.backgroundColor="white";
        this.routerExtensions = routerExtensions;
    }

    back() {
        this.routerExtensions.navigate(['/items']);
    }

    toTopNegMargin() {
        this.routerExtensions.navigate(['/negTopMargin']);
    }
}