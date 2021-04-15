<?php
	$nickname = $_POST['nickname'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	// Database connection
	$conn = new mysqli('127.0.0.1','irazumeyko','securepass','sword');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into register(nickname, password, email) values(?, ?, ?)");
		$stmt->bind_param("sss", $nickname, $password, $email);
		$_SESSION['username'] = "Super Player";
		$execval = $stmt->execute();
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
		echo '<script> 
			window.location ="game.php";
		</script>';
		
	}
?>