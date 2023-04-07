import{_ as c,W as l,X as u,$ as r,Y as n,Z as s,a0 as a,a2 as o,a1 as d,C as p}from"./framework-474f8844.js";const k={},v=n("h1",{id:"河工程教学评估",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#河工程教学评估","aria-hidden":"true"},"#"),s(" 河工程教学评估")],-1),m=n("p",null,"自动教学评估，适用于河北工程大学URP教务系统",-1),b=n("p",null,"时间结束会自动提交并自动进入下一评估中直到所有评估结束",-1),g=n("p",null,"为保证脚本的正常运行，请浏览器保持在教务窗口中",-1),q={id:"安装",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#",-1),f={href:"https://scriptcat.org/script-show-page/220",target:"_blank",rel:"noopener noreferrer"},x=n("img",{src:"https://scriptcat.org/assets/logo.png",height:"14"},null,-1),y=n("img",{src:"https://img.shields.io/badge/dynamic/json?color=success&label=当前版本&query=%24.data.script.version&url=https%3A%2F%2Fscriptcat.org%2Fapi%2Fv1%2Fscripts%2F220",alt:"版本",class:"fright",loading:"lazy"},null,-1),w={href:"https://greasyfork.org/zh-CN/scripts/427091",target:"_blank",rel:"noopener noreferrer"},_=n("img",{src:"https://greasyfork.org/vite/assets/blacklogo96.e0c2c761.png",height:"14"},null,-1),S=n("img",{src:"https://img.shields.io/badge/dynamic/json?color=success&label=当前版本&query=%24.version&url=https://greasyfork.org/scripts/427091.json",alt:"版本",class:"fright",loading:"lazy"},null,-1),j={id:"v2-2更新",tabindex:"-1"},T=n("a",{class:"header-anchor",href:"#v2-2更新","aria-hidden":"true"},"#",-1),$=n("ul",null,[n("li",null,"新增两周内不再登录选项，默认勾选"),n("li",null,"适配新版评估页面"),n("li",null,"分数为[9,10)之间的随机一位小数"),n("li",null,"新增多条主观评价自动随机填写")],-1),z=n("hr",null,null,-1),E={id:"v2-1更新-新增主页快捷面板",tabindex:"-1"},F=n("a",{class:"header-anchor",href:"#v2-1更新-新增主页快捷面板","aria-hidden":"true"},"#",-1),M=n("figure",null,[n("img",{src:"https://scriptcat.org/api/v1/resource/image/S1GsaMrnKny5Jd6c",alt:"快捷面板",tabindex:"0",loading:"lazy"}),n("figcaption",null,"快捷面板")],-1),N=n("h2",{id:"源码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码","aria-hidden":"true"},"#"),s(" 源码")],-1),C={class:"hint-container warning"},B=n("p",{class:"hint-container-title"},"注意",-1),U={href:"https://scriptcat.org/script-show-page/220/code",target:"_blank",rel:"noopener noreferrer"},V=d(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">//  @name        河工程教学评估</span>
<span class="token comment">// @namespace     https://github.com/slightin</span>
<span class="token comment">// @description    自动教学评估,自动评分和主观评价,适用于河北工程大学URP教务系统</span>
<span class="token comment">// @author       万事可乐</span>
<span class="token comment">//  @version      2.2.10</span>
<span class="token comment">// @include        http://27.188.65.169:911*</span>
<span class="token comment">// @match        http://202.206.161.181:46110/*</span>
<span class="token comment">// @match        http://202.206.161.203:46110/*</span>
<span class="token comment">// @match        http://202.206.161.206:46110/*</span>
<span class="token comment">// @match        */student/teachingEvaluation/*</span>
<span class="token comment">// @icon         https://cdn.jellow.site/Fgwb1WzJddpQanzWwg9bVURFF37Vv2.png</span>
<span class="token comment">// @grant        none</span>
<span class="token comment">// ==/UserScript==</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//主观评价</span>
    <span class="token keyword">var</span> eva<span class="token operator">=</span><span class="token punctuation">[</span>
        <span class="token string">&quot;老师重视教学，严慈相济，关爱学生，讲授详略得当，重点突出，难点讲透&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;老师备课充分，内容讲解熟练，讲课充满激情，让我始终保持上课的兴趣&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;老师使用多种教学方法，师生互动多，讲课风趣幽默，有助于我理解和记忆&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;教师上课认真负责，专业基础极技能高深，非常注重学生的实际动手能力。注重学生专业能力和素养的培养。上课语言幽默，互动适当，演示精准精彩&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;老师总是能够认真倾听学生的问题、意见与建议，并给予耐心细致的回答&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;课堂氛围轻松活跃，积极调动了学生的兴趣。并且学习内容安排恰当，注重能力培养&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;切入点新颖，很有新意，能充分吸引学生的注意力，符合学生的学习兴趣，使得课堂活泼不古板&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;老师爱党爱国，积极向上，备课充分，内容讲解熟练，课程设置合理，深浅知宜&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;老师体系的讲解本课程的知识结构学习导图，使学生能够了解到本课程的重点难点&quot;</span>
    <span class="token punctuation">]</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">//评估主页模块</span>
    <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> times <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#jxpgtbody&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;tr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>times<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">评估</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#jxpgtbody &gt; tr:nth-child(&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;) &gt; td:nth-child(1) &gt; button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                flag<span class="token operator">=</span><span class="token boolean">false</span>
                document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#jxpgtbody &gt; tr:nth-child(&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;) &gt; td:nth-child(1) &gt; button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">var</span> ins <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#page-content-template&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>firstElementChild
            document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#page-content-template&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span>ins<span class="token punctuation">)</span>
            div<span class="token punctuation">.</span>innerText<span class="token operator">=</span><span class="token string">&quot;评估未开始或已完成&quot;</span>
            div<span class="token punctuation">.</span>style<span class="token operator">=</span><span class="token string">&quot;color: #128520;font-size: x-large;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//评估主页面执行</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">evaluation\\/index</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">700</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//延迟执行，防止网速问题导致页面加载未完全找不到DOM，不建议太小</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//评估详情页执行</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">evaluationPage</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> num<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;font&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                num<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;textarea&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">-</span>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">10</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>eva<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span>eva<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// document.querySelector(&quot;#RemainM&quot;).innerText=2 </span>

        <span class="token comment">//用户提示模块</span>
        <span class="token keyword">var</span> tip <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;h4&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> ins <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;buttonSubmit&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#page-content-template &gt; div &gt; div &gt; div:nth-child(3)&quot;</span><span class="token punctuation">)</span>
        div<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>tip<span class="token punctuation">,</span>ins<span class="token punctuation">)</span>
        tip<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">时间结束会自动提交并进入下一评估中哦U•ェ•*U&lt;br/&gt;
            为保证脚本的正常运行，请保持浏览器处于此窗口&lt;br/&gt;
            计时检测在服务器端，暂无法跳过。&lt;br/&gt;
            开发不易，本脚本完全免费，如果觉得帮助到你，你可以选择&lt;u&gt;&lt;a id=&quot;wxmoney&quot;&gt;打赏作者&lt;/a&gt;&lt;/u&gt;
            &lt;div id=&quot;reward&quot; style=&quot;
                position: fixed;
                bottom: 10px;
                right: 10px;
                z-index: 99;
                width: 20%;
                display: none;
            &quot;&gt;
                &lt;span id=&quot;rewardclose&quot; style=&quot;
                    float: right;
                    background-color: coral;
                    padding: 5px;
                    border-radius: 4px;
                    color: white;
                &quot;&gt;点此关闭⨉&lt;/span&gt;
                &lt;img src=&quot;https://www.z4a.net/images/2022/10/21/reward.jpg&quot; alt=&quot;reward.jpg&quot; border=&quot;0&quot; style=&quot;width: 100%;border-radius: 5px;&quot;&gt;
            &lt;/div&gt;
        </span><span class="token template-punctuation string">\`</span></span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#wxmoney&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#reward&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#rewardclose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#reward&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight<span class="token punctuation">)</span><span class="token comment">//保证滚动到页面底端</span>

        <span class="token comment">//提交模块</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#RemainM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText<span class="token operator">==</span><span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#RemainS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText<span class="token operator">==</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//时间结束时点击提交</span>
                document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#buttonSubmit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;a.layui-layer-btn0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检测间隔</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token operator">==</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#native &gt; a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
            &lt;br/&gt;&lt;input type=&quot;checkbox&quot; name=&quot;_spring_security_remember_me&quot; class=&quot;fadeIn third&quot; style=&quot;margin-bottom: 5px;text-align: left;&quot; checked&gt;&amp;nbsp;两周内免登录
        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token operator">==</span><span class="token string">&quot;/&quot;</span> <span class="token operator">||</span> location<span class="token punctuation">.</span>pathname<span class="token operator">==</span><span class="token string">&quot;/index.jsp&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//主页快捷面板</span>
        <span class="token keyword">var</span> shortcut<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#page-content-template &gt; div.row&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>shortcut<span class="token punctuation">)</span>
        shortcut<span class="token punctuation">.</span>className<span class="token operator">=</span><span class="token string">&quot;col-sm-6 widget-container-col&quot;</span>
        shortcut<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div class=&quot;widget-box&quot;&gt;
                &lt;div class=&quot;widget-header&quot;&gt;
                    &lt;h5 class=&quot;widget-title&quot;&gt;
                        快捷面板（河工程教学评估脚本提供）
                    &lt;/h5&gt;
                    &lt;a class=&quot;widget-toolbar&quot; href=&quot;https://scriptcat.org/script-show-page/220/issue&quot; target=&quot;_blank&quot;&gt;点此反馈&lt;/a&gt;
                &lt;/div&gt;
                &lt;div class=&quot;widget-body&quot;&gt;
                    &lt;div class=&quot;widget-main&quot;&gt;
                        &lt;a class=&quot;infobox infobox-orange2 click-item shortcutmain&quot; href=&quot;/student/integratedQuery/scoreQuery/thisTermScores/index&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot;ace-icon fa fa-file-text&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;shortcuttext&quot;&gt;本学期成绩&lt;/div&gt;
                        &lt;/a&gt;
                        &lt;a class=&quot;infobox infobox-green click-item shortcutmain&quot; href=&quot;/student/integratedQuery/scoreQuery/coursePropertyScores/index&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot;ace-icon fa fa-list-alt&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;shortcuttext&quot;&gt;全部成绩&lt;/div&gt;
                        &lt;/a&gt;
                        &lt;a class=&quot;infobox infobox-blue click-item shortcutmain&quot; href=&quot;/student/courseSelect/thisSemesterCurriculum/index&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot;ace-icon fa fa-calendar&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;shortcuttext&quot;&gt;本学期课表&lt;/div&gt;
                        &lt;/a&gt;
                        &lt;a class=&quot;infobox infobox-orange click-item shortcutmain&quot; href=&quot;http://27.188.65.169:9900/pjxfjdpm/&quot; target=&quot;_blank&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot;ace-icon fa fa-grade&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;shortcuttext&quot;&gt;专业排名&lt;/div&gt;
                        &lt;/a&gt;
                        &lt;a class=&quot;infobox infobox-orange click-item shortcutmain&quot; href=&quot;http://27.188.65.169:9900/tskc/&quot; target=&quot;_blank&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot;ace-icon fa fa-child&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;shortcuttext&quot;&gt;我的通识课&lt;/div&gt;
                        &lt;/a&gt;
                        &lt;a class=&quot;infobox infobox-red click-item shortcutmain&quot; href=&quot;/student/teachingEvaluation/evaluation/index&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot;ace-icon fa fa-jxpg&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;shortcuttext&quot;&gt;教学评估&lt;/div&gt;
                        &lt;/a&gt;
                        &lt;a id=&quot;wxmoney&quot; class=&quot;infobox infobox-pink click-item shortcutmain&quot; style=&quot;text-decoration: none&quot;&gt;
                            &lt;div class=&quot;infobox-icon&quot;&gt;
                                &lt;i class=&quot; wxmoney ace-icon  fa fa-cny&quot;&gt;&lt;/i&gt;
                            &lt;/div&gt;
                            &lt;div  class=&quot;shortcuttext&quot;&gt;打赏作者&lt;/div&gt;
                            
                        &lt;/a&gt;
                        &lt;style type=&quot;text/css&quot;&gt;
                            .shortcuttext {
                                font-size: 18px;
                                line-height: 40px;
                                display: inline;
                                padding-left: 10px;
                            }
                            .shortcutmain {
                                width:205px;
                                padding-top:10px;
                                padding-left:20px
                            }
                        &lt;/style&gt;

                    &lt;/div&gt;
                &lt;/div&gt;
        &lt;/div&gt;
        &lt;div id=&quot;reward&quot; style=&quot;
            position: fixed;
            bottom: 10px;
            right: 10px;
            z-index: 99;
            width: 20%;
            display: none;
        &quot;&gt;
            &lt;span id=&quot;rewardclose&quot; style=&quot;
                float: right;
                background-color: coral;
                padding: 5px;
                border-radius: 4px;
                color: white;
            &quot;&gt;点此关闭⨉&lt;/span&gt;
            &lt;img src=&quot;https://www.z4a.net/images/2022/10/21/reward.jpg&quot; alt=&quot;reward.jpg&quot; border=&quot;0&quot; style=&quot;width: 100%;border-radius: 5px;&quot;&gt;
        &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#wxmoney&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#reward&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#rewardclose&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#reward&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideToggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>此脚本仅用于脚本爱好者内部交流学习使用</p>`,3);function R(I,Q){const t=p("font"),e=p("ExternalLinkIcon"),i=p("badge");return l(),u("div",null,[v,m,r(" more "),b,g,n("h2",q,[h,s(),a(t,{face:"宋体"},{default:o(()=>[s("安装")]),_:1})]),n("ul",null,[n("li",null,[n("a",f,[s("在"),x,s("脚本猫中安装"),a(e)]),a(i,{text:"推荐",type:"tip"}),s(),y]),n("li",null,[n("a",w,[s("在"),_,s("GreasyFork中安装"),a(e)]),s(),S])]),n("h2",j,[T,s(),a(t,{face:"宋体"},{default:o(()=>[s("v2.2更新")]),_:1})]),$,z,n("h2",E,[F,s(),a(t,{face:"宋体"},{default:o(()=>[s("v2.1更新 新增主页快捷面板")]),_:1})]),M,N,n("div",C,[B,n("p",null,[s("此处源码可能不为最新，请前往"),n("a",U,[s("脚本猫"),a(e)]),s("查看")])]),V])}const P=c(k,[["render",R],["__file","hebeuhelper.html.vue"]]);export{P as default};
