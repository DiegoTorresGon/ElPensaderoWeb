import{a as S,u as k,h as v}from"./links.C572zDFG.js";import"./default-i18n.Bd0Z306Z.js";import{_ as y,w as l}from"./_plugin-vue_export-helper.BLXtEB-G.js";import{S as z}from"./Caret.CGwYaMo_.js";import{u as C}from"./Wizard.DtIF_n8N.js";import{C as w}from"./Index.CgBueMQV.js";import{v as d,o as c,c as u,m as W,t,B as r,l as n,C as p,a}from"./runtime-core.esm-bundler.DMBo7TXk.js";const b={setup(){const{strings:e}=C();return{optionsStore:S(),rootStore:k(),setupWizardStore:v(),strings:e}},components:{CoreModal:w,SvgClose:z},data(){return{loading:!1}},methods:{processOptIn(){this.setupWizardStore.smartRecommendations.usageTracking=!0,this.loading=!0,this.setupWizardStore.saveWizard("smartRecommendations").then(()=>{window.location.href=this.rootStore.aioseo.urls.aio.dashboard})}}},T={class:"aioseo-wizard-close-and-exit"},x=["href"],M={class:"aioseo-modal-body"},A=["innerHTML"],U={class:"actions"};function B(e,s,E,o,g,_){const f=d("svg-close"),m=d("base-button"),h=d("core-modal");return c(),u("div",T,[W(e.$slots,"links",{},()=>[e.$isPro||o.optionsStore.options.advanced.usageTracking?(c(),u("a",{key:0,href:o.rootStore.aioseo.urls.aio.dashboard},t(o.strings.closeAndExit),9,x)):(c(),u("a",{key:1,href:"#",onClick:s[0]||(s[0]=l(i=>o.setupWizardStore.showUsageTrackingModal=!0,["prevent"]))},t(o.strings.closeAndExit),1))]),r(h,{show:o.setupWizardStore.showUsageTrackingModal&&!e.$isPro,onClose:s[3]||(s[3]=i=>o.setupWizardStore.showUsageTrackingModal=!1),classes:["aioseo-close-and-exit-modal"]},{header:n(()=>[p(t(o.strings.buildABetterAioseo)+" ",1),a("button",{class:"close",onClick:s[2]||(s[2]=l(i=>o.setupWizardStore.showUsageTrackingModal=!1,["stop"]))},[r(f,{onClick:s[1]||(s[1]=i=>o.setupWizardStore.showUsageTrackingModal=!1)})])]),body:n(()=>[a("div",M,[a("div",{class:"reset-description",innerHTML:o.strings.getImprovedFeatures},null,8,A),a("div",U,[r(m,{tag:"a",href:o.rootStore.aioseo.urls.aio.dashboard,type:"gray",size:"medium"},{default:n(()=>[p(t(o.strings.noThanks),1)]),_:1},8,["href"]),r(m,{type:"blue",size:"medium",loading:g.loading,onClick:l(_.processOptIn,["stop"])},{default:n(()=>[p(t(o.strings.yesCountMeIn),1)]),_:1},8,["loading","onClick"])])])]),_:1},8,["show"])])}const H=y(b,[["render",B]]);export{H as W};
