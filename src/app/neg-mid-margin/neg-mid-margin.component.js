"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var NegMidMarginComponent = /** @class */ (function () {
    function NegMidMarginComponent(page, routerExtensions) {
        page.actionBarHidden = true;
        page.backgroundColor = "white";
        this.routerExtensions = routerExtensions;
    }
    NegMidMarginComponent.prototype.back = function () {
        this.routerExtensions.navigate(['/items']);
    };
    NegMidMarginComponent.prototype.toTopNegMargin = function () {
        this.routerExtensions.navigate(['/negTopMargin']);
    };
    NegMidMarginComponent = __decorate([
        core_1.Component({
            selector: "ns-mid-margin",
            moduleId: module.id,
            templateUrl: "./neg-mid-margin.component.html",
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], NegMidMarginComponent);
    return NegMidMarginComponent;
}());
exports.NegMidMarginComponent = NegMidMarginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVnLW1pZC1tYXJnaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmVnLW1pZC1tYXJnaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUE4QjtBQUM5QixzREFBK0Q7QUFPL0Q7SUFHSSwrQkFDSSxJQUFVLEVBQ1YsZ0JBQWtDO1FBRWxDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQWxCUSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsaUNBQWlDO1NBQ2pELENBQUM7eUNBS1ksV0FBSTtZQUNRLHlCQUFnQjtPQUw3QixxQkFBcUIsQ0FtQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLW1pZC1tYXJnaW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmVnLW1pZC1tYXJnaW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTmVnTWlkTWFyZ2luQ29tcG9uZW50IHtcbiAgICByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHBhZ2U6IFBhZ2UsIFxuICAgICAgICByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgcGFnZS5iYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMgPSByb3V0ZXJFeHRlbnNpb25zO1xuICAgIH1cblxuICAgIGJhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9pdGVtcyddKTtcbiAgICB9XG5cbiAgICB0b1RvcE5lZ01hcmdpbigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL25lZ1RvcE1hcmdpbiddKTtcbiAgICB9XG59Il19