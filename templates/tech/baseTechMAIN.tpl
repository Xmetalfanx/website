<?php

	$sectionTitle = 'Main Section - ';

	include($siteRoot . '/modules/tech/baseTechHead.tpl');

?>
<body>

		<?php include($siteRoot . '/modules/tech/techHQNavMenus.tpl'); ?>

		<!-- Why is this mainBody id CSS here?  I think this could be leftover from a "code refactoring" -->
		<div class="mainSection--wide" id="mainBody">
			<div class="sidebar">
				<?php include($siteRoot . '/techHQ/modules/sections/techMainCol1.tpl'); ?>
			</div>
			<div class="primary-content">

			</div>


		</div>
		<!~~ at this point the main row with the menu on the left and the right column is CLOSED -->

	<!-- include baseTechFooter -->
	<?php include($siteRoot . '/modules/tech/baseTechFooter.tpl'); ?>
