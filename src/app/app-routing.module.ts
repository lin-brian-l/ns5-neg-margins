import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { NegTopMarginComponent } from "./neg-top-margin/neg-top-margin.component";
import { NegMidMarginComponent } from "./neg-mid-margin/neg-mid-margin.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "negTopMargin", component: NegTopMarginComponent },
    { path: "negMidMargin", component: NegMidMarginComponent }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }