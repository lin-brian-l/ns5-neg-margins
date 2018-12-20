import { Component } from "@angular/core";
import { Page } from "ui/page"
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {
    routerExtensions: RouterExtensions;

    constructor(
        page: Page,
        routerExtensions: RouterExtensions
    ) {
        page.actionBarHidden = true;
        this.routerExtensions = routerExtensions;
    }

    toTopNegMargin() {
        this.routerExtensions.navigate(['/negTopMargin']);
    }

    toMiddleNegMargin() {
        this.routerExtensions.navigate(['/negMidMargin']);
    }
}