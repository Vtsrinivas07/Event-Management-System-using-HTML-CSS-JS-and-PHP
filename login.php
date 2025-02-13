<?php
$servername = "localhost"; 
$username = "root"; 
$password = "";
$database = "echo-events"; 

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";

$result = mysqli_query($conn,$sql);

if ($result->num_rows == 1) {
    header("Location: index2.html");
    exit();
} else {
   
    header("Location: login.html");
    exit();
}

$conn->close();
?>
