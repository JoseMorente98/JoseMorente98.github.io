(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wsAf:function(e,t,n){"use strict";n.r(t),n.d(t,"VentasPageModule",(function(){return U}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),s=n("mrSG"),r=n("fXoL"),b=n("J/xi"),l=n("TgOq"),d=n("fGQ8");function u(e,t){1&e&&r.Kb(0,"img",19)}function g(e,t){if(1&e&&r.Kb(0,"img",20),2&e){const e=r.Wb(2);r.cc("src",e.strImage,r.fc)}}function h(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",21),r.ic(2," Fecha y Hora:"),r.Lb())}function p(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",21),r.ic(2," Fecha Entrega:"),r.Lb())}function f(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",22),r.ic(2," Tipo Pago: "),r.Lb())}function m(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",23),r.ic(2," Observaciones: "),r.Lb())}function M(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",24),r.ic(2," Cliente:"),r.Lb())}function L(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",25),r.ic(2," Correo: "),r.Lb())}function v(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",26),r.ic(2," Tel\xe9fono: "),r.Lb())}function z(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",27),r.ic(2," Direcci\xf3n:"),r.Lb())}function I(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",28),r.ic(2," Descripci\xf3n: "),r.Lb())}function C(e,t){1&e&&(r.Mb(0,"strong"),r.Kb(1,"ion-icon",26),r.ic(2," Contacto: "),r.Lb())}function k(e,t){if(1&e&&(r.Mb(0,"ion-label",32),r.Mb(1,"strong"),r.ic(2),r.Lb(),r.Lb()),2&e){const e=r.Wb().$implicit;r.zb(2),r.jc(e.productoNombre)}}function A(e,t){if(1&e&&(r.Mb(0,"ion-label",14),r.Mb(1,"p"),r.Mb(2,"strong"),r.ic(3,"Descripcion: "),r.Lb(),r.ic(4),r.Lb(),r.Mb(5,"p"),r.Mb(6,"strong"),r.ic(7,"Precio: "),r.Lb(),r.ic(8),r.Lb(),r.Mb(9,"p"),r.Mb(10,"strong"),r.ic(11,"Cantidad: "),r.Lb(),r.ic(12),r.Lb(),r.Mb(13,"p"),r.Mb(14,"strong"),r.ic(15,"Subotal: "),r.Lb(),r.ic(16),r.Lb(),r.Kb(17,"p"),r.Lb()),2&e){const e=r.Wb().$implicit;r.zb(4),r.jc(e.descripcion),r.zb(4),r.kc("Q ",e.productoPrecio,""),r.zb(4),r.jc(e.cantidad),r.zb(4),r.kc("Q ",e.subtotal,"")}}function S(e,t){if(1&e&&(r.Mb(0,"ion-label",14),r.Mb(1,"p"),r.Mb(2,"strong"),r.ic(3,"Descripcion: "),r.Lb(),r.ic(4),r.Lb(),r.Mb(5,"p"),r.Mb(6,"strong"),r.ic(7,"Presentaci\xf3n: "),r.Lb(),r.ic(8),r.Lb(),r.Mb(9,"p"),r.Mb(10,"strong"),r.ic(11,"Precio: "),r.Lb(),r.ic(12),r.Lb(),r.Mb(13,"p"),r.Mb(14,"strong"),r.ic(15,"Cantidad: "),r.Lb(),r.ic(16),r.Lb(),r.Mb(17,"p"),r.Mb(18,"strong"),r.ic(19,"Subotal: "),r.Lb(),r.ic(20),r.Lb(),r.Kb(21,"p"),r.Lb()),2&e){const e=r.Wb().$implicit;r.zb(4),r.jc(e.descripcion),r.zb(4),r.jc(e.presentacionProducto.nombre),r.zb(4),r.kc("Q ",e.presentacionProducto.precio,""),r.zb(4),r.jc(e.cantidad),r.zb(4),r.kc("Q ",e.subtotal,"")}}function y(e,t){if(1&e&&(r.Mb(0,"div"),r.Mb(1,"ion-list-header",29),r.hc(2,k,3,1,"ion-label",30),r.Lb(),r.Mb(3,"ion-item"),r.hc(4,A,18,4,"ion-label",31),r.hc(5,S,22,5,"ion-label",31),r.Lb(),r.Lb()),2&e){const e=t.$implicit,n=r.Wb(2);r.zb(2),r.bc("ngIf",n.data.total),r.zb(2),r.bc("ngIf",!e.presentacionProducto),r.zb(1),r.bc("ngIf",e.presentacionProducto)}}function D(e,t){if(1&e&&(r.Mb(0,"ion-label"),r.Mb(1,"strong"),r.ic(2),r.Lb(),r.Lb()),2&e){const e=r.Wb(2);r.zb(2),r.kc("Total: Q ",e.data.total,"")}}function x(e,t){if(1&e){const e=r.Nb();r.Mb(0,"form",34),r.Ub("ngSubmit",(function(){return r.ec(e),r.Wb(3).saveChanges()})),r.Mb(1,"ion-item"),r.Mb(2,"ion-label",35),r.Kb(3,"ion-icon",21),r.ic(4," Fecha de Entrega: "),r.Lb(),r.Mb(5,"ion-datetime",36),r.Ub("ngModelChange",(function(t){return r.ec(e),r.Wb(3).data.fechaEntrega=t})),r.Lb(),r.Lb(),r.Mb(6,"ion-button",37),r.Kb(7,"ion-icon",38),r.ic(8," Guardar Cambios "),r.Lb(),r.Lb()}if(2&e){const e=r.Wb(3);r.zb(5),r.bc("ngModel",e.data.fechaEntrega),r.zb(1),r.bc("disabled",e.disabledBtn)}}function w(e,t){if(1&e&&(r.Mb(0,"div"),r.hc(1,x,9,2,"form",33),r.Lb()),2&e){const e=r.Wb(2);r.zb(1),r.bc("ngIf",1==e.data.estado||2==e.data.estado||3==e.data.estado)}}function j(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-content",5),r.Mb(1,"ion-header",6),r.Mb(2,"ion-toolbar"),r.Mb(3,"ion-title",7),r.ic(4,"Venta"),r.Lb(),r.Mb(5,"ion-buttons",8),r.Mb(6,"ion-button",2),r.Ub("click",(function(){return r.ec(e),r.Wb().closeModal()})),r.Kb(7,"ion-icon",3),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(8,"div",9),r.Mb(9,"div",10),r.hc(10,u,1,0,"img",11),r.hc(11,g,1,1,"img",12),r.Lb(),r.Lb(),r.Mb(12,"ion-list",13),r.Mb(13,"ion-item"),r.Mb(14,"ion-label",14),r.Mb(15,"p"),r.hc(16,h,3,0,"strong",15),r.ic(17),r.Lb(),r.Mb(18,"p"),r.hc(19,p,3,0,"strong",15),r.ic(20),r.Lb(),r.Mb(21,"p"),r.hc(22,f,3,0,"strong",15),r.ic(23),r.Lb(),r.Mb(24,"p"),r.hc(25,m,3,0,"strong",15),r.ic(26),r.Lb(),r.Lb(),r.Lb(),r.Mb(27,"ion-item"),r.Mb(28,"ion-label",14),r.Mb(29,"p"),r.hc(30,M,3,0,"strong",15),r.ic(31),r.Lb(),r.Mb(32,"p"),r.hc(33,L,3,0,"strong",15),r.ic(34),r.Lb(),r.Mb(35,"p"),r.hc(36,v,3,0,"strong",15),r.ic(37),r.Lb(),r.Lb(),r.Lb(),r.Mb(38,"ion-item"),r.Mb(39,"ion-label",14),r.Mb(40,"p"),r.hc(41,z,3,0,"strong",15),r.ic(42),r.Lb(),r.Mb(43,"p"),r.hc(44,I,3,0,"strong",15),r.ic(45),r.Lb(),r.Mb(46,"p"),r.hc(47,C,3,0,"strong",15),r.ic(48),r.Lb(),r.Lb(),r.Mb(49,"ion-button",16),r.Ub("click",(function(){r.ec(e);const t=r.Wb();return t.presentActionSheet(t.data)})),r.Kb(50,"ion-icon",17),r.Lb(),r.Lb(),r.Lb(),r.Mb(51,"ion-list"),r.hc(52,y,6,3,"div",18),r.Mb(53,"ion-item-divider"),r.hc(54,D,3,1,"ion-label",15),r.Lb(),r.Lb(),r.hc(55,w,2,1,"div",15),r.Kb(56,"br"),r.Lb()}if(2&e){const e=r.Wb();r.bc("fullscreen",!0),r.zb(10),r.bc("ngIf",!e.strImage),r.zb(1),r.bc("ngIf",e.strImage),r.zb(5),r.bc("ngIf",e.data.fechaHora),r.zb(1),r.kc(" ",e.data.fechaHora,""),r.zb(2),r.bc("ngIf",e.data.fechaEntrega),r.zb(1),r.kc(" ",e.data.fechaEntrega,""),r.zb(2),r.bc("ngIf",e.data.tipoOrdenNombre),r.zb(1),r.jc(e.data.tipoOrdenNombre),r.zb(2),r.bc("ngIf",e.data.observaciones),r.zb(1),r.jc(e.data.observaciones),r.zb(4),r.bc("ngIf",e.data.usuarioNombre),r.zb(1),r.lc(" ",e.data.usuarioNombre," ",e.data.usuarioApellido,""),r.zb(2),r.bc("ngIf",e.data.usuarioCorreo),r.zb(1),r.kc(" ",e.data.usuarioCorreo,""),r.zb(2),r.bc("ngIf",e.data.usuarioTelefono),r.zb(1),r.jc(e.data.usuarioTelefono),r.zb(4),r.bc("ngIf",e.data.direccionDireccion),r.zb(1),r.kc(" ",e.data.direccionDireccion," "),r.zb(2),r.bc("ngIf",e.data.direccionDescripcion),r.zb(1),r.kc(" ",e.data.direccionDescripcion,""),r.zb(2),r.bc("ngIf",e.data.direccionTelefono),r.zb(1),r.jc(e.data.direccionTelefono),r.zb(4),r.bc("ngForOf",e.detalle),r.zb(2),r.bc("ngIf",e.data.total),r.zb(1),r.bc("ngIf","Administrador"==e.administratorApp)}}let K=(()=>{class e{constructor(e,t,n,i,o,a){this.modalController=e,this.notificacionService=t,this.ventaService=n,this.navParams=i,this.actionSheetController=o,this.launchNavigator=a,this.disabledBtn=!1,this.selectItem="form",this.data={id:0,fechaHora:"",nit:"",total:0,boleta:"",boletaImagen:"",observaciones:"",estado:0,fechaEntrega:null,fechaRecibido:null,tipoOrden:0,direccion:0,usuario:0,direccionTelefono:null,direccionDescripcion:null,direccionDireccion:null,usuarioTelefono:null,usuarioCorreo:null,usuarioNombre:null,usuarioApellido:null,tipoOrdenNombre:null,vendedor:null}}ngOnInit(){this.data.id=this.navParams.get("value"),this.categoria=this.navParams.get("categoria"),this.administratorApp=localStorage.getItem("currentType"),this.data.id&&(this.getSingle(+this.data.id),this.getDetalle(+this.data.id))}segmentChanged(e){console.log("Segment changed",e),this.selectItem=e.detail.value}closeModal(e){this.modalController.dismiss(e)}getSingle(e){this.ventaService.getSingle(e).subscribe(e=>{console.log(e),this.data=e,this.strImage=e.boletaImagen},e=>{})}getDetalle(e){this.ventaService.getDetalle(e).subscribe(e=>{this.detalle=[],this.detalle=e},e=>{})}saveChanges(){this.data.estado=4,this.validarCampos()&&(this.disabledBtn=!0,this.data.id&&this.update())}validarCampos(){return!!this.data.fechaEntrega||(this.notificacionService.presentToast("La fecha es requerida."),!1)}update(){this.ventaService.update(this.data).subscribe(e=>{this.closeModal(e),this.notificacionService.presentAlert("Venta Actualizada","La venta se ha actualizado exitosamente.")},e=>{this.notificacionService.presentToast("Lo sentimos, ha ocurrido un error intenta m\xe1s tarde.")})}presentActionSheet(e){return Object(s.a)(this,void 0,void 0,(function*(){console.log(`${e.direccionLatitud},${e.direccionLongitud}`);const t=yield this.actionSheetController.create({header:"Ubicaci\xf3n",cssClass:"my-custom-class",buttons:[{text:"Abrir con Waze",icon:"navigate-outline",handler:()=>{this.launchNavigator.navigate([e.direccionLatitud,e.direccionLongitud],{start:`${e.direccionLatitud},${e.direccionLongitud}`,app:this.launchNavigator.APP.WAZE}).then(e=>console.log("Launched navigator"),e=>console.log("Error launching navigator",e))}},{text:"Abrir con Google Maps",icon:"navigate-outline",handler:()=>{this.launchNavigator.navigate([e.latitud,e.longitud],{start:`${e.latitud},${e.longitud}`,app:this.launchNavigator.APP.GOOGLE_MAPS}).then(e=>console.log("Launched navigator"),e=>console.log("Error launching navigator",e))}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield t.present()}))}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(a.U),r.Jb(b.a),r.Jb(l.a),r.Jb(a.W),r.Jb(a.a),r.Jb(d.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-modal-venta"]],decls:8,vars:1,consts:[["translucent","true"],["collapse","true","slot","end"],[3,"click"],["slot","icon-only","name","close-circle-outline"],["style","--padding-start: 15px; --padding-end: 15px;",3,"fullscreen",4,"ngIf"],[2,"--padding-start","15px","--padding-end","15px",3,"fullscreen"],["collapse","condense"],["size","large"],["slot","end"],[2,"width","100%","height","350px"],[1,"container"],["class","img-center","src","https://res.cloudinary.com/devgea-s-a/image/upload/v1594950613/Finca%20Cienaguilla/mkdr6jfwkclzdzubuuwb.png",4,"ngIf"],["class","img-center",3,"src",4,"ngIf"],["lines","none"],[1,"ion-text-wrap"],[4,"ngIf"],["slot","end","expand","block","fill","clear",3,"click"],["name","locate-outline","slot","icon-only"],[4,"ngFor","ngForOf"],["src","https://res.cloudinary.com/devgea-s-a/image/upload/v1594950613/Finca%20Cienaguilla/mkdr6jfwkclzdzubuuwb.png",1,"img-center"],[1,"img-center",3,"src"],["name","calendar-outline"],["name","wallet-outline"],["name","chatbubble-ellipses-outline"],["name","person-outline"],["name","at-outline"],["name","phone-portrait-outline"],["name","map-outline"],["name","information-circle-outline"],["lines","inset"],["color","dark",4,"ngIf"],["class","ion-text-wrap",4,"ngIf"],["color","dark"],[3,"ngSubmit",4,"ngIf"],[3,"ngSubmit"],["position","floating"],["name","fechaEntrega","display-timezone","utc","required","",3,"ngModel","ngModelChange"],["color","primary","expand","block","type","submit",3,"disabled"],["name","save-outline","slot","start"]],template:function(e,t){1&e&&(r.Mb(0,"ion-header",0),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-title"),r.ic(3,"Detalle Venta"),r.Lb(),r.Mb(4,"ion-buttons",1),r.Mb(5,"ion-button",2),r.Ub("click",(function(){return t.closeModal()})),r.Kb(6,"ion-icon",3),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.hc(7,j,57,27,"ion-content",4)),2&e&&(r.zb(7),r.bc("ngIf","form"==t.selectItem))},directives:[a.t,a.Q,a.P,a.h,a.g,a.u,i.i,a.o,a.z,a.w,a.y,i.h,a.x,a.A,o.j,o.f,o.g,a.p,a.Z,o.i,o.e,o.h],styles:["ion-content[_ngcontent-%COMP%]{--padding-start:15px;--padding-end:15px}"]}),e})();var O=n("cZdB");function P(e,t){1&e&&(r.Mb(0,"ion-buttons",15),r.Kb(1,"ion-back-button",16),r.Lb())}function E(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-buttons",17),r.Mb(1,"ion-button",18),r.Ub("click",(function(){return r.ec(e),r.Wb().goToRoute("/cliente/categoria")})),r.Kb(2,"ion-icon",19),r.Lb(),r.Lb()}}function T(e,t){1&e&&r.Kb(0,"ion-icon",25)}function N(e,t){1&e&&r.Kb(0,"ion-icon",26)}function J(e,t){1&e&&r.Kb(0,"ion-icon",27)}function W(e,t){if(1&e){const e=r.Nb();r.Mb(0,"ion-item",20),r.Ub("click",(function(){r.ec(e);const n=t.$implicit;return r.Wb().getDetalle(n)})),r.hc(1,T,1,0,"ion-icon",21),r.hc(2,N,1,0,"ion-icon",22),r.hc(3,J,1,0,"ion-icon",23),r.Mb(4,"ion-label",24),r.Mb(5,"h2"),r.Mb(6,"strong"),r.ic(7,"Orden No. "),r.Lb(),r.ic(8),r.Lb(),r.Mb(9,"h5"),r.Mb(10,"strong"),r.ic(11,"Tipo Pago: "),r.Lb(),r.ic(12),r.Lb(),r.Mb(13,"p"),r.Mb(14,"strong"),r.ic(15,"Total:"),r.Lb(),r.ic(16),r.Lb(),r.Mb(17,"p"),r.Mb(18,"strong"),r.ic(19,"Cliente: "),r.Lb(),r.ic(20),r.Lb(),r.Lb(),r.Lb()}if(2&e){const e=t.$implicit;r.zb(1),r.bc("ngIf",1==e.tipoOrden),r.zb(1),r.bc("ngIf",2==e.tipoOrden),r.zb(1),r.bc("ngIf",3==e.tipoOrden),r.zb(5),r.jc(e.id),r.zb(4),r.jc(e.tipoOrdenNombre),r.zb(4),r.kc(" ",e.total,""),r.zb(4),r.lc(" ",e.usuarioNombre," ",e.usuarioApellido,"")}}const V=[{path:"",component:(()=>{class e{constructor(e,t,n,i,o,a,c,s,r){this.loadingController=e,this.notificacionService=t,this.direccionService=n,this.alertController=i,this.router=o,this.modalController=a,this.actionSheetController=c,this.location=s,this.activatedRoute=r,this.getAll=(e,t)=>{this.notificacionService.presentLoading("Cargando..."),this.direccionService.getAllStateForUser(e,t).subscribe(e=>{this.data=[],this.data=e,this.notificacionService.dismissLoading()},e=>{this.data=[],this.notificacionService.dismissLoading()})}}segmentChanged(e){console.log("Segment changed",e),this.selectItem=e.detail.value,this.getVentas()}ngOnInit(){}goToRoute(e){this.router.navigate([""+e])}goToBack(){this.location.back()}ionViewDidEnter(){this.parameter=this.activatedRoute.snapshot.paramMap.get("id"),this.administratorApp=localStorage.getItem("currentType"),this.usuarioID=+localStorage.getItem("currentId"),this.getVentas()}getDetalle(e){if("Administrador"==this.administratorApp)switch(this.selectItem){case"efectivo":case"deposito":case"tarjeta":this.presentActionSheet(e);break;case"camino":this.presentActionSheet2(e);break;case"entregado":case"cancelar":this.presentModal(e.id);break;default:this.getAll(1)}else this.presentModal(e.id)}presentActionSheet(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.actionSheetController.create({header:"Ventas",cssClass:"my-custom-class",buttons:[{text:"Ver Detalles",icon:"document-text-outline",handler:()=>{this.presentModal(e.id)}},{text:"Cancelar Venta",role:"destructive",icon:"trash-outline",handler:()=>{this.presentAlert(e.id)}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield t.present()}))}presentActionSheet2(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.actionSheetController.create({header:"Ventas",cssClass:"my-custom-class",buttons:[{text:"Ver Detalles",icon:"document-text-outline",handler:()=>{this.presentModal(e.id)}},{text:"Entregar Venta",icon:"check-outline",handler:()=>{this.presentAlert(e.id)}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield t.present()}))}presentModal(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:K,componentProps:{value:e}});return t.onDidDismiss().then(e=>{e.data&&this.getVentas()}),yield t.present()}))}presentAlert(e){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Eliminar",message:"\xbfDeseas eliminar la presentaci\xf3n?",cssClass:"my-custom-class",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:e=>{}},{text:"Aceptar",handler:()=>{this.delete(e)}}]});yield t.present()}))}delete(e){this.direccionService.delete(e).subscribe(e=>{this.notificacionService.presentAlert("Presentaci\xf3n Eliminada","La presentaci\xf3n fue eliminada exitosamente.")},e=>{console})}getVentas(){if("Administrador"==this.administratorApp)switch(this.selectItem){case"efectivo":this.getAll(1);break;case"deposito":this.getAll(2);break;case"tarjeta":this.getAll(3);break;case"camino":this.getAll(4);break;case"entregado":this.getAll(5);break;case"cancelar":this.getAll(0);break;default:this.getAll(1)}else switch(this.selectItem){case"efectivo":this.getAll(1,this.usuarioID);break;case"deposito":this.getAll(2,this.usuarioID);break;case"tarjeta":this.getAll(3,this.usuarioID);break;case"camino":this.getAll(4,this.usuarioID);break;case"entregado":this.getAll(5,this.usuarioID);break;case"cancelar":this.getAll(0,this.usuarioID);break;default:this.getAll(1,this.usuarioID)}}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(a.T),r.Jb(b.a),r.Jb(l.a),r.Jb(a.b),r.Jb(c.g),r.Jb(a.U),r.Jb(a.a),r.Jb(i.f),r.Jb(c.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-ventas"]],decls:36,vars:8,consts:[["translucent","true"],["slot","start",4,"ngIf"],["slot","end",4,"ngIf"],["scrollable","true","value","efectivo","mode","md",3,"ionChange"],["value","efectivo"],["value","deposito"],["value","tarjeta"],["value","camino"],["value","entregado"],["value","cancelar"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"ngModel","ngModelChange"],["button","",3,"click",4,"ngFor","ngForOf"],["slot","start"],["defaultHref","/cliente/categoria"],["slot","end"],[3,"click"],["name","leaf-outline","slot","icon-only"],["button","",3,"click"],["slot","start","name","wallet-outline",4,"ngIf"],["slot","start","name","business-outline",4,"ngIf"],["slot","start","name","card-outline",4,"ngIf"],[1,"ion-text-wrap"],["slot","start","name","wallet-outline"],["slot","start","name","business-outline"],["slot","start","name","card-outline"]],template:function(e,t){1&e&&(r.Mb(0,"ion-header",0),r.Mb(1,"ion-toolbar"),r.hc(2,P,2,0,"ion-buttons",1),r.Mb(3,"ion-title"),r.ic(4,"Ventas"),r.Lb(),r.hc(5,E,3,0,"ion-buttons",2),r.Lb(),r.Mb(6,"ion-toolbar"),r.Mb(7,"ion-segment",3),r.Ub("ionChange",(function(e){return t.segmentChanged(e)})),r.Mb(8,"ion-segment-button",4),r.Mb(9,"ion-label"),r.ic(10,"Efectivo"),r.Lb(),r.Lb(),r.Mb(11,"ion-segment-button",5),r.Mb(12,"ion-label"),r.ic(13,"Dep\xf3sito Bancario"),r.Lb(),r.Lb(),r.Mb(14,"ion-segment-button",6),r.Mb(15,"ion-label"),r.ic(16,"Tarjeta de Cr\xe9dito"),r.Lb(),r.Lb(),r.Mb(17,"ion-segment-button",7),r.Mb(18,"ion-label"),r.ic(19,"En Camino"),r.Lb(),r.Lb(),r.Mb(20,"ion-segment-button",8),r.Mb(21,"ion-label"),r.ic(22,"Entregados"),r.Lb(),r.Lb(),r.Mb(23,"ion-segment-button",9),r.Mb(24,"ion-label"),r.ic(25,"Cancelados"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(26,"ion-content",10),r.Mb(27,"ion-header",11),r.Mb(28,"ion-toolbar"),r.Mb(29,"ion-title",12),r.ic(30,"Ventas"),r.Lb(),r.Lb(),r.Mb(31,"ion-toolbar"),r.Mb(32,"ion-searchbar",13),r.Ub("ngModelChange",(function(e){return t.search=e})),r.Lb(),r.Lb(),r.Lb(),r.Mb(33,"ion-list"),r.hc(34,W,21,8,"ion-item",14),r.Xb(35,"filter"),r.Lb(),r.Lb()),2&e&&(r.zb(2),r.bc("ngIf",!t.parameter),r.zb(3),r.bc("ngIf",t.parameter),r.zb(21),r.bc("fullscreen",!0),r.zb(6),r.bc("ngModel",t.search),r.zb(2),r.bc("ngForOf",r.Yb(35,5,t.data,t.search)))},directives:[a.t,a.Q,i.i,a.P,a.E,a.Z,a.F,a.y,a.o,a.D,a.ab,o.e,o.h,a.z,i.h,a.h,a.e,a.f,a.g,a.u,a.w],pipes:[O.a],styles:[""]}),e})()}];let F=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[c.i.forChild(V)],c.i]}),e})(),U=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[i.b,o.a,a.R,F,O.b]]}),e})()}}]);