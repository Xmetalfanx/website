// let for where to put the output
let distroResults = document.getElementById('linuxFrontPrimaryContent');

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
  currentDistroSoftwareType
) {
  let distroSShotPath = '/linuxHQ/screenshots/' + currentDistroFamily + '/';
  let distroSShotTNPath = distroSShotPath + 'thumbnails/';

  // Template Literal for output

  const currentDistroSShotOutput = `

        <a href="${distroSShotPath}${currentDistroScreenshot}" target="_blank">
            <img class="thumbnail-fluid--lg lazyload" data-src="${distroSShotTNPath}${currentDistroScreenshotTN}" alt="${currentDistroTitle} Screenshot" >
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

        <h4 class="font-weight-bold">Youtube Playlists</h4>

          <div class="d-none d-lg-flex py-2">
            <iframe class="YTPlaylists" src="${YTPLEmbeddedBase}${currentDistroYTReviewPLaylist}" target="_blank" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            <iframe class="YTPlaylists" src="${YTPLEmbeddedBase}${currentDistroYTTipsPLaylist}" target="_blank" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
        </div>

        <div class="row d-lg-none d-xs-block">
            <div class="col">
                <a href="${YTPLBase}${currentDistroYTReviewPLaylist}" target="_blank" rel='noreferrer'>Youtube Review/Walkthrough/Comments Playlist </a>
            </div>
            <div class="col">
                <a href="${YTPLBase}${currentDistroYTTipsPLaylist}" target="_blank" rel='noreferrer'>Youtube Tips/Tricks/Tutorial Playlist</a>
            </div>
        </div>
    `;

  const currentDistoHeaderOutput = `
      <div class="card__header">
        <img src="${distroGraphics}${currentDistroIcon}" alt="${currentDistroTitle} icon" class="icon icon--size48">
        <span class="font-weight-bold">${currentDistroTitle}</span>
      </div>
  `;

  const currentDistroInfoOutput = `

      <div class="card mx-auto shadow">
        ${currentDistoHeaderOutput}
        <div class="card__body">

            <div class="row">
              <div class="col d-md-inline">

                <span class="font-weight-bold">Homepage: </span>
                    <a href="${currentDistroHomepage}" target="_blank" rel='noreferrer'>${currentDistroTitle}'s Homepage</a><br/>

                <span class="font-weight-bold">Download: </span>
                    <a href="${currentDistroDownload}" target="_blank" rel='noreferrer'>${currentDistroTitle}'s Download Page</a><br/>

                <span class="font-weight-bold">Forums:</span>
                    <a href="${currentDistroForum}" target="_blank" rel='noreferrer'>${currentDistroTitle}'s Forum</a><br/>

                <span class="font-weight-bold">Distrowatch Page: </span>
                    <a href="${DWPage}${currentDistroName}" blank="_blank" rel='noreferrer'>${currentDistroTitle} Distrowatch Link
                    </a>

                    <div class="py-3">
                    <h3 class="font-weight-bold font-style-italic"> Versions</h3>
                    <span class="font-weight-bold">Latest Version: </span><br />
                    <span class="font-weight-bold">Currently Supported Versions: <br />
                  </div>


                  <hr />
                  ${currentDistroMoreInfoOutput}
              </div>

                    <div class="col d-none d-md-inline"> ${currentDistroSShotOutput}</div>
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
            currentDistroSoftwareType
          );
        }
      }
    }); // Ends .each loop
  }); // ends getJSON loop
}
