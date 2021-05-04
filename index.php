<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Xmetal&apos;s Homepage</title>

    <?php

    $headerInc = "modules/headerInclude.tpl";
    $headerInc = filter_var($headerInc, FILTER_SANITIZE_STRING);

    require $headerInc;

    ?>
  </head>
  <body>
    <header>
      <div class="frontpage-title h2">Xmetal's Homepage</div>
    </header>


    <div class="main-section">
      <div class="frontpage-section">
        <?php include 'modules/siteSection.php'; ?>
        <?php include 'modules/git.php'; ?>
      </div>
    </div>

    <?php include 'modules/footer.tpl'; ?>
  </body>
</html>
