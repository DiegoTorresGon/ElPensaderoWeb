import{a as u,u as a}from"./links.C572zDFG.js";import{u as p}from"./upperFirst.BGtMw2rr.js";const f=(n,e=null)=>{try{n=JSON.parse(n)}catch{n=e}return n},l={individual:0,business:1,agency:2,basic:3,plus:4,pro:5,elite:6},c=(n="")=>{var r,i;const e=u(),o=a().aioseo.data.isNetworkLicensed&&!e.options.general.licenseKey?((r=e.internalNetworkOptions.internal.license)==null?void 0:r.features)||[]:((i=e.internalOptions.internal.license)==null?void 0:i.features)||[];let s=f(o,[]);return n&&(s=s[n]||[]),s},d=(n,e)=>{const t=c("core");for(const o in t)if(n===o&&!e||n===o&&t[o].includes(e))return!0;return!1},_=(n,e)=>{const t=c("addons");for(const o in t)if(n===o&&t[o].includes(e))return!0;return!1},m=n=>{var s,r;const e=u(),o=a().aioseo.data.isNetworkLicensed&&!e.options.general.licenseKey?(s=e.internalNetworkOptions.internal.license)==null?void 0:s.level:(r=e.internalOptions.internal.license)==null?void 0:r.level;return o?l[o]>=l[n]:!1},S=(n,e="")=>{const t=[];a().aioseo.features.forEach(r=>{r.section===n&&(e&&r.feature!==e||t.push(p(r.license_level)))});const s=["Basic","Plus","Pro","Elite"];return t.sort((r,i)=>s.indexOf(r)-s.indexOf(i)),[...new Set(t)]},F={getFeatures:c,getPlansForFeature:S,hasAddonFeature:_,hasCoreFeature:d,hasMinimumLevel:m};export{F as l};
