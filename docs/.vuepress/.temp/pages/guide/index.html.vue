<template><div><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>一个简易签名组件，基于vue3和canvas。</p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @sangtian152/vue3-sign <span class="token parameter variable">-S</span>
<span class="token comment"># or </span>
<span class="token function">yarn</span> <span class="token function">add</span> @sangtian152/vue3-sign
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3>
<p>在 main.js 中写入以下内容：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> vue3Sign <span class="token keyword">from</span> <span class="token string">'@sangtian152/vue3-sign'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"@sangtian152/vue3-sign/lib/vue3-sign.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vue3Sign<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h3>
<p><a href="https://gitee.com/sangtian152/vue3-sign" target="_blank" rel="noopener noreferrer">gitee地址<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/sangtian152/vue3-sign" target="_blank" rel="noopener noreferrer">github地址<ExternalLinkIcon/></a></p>
<h3 id="最新版本" tabindex="-1"><a class="header-anchor" href="#最新版本" aria-hidden="true">#</a> 最新版本</h3>
<p><a href="https://www.npmjs.com/package/vue3-sign" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/vue3-sign" alt="NPM version"><ExternalLinkIcon/></a></p>
</div></template>


