<?php

	$sectionTitle = 'Software Section - ';

	include($path .'/modules/tech/baseTechHead.tpl');

?>

<body onload="softwareData()">
	<?php include($path . '/modules/tech/techHQNavMenus.tpl'); ?>
		<div class="main-section--right-wide">
			<div class="sidebar">
				<?php include($path . '/techHQ/modules/sections/techSoftwareCol1.tpl'); ?>
			</div>
			<div id="softwareSection" class="primary-content">

			</div>

		<!-- include baseTechFooter -->
		<?php include($path . '/modules/tech/baseTechFooter.tpl'); ?>
  </div>

<script type="application/javascript" src="/techHQ/scripts/software-min.js"></script>
