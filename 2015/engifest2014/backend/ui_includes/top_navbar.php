<?php 
/**
 * This page contain the UI section of topbar elements
 * Can be added when needed will be applied to every page
 * class in the <i> tag gives the icon to the menu item
 * <a> gives the onclick link
 * (c) Cistoner Inc.
 */
?>
<ul class="noty_cont noty_layout_topLeft">
	<li>
		<div class="noty_bar noty_theme_default noty_layout_topLeft noty_success" id="noty_section" style="cursor: pointer; display: none;">
			<div class="noty_message">
				<span class="noty_text">
					
				</span>
			</div>
		</div>
	</li>
</ul>

<div class="navbar">
	<div class="navbar-inner">
		<div class="container-fluid">
			<a class="btn btn-navbar" data-toggle="collapse" data-target=".top-nav.nav-collapse,.sidebar-nav.nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
		</a>
			<a class="brand" href="index.html" style=" width: 390px; "><span>Cistoner backoffice tool</span></a>
			
			<!-- theme selector starts -->
			<div class="btn-group pull-right theme-container" >
				<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
					<i class="icon-tint"></i><span class="hidden-phone"> Change Theme / Skin</span>
					<span class="caret"></span>
				</a>
				<ul class="dropdown-menu" id="themes">
					<li><a data-value="classic" href="#"><i class="icon-blank"></i> Classic</a></li>
					<li><a data-value="cerulean" href="#"><i class="icon-blank"></i> Cerulean</a></li>
					<li><a data-value="cyborg" href="#"><i class="icon-blank"></i> Cyborg</a></li>
					<li><a data-value="redy" href="#"><i class="icon-blank"></i> Redy</a></li>
					<li><a data-value="journal" href="#"><i class="icon-blank"></i> Journal</a></li>
					<li><a data-value="simplex" href="#"><i class="icon-blank"></i> Simplex</a></li>
					<li><a data-value="slate" href="#"><i class="icon-blank"></i> Slate</a></li>
					<li><a data-value="spacelab" href="#"><i class="icon-blank"></i> Spacelab</a></li>
					<li><a data-value="united" href="#"><i class="icon-blank"></i> United</a></li>
			</ul>
		</div>
	<!-- theme selector ends -->	
	<!-- user dropdown starts -->
		<div class="btn-group pull-right">
			<a class="btn" href="secure/logout.php">
				<i class="icon-user"></i>
				<span class="hidden-phone"> logout </span>
			</a>
		</div>
	<!-- user dropdown ends -->
		
				<div class="top-nav nav-collapse">
					<ul class="nav">
						<!--  need to add cistoner product page url here -->
						<li><a href="#">Visit cistoner</a></li>
						<!-- 
						we can add help search box later
						<li>
							<form class="navbar-search pull-left">
								<input placeholder="Search" class="search-query span2" name="query" type="text">
							</form>
						</li>
						-->
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</div>

	</div>