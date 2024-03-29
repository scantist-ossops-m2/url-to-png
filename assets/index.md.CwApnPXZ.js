import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.CuBoVdWv.js";const m=JSON.parse('{"title":"URL to PNG","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),i={name:"index.md"},n=r(`<h1 id="url-to-png" tabindex="-1">URL to PNG <a class="header-anchor" href="#url-to-png" aria-label="Permalink to &quot;URL to PNG&quot;">​</a></h1><p><a href="https://github.com/jasonraimondi/url-to-png/blob/main/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/license/jasonraimondi/url-to-png" alt="GitHub License"></a><a href="https://github.com/jasonraimondi/url-to-png" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/actions/workflow/status/jasonraimondi/url-to-png/ci.yml?branch=main&amp;style=flat-square" alt="GitHub Workflow Status"></a><a href="https://hub.docker.com/r/jasonraimondi/url-to-png/tags" target="_blank" rel="noreferrer"><img src="https://img.shields.io/docker/pulls/jasonraimondi/url-to-png" alt="Docker Pulls"></a></p><p>A URL to PNG generator over HTTP with a fairly simple API accessed via query params passed to the server.</p><ul><li>Generate PNG images from URLs</li><li>Customizable image dimensions and viewport size</li><li>Support for mobile user agent and dark mode rendering</li><li>Caching of generated images</li><li>Allow list for domain-specific requests</li><li>Configurable Playwright options</li><li>Integration with various storage providers (AWS S3, CouchDB, Filesystem)</li><li>Prometheus metrics endpoint</li></ul><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>Checkout <a href="https://jasonraimondi.github.io/url-to-png/getting_started/" target="_blank" rel="noreferrer">the docs to getting_started</a></p><h3 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h3><p>Run the following command:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run --rm -p 3089:3089 ghcr.io/jasonraimondi/url-to-png</span></span></code></pre></div><p>On the hub: <a href="https://hub.docker.com/r/jasonraimondi/url-to-png/" target="_blank" rel="noreferrer">Link to DockerHub</a></p><h3 id="local-serve" tabindex="-1">Local Serve <a class="header-anchor" href="#local-serve" aria-label="Permalink to &quot;Local Serve&quot;">​</a></h3><p>Serve the project</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/jasonraimondi/url-to-png</span></span>
<span class="line"><span>cd url-to-png</span></span>
<span class="line"><span>pnpm install</span></span>
<span class="line"><span>pnpm exec playwright install chromium</span></span>
<span class="line"><span>pnpm dev</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>Read the <a href="https://jasonraimondi.github.io/url-to-png/config/" target="_blank" rel="noreferrer">full config options</a></p><h2 id="encryption" tabindex="-1">Encryption <a class="header-anchor" href="#encryption" aria-label="Permalink to &quot;Encryption&quot;">​</a></h2><p>Learn about <a href="https://jasonraimondi.github.io/url-to-png/encryption/" target="_blank" rel="noreferrer">encryption</a></p><h2 id="metrics" tabindex="-1">Metrics <a class="header-anchor" href="#metrics" aria-label="Permalink to &quot;Metrics&quot;">​</a></h2><p>Learn about <a href="https://jasonraimondi.github.io/url-to-png/metrics/" target="_blank" rel="noreferrer">metrics</a></p>`,19),o=[n];function s(l,p,c,h,d,u){return t(),e("div",null,o)}const b=a(i,[["render",s]]);export{m as __pageData,b as default};
