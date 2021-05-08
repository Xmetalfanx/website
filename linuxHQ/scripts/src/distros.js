// let for where to put the output
let distroResults = document.getElementById('linux-primary-content');

let myPage = '/linuxHQ/distro/';
let DWPage = 'https://distrowatch.com/';
let distroGraphics = '/linuxHQ/graphics/distros/';
let YTPLBase = 'https://www.youtube.com/playlist?list=';
let YTPLEmbeddedBase = 'https://www.youtube.com/embed/videoseries?list=';

function displayDistroOutput(
  currentDistroFamily,
  currentDistroName,
  currentDistroIcon,
  currentDistroTitle,
  currentDistroHomepage,
  currentDistroDownload,
  currentDistroForum,
  currentDistroScreenshot,
  currentDistroScreenshotTN,
  currentDistroYTReviewPLaylist,
  currentDistroYTTipsPLaylist,
  currentDistroFeaturesDesktops,
  currentDistroSimilarDistros,
  currentDistroTargetAudience,
  currentDistroSoftwareType,
  currentDistroBaseSupported,
  currentDistroBaseEOL
) {
  let distroSShotPath = '/linuxHQ/screenshots/' + currentDistroFamily + '/';
  let distroSShotTNPath = distroSShotPath + 'thumbnails/';

  // Template Literal for output

  const currentDistroSShotOutput = `

        <a href="${distroSShotPath}${currentDistroScreenshot}" target="_blank">
            <img class="thumbnail-fluid--lg d-none d-md-inline-block" src="${distroSShotTNPath}${currentDistroScreenshotTN}" alt="${currentDistroTitle} Screenshot" >
        </a>
    `;

  const currentDistroMoreInfoOutput = `
      <div class="py-3">
        <span class="font-weight-bold">Target Audience: </span>${currentDistroTargetAudience}<br />
        <span class="font-weight-bold">Featured Desktops: </span>${currentDistroFeaturesDesktops}<br />
        <span class="font-weight-bold">Similar Distros: </span>${currentDistroSimilarDistros}<br />
      </div>
    `;

  const currentDistroYTOutput = `

        <h4>Youtube Playlists</h4>

          <div class="d-none d-lg-flex flex-wrap py-2 jc-space-evenly">
            <iframe class="YTPlaylistsTN" src="${YTPLEmbeddedBase}${currentDistroYTReviewPLaylist}" target="_blank" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            <iframe class="YTPlaylistsTN" src="${YTPLEmbeddedBase}${currentDistroYTTipsPLaylist}" target="_blank" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
        </div>

        <div class="d-lg-none d-xs-block p-3">
            <div>
                <a href="${YTPLBase}${currentDistroYTReviewPLaylist}" target="_blank" rel='noreferrer'>Youtube Review/Walkthrough/Comments Playlist </a>
            </div>
            <div>
                <a href="${YTPLBase}${currentDistroYTTipsPLaylist}" target="_blank" rel='noreferrer'>Youtube Tips/Tricks/Tutorial Playlist</a>
            </div>
        </div>
    `;

  const currentDistoHeaderOutput = `
      <div class="card__header">
        <img src="${distroGraphics}${currentDistroIcon}" alt="${currentDistroTitle} icon" class="icon--size48">
        <h3>${currentDistroTitle}</h3>
      </div>
  `;

  const currentDistroInfoOutput = `

      <div class="card mx-auto w-90">
        ${currentDistoHeaderOutput}
        <div class="card__body">

            <!-- For both col's (so to speak) -->
            <div class="d-flex jc-space-between">

            <!-- for left hand col ... left of the screenshots -->
            <div class="d-md-inline-block">

                <span class="font-weight-bold">Homepage: </span>
                    <a href="${currentDistroHomepage}" target="_blank" rel='noreferrer'>${currentDistroTitle}'s Homepage
                    </a><br/>

                <span class="font-weight-bold">Download: </span>
                    <a href="${currentDistroDownload}" target="_blank" rel='noreferrer'>${currentDistroTitle}'s Download Page
                    </a><br/>

                <span class="font-weight-bold">Forums:</span>
                    <a href="${currentDistroForum}" target="_blank" rel='noreferrer'>${currentDistroTitle}'s Forum</a><br/>

                <span class="font-weight-bold">Distrowatch Page: </span>
                    <a href="${DWPage}${currentDistroName}" blank="_blank" rel='noreferrer'>${currentDistroTitle} Distrowatch Link
                    </a>

                <div class="py-3">
                  <h4> Versions</h4>
                  <span class="font-weight-bold">Latest Version: ${currentDistroBaseSupported} </span><br />
                  <span class="font-weight-bold">Currently Supported Versions: ${currentDistroBaseEOL} </span><br />
                </div>


                  ${currentDistroMoreInfoOutput}
              </div>

                    <div> ${currentDistroSShotOutput}</div>
                </div>


                    <hr /> ${currentDistroYTOutput}

                </div>
            </div>
        </div>
        `;

  distroResults.insertAdjacentHTML('beforeend', currentDistroInfoOutput);
}

// "main" function
function getDistroData(data, $localDistroName) {
  jsonURL = '/linuxHQ/json/distros.json';

  // Get JSON Data
  $.getJSON(jsonURL, function (data) {
    $.each(data, function (key, value) {
      for (let distroFamily = 0; distroFamily < value.length; distroFamily++) {
        //////////////////////////////////////////////////////////////////////////
        // DECLARE variables

        let currentDistroFamily = key;

        // Name/Title
        let currentDistroName = value[distroFamily].distroName;
        let currentDistroTitle = value[distroFamily].distroTitle;

        // graphics
        let currentDistroIcon = value[distroFamily].graphics.iconURL;

        // moreInfo
        let currentDistroFeaturesDesktops =
          value[distroFamily].moreinfo.desktops;
        let currentDistroSimilarDistros = value[distroFamily].moreinfo.similar;
        let currentDistroTargetAudience = value[distroFamily].moreinfo.target;

        let currentDistroBaseSupported = value[distroFamily].supported.currentlySupported;
        let currentDistroBaseEOL = value[distroFamily].supported.eol;

        // I think i meant "rolling, ...etc for this let"
        let currentDistroSoftwareType = value[distroFamily].moreinfo.software;

        // Website
        let currentDistroHomepage = value[distroFamily].website.homepage;
        let currentDistroDownload = value[distroFamily].website.download;
        let currentDistroForum = value[distroFamily].website.forum;

        // Screenshot
        let currentDistroScreenshotTN =
          value[distroFamily].screenshots.thumbnails;
        let currentDistroScreenshot = value[distroFamily].screenshots.src;

        // Youtube Playlists
        let currentDistroYTReviewPLaylist =
          value[distroFamily].youtube.reviewPlaylist;
        let currentDistroYTTipsPLaylist =
          value[distroFamily].youtube.tipsPlaylist;

        ////////////////////////////////////////////////////////////////////////////

        if (localDistroName == currentDistroName) {
          displayDistroOutput(
            currentDistroFamily,
            currentDistroName,
            currentDistroIcon,
            currentDistroTitle,
            currentDistroHomepage,
            currentDistroDownload,
            currentDistroForum,
            currentDistroScreenshot,
            currentDistroScreenshotTN,
            currentDistroYTReviewPLaylist,
            currentDistroYTTipsPLaylist,
            currentDistroFeaturesDesktops,
            currentDistroSimilarDistros,
            currentDistroTargetAudience,
            currentDistroSoftwareType,
            currentDistroBaseSupported,
            currentDistroBaseEOL
          );
        }
      }
    }); // Ends .each loop
  }); // ends getJSON loop
}
