"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9102],{9102:(h,m,r)=>{r.r(m),r.d(m,{MisVentasPageModule:()=>M});var u=r(177),d=r(4341),o=r(5150),c=r(8986),e=r(3953),_=r(9708);function p(t,a){if(1&t){const n=e.RV6();e.j41(0,"ion-item-options",15)(1,"ion-item-option",16),e.bIt("click",function(){e.eBV(n);const s=e.XpG().$implicit,l=e.XpG();return e.Njj(l.actualizarEstado(s.id,"CANCELADO"))}),e.nrm(2,"ion-icon",17),e.EFF(3," Cancelar "),e.k0s()()}}function v(t,a){if(1&t&&(e.j41(0,"p"),e.EFF(1),e.k0s()),2&t){const n=e.XpG().$implicit;e.R7$(),e.Lme("Vendedor: ",n.usuario.nombre," ",n.usuario.apellido,"")}}function A(t,a){1&t&&(e.j41(0,"p"),e.EFF(1,"No disponible"),e.k0s())}function E(t,a){if(1&t){const n=e.RV6();e.j41(0,"ion-item-sliding"),e.DNE(1,p,4,0,"ion-item-options",10),e.j41(2,"ion-item",11),e.bIt("click",function(){const s=e.eBV(n).$implicit,l=e.XpG();return e.Njj(l.goToRoute(s.id))}),e.j41(3,"ion-thumbnail",12),e.nrm(4,"ion-icon",13),e.k0s(),e.j41(5,"ion-label")(6,"h3"),e.EFF(7),e.k0s(),e.j41(8,"p"),e.EFF(9),e.k0s(),e.DNE(10,v,2,2,"p",14)(11,A,2,0,"p",14),e.j41(12,"p"),e.EFF(13),e.k0s()()()()}if(2&t){const n=a.$implicit;e.R7$(),e.Y8G("ngIf","ENTREGADO"!=(null==n?null:n.estado_venta)&&"CANCELADO"!=(null==n?null:n.estado_venta)),e.R7$(6),e.SpI("Venta No. ",n.id,""),e.R7$(2),e.Lme("Cliente: ",n.cliente.nombre," ",n.cliente.apellido,""),e.R7$(),e.Y8G("ngIf",n.usuario),e.R7$(),e.Y8G("ngIf",null==n.usuario),e.R7$(2),e.SpI("Total: Q ",n.total,"")}}const f=[{path:"",component:(()=>{var t;class a{constructor(i,s){this.ventaService=i,this.router=s,this.ventas=[],this.estado_venta="PUBLICADO"}ngOnInit(){this.usuario=JSON.parse(localStorage.getItem("currentUsuario"))}ionViewDidEnter(){var i;this.usuario=JSON.parse(localStorage.getItem("currentUsuario")),this.getAllByStateAndUser(this.estado_venta,null===(i=this.usuario)||void 0===i?void 0:i.id)}getAllVentas(){this.ventaService.getAll().subscribe({next:i=>{this.ventas=i,console.log(i)}})}getAllByStateAndUser(i,s){this.estado_venta=i,this.ventaService.getAllByStateAndUser(i,s).subscribe({next:l=>{this.ventas=l,this.ventas.reverse()}})}goToRoute(i){this.router.navigate(["ventas/detalle-venta",i])}actualizarEstado(i,s){this.ventaService.cambiarEstadoVenta({id:i,estado_venta:s}).subscribe({next:l=>{var g;this.getAllByStateAndUser(this.estado_venta,null===(g=this.usuario)||void 0===g?void 0:g.id)}})}}return(t=a).\u0275fac=function(i){return new(i||t)(e.rXU(_.s),e.rXU(c.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-mis-ventas"]],decls:21,vars:3,consts:[["mode","ios"],["color","primary"],["color","primary","mode","md"],["value","PUBLICADOS",3,"scrollable"],["value","PUBLICADOS",3,"click"],["value","EN PROCESO",3,"click"],["value","ENTREGADO",3,"click"],["value","CANCELADOS",3,"click"],[3,"fullscreen"],[4,"ngFor","ngForOf"],["side","start",4,"ngIf"],[3,"click"],["slot","start"],["name","pricetag","color","primary",2,"width","100%","height","100%"],[4,"ngIf"],["side","start"],["color","danger",3,"click"],["slot","end","name","close"]],template:function(i,s){1&i&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title"),e.EFF(3,"VENTAS"),e.k0s()(),e.j41(4,"ion-toolbar",2)(5,"ion-segment",3)(6,"ion-segment-button",4),e.bIt("click",function(){return s.getAllByStateAndUser("PUBLICADO",null==s.usuario?null:s.usuario.id)}),e.j41(7,"ion-label"),e.EFF(8,"PUBLICADOS"),e.k0s()(),e.j41(9,"ion-segment-button",5),e.bIt("click",function(){return s.getAllByStateAndUser("EN_PROCESO",null==s.usuario?null:s.usuario.id)}),e.j41(10,"ion-label"),e.EFF(11,"EN PROCESO"),e.k0s()(),e.j41(12,"ion-segment-button",6),e.bIt("click",function(){return s.getAllByStateAndUser("ENTREGADO",null==s.usuario?null:s.usuario.id)}),e.j41(13,"ion-label"),e.EFF(14,"ENTREGADO"),e.k0s()(),e.j41(15,"ion-segment-button",7),e.bIt("click",function(){return s.getAllByStateAndUser("CANCELADO",null==s.usuario?null:s.usuario.id)}),e.j41(16,"ion-label"),e.EFF(17,"CANCELADOS"),e.k0s()()()()(),e.j41(18,"ion-content",8)(19,"ion-list"),e.DNE(20,E,14,7,"ion-item-sliding",9),e.k0s()()),2&i&&(e.R7$(5),e.Y8G("scrollable",!0),e.R7$(13),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("ngForOf",s.ventas))},dependencies:[u.Sq,u.bT,o.W9,o.eU,o.iq,o.uz,o.LU,o.CE,o.A7,o.he,o.nf,o.Gp,o.eP,o.Zx,o.BC,o.ai,o.Je]}),a})()}];let V=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(f),c.iI]}),a})(),M=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[u.MD,d.YN,o.bv,V]}),a})()}}]);