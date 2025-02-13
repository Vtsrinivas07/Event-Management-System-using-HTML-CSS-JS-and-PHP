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

$sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

if (mysqli_query($conn, $sql)) {
    header("Location: index2.html");
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close($conn);
?>