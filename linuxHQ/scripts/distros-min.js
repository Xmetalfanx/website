let distroResults=document.getElementById("linux-primary-content"),myPage="/linuxHQ/distro/",DWPage="https://distrowatch.com/",distroGraphics="/linuxHQ/graphics/distros/",YTPLBase="https://www.youtube.com/playlist?list=",YTPLEmbeddedBase="https://www.youtube.com/embed/videoseries?list=";function displayDistroOutput(e,n,s,a,t,r,i,o,l,d,c,p,u,b,f){let h="/linuxHQ/screenshots/"+e+"/";const m=`\n\n      <div class="card mx-auto w-90">${`\n      <div class="card__header">\n        <div>\n          <img src="${distroGraphics}${s}" alt="${a} icon" class="icon--size48">\n          ${a}\n        </div>\n\n        <div>\n        </div>\n      </div>\n  `}\n        <div class="card__body">\n\n            \x3c!-- For both col's (so to speak) --\x3e\n            <div class="d-flex jc-space-between">\n\n            \x3c!-- for left hand col ... left of the screenshots --\x3e\n            <div class="d-md-inline-block">\n\n                <span class="font-weight-bold">Homepage: </span>\n                    <a href="${t}" target="_blank" rel='noreferrer'>${a}'s Homepage\n                    </a><br/>\n\n                <span class="font-weight-bold">Download: </span>\n                    <a href="${r}" target="_blank" rel='noreferrer'>${a}'s Download Page\n                    </a><br/>\n\n                <span class="font-weight-bold">Forums:</span>\n                    <a href="${i}" target="_blank" rel='noreferrer'>${a}'s Forum</a><br/>\n\n                <span class="font-weight-bold">Distrowatch Page: </span>\n                    <a href="${DWPage}${n}" blank="_blank" rel='noreferrer'>${a} Distrowatch Link\n                    </a>\n\n                <div class="py-3">\n                  <h4> Versions</h4>\n                  <span class="font-weight-bold">Latest Version: </span><br />\n                  <span class="font-weight-bold">Currently Supported Versions: </span><br />\n                </div>\n\n\n                  ${`\n      <div class="py-3">\n        <span class="font-weight-bold">Target Audience: </span>${b}<br />\n        <span class="font-weight-bold">Featured Desktops: </span>${p}<br />\n        <span class="font-weight-bold">Similar Distros: </span>${u}<br />\n      </div>\n    `}\n              </div>\n\n                    <div> ${`\n\n        <a href="${h}${o}" target="_blank">\n            <img class="thumbnail-fluid--lg d-none d-md-inline-block" src="${h+"thumbnails/"}${l}" alt="${a} Screenshot" >\n        </a>\n    `}</div>\n                </div>\n\n\n                    <hr /> ${`\n\n        <h4>Youtube Playlists</h4>\n\n          <div class="d-none d-lg-flex flex-wrap py-2 jc-space-evenly">\n            <iframe class="YT-playlist-tn" src="${YTPLEmbeddedBase}${d}" target="_blank" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>\n            <iframe class="YT-playlist-tn" src="${YTPLEmbeddedBase}${c}" target="_blank" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>\n          </div>\n        </div>\n\n        <div class="d-lg-none d-xs-block p-3">\n            <div>\n                <a href="${YTPLBase}${d}" target="_blank" rel='noreferrer'>Youtube Review/Walkthrough/Comments Playlist </a>\n            </div>\n            <div>\n                <a href="${YTPLBase}${c}" target="_blank" rel='noreferrer'>Youtube Tips/Tricks/Tutorial Playlist</a>\n            </div>\n        </div>\n    `}\n\n                </div>\n            </div>\n        </div>\n        `;distroResults.insertAdjacentHTML("beforeend",m)}function getDistroData(e,n){jsonURL="/linuxHQ/json/distros.json",$.getJSON(jsonURL,(function(e){$.each(e,(function(e,n){for(let s=0;s<n.length;s++){let a=e,t=n[s].distroName,r=n[s].distroTitle,i=n[s].graphics.iconURL,o=n[s].moreinfo.desktops,l=n[s].moreinfo.similar,d=n[s].moreinfo.target,c=n[s].moreinfo.software,p=n[s].website.homepage,u=n[s].website.download,b=n[s].website.forum,f=n[s].screenshots.thumbnails,h=n[s].screenshots.src,m=n[s].youtube.reviewPlaylist,g=n[s].youtube.tipsPlaylist;localDistroName==t&&displayDistroOutput(a,t,i,r,p,u,b,h,f,m,g,o,l,d,c)}}))}))}