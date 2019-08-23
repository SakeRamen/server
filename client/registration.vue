<style type="text/css">
	#reg{
	color: white;
	text-shadow: 2px 2px 4px #000000;
	}
</style>

<template>
	<div>
		<form id="reg">
  			<div class="form-group">
  				<center>
    				<label for="exampleInputEmail1">Login:</label>
    			</center>
    			<input type="login" class="form-control" id="login" placeholder="Enter login">
  			</div>
  			<div class="form-group">
  				<center>
    				<label for="exampleInputPassword1">Password:</label>
    			</center>
    			<input type="password" class="form-control" id="password" placeholder="Password">
  			</div>
  			<div class="form-group">
    			<center>
    				<label for="exampleInputPassword1">Repeat password:</label>
    			</center>
    			<input type="password" class="form-control" id="password_repeat" placeholder="Repeat password">
  			</div>
  			<center>
  				<button type="submit" class="btn btn-primary">OK</button>
  			</center>
		</form>
	</div>
</template>