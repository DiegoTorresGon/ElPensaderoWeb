import{c as b}from"./js/_plugin-vue_export-helper.BLXtEB-G.js";import{c as S,b as C}from"./js/vue-router.DOaapPxo.js";import{l as g}from"./js/index.DQR9DFri.js";import{l as f}from"./js/index.CdwEuUIl.js";import{b as h,B as y,O as P,l as v}from"./js/links.C572zDFG.js";import{d as x,m as w,T as k}from"./js/postSlug.CtHxoMEa.js";import{d as m}from"./js/Caret.CGwYaMo_.js";import{i as A}from"./js/isEqual.6YJSJDqn.js";import{e as B,_ as E,s as R}from"./js/default-i18n.Bd0Z306Z.js";import{P as D}from"./js/App.CNjKBRSA.js";import{o as T,c as $,a as n,t as L,B as c,u as a,l as O,aa as N,h as V}from"./js/runtime-core.esm-bundler.DMBo7TXk.js";import{_ as M}from"./js/ScoreButton.CBnVDJ-P.js";import{S as U}from"./js/LogoGear.DKfym1nW.js";import"./js/translations.Buvln_cw.js";import"./js/constants.B6ynd7gz.js";import"./js/helpers.D5tYIqKS.js";import"./js/metabox.CE2B6Dot.js";import"./js/cleanForSlug.DjsajR64.js";import"./js/toString.CkyAieyd.js";import"./js/_baseTrim.BYZhh0MR.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/_baseSet.SHpzr1A5.js";import"./js/_baseIsEqual.8qmZqLuw.js";import"./js/_getTag.Dxs-K0Yj.js";/* empty css                */import"./js/allowed.DI27y-Lv.js";import"./js/params.B3T1WKlC.js";import"./js/SettingsRow.BzmNmU2T.js";import"./js/Row.CHjKxnPP.js";import"./js/Checkbox.CxE2HV-P.js";import"./js/Checkmark.DL3UTTgg.js";import"./js/ScrollAndHighlight.BJMBF74G.js";import"./js/Tabs.C-PQxwBC.js";import"./js/TruSeoScore.TjofuHRQ.js";import"./js/Ellipse.CAgnKuMU.js";import"./js/Information.JAmX9TGg.js";import"./js/Slide.D2pWF0rN.js";import"./js/Index.CgBueMQV.js";import"./js/Settings.IDjFfO4e.js";import"./js/MaxCounts.DHV7qSQX.js";import"./js/Tags.D1_s1xAA.js";import"./js/debounce.D8CddFbI.js";import"./js/toNumber.BuBWCMcL.js";import"./js/toFinite.D0kOmx_O.js";import"./js/Tooltip.CRFjFnpF.js";import"./js/Plus.iqCbU08m.js";import"./js/Eye.D4LLkyJX.js";import"./js/RadioToggle.CODR8har.js";import"./js/GoogleSearchPreview.DQIVXQEq.js";import"./js/HtmlTagsEditor.BQtOQ8ni.js";import"./js/Editor.DxKrKvK1.js";import"./js/_baseClone.Zn5yUk9p.js";import"./js/_arrayEach.Fgt6pfHj.js";import"./js/UnfilteredHtml.C9zHp9e0.js";import"./js/ProBadge.Bm930amZ.js";import"./js/popup.6pJEdp0g.js";import"./js/license.w8vDmkyH.js";import"./js/upperFirst.BGtMw2rr.js";import"./js/addons.tTxptju5.js";import"./js/Blur.tZiC08Rv.js";import"./js/Index.fxoyLS1r.js";import"./js/WpTable.DQTWb3IZ.js";import"./js/Table.BK8hMu3L.js";import"./js/numbers.zAmItkHM.js";import"./js/PostTypes.Cef6XkQ_.js";import"./js/InternalOutbound.DZ80pFZE.js";import"./js/RequiredPlans.CWb7CJDQ.js";import"./js/Image.CAgT8cKC.js";import"./js/FacebookPreview.efTXJQe6.js";import"./js/Img.D1d3ge3U.js";import"./js/Profile.blAmV54p.js";import"./js/ImageUploader.Bd5ae9U1.js";import"./js/TwitterPreview.B39CbiNF.js";import"./js/Book.DaIhDiml.js";import"./js/Build.C1ElmolC.js";import"./js/Redirects.CLdR6VZR.js";import"./js/Index.N3ar3q9e.js";import"./js/JsonValues.D25FTfEu.js";import"./js/External.1pzVM6vX.js";import"./js/escapeRegExp.BzEGgRdT.js";import"./js/Exclamation.Dk_xiOnS.js";import"./js/Gear.Big5c48d.js";import"./js/Date.7QFk4W6o.js";import"./js/DatePicker.zmGSzhsH.js";import"./js/pick.DnO1wEct.js";import"./js/Card.CuS1kKeW.js";import"./js/Upsell.D6CKwviy.js";let d={};const l=()=>{const t={...d},o=x();A(t,o)||(d=o,w())},j=()=>{const t=h();t.saveCurrentPost(t.currentPost).then(()=>{y().fetch()})},q=()=>{TVE.add_action("tcb-ready",l),["tcb.after-insert","tcb.element.remove","tcb.element.duplicate","tcb.froala.focus","tcb.froala.blur","tcb.image.change","after_undo_redo"].forEach(t=>{TVE.add_action(t,()=>{m(l,200)})}),TVE.add_action("tve.save_post.success",()=>{m(j,100)})};let r=!1;const H=()=>{TVE.$("#sidebar-top, #aioseo-score-btn-settings").on("click",".aioseo-score-button",()=>{const t=document.querySelector(".tcb-sidebar-icon-aioseo"),o=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});t==null||t.dispatchEvent(o)}),TVE.$("#settings-action-btn").on("click",()=>{r=!r,TVE.$(".tcb-aioseo #settings-action-btn").toggleClass("active",r),TVE.$body.toggleClass("aioseo-settings-enabled",r),TVE.ajax("update_option","post",{option_name:"is_aioseo_settings_enabled",option_value:r}).done(()=>{})})},W=()=>{TVE.add_action("tcb.drawer.toggle",t=>{t==="settings"&&setTimeout(()=>{const o=TVE.$("#aioseo-panel"),e=TVE.$(".tcb-sidebar-icon-aioseo").hasClass("active");e?o.show():o.hide(),u(e)},100)}),TVE.add_action("tcb.drawer.hide",()=>{setTimeout(()=>{const t=TVE.$(".tcb-sidebar-icon-aioseo").hasClass("active");u(t)},110)})},u=t=>{TVE.$("#aioseo-score-btn-header .aioseo-score-button").toggleClass("aioseo-score-button--active",t),TVE.$body.toggleClass("aioseo-settings-active",t)},z=()=>{if(TVE.$("#aioseo-panel").length)return;const t=TVE.$(".settings"),o=TVE.$("<div>",{id:"aioseo-panel"}).hide();t.append(o)},G=()=>{if(TVE.$("#aioseo-score-btn-header").length)return;const t=TVE.$("#tcb-sidebar-top-right .button-group"),o=TVE.$("<div>",{id:"aioseo-score-btn-header"});t.append(o)},F=()=>{r=TVE.CONST.is_aioseo_settings_enabled==="true"||TVE.CONST.is_aioseo_settings_enabled==="1",r&&(TVE.$(".tcb-aioseo #settings-action-btn").addClass("active"),TVE.$body.addClass("aioseo-settings-enabled")),TVE.$("html").attr("dir",B()?"rtl":"ltr"),TVE.$("body").addClass("wp-core-ui"),z(),G(),W(),H()},s={id:"aioseo-limit-modified-date-thrive",param:"aioseo_limit_modified_date",title:E("Save (Don't Modify Date)","all-in-one-seo-pack"),flag:!1},I=()=>{TVE.$("#tve-save-dash-return").after(`
		<a
			href="javascript:void(0)"
			id="${s.id}"
			title="${s.title}"
		>
			${s.title}
		</a>
	`)},J=()=>{TVE.add_filter("tcb_save_post_data_before",t=>(t[s.param]=s.flag,t)),TVE.add_action("tve.save_post.success",()=>{s.flag=!1}),TVE.$body.on("click",`#${s.id}`,()=>{s.flag=!0,TVE.main.editor_settings.save()})},K=()=>{I(),J()},Q={class:"edit-post-sidebar aioseo-thrive-sidebar"},X={class:"aioseo-thrive-sidebar__header"},Y={class:"aioseo-thrive-sidebar__header-title"},Z={class:"aioseo-thrive-sidebar__content"},_={__name:"Sidebar",setup(t){const e={headerTitle:R(E("%1$s Settings","all-in-one-seo-pack"),"AIOSEO")};return(i,p)=>(T(),$("div",Q,[n("div",X,[n("div",Y,L(e.headerTitle),1)]),n("div",Z,[c(a(D))])]))}},tt={class:"aioseo-thrive-score-button"},ot={__name:"Button",props:{buttonContext:{type:String}},setup(t){const{currentPost:o}=P(h());return(e,i)=>(T(),$("div",tt,[c(a(M),{score:a(o).seo_score,class:N([t.buttonContext==="Settings"?"aioseo-score-button--active":""])},{icon:O(()=>[c(a(U))]),_:1},8,["score","class"])]))}},et=()=>{const t=S({history:C(),routes:[{path:"/",component:_}]});let o=b({name:"Standalone/ThriveArchitect",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>V(_)});o=g(o),o=f(o),o.use(t),t.app=o,v(o,t),o.config.globalProperties.$truSeo=new k,o.mount("#aioseo-panel")},it=()=>{["aioseo-score-btn-settings","aioseo-score-btn-header"].forEach(o=>{const e=o.replace("aioseo-score-btn-","").replace(/^\w/,p=>p.toUpperCase());let i=b({name:`Standalone/ThriveArchitect/Score${e}`,render:()=>V(ot)},{buttonContext:e});i=g(i),i=f(i),v(i),i.mount(`#${o}`)})},st=()=>{F(),et(),it(),K(),q()};st();