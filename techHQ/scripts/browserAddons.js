let browserResults = document.getElementById('browserSection');
let browserIconDir = '/techHQ/progIcons/internet/browsers/';
let addonIconDir = '/techHQ/browsers/addons/graphics/';

// for Icons
let firefoxIcon = 'firefox.svg';
let chromeIcon = 'chrome.svg';



////////////////////////////////////////////////////////////////////
// "main" function

function browserAddonData(data) {
  $(document).ready(function () {
    // "Things DO GET HERE, successfully"
    // console.log("Inside softwareData function in JS");

    browserAddonsJSONUrl = '/techHQ/json/browserAddons.json';

    // Get JSON Data
    $.getJSON(browserAddonsJSONUrl, function (data) {
      allAddonCategories = Object.keys(data);
      // The actual category titles
      //console.log("dataKey: " + JSON.stringify(dataKey));

      allAddonValues = Object.values(data);

      // All the addons IN a category
      //console.log("dataValue: " + JSON.stringify(dataValue));

      let addonCategoryTitle = allAddonCategories.map((item) => {
        return item.keys;
      });

      // As long as there are addons (all categories)
      for (content in allAddonValues) {
        eachAddonCategory = allAddonValues[content];

        // As long as there are addons in each individual category
        for (addons in eachAddonCategory) {
            eachAddon = eachAddonCategory[addons];

            let addonTitle = eachAddon.addonTitle;
            let addonName = eachAddon.addonName;
            let addonIcon = eachAddon.iconURL;

            let moreInfo = eachAddon.moreInfo;

            // AddonURLs
            // note to self: maybe make the URLs for like Github/GitLab pages
            let addonURLs = eachAddon.addonURL;

            // More Info
            let addonDev = moreInfo.developer;
            let addonPlatform = moreInfo.addonPlatform;
            let addonDesc = moreInfo.description;

            let chromeURL = addonURLs.chromeURL;
            let firefoxURL = addonURLs.firefoxURL;

            const firefoxAddon = `<a href="${firefoxURL}" target="_blank">
                            <img src=\"${browserIconDir}${firefoxIcon}\" alt=\"${addonTitle} Firefox icon\" class=\" icon icon--size40\" />
                            </a>`;

            //idea: have something like the vivaldi icon here too
            const chromeAddon = `<a href="${chromeURL}" target="_blank">
                            <img src=\"${browserIconDir}${chromeIcon}\" alt=\"${addonTitle} Chrome icon\" class=\" icon icon--size40\" />
                            </a>`;

            function checkPlatform(addonPlatform) {

                // guard clause
                if (addonPlatform == null) return
            
                totalBrowserIcon = "";

                // Idea thanks to Web Dev Simplified's video: https://www.youtube.com/watch?v=EumXak7TyQ0&t=323s
                if (addonPlatform == 'crossBrowser') return totalBrowserIcon = firefoxAddon + chromeAddon
                if (addonPlatform == 'firefox') return totalBrowserIcon = firefoxAddon

            }


          // Checks addon Platform
          checkPlatform(addonPlatform);


            const platform = `
                    <div class="platform">
                    ${totalBrowserIcon}
                    </div>
                    `;

             const addonIconTitle = `
                <div class="addon-title">
                    <img src=\"${addonIconDir}${addonIcon}\" alt=\"${addonTitle} icon \" class="icon--size40" />${addonTitle}
                </div>
                `;


            const browserOutput = `
                        <h4>${eachAddonCategory}</h4>
                                <div class="card">
                                    <div class="card__header">
                                    ${addonIconTitle}
                                    ${platform}

                                    </div>
                                    <div class="card__body">
                                    <div>${addonDesc}</div>
                                    </div>
                                </div>
                            `;

          // Main output
          browserResults.insertAdjacentHTML('beforeend', browserOutput);
        }
      }
    }); // ends getJSON loop
  });
}
