<?php

  $the_title = 'Xmetalfanxs Homepage';
  $sitePath = "/home/xmetalx1/public_html";
  include $sitePath . "/templates/tech/baseTechMAINTemp.tpl";

?>

<div class="card hidden-sm-down">
  <div class="card-block">
    <h2 class="card-title">Educational Sites</h2>
    <div class="card-text">
      <div class="graphics">
        <div class="row">
          <div class="col-lg-3">
            <a href="https://www.khanacademy.org/" target="_blank">
              <img src="/techHQ/graphics/khan-logo.png" alt="Khan Academy Graphic"/></a></div>
          <div class="col-lg-3">
            <a href="https://linuxacademy.com/" target="_blank">
              <img src="/techHQ/graphics/linuxAcad.png" alt="Linux Academy Graphic"/></a></div>
          <div class="col-lg-3">
            <a href="https://www.digitalocean.com/community/" target="_blank">
              <img src="/graphics/digitalOcean.jpg" alt="Digital Ocean Graphic"/></a></div>
        </div>


        <div class="row">
          <a href="http://www.kristakingmath.com/" target="_blank">
            <img src="/techHQ/graphics/kking.png" alt="Krista King Math Site graphics"/></a>
            <br/>
            <a href="https://www.youtube.com/channel/UCUDlvPp1MlnegYXOXzj7DEQ">(or Her Channel on Youtube)</a>
        </div>
      </div>
      <div class="hidden-sm-up">
        <p>Content not intended to be seen on a screen this small</p>
      </div>
    </div>
  </div>
</div>

<?php include $sitePath . "/techHQ/modules/GAOTD.tpl"; ?>


  </div> <!-- closes card-text opened in template  -->
</div> <!-- Closes card-block from templete -->

</div> <!-- Closes card -->


</div> <!-- ends Row -->

<?php include $sitePath . "/modules/tech/startpage.tpl"; ?>

<?php  include $sitePath . "/modules/footer.tpl"; ?>
