<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Xmetal&apos;s Homepage</title>
    <?php include 'modules/headerInclude.tpl'; ?>
  </head>
  <body> 
    <div class="flexContainer">
      <!-- Header "navigation"-->
      <?php include 'modules/frontnav.tpl'; ?>
    
      <div class="d-none d-lg-block coverImage">
        <div class="w-50 py-3 mx-auto">
          <?php include 'modules/siteUpdate.php'; ?>
        </div>
      </div>
      
      <div class="row py-5">
        <div class="col-md-6">
          <div class="card shadow mx-auto w-75">
            <div class="card-header">Linux Setup </div>
            
            <div class="card-body text-justify">
              <div class="row px-2">
              <a href="https://github.com/Xmetalfanx/linuxSetup" target="_blank" rel="noopener">
              <i class="fa fa-github fa-2x text-dark pr-3" aria-hidden="true"></i></a>
              <a href="https://gitlab.com/Xmetal/linuxSetup" target="_blank" rel="noopener">
              <i class="fa fa-gitlab fa-2x text-dark" aria-hidden="true"></i></a></div>
              Helps a user setup some things with a menu system on Ubuntu, Fedora, OpenSuse, and (minor things for this distro ... so far) Solus. This includes adding well known third party repos, enabling coming settings not set by default, and adding common software in one shot
            </div>
          </div>
        </div>
        <div class="col-md-6"> 
          <div class="card shadow mx-auto w-75">
            <div class="card-header">Linux Theming</div>
            <div class="card-body text-justify">
              <div class="row px-2">
              <a href="https://github.com/Xmetalfanx/linuxThemes" target="_blank" rel="noopener">
              <i class="fa fa-github fa-2x text-dark pr-3" aria-hidden="true"></i></a>
              <a href="https://gitlab.com/Xmetal/linuxThemes" target="_blank" rel="noopener">
              <i class="fa fa-gitlab fa-2x text-dark" aria-hidden="true"></i></a>
              </div>
              This originally was going to be a part of the LinuxSetup scripts, though it grew too much and I decided to branch it out.
              This installs themes and icon packs of well liked Linux Themes into your system.  I have alot of plans for this for version and distro detection.
            </div>
          </div>
        </div>
      </div>

      <?php include 'modules/footer.tpl'; ?>
    </div>
  </body>
</html>