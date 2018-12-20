"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var NegTopMarginComponent = /** @class */ (function () {
    function NegTopMarginComponent(page, routerExtensions) {
        page.actionBarHidden = true;
        page.backgroundColor = "white";
        this.routerExtensions = routerExtensions;
    }
    NegTopMarginComponent.prototype.back = function () {
        this.routerExtensions.navigate(['/items']);
    };
    NegTopMarginComponent.prototype.toMiddleNegMargin = function () {
        this.routerExtensions.navigate(['/negMidMargin']);
    };
    NegTopMarginComponent = __decorate([
        core_1.Component({
            selector: "ns-top-margin",
            moduleId: module.id,
            templateUrl: "./neg-top-margin.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], NegTopMarginComponent);
    return NegTopMarginComponent;
}());
exports.NegTopMarginComponent = NegTopMarginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVnLXRvcC1tYXJnaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmVnLXRvcC1tYXJnaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUE4QjtBQUM5QixzREFBK0Q7QUFPL0Q7SUFHSSwrQkFDSSxJQUFVLEVBQ1YsZ0JBQWtDO1FBRWxDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBbEJRLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQzt5Q0FLWSxXQUFJO1lBQ1EseUJBQWdCO09BTDdCLHFCQUFxQixDQW1CakM7SUFBRCw0QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIlxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtdG9wLW1hcmdpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9uZWctdG9wLW1hcmdpbi5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBOZWdUb3BNYXJnaW5Db21wb25lbnQge1xuICAgIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcGFnZTogUGFnZSxcbiAgICAgICAgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHBhZ2UuYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zID0gcm91dGVyRXh0ZW5zaW9ucztcbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgfVxuXG4gICAgdG9NaWRkbGVOZWdNYXJnaW4oKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9uZWdNaWRNYXJnaW4nXSk7XG4gICAgfVxufSJdfQ==