var ticOutput=document.querySelector("#ticsection"),screenshotDIR="/linuxHQ/screenshots/",zypperInstall="sudo zypper install",ubuntuInstall="sudo apt install",dnfInstall="sudo dnf install",archInstall="sudo pacman -S";function displayTICOutput(n,t,s,a,r,e,l,o,c,i,u,d){const h=`\n\n          <div class="card">\n            <div class="card-header bg-primary text-white font-weight-bold">${t}</div>\n            <div class="card-body">\n              <div class="row">\n                <div class="col">\n\n                  <span class="font-weight-bold">Theme has support for: </span>\n                  ${s}\n                  <br/><br/>\n\n                  ${`\n\n        <span class="font-weight-bold">Gnomelook URL:</span>\n        <a href="${a}" target="_blank" >\n        ${n} on Gnome Look </a> <br />\n\n        <span class="font-weight-bold">Github URL: </span>\n        <a href="${r} " target="_blank" >\n        ${n} on Github </a> <br />\n\n        <span class="font-weight-bold">Deviant Art URL: </span>\n        <a href="${e}" target="_blank" >\n        ${n} on DeviantArt </a>\n        <br />\n      `}\n                  <br />\n\n                  ${`\n        <h3>How to Install ${n} </h3>\n        <div>\n          <span class="font-weight-bold">On Arch: </span> ${archInstall} ${l}\n          <br />\n\n          <span class="font-weight-bold">On Fedora: </span> ${dnfInstall} ${o}\n          <br />\n\n          <span class="font-weight-bold">On openSUSE: </span> ${zypperInstall} ${c}\n          <br />\n\n          <span class="font-weight-bold">On Ubuntu: </span> ${ubuntuInstall} ${i}\n          <br />\n\n        </div>\n      `}\n                </div>\n\n\n\n                <div class="col">\n                  <div class="m-auto">\n                  <a href="${screenshotDIR}${u}" target="_blank" >\n                    <img data-src="${screenshotDIR}${d}" alt="${t} Screenshot"  class="d-md-block d-none img-fluid" loading="lazy" />\n                  </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        `;ticOutput.insertAdjacentHTML("beforeend",h)}function getTICData(n,t){$(document).ready((function(){ticJSONURL="http://xmetal.x10.mx/linuxHQ/json/tic.json",$.getJSON(ticJSONURL,(function(n){$.each(n,(function(n,t){for(let s=0;s<t.length;s++){currentTICType=n,currentTICEntry=t[s];let a=currentTICEntry.ticName,r=currentTICEntry.themeTitle,e=currentTICEntry.supportInfo,l=currentTICEntry.links.delettsURL,o=currentTICEntry.links.githubURl,c=currentTICEntry.links.gnomelooksURL,i=currentTICEntry.howToInstall.arch,u=currentTICEntry.howToInstall.fedora,d=currentTICEntry.howToInstall.opensuse,h=currentTICEntry.howToInstall.ubuntu,p=currentTICEntry.screenshot.src,b=currentTICEntry.screenshot.thumbnail;localTICName==a&&displayTICOutput(a,r,e,c,o,l,i,u,d,h,p,b)}}))}))}))}