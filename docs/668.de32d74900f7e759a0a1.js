"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[668],{6668:(ee,v,o)=>{o.r(v),o.d(v,{UserManagementModule:()=>k});var g=o(8583),f=o(3456),A=o(7084),e=o(7716),L=o(3453),U=o(9344);let b=(()=>{class t{constructor(n,r,a){this.accountService=n,this.router=r,this.toastService=a}canActivate(n,r){return"Administrator"===A.A[this.accountService.currentUserValue.role]||(this.router.navigate(["/home"]),this.toastService.error("Ba\u0323n kh\xf4ng co\u0301 quy\xea\u0300n truy c\xe2\u0323p trang na\u0300y!"),!1)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(L.B),e.LFG(f.F0),e.LFG(U._W))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=o(4762),l=o(8645);let S=(()=>{class t{constructor(n){this.selectedUser=n}}return t.type="[User] Store selected user",t})(),Z=(()=>{class t{constructor(n){this.users=n}}return t.type="[User] Store users",t})(),i=class{static selectedUser(s){return s.selectedUser}static getStudents(s){return s.students}static getTeachers(s){return s.teachers}saveSeletedUser(s,n){s.patchState({selectedUser:n.selectedUser})}saveInitUser(s,n){const r=n.users.filter(c=>"ROLE_STUDENT"===c.role),a=n.users.filter(c=>"ROLE_TEACHER"===c.role);s.patchState({students:r,teachers:a})}};i.\u0275fac=function(s){return new(s||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),(0,p.gn)([(0,l.aU)(S)],i.prototype,"saveSeletedUser",null),(0,p.gn)([(0,l.aU)(Z)],i.prototype,"saveInitUser",null),(0,p.gn)([(0,l.Qf)()],i,"selectedUser",null),(0,p.gn)([(0,l.Qf)()],i,"getStudents",null),(0,p.gn)([(0,l.Qf)()],i,"getTeachers",null),i=(0,p.gn)([(0,l.ZM)({name:"user",defaults:{students:[],teachers:[],selectedUser:void 0}})],i);var T=o(6782),h=o(1649),N=o(8307),y=o(2340),w=o(1841);let C=(()=>{class t{constructor(n,r){this.http=n,this.store=r}getAllUser(){return this.http.get(`${y.N.apiHost}/user`).pipe((0,N.b)(n=>{this.store.dispatch(new Z(n))}))}deleteUser(n){return this.http.delete(`${y.N.apiHost}/user/${n}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(w.eN),e.LFG(l.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=o(2707),x=o(9132),Q=o(671);let Y=(()=>{class t{constructor(n,r,a,c,K){this.toastService=n,this.destroyableService=r,this.confirmService=a,this.store=c,this.userService=K}confirmDeleteUser(){this.confirmService.confirm({message:"Ba\u0323n co\u0301 th\xe2\u0323t s\u01b0\u0323 mu\xf4\u0301n xo\u0301a ng\u01b0\u01a1\u0300i du\u0300ng na\u0300y?",accept:()=>{const n=this.store.selectSnapshot(i.selectedUser);void 0!==n?this.userService.deleteUser(n.id).pipe((0,T.R)(this.destroyableService.destroy$)).subscribe({next:()=>this.toastService.success("Xo\u0301a tha\u0300nh c\xf4ng!"),error:()=>this.toastService.error("\u0110a\u0303 co\u0301 l\xf4\u0303i xa\u0309y ra, vui lo\u0300ng th\u01b0\u0309 la\u0323i!")}):this.toastService.error("Vui lo\u0300ng cho\u0323n m\xf4\u0323t ng\u01b0\u01a1\u0300i du\u0300ng \u0111\xea\u0309 xo\u0301a")}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(U._W),e.Y36(h.R),e.Y36(_.YP),e.Y36(l.yh),e.Y36(C))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-delete-user"]],features:[e._Bn([_.YP,h.R])],decls:4,vars:0,consts:[["header","Xa\u0301c nh\xe2\u0323n","icon","pi pi-exclamation-triangle"],["pButton","","label","Delete",1,"ms-2",3,"click"],[1,"fas","fa-times","text-white"]],template:function(n,r){1&n&&(e._UZ(0,"p-confirmDialog",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return r.confirmDeleteUser()}),e._UZ(2,"i",2),e._uU(3,"\xa0\xa0\n"),e.qZA())},directives:[x.Q,Q.Hq],styles:[""]}),t})();var u=o(9148),d=o(4301);function J(t,s){if(1&t&&e._uU(0),2&t){const n=e.oxw().$implicit;e.hij(" ",n.header," ")}}function F(t,s){if(1&t&&(e._uU(0),e._UZ(1,"p-sortIcon",10)),2&t){const n=e.oxw().$implicit;e.hij(" ",n.header," "),e.xp6(1),e.s9C("field",n.field)}}function $(t,s){if(1&t&&(e.TgZ(0,"th",6),e.ynx(1,7),e.YNc(2,J,1,1,"ng-template",8),e.YNc(3,F,2,2,"ng-template",9),e.BQk(),e.qZA()),2&t){const n=s.$implicit;e.s9C("pSortableColumn",n.field),e.xp6(1),e.Q6J("ngSwitch",n.field)}}function O(t,s){}function M(t,s){if(1&t&&e._UZ(0,"p-columnFilter",11),2&t){const n=e.oxw().$implicit;e.Q6J("field",n.field)}}function R(t,s){if(1&t&&(e.TgZ(0,"th"),e.ynx(1,7),e.YNc(2,O,0,0,"ng-template",8),e.YNc(3,M,1,1,"ng-template",9),e.BQk(),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.Q6J("ngSwitch",n.field)}}function D(t,s){if(1&t&&(e.TgZ(0,"tr"),e.YNc(1,$,4,2,"th",4),e.qZA(),e.TgZ(2,"tr"),e.YNc(3,R,4,1,"th",5),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.Q6J("ngForOf",n),e.xp6(2),e.Q6J("ngForOf",n)}}function I(t,s){if(1&t&&e._UZ(0,"p-tableRadioButton",16),2&t){const n=e.oxw(2).$implicit;e.Q6J("value",n)}}function B(t,s){if(1&t&&(e._UZ(0,"i",17),e._uU(1)),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",n.username," ")}}function z(t,s){if(1&t&&(e._UZ(0,"i",17),e._uU(1)),2&t){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",n.fullName," ")}}function H(t,s){if(1&t&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.Q6J("ngbTooltip",n.email),e.xp6(1),e.Oqu(n.email)}}function P(t,s){if(1&t&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).$implicit;e.Q6J("ngbTooltip",n.password),e.xp6(1),e.Oqu(n.password)}}function q(t,s){if(1&t&&(e.TgZ(0,"td",14),e.ynx(1,7),e.YNc(2,I,1,1,"ng-template",15),e.YNc(3,B,2,1,"ng-template",15),e.YNc(4,z,2,1,"ng-template",15),e.YNc(5,H,2,2,"ng-template",15),e.YNc(6,P,2,2,"ng-template",15),e.BQk(),e.qZA()),2&t){const n=s.$implicit;e.xp6(1),e.Q6J("ngSwitch",n.field),e.xp6(1),e.Q6J("ngSwitchCase","selection"),e.xp6(1),e.Q6J("ngSwitchCase","username"),e.xp6(1),e.Q6J("ngSwitchCase","fullName"),e.xp6(1),e.Q6J("ngSwitchCase","email"),e.xp6(1),e.Q6J("ngSwitchCase","password")}}function E(t,s){if(1&t&&(e.TgZ(0,"tr",12),e.YNc(1,q,7,6,"td",13),e.qZA()),2&t){const n=s.columns;e.xp6(1),e.Q6J("ngForOf",n)}}let G=(()=>{class t{constructor(n){this.store=n,this.cols=[{header:"Selection",field:"selection"},{header:"T\xean ta\u0300i khoa\u0309n",field:"username"},{header:"Email",field:"email"},{header:"T\xean",field:"fullName"},{header:"M\xe2\u0323t kh\xe2\u0309u",field:"password"}]}ngOnInit(){}onSelectedUser(n){this.store.dispatch(new S(n))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-list"]],inputs:{users:"users"},decls:4,vars:12,consts:[["scrollWidth","100%","columnResizeMode","expand","styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","rowHover","rows","paginator","filterDelay","columns","scrollable","selection","scrollHeight","responsive","selectionMode","resizableColumns","selectionChange"],["dt1",""],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"ngSwitch"],["ngSwitchCase","selection"],["ngSwitchDefault",""],[3,"field"],["type","text","display","menu",3,"field"],[1,"p-selectable-row"],["class","text-nowrap",4,"ngFor","ngForOf"],[1,"text-nowrap"],[3,"ngSwitchCase"],["name","user",3,"value"],[1,"pi","pi-pencil"],["placement","bottom","container","body",3,"ngbTooltip"],["placement","left","container","body",3,"ngbTooltip"]],template:function(n,r){1&n&&(e.TgZ(0,"p-table",0,1),e.NdJ("selectionChange",function(c){return r.selectedUser=c})("selectionChange",function(c){return r.onSelectedUser(c)}),e.YNc(2,D,4,2,"ng-template",2),e.YNc(3,E,2,1,"ng-template",3),e.qZA()),2&n&&e.Q6J("value",r.users)("rowHover",!0)("rows",5)("paginator",!0)("filterDelay",0)("columns",r.cols)("scrollable",!0)("selection",r.selectedUser)("scrollHeight","100%")("responsive",!0)("selectionMode","single")("resizableColumns",!0)},directives:[d.iA,_.jx,g.sg,d.lQ,g.RF,g.n9,g.ED,d.fz,d.xl,d.GE,u._L],styles:[""]}),t})();function j(t,s){if(1&t&&(e._UZ(0,"app-user-list",13),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("users",e.lcZ(1,1,n.teachers$))}}function X(t,s){if(1&t&&(e._UZ(0,"app-user-list",13),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("users",e.lcZ(1,1,n.students$))}}class m{constructor(s,n){this.userService=s,this.destroyableService=n,this.active=1}ngOnInit(){this.userService.getAllUser().pipe((0,T.R)(this.destroyableService.destroy$)).subscribe()}}m.\u0275fac=function(s){return new(s||m)(e.Y36(C),e.Y36(h.R))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-user-list-page"]],features:[e._Bn([h.R])],decls:25,vars:11,consts:[[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"card-block"],[1,"py-2"],["ngbNav","",1,"nav-tabs",3,"activeId","destroyOnHide","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink","",1,"font-weight-500"],[1,"badge","badge-warning"],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"],[3,"users"]],template:function(s,n){if(1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h4",2),e._uU(3,"Danh sa\u0301ch ta\u0300i khoa\u0309n"),e.qZA(),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e._UZ(7,"app-delete-user"),e.qZA(),e.TgZ(8,"ul",6,7),e.NdJ("activeIdChange",function(a){return n.active=a}),e.TgZ(10,"li",8),e.TgZ(11,"a",9),e._uU(12,"Gia\u0301o vi\xean "),e.TgZ(13,"span",10),e._uU(14),e.ALo(15,"async"),e.qZA(),e.qZA(),e.YNc(16,j,2,3,"ng-template",11),e.qZA(),e.TgZ(17,"li",8),e.TgZ(18,"a",9),e._uU(19,"Ho\u0323c sinh "),e.TgZ(20,"span",10),e._uU(21),e.ALo(22,"async"),e.qZA(),e.qZA(),e.YNc(23,X,2,3,"ng-template",11),e.qZA(),e.qZA(),e._UZ(24,"div",12),e.qZA(),e.qZA(),e.qZA()),2&s){const r=e.MAs(9);let a,c;e.xp6(8),e.Q6J("activeId",n.active)("destroyOnHide",!0),e.xp6(2),e.Q6J("ngbNavItem",1),e.xp6(4),e.Oqu(null==(a=e.lcZ(15,7,n.teachers$))?null:a.length),e.xp6(3),e.Q6J("ngbNavItem",2),e.xp6(4),e.Oqu(null==(c=e.lcZ(22,9,n.students$))?null:c.length),e.xp6(3),e.Q6J("ngbNavOutlet",r)}},directives:[Y,u.Pz,u.nv,u.Vx,u.uN,u.tO,G],pipes:[g.Ov],styles:[".badge-warning[_ngcontent-%COMP%]{color:#212529;background-color:#ff8d60}"]}),(0,p.gn)([(0,l.Ph)(i.getStudents)],m.prototype,"students$",void 0),(0,p.gn)([(0,l.Ph)(i.getTeachers)],m.prototype,"teachers$",void 0);const V=[{path:"",canActivate:[b],children:[{path:"",component:m},{path:"",pathMatch:"full",redirectTo:""}]}];let W=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.Bz.forChild(V)],f.Bz]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,W,d.U$,u.HK,l.$l.forFeature([i]),u.Oz,x.D]]}),t})()}}]);