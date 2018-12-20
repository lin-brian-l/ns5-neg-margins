import { Component } from "@angular/core";
import { Page } from "ui/page"
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-top-margin",
    moduleId: module.id,
    templateUrl: "./neg-top-margin.component.html",
})
export class NegTopMarginComponent {
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

    toMiddleNegMargin() {
        this.routerExtensions.navigate(['/negMidMargin']);
    }
}