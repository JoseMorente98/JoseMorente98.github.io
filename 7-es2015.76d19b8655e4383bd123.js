(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nCw1:function(n,o,i){"use strict";i.r(o),i.d(o,"InformacionPageModule",(function(){return p}));var t=i("ofXK"),e=i("3Pt+"),c=i("TEn/"),a=i("tyNb"),r=i("fXoL"),s=i("J/xi"),l=i("+FVW"),b=i("Wwn5"),u=i("m/P+");function d(n,o){if(1&n){const n=r.Nb();r.Mb(0,"ion-fab-button",6),r.Ub("click",(function(){r.ec(n);const i=o.$implicit;return r.Wb().openDetalle(i)})),r.Kb(1,"ion-icon",7),r.Lb()}if(2&n){const n=o.$implicit;r.zb(1),r.cc("name",n.icono)}}const f=[{path:"",component:(()=>{class n{constructor(n,o,i,t){this.notificacionService=n,this.contactoService=o,this.callNumber=i,this.iab=t,this.getAll=()=>{this.notificacionService.presentLoading("Cargando..."),this.contactoService.getAll().subscribe(n=>{console.log(n),this.data=[],this.data=n,this.notificacionService.dismissLoading()},n=>{this.notificacionService.dismissLoading()})}}ngOnInit(){}ionViewDidEnter(){this.getAll()}callPhone(n){this.callNumber.callNumber(n,!0).then(n=>console.log("Launched dialer!",n)).catch(n=>console.log("Error launching dialer",n))}openBrowser(n){this.iab.create(n).insertCSS({code:"body{color: green;"})}openDetalle(n){console.log(n),0==n.estado?this.callPhone(n.link):this.openBrowser(n.link)}}return n.\u0275fac=function(o){return new(o||n)(r.Jb(s.a),r.Jb(l.a),r.Jb(b.a),r.Jb(u.a))},n.\u0275cmp=r.Db({type:n,selectors:[["app-informacion"]],decls:10,vars:1,consts:[["translucent","true"],[2,"background-color","#000000"],["vertical","top","horizontal","end","slot","fixed"],["name","information-circle-outline"],["side","bottom"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[3,"name"]],template:function(n,o){1&n&&(r.Mb(0,"ion-header",0),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-title"),r.ic(3,"Informaci\xf3n"),r.Lb(),r.Lb(),r.Lb(),r.Mb(4,"ion-content",1),r.Mb(5,"ion-fab",2),r.Mb(6,"ion-fab-button"),r.Kb(7,"ion-icon",3),r.Lb(),r.Mb(8,"ion-fab-list",4),r.hc(9,d,2,1,"ion-fab-button",5),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.zb(9),r.bc("ngForOf",o.data))},directives:[c.t,c.Q,c.P,c.o,c.q,c.r,c.u,c.s,t.h],styles:["ion-content[_ngcontent-%COMP%]{--background:url(https://res.cloudinary.com/devgea-s-a/image/upload/v1595216433/Finca%20Cienaguilla/baqhiwkpoqyrcqdrna5h.png) no-repeat center center}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(o){return new(o||n)},imports:[[a.i.forChild(f)],a.i]}),n})(),p=(()=>{class n{}return n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({factory:function(o){return new(o||n)},imports:[[t.b,e.a,c.R,h]]}),n})()}}]);