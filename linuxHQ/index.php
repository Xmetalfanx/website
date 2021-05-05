<?php

    $sectionTitle='';
    $pageTitle="LinuxHQ Frontpage";

    $path = getenv('DOCUMENT_ROOT');
    $pathSanitized = filter_var($path, FILTER_SANITIZE_STRING);
    include($pathSanitized . '/templates/linux/open/baseLinuxTemplateL.tpl');
?>

  <div class="primary-content">

    <div class="card w-80">
      <div class="card__header themeColorAccent"> Introduction </div>
      <div class="card__body"> Hello, I'd like to give a little background about my  experience with Linux, before you start browsing my site, to get a sense for where I am coming from. For a number of years now , I have been using Linux to some degree, and  have been using it more and more, while using  Windows less and less.

        <img class="d-none d-md-block thumbnail-fluid--sm" src="/linuxHQ/screenshots/ubuntu/kubuntu.png" alt="Kubuntu 18.04 slide">

      </div>
    </div>


    <div class="card w-80">
      <div class="card__header themeColorAccent">
        My Goal
      </div>
      <div class="card__body">

        <img class="float-left pt-1 d-none d-md-block thumbnail-fluid--sm" src="/linuxHQ/screenshots/ubuntu/cinnamonMint.png" alt="Linux Mint slide" loading="lazy">

        Showing Tutorials, My reviews (as well as others), and sites that have helped me over&#x9;the years, is TRUE goal I have with this section. The Linux related ideas I came up with to add to the main site started to get way out of hand to put in a "small section" so that's when I decided to do the split into TechHQ (former Windows Section ... and still has some cross-platform stuff) and LinuxHQ.

        This section has info on:<br />

        <ul>
          <li>Linux Desktop options including screenshots, system requirments, and info on what version is in what Linux Distrobution</li>
          <li>Linux Distrobution information including currently supported release and desktop options and screenshots  </li>
          <li>Theming: Information on Linux Themes, Icon and Cursor packs to custom the look of your Linux desktop </li>
        </ul>

        <img class="d-none d-md-block thumbnail-fluid--sm" src="/linuxHQ/screenshots/solus/thumbnails/solusbudgie_tn.png" alt="Solus Budgie slide" loading="lazy">

      </div>
    </div>


    <!-- OMGUbuntu RSS feed/news -->
    <?php include $path . "/linuxHQ/modules/omgubuntu.tpl"; ?>
</div>

  <div class="sidebar d-none d-md-block">
    <!-- Distrowatch RSS Feed -->
    <?php include $path . "/linuxHQ/modules/distrowatch.tpl"; ?>
  </div>



</div> <!-- Ends the mainSection div....flexContainer's div is closed IN the footer file below  -->

<?php include $path . "/modules/footer.tpl"; ?>
