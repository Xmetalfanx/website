<?php

	$sectionTitle = 'Main Section - ';

	include($path . "/modules/tech/baseTechHeader.tpl");

?>
<body>
    <div class="flexContainer">

		<?php include($path . '/modules/tech/techHQNavMenus.tpl'); ?>

			<div class="row mainSection w-100 mx-auto">
				<div class="col-xs-12 col-md-3 col-xl-2">
					<?php include($path . '/techHQ/modules/techMainCol1.tpl'); ?>
				</div>

				<div class="col-xs-12 col-md-9 col-xl-10" id="outputSection">
