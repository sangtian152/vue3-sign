import{_ as t,M as i,p as o,q as p,R as n,t as e,N as s,a1 as c}from"./framework-f9b9c660.js";const r={},l=c(`<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>一个简易签名组件，基于vue和canvas。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i @sangtian152/vue3-sign <span class="token parameter variable">-S</span>
<span class="token comment"># or </span>
<span class="token function">yarn</span> <span class="token function">add</span> @sangtian152/vue3-sign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><p>在 main.js 中写入以下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> vue3Sign <span class="token keyword">from</span> <span class="token string">&#39;@sangtian152/vue3-sign&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@sangtian152/vue3-sign/lib/vue3-sign.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vue3Sign<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h3>`,8),d={href:"https://gitee.com/sangtian152/vue3-sign",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/sangtian152/vue3-sign",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"最新版本",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最新版本","aria-hidden":"true"},"#"),e(" 最新版本")],-1),v={href:"https://www.npmjs.com/package/vue3-sign",target:"_blank",rel:"noopener noreferrer"},k=n("img",{src:"https://img.shields.io/npm/v/vue3-sign",alt:"NPM version"},null,-1);function m(g,b){const a=i("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[n("a",d,[e("gitee地址"),s(a)])]),n("p",null,[n("a",u,[e("github地址"),s(a)])]),h,n("p",null,[n("a",v,[k,s(a)])])])}const f=t(r,[["render",m],["__file","index.html.vue"]]);export{f as default};
