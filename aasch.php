<?php
// Подключение к базе данных
$servername = "localhost";
$username = "host1865243";
$password = "7CFbAhDv7R";
$dbname = "host1865243_aasch";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Получение данных из запроса
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$name = $data['name'];

// Выполнение запроса на вставку данных
$sql = "INSERT INTO groups (id, name) VALUES ('$id', '$name')";
if ($conn->query($sql) === TRUE) {
  $response = ["message" => "Data saved successfully"];
  echo json_encode($response);
} else {
  $response = ["error" => "An error occurred while saving the data"];
  echo json_encode($response);
}

$conn->close();
?>