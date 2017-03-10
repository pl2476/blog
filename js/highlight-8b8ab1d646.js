!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/[&<>]/gm,function(e){return y[e]})}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return x.test(e)}function i(e){var n,t,r,i,s=e.className+" ";if(s+=e.parentNode?e.parentNode.className:"",t=O.exec(s))return _(t[1])?t[1]:"no-highlight";for(s=s.split(/\s+/),n=0,r=s.length;n<r;n++)if(i=s[n],a(i)||_(i))return i}function s(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function o(e){var n=[];return function e(r,a){for(var i=r.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=e(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function l(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function s(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}c+="<"+t(e)+R.map.call(e.attributes,r).join("")+">"}function o(e){c+="</"+t(e)+">"}function l(e){("start"===e.event?s:o)(e.node)}for(var u=0,c="",g=[];e.length||r.length;){var f=i();if(c+=n(a.substr(u,f[0].offset-u)),u=f[0].offset,f===e){g.reverse().forEach(o);do{l(f.splice(0,1)[0]),f=i()}while(f===e&&f.length&&f[0].offset===u);g.reverse().forEach(s)}else"start"===f[0].event?g.push(f[0].node):g.pop(),l(f.splice(0,1)[0])}return c+n(a.substr(u))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.keywords=a.keywords||a.beginKeywords,a.keywords){var o={},l=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?l("keyword",a.keywords):N(a.keywords).forEach(function(e){l(e,a.keywords[e])}),a.keywords=o}a.lexemesRe=t(a.lexemes||/\w+/,!0),i&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=t(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=t(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&i.terminator_end&&(a.terminator_end+=(a.end?"|":"")+i.terminator_end)),a.illegal&&(a.illegalRe=t(a.illegal)),null==a.relevance&&(a.relevance=1),a.contains||(a.contains=[]);var u=[];a.contains.forEach(function(e){e.variants?e.variants.forEach(function(n){u.push(s(e,n))}):u.push("self"===e?a:e)}),a.contains=u,a.contains.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function c(e,t,a,i){function s(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(r(n.contains[t].beginRe,e))return n.contains[t]}function o(e,n){if(r(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,n)}function l(e,n){return!a&&r(n.illegalRe,e)}function f(e,n){var t=p.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function d(e,n,t,r){var a=r?"":L.classPrefix,i='<span class="'+a,s=t?"":C;return(i+=e+'">')+n+s}function E(){var e,t,r,a;if(!N.keywords)return n(O);for(a="",t=0,N.lexemesRe.lastIndex=0,r=N.lexemesRe.exec(O);r;)a+=n(O.substr(t,r.index-t)),e=f(N,r),e?(S+=e[1],a+=d(e[0],n(r[0]))):a+=n(r[0]),t=N.lexemesRe.lastIndex,r=N.lexemesRe.exec(O);return a+n(O.substr(t))}function v(){var e="string"==typeof N.subLanguage;if(e&&!w[N.subLanguage])return n(O);var t=e?c(N.subLanguage,O,!0,M[N.subLanguage]):g(O,N.subLanguage.length?N.subLanguage:void 0);return N.relevance>0&&(S+=t.relevance),e&&(M[N.subLanguage]=t.top),d(t.language,t.value,!1,!0)}function h(){x+=null!=N.subLanguage?v():E(),O=""}function m(e){x+=e.className?d(e.className,"",!0):"",N=Object.create(e,{parent:{value:N}})}function b(e,n){if(O+=e,null==n)return h(),0;var t=s(n,N);if(t)return t.skip?O+=n:(t.excludeBegin&&(O+=n),h(),t.returnBegin||t.excludeBegin||(O=n)),m(t,n),t.returnBegin?0:n.length;var r=o(N,n);if(r){var a=N;a.skip?O+=n:(a.returnEnd||a.excludeEnd||(O+=n),h(),a.excludeEnd&&(O=n));do{N.className&&(x+=C),N.skip||(S+=N.relevance),N=N.parent}while(N!==r.parent);return r.starts&&m(r.starts,""),a.returnEnd?0:n.length}if(l(n,N))throw new Error('Illegal lexeme "'+n+'" for mode "'+(N.className||"<unnamed>")+'"');return O+=n,n.length||1}var p=_(e);if(!p)throw new Error('Unknown language: "'+e+'"');u(p);var R,N=i||p,M={},x="";for(R=N;R!==p;R=R.parent)R.className&&(x=d(R.className,"",!0)+x);var O="",S=0;try{for(var y,B,A=0;;){if(N.terminators.lastIndex=A,!(y=N.terminators.exec(t)))break;B=b(t.substr(A,y.index-A),y[0]),A=y.index+B}for(b(t.substr(A)),R=N;R.parent;R=R.parent)R.className&&(x+=C);return{relevance:S,value:x,language:e,top:N}}catch(e){if(e.message&&e.message.indexOf("Illegal")!==-1)return{relevance:0,value:n(t)};throw e}}function g(e,t){t=t||L.languages||N(w);var r={relevance:0,value:n(e)},a=r;return t.filter(_).forEach(function(n){var t=c(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function f(e){return L.tabReplace||L.useBR?e.replace(S,function(e,n){return L.useBR&&"\n"===e?"<br>":L.tabReplace?n.replace(/\t/g,L.tabReplace):void 0}):e}function d(e,n,t){var r=n?M[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),e.indexOf(r)===-1&&a.push(r),a.join(" ").trim()}function E(e){var n,t,r,s,u,E=i(e);a(E)||(L.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,u=n.textContent,r=E?c(E,u,!0):g(u),t=o(n),t.length&&(s=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s.innerHTML=r.value,r.value=l(t,o(s),u)),r.value=f(r.value),e.innerHTML=r.value,e.className=d(e.className,E,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function v(e){L=s(L,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll("pre code");R.forEach.call(e,E)}}function m(){addEventListener("DOMContentLoaded",h,!1),addEventListener("load",h,!1)}function b(n,t){var r=w[n]=t(e);r.aliases&&r.aliases.forEach(function(e){M[e]=n})}function p(){return N(w)}function _(e){return e=(e||"").toLowerCase(),w[e]||w[M[e]]}var R=[],N=Object.keys,w={},M={},x=/^(no-?highlight|plain|text)$/i,O=/\blang(?:uage)?-([\w-]+)\b/i,S=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",L={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},y={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=c,e.highlightAuto=g,e.fixMarkup=f,e.highlightBlock=E,e.configure=v,e.initHighlighting=h,e.initHighlightingOnLoad=m,e.registerLanguage=b,e.listLanguages=p,e.getLanguage=_,e.inherit=s,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.COMMENT=function(n,t,r){var a=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return a.contains.push(e.PHRASAL_WORDS_MODE),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),a},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e});