
<body style='/*background-image:url("img/back1.jpg");*/font-family:Orbitron'>

<!-- Header -->
<div id="header">
  <div class="shell">
    <!-- Logo + Top Nav -->
    <div id="top">
      <!--a href="https://effervescence.iiita.ac.in/"><img src="img/logo.png" style="max-width: 450px;max-height: 62px;width: 25%;"/></a-->
	  <!--div id="top-navigation">
		<a onmouseover="rules();" onmouseout="ruleOut();" href="#">Registration Details</a>
		<a onclick="return createTimedLink(this, myFunction, 500);" href="?page=login">login</a>
		<a onclick="return createTimedLink(this, myFunction, 500);" href="?page=register">Register</a>
	  </div-->
      
	
	<?php 
	if(isLogin()) {
		require_once('includes/nav.php');
	} else {
		require_once('includes/side.php');
	}
	?>
	
	<!-- End Logo + Top Nav -->
  </div>
  
  </div>
  <div class="head">
	<h1> Registration Portal</h1>
  </div>
  
</div>
<script>
if($('#navigation ul').html() != undefined){
	$('.head').css('display','none');
	}
</script>

