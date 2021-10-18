var desktopResults=document.getElementById("desktopSection"),screenshotDIR="/linuxHQ/screenshots/";function displayDEOutput(n,s,e,a,l,t,i,o,c,r,d,p,u,v,b,h,f,m,$,x,g,S,w,y,T,I,k,E,U,D,L,R,q){const B=`\n\n            <div class="card mx-3 shadow">\n                <div class="card__header">\n                    <h3>${s}</h3>\n                </div>\n                <div class="card__body">\n                    <div class="row">\n                        <div class="col px-3">\n                          <span class="font-weight-bold">Homepage:</span>\n                            <a href="${e}" target="_blank"> ${s}'s Homepage</a>\n                          <br>\n\n                          <span class="font-weight-bold">Github URL: </span>\n                            <a href="${a}" target="_blank">${s} on Github</a>\n                          <br><br>\n\n                          <span class="font-weight-bold">Latest Version: </span>${o}<br>\n                          <span class="font-weight-bold">Desktop Category: </span>${r}<br>\n                          <span class="font-weight-bold">Distros That Feature: </span>${d}<br>\n                          <br>\n\n                          <span class="font-weight-bold">Desktop Requirements: </span>\n                          <ul>\n                            <li>\n                              <span class="font-italic">Required Processor: </span>${v}\n                            </li>\n                            <li>\n                              <span class="font-italic">Required Memory: </span>${p}\n                            </li>\n                            <li>\n                              <span class="font-italic">Required Hard Drive Space: </span>${u}\n                            </li>\n                          </ul>\n\n                        </div>\n\n                        <div class="col d-none d-md-block">\n                          <a href="${screenshotDIR}${l}" target="_blank">\n                            <img class="d-md-block d-none mx-auto thumbnail-fluid--lg" src="${screenshotDIR}${t}" alt="${i} screenshot for ${s}" loading="lazy" />\n\n                            ${i} screenshot for ${s}\n                          </a>\n                        </div>\n                    </div>\n\n\n                        ${`\n            <h3 class="font-weight-bold">Versions</h3>\n            <div id="linuxVersions">\n                <small> Last Updated: ${c} </small>\n            <br/>\n\n            <div class="row">\n              <div class="col">\n                  <span class="distroBaseTitle">Arch:</span>\n                  <span class="version">${b}</span><br/>\n              </div>\n\n              <div class="col">\n                  <span class="distroBaseTitle">Fedora</span>\n                  <br/>\n                  <span class="versionTitle">32: </span>\n                  <span class="version">${h}</span><br/>\n                  <span class="versionTitle">Rawhide: </span>\n                  <span class="version"> ${f}</span>\n              </div>\n\n              <div class="col">\n                  <span class="distroBaseTitle">openSUSE</span>\n                  <br/>\n                  <span class="versionTitle">15.0: </span>\n                  <span class="version"> ${m}</span>\n                  <br/>\n                  <span class="versionTitle">Tumbleweed: </span>\n                  <span class="version"> ${$}</span>\n              </div>\n            </div>\n\n            <div class="row">\n              <div class="col">\n                  <div class="distroBaseTitle">Solus</div>\n                  <span class="version">${x} </span>\n              </div>\n\n              <div class="col">\n                  <div class="distroBaseTitle">Ubuntu </div>\n                  <span class="versionTitle">18.04 Bionic LTS: </span>\n                  <span class="version">${S}</span>\n                  <br/>\n                  <span class="versionTitle">20.04 Focal LTS: </span>\n                  <span class="version">${w}</span>\n              </div>\n\n              <div class="col">\n                  <div class="distroBaseTitle">Linux Mint </div>\n                  <span class="versionTitle">19: </span>\n                  <span class="version">${T}</span>\n                  <br />\n                  <span class="versionTitle">20: </span>\n                  <span class="version">${I}</span>\n              </div>\n            </div>\n          </div>\n\n        `}\n\n                        <br /><hr />\n\n                        ${`\n    <h3 class="font-weight-bold">How to Install: </h3>\n\n    <div class="accordion">\n      \x3c!-- Arch Start --\x3e\n      <input type="checkbox" id="archInstall" />\n      <label for="archInstall">Arch Linux</label>\n\n      <div class="content">\n        <code class="my-3 p-2">${k}</code>\n      </div>\n      \x3c!-- Arch End --\x3e\n\n      \x3c!-- Fedora Start --\x3e\n      <input type="checkbox" id="fedoraInstall" />\n      <label for="fedoraInstall">Fedora</label>\n\n      <div class="content">\n          Filler Text\n      </div>\n      \x3c!-- Fedora End --\x3e\n\n\n      \x3c!-- openSUSE Start --\x3e\n      <input type="checkbox" id="openSUSEInstall" />\n      <label for="openSUSEInstall">openSUSE</label>\n\n      <div class="content">\n        <div class="font-weight-bold">OpenSUSE: </div>\n          <div class="font-italic">${U}</div>\n          <br />\n\n          <small>POSSIBLE Extra Repos (There may or may not be content below)</small>\n          <br />\n\n          <div class="font-italic">\n              Use with Caution ... some of these may be so new they break parts of your DE when updating, but these can have newer versions of DEs then in default repos\n          </div>\n          <br />\n\n          <ul>\n              <li class="font-weight-bold">Leap 15.0 </li>\n                  <code class="my-3 p-2">${D}</code>\n              <li class="font-weight-bold">Tumbleweed</li>\n                  <code class="my-3 p-2">${L}</code>\n          </ul>\n\n      </div>\n      \x3c!-- OpenSUSE End --\x3e\n\n\n      \x3c!-- Ubuntu Start --\x3e\n      <input type="checkbox" id="ubuntuInstall" />\n      <label for="ubuntuInstall">Ubuntu</label>\n\n      <div class="content">\n        <ul>\n          <li>Installing on Ubuntu:\n              <code class="my-3 p-2">${R}</code>\n          </li>\n          <li>Installing on Linux Mint:\n              <code class="my-3 p-2">${q}</code>\n          </li>\n        </ul>\n      </div>\n    </div>\n    \x3c!-- Ubuntu End --\x3e\n\n\n        `}\n\n                </div> \x3c!-- Closes card-text --\x3e\n            </div> \x3c!-- Closes card --\x3e\n\n            `;desktopResults.insertAdjacentHTML("beforeend",B)}function getDesktopData(n,s){$(document).ready((function(){jsonURL="/linuxHQ/json/desktops.json",$.getJSON(jsonURL,(function(n){$.each(n,(function(n,s){for(var e=0;e<s.length;e++){var a=s[e].desktopName,l=s[e].desktopTitle,t=s[e].generalInfo.desktopHomepage,i=s[e].generalInfo.desktopGithubURL,o=s[e].generalInfo.desktopCatagory,c=s[e].generalInfo.distrosFeature,r=s[e].requirements.reqMemory,d=s[e].requirements.reqHDDSpace,p=s[e].requirements.reqProcessor,u=s[e].screenshots.thumbnail,v=s[e].screenshots.src,b=s[e].screenshots.distro,h=s[e].versions,f=h.latestVersion,m=h.updated,$=h.arch,x=h.fedora.f32,g=h.fedora.rawhide,S=h.opensuse.leap151,w=h.opensuse.tumbleweed,y=h.solus,T=s[e].versions.ubuntu,I=T.xenial,k=T.bionic,E=T.focal,U=T.mint.mint18,D=T.mint.mint19,L=T.mint.mint20,R=s[e].install.arch,q=s[e].install.fedora,B=s[e].install.opensuse,H=B.opensuseInstall,F=B.repoLeap15,_=B.repoTW,O=s[e].install.ubuntu.ubuntuInstall,j=s[e].install.ubuntu.mintInstall;localDEName==a&&displayDEOutput(a,l,t,i,v,u,b,f,m,o,c,r,d,p,$,x,g,S,w,y,I,k,E,U,D,L,R,q,H,F,_,O,j)}}))}))}))}