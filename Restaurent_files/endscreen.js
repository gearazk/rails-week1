(function(g){var window=this;var b$=function(a,b,c,d){var e=b.Eb();g.qe(a.element,"ytp-suggestion-set",!!e.videoId);var h=b.Qf();d=b.Hc(c,d?d:"mqdefault.jpg");var k=b instanceof g.BC?g.hl(b.lengthSeconds):null,m=!!h,h=m&&"RD"==g.pF(h).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.P("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.sj(c),is_featured:e.Qr,is_list:m,is_mix:h,background:d?"background-image: url("+d+")":""};b instanceof
g.sF&&(c.playlist_length=b.A);a.update(c)},c$=function(a){var b=g.T(a),c=b.experiments.$("video_wall_moving_thumbnails_autoplay"),d=b.experiments.$("video_wall_moving_thumbnails_hover"),c=c||d;
this.B=b.B&&!b.C;b=g.Gi||g.Dc?{style:"will-change: opacity"}:null;d={I:"img",U:"ytp-videowall-moving-thumbnail",T:{src:"{{moving_thumbnail}}"}};g.R.call(this,{I:"a",U:"ytp-videowall-still",T:{href:"{{url}}",target:this.B?"_blank":null,"aria-label":"{{watch}}","data-is-featured":"{{is_featured}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{I:"div",U:"ytp-videowall-still-image",T:{style:"{{background}}"}},c?d:null,{I:"span",U:"ytp-videowall-still-featured-label",P:[g.P("YTP_FEATURED")]},
{I:"span",U:"ytp-videowall-still-info",P:[{I:"span",U:"ytp-videowall-still-info-bg",P:[{I:"span",U:"ytp-videowall-still-info-content",T:b,P:[{I:"span",U:"ytp-videowall-still-info-title",P:["{{title}}"]},{I:"span",U:"ytp-videowall-still-info-author",P:["{{author_and_views}}"]},{I:"span",U:"ytp-videowall-still-info-duration",P:["{{duration}}"]}]}]}]},{I:"span",ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{I:"span",U:"ytp-videowall-still-listlabel-icon"},g.P("YTP_PLAYLIST"),
{I:"span",U:"ytp-videowall-still-listlabel-length",P:[" (",{I:"span",P:["{{playlist_length}}"]},")"]}]},{I:"span",ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],P:[{I:"span",U:"ytp-videowall-still-listlabel-mix-icon"},g.P("YTP_MIX"),{I:"span",U:"ytp-videowall-still-listlabel-length",P:[" (50+)"]}]}]});this.o=a;this.b=null;this.O("click",this.qJ);this.O("keypress",this.rJ);c&&this.R(this.ra["ytp-videowall-moving-thumbnail"],"load",this.tJ)},d$=function(a){if(5E5<g.Jx(a.o.app.ha)){var b=
a.b.mj();
b&&a.update({moving_thumbnail:b})}},e$=function(a){g.FF.call(this,a,{I:"div",
ga:["ytp-thumbnail-overlay","ytp-channel-overlay"],P:[{I:"div",U:"ytp-thumbnail-overlay-image",T:{style:"{{background}}"}},{I:"div",U:"ytp-thumbnail-overlay-curtain"}]})},f$=function(){g.R.call(this,["div",
"ytp-subscribe-card",["img","ytp-author-image",{src:"{{image}}"}],["div","ytp-subscribe-card-right",["div","ytp-author-name","{{author}}"],["div","html5-subscribe-button-container"]]])},g$=function(a){var b=g.T(a).experiments.$("moving_thumbnails_autonav"),c={I:"img",
U:"ytp-upnext-moving-thumbnail",T:{src:"{{moving_thumbnail}}"}},c={I:"div",U:"ytp-upnext",T:{"aria-label":"{{watch}}"},P:[{I:"div",U:"ytp-thumbnail-overlay-image",T:{style:"{{background}}"}},b?c:null,{I:"div",U:"ytp-thumbnail-overlay-curtain"},{I:"span",U:"ytp-upnext-top",P:[{I:"span",U:"ytp-upnext-header",P:[g.P("YTP_PLAYLIST_UP_NEXT")]},{I:"span",U:"ytp-upnext-title",P:["{{title}}"]},{I:"span",U:"ytp-upnext-author",P:["{{author}}"]}]},{I:"a",U:"ytp-upnext-autoplay-icon",T:{href:"{{url}}"},P:[{I:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},P:[{I:"circle",U:"ytp-svg-autoplay-circle",T:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{I:"circle",U:"ytp-svg-autoplay-ring",T:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{I:"polygon",U:"ytp-svg-autoplay-triangle",T:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{I:"span",U:"ytp-upnext-bottom",P:[{I:"span",
U:"ytp-upnext-cancel"},{I:"span",U:"ytp-upnext-paused",P:[g.P("YTP_AUTOPLAY_PAUSED_2")]}]},{I:"span",U:"ytp-upnext-close"}]};g.R.call(this,c);var d=this.ra["ytp-upnext-cancel"],c=this.ra["ytp-upnext-close"],e=new g.R({I:"button",ga:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:0,"aria-label":g.P("YTP_AUTOPLAY_CANCEL")},P:[g.P("YTP_CANCEL")]});g.I(this,e);e.O("click",this.zs,this);e.Da(d);d=new g.R({I:"button",ga:["ytp-upnext-close-button","ytp-button"]});g.I(this,d);d.O("click",this.zs,this);
d.Da(c);this.b=a;this.G=this.ra["ytp-svg-autoplay-ring"];this.C=this.B=this.o=this.A=null;this.D=new g.he(this.bj,5E3,this);g.I(this,this.D);this.F=0;this.R(this.ra["ytp-upnext-autoplay-icon"],"click",this.QE);this.ys();this.R(a,"autonavvisibility",this.ys);b&&this.R(this.ra["ytp-upnext-moving-thumbnail"],"load",this.VK)},zua=function(a,b){a.A=b;
b$(a,b,g.T(a.b),"hqdefault.jpg");g.oe(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});5E5<g.Jx(a.b.app.ha)&&(b=a.A.mj())&&a.update({moving_thumbnail:b})},h$=function(a){a.o||(g.Vl("a11y-announce",g.P("YTP_PLAYLIST_UP_NEXT")+" "+a.A.title),a.F=(0,g.yk)(),a.o=new g.he(a.sl,25,a),a.sl());
g.oe(a.element,"ytp-upnext-autoplay-paused")},j$=function(a){i$(a);
a.F=(0,g.yk)();a.sl();g.K(a.element,"ytp-upnext-autoplay-paused")},i$=function(a){a.o&&(a.o.dispose(),a.o=null)},k$=function(a,b){g.AF.call(this,{I:"div",
ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.b=a;this.K=!1},l$=function(a){a=g.T(a);
return a.Qd&&!a.la},m$=function(a,b){k$.call(this,a,"videowall-endscreen");
this.ba=a;this.Z=b;this.F=0;this.B=[];this.G=this.C=this.o=null;this.H=this.V=!1;this.D=new g.tr(this);g.I(this,this.D);this.J=new g.he(g.qa(g.K,this.element,"ytp-show-tiles"),0);g.I(this,this.J);b=new g.R({I:"button",ga:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":g.P("YTP_PREVIOUS")},P:[{I:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},P:[{I:"path",T:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}]});g.I(this,b);b.Da(this.element);
b.O("click",this.jD,this);this.L=new g.$k({I:"div",U:"ytp-endscreen-content"});g.I(this,this.L);this.L.Da(this.element);b=new g.R({I:"button",ga:["ytp-button","ytp-endscreen-next"],T:{"aria-label":g.P("YTP_NEXT")},P:[{I:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},P:[{I:"path",T:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}]});g.I(this,b);b.Da(this.element);b.O("click",this.oJ,this);this.A=new g$(a);g.I(this,this.A);g.Bq(this.b,this.A.element,
4);this.sa()},n$=function(a){return(0,g.S)(a.H,function(a){return g.EF(a)})},o$=function(a,b,c){return 0==b&&a.o.length&&(b=c/m$.b,2<=c/m$.b&&2<=b&&g.T(a.b).experiments.$("video_wall_emphasize_first"))?2*m$.b:m$.b},p$=function(a){var b=a.Z.Do();
b!=a.V&&(a.V=b,a.b.Xa("autonavvisibility"))},q$=function(a){k$.call(this,a,"subscribecard-endscreen");
this.o=new e$(a);g.I(this,this.o);g.Bq(this.b,this.o.element,4);this.A=new f$;g.I(this,this.A);this.sa()},r$=function(a){g.zF.call(this,a);
g.si({});this.g=null;this.isAvailable=!0;this.o=new g.tr(this);g.I(this,this.o);this.A=g.T(a);l$(a)?this.g=new m$(this.b,this):this.A.la?this.g=new q$(this.b):this.g=new k$(this.b);g.I(this,this.g);g.Bq(this.b,this.g.element,4);this.Qt();this.o.R(a,"videodatachange",this.Qt,this);this.o.R(a,"crn_endscreen",this.eJ,this);this.o.R(a,"crx_endscreen",this.fJ,this)};
g.A(c$,g.R);g.f=c$.prototype;g.f.ef=function(){var a=this.b.Eb().videoId;g.G8(this.o.app,a,this.b.ha,this.b.Qf(),void 0,void 0)};
g.f.qJ=function(a){g.sm(a,this.o,!this.o.isFullscreen()&&this.B,this.b.ha)&&this.ef()};
g.f.sJ=function(){this.ya(this.A);this.A=null;d$(this)};
g.f.rJ=function(a){switch(a.keyCode){case 13:case 32:g.Ij(a)||(this.ef(),g.Hj(a))}};
g.f.tJ=function(a){120<g.Dj(a).naturalWidth&&g.K(this.element,"ytp-videowall-moving-thumbnail-loaded")};
g.A(e$,g.FF);e$.prototype.qb=function(a){a?this.A.show():g.Rp(this.A)};
g.A(f$,g.R);g.A(g$,g.R);g.f=g$.prototype;g.f.bj=function(){this.B&&(this.D.stop(),this.ya(this.C),this.C=null,this.B.close(),this.B=null)};
g.f.ys=function(){this.qb(g.ZD(this.b))};
g.f.HE=function(){window.focus();this.bj()};
g.f.sl=function(){var a=g.T(this.b).experiments.b("autoplay_time")||1E4,b=Math.min((0,g.yk)()-this.F,a),a=Math.min(b/a,1);this.G.setAttribute("stroke-dashoffset",-293*(a+1));1<=a?this.select(!0):this.o&&this.o.start()};
g.f.select=function(a){var b=g.T(this.b);if(b.experiments.$("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.Lp(this.b,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.A.Eb(),this.bj(),this.B=new window.Notification(g.P("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.Hc(b)}),this.C=this.R(this.B,"click",this.HE),this.D.start())}i$(this);b=this.A.Eb().videoId;
g.G8(this.b.app,b,a?this.A.yu:this.A.ha,this.A.Qf(),void 0,void 0)};
g.f.QE=function(a){!g.Ij(a)&&g.il(a)&&(this.select(),g.Hj(a))};
g.f.zs=function(a){g.Hj(a);g.hE(this.b,"autonavcancel");g.aE(this.b,!0)};
g.f.VK=function(a){120<g.Dj(a).naturalWidth&&g.K(this.element,"ytp-moving-thumbnail-loaded")};
g.f.S=function(){i$(this);this.bj();g$.M.S.call(this)};
g.A(k$,g.AF);k$.prototype.create=function(){this.K=!0};
k$.prototype.destroy=function(){this.K=!1};
k$.prototype.zl=function(){return!1};
g.A(m$,k$);m$.b=2;g.f=m$.prototype;g.f.create=function(){m$.M.create.call(this);var a=this.b.getVideoData();a&&(this.o=n$(a),this.C=a);this.rf();this.D.R(this.b,"appresize",this.rf);this.D.R(this.b,"videodatachange",this.pJ);this.D.R(this.b,"autonavchange",this.Gv);this.D.R(this.b,"autonavcancel",this.nJ);this.D.R(this.element,"transitionend",this.TF)};
g.f.destroy=function(){g.vr(this.D);g.Ob(this.B);this.B=[];this.o=null;m$.M.destroy.call(this);g.oe(this.element,"ytp-show-tiles");this.J.stop()};
g.f.zl=function(){return 1!=this.C.autonavState};
g.f.ai=function(){return g.pE(this.b)&&this.zl()&&!this.G};
g.f.show=function(){m$.M.show.call(this);g.oe(this.element,"ytp-show-tiles");g.T(this.b).isMobile?g.ie(this.J):this.J.start();(this.H||this.G&&this.G!=this.C.clientPlaybackNonce)&&g.aE(this.b,!1);var a=this.ai();g.pE(this.b)&&g.T(this.b).experiments.$("ui_logging")&&this.Z.log({cancelButtonShow:a?"1":"0",state:this.zl()?"enabled":"disabled"});a?(p$(this),2==this.C.autonavState?g.T(this.b).experiments.$("fast_autonav_in_background")&&3==this.b.getVisibilityState()?this.A.select(!0):h$(this.A):3==this.C.autonavState&&
j$(this.A)):(g.aE(this.b,!0),p$(this))};
g.f.sa=function(){m$.M.sa.call(this);j$(this.A);p$(this)};
g.f.TF=function(a){g.Dj(a)==this.element&&this.rf()};
g.f.rf=function(){if(this.o&&this.o.length){var a=g.T(this.b).experiments.$("video_wall_moving_thumbnails_hover");g.K(this.element,"ytp-endscreen-paginate");for(var b=g.Xn(this.element),c=b.width/b.height,d=96/54,e=m$.b,h=m$.b,k=Math.max(b.width/96,2),m=Math.max(b.height/54,2),l=this.o.length,p=Math.pow(m$.b,2),u=l*p,t=o$(this,0,m),x=o$(this,1,m),u=u+(Math.pow(t,2)-p),u=u+(Math.pow(x,2)-p),u=u-p;0<u&&(e<k||h<m);){var G=e/m$.b,D=h/m$.b,O=e<=k-m$.b&&u>=D*p,pa=h<=m-m$.b&&u>=G*p;if((G+1)/D*d/c>c/(G/(D+
1)*d)&&pa)u-=G*p,h+=m$.b;else if(O)u-=D*p,e+=m$.b;else if(pa)u-=G*p,h+=m$.b;else break}d=!1;k=m$.b+t;u>=3*p&&6>=l*p-u&&(h>=k||e>=k)&&x<=m$.b&&(d=!0);u=96*e;p=54*h;c=u/p<c?b.height/p:b.width/u;c=Math.min(c,2);u*=c;p*=c;u*=g.ef(b.width/u||1,1,1.21);p*=g.ef(b.height/p||1,1,1.21);u=Math.floor(Math.min(b.width,u));p=Math.floor(Math.min(b.height,p));b=this.L.element;g.Wn(b,u,p);g.En(b,{marginLeft:u/-2+"px",marginTop:p/-2+"px"});zua(this.A,this.o[0]);g.qe(this.element,"ytp-endscreen-takeover",this.ai());
p$(this);c=u+4;u=p+4;p=0;k=!this.ai();m=!1;for(G=0;G<e;G++)for(D=0;D<h;D++)if(O=x>m$.b&&1<=p&&!m?p+1:p,pa=0,d&&G>=e-m$.b&&D>=h-m$.b?pa=1:0==D%m$.b&&0==G%m$.b&&(D<t&&G<t?0==D&&0==G&&(pa=t):x>m$.b&&D>=h-x&&G>=e-x?D==h-x&&G==e-x&&(m=!0,O=1,pa=x):pa=m$.b),O=(O+this.F)%l,O=0>O*l?O+l:O,0!=pa){var Ea=this.B[p];Ea||(Ea=new c$(this.b),this.B[p]=Ea,b.appendChild(Ea.element));var La=Math.floor(u*D/h),Ya=Math.floor(c*G/e),ee=Math.floor(u*(D+pa)/h)-La-4,md=Math.floor(c*(G+pa)/e)-Ya-4;g.Kn(Ea.element,Ya,La);g.Wn(Ea.element,
md,ee);g.En(Ea.element,"transitionDelay",(D+G)/20+"s");g.qe(Ea.element,"ytp-videowall-still-mini",1==pa);g.qe(Ea.element,"ytp-videowall-still-large",2<pa);pa=Ea;O=this.o[O];Ea=k&&!a;pa.b=O;La=g.T(pa.o);b$(pa,O,La,g.le(pa.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.oe(pa.element,"ytp-videowall-moving-thumbnail-loaded");pa.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});Ea?(g.K(pa.element,"ytp-videowall-active"),
d$(pa)):La.experiments.$("video_wall_moving_thumbnails_hover")&&!pa.A&&(pa.A=pa.O("mouseover",pa.sJ));p++}g.qe(this.element,"ytp-endscreen-paginate",p<l);for(a=this.B.length-1;a>=p;a--)Ea=this.B[a],g.Lf(Ea.element),g.Nb(Ea);this.B.length=p}};
m$.o=2;m$.g=1.21;g.f=m$.prototype;g.f.pJ=function(){var a=this.b.getVideoData();this.C!=a&&(this.F=0,this.o=n$(a),this.C=a,this.rf())};
g.f.oJ=function(){this.F+=this.B.length;this.rf()};
g.f.jD=function(){this.F-=this.B.length;this.rf()};
g.f.aC=function(){return!!this.A.o};
g.f.Gv=function(a){1==a?(this.H=!1,this.G=this.C.clientPlaybackNonce,i$(this.A),this.g&&this.rf()):(this.H=!0,this.g&&this.ai()&&(2==a?h$(this.A):3==a&&j$(this.A)))};
g.f.nJ=function(a){if(a){a=[];for(var b=0;b<this.o.length;b++){var c=this.o[b].ha;c&&a.push(c.itct)}b=this.ba;if(g.T(b).experiments.$("player_interaction_logging")){for(var b=b.app.ub,c=[],d=0;d<a.length;d++){var e=a[d];b.o[e]||(b.o[e]=!0,c.push(e))}0<c.length&&b.b.Pb("onLogServerVesShown",c)}this.Gv(1)}else this.G=null,this.H=!1;this.rf()};
g.A(q$,k$);q$.prototype.create=function(){q$.M.create.call(this);g.Jf(this.element);this.A.Da(this.element);var a=this.b.getVideoData().videoId;a&&(a=g.ov(g.T(this.b),a,!0),g.Rk(a,{method:"GET",wb:this.B,context:this,oz:!0}))};
q$.prototype.B=function(a,b){if(this.K){a=b.user_info;b=a.channel_banner_url;g.nv.test(b)||(b="");var c=a.channel_logo_url||a.image_url;g.nv.test(c)||(c="");this.o.za("background",b?"background-image: url("+b+")":"");this.A.za("image",c);this.A.za("author",a.channel_title||a.username);a=a.subscription_button_html;b=this.A.ra["html5-subscribe-button-container"];a?b.innerHTML=g.Te(a):g.Jf(b)}};
q$.prototype.show=function(){q$.M.show.call(this);this.o.qb(!0)};
q$.prototype.sa=function(){q$.M.sa.call(this);this.o.qb(!1)};
g.A(r$,g.zF);g.f=r$.prototype;g.f.Cv=function(){var a=this.b.getVideoData(),b=!l$(this.b)||!(!a.H||!a.H.length),a=g.sn(a,"ypc_module"),c=g.q5(this.b.app);return(b||!1)&&!a&&!c};
g.f.Do=function(){return(this.g instanceof m$||!1)&&this.g.g&&this.g.ai()};
g.f.$B=function(){return this.Do()?this.g.aC():!1};
g.f.S=function(){var a=this.b;g.ej(a.app,"endscreen",a.playerType);r$.M.S.call(this)};
g.f.load=function(){r$.M.load.call(this);this.g.show();g.T(this.b).la&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.f.log=function(a){g.Lp(this.b,"end",a)};
g.f.unload=function(){r$.M.unload.call(this);this.g.sa();this.g.destroy();this.isAvailable=!1};
g.f.eJ=function(a){this.Cv()&&(this.g.K||this.g.create(),"load"==a.getId()&&this.load())};
g.f.fJ=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.f.Qt=function(){var a=this.b;g.ej(a.app,"endscreen",a.playerType);var a=Math.max(1E3*(this.b.getVideoData().lengthSeconds-10),0),a=new g.$i(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.$i(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});this.b.sb([a,b])};
window._exportCheck==g.sa&&g.aa("yt.player.modules.EndScreenModule2",r$,void 0);})(_yt_player);
