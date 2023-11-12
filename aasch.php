<?php
// Подключение к базе данных
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Выполнение запроса
$sql = "SELECT id, name FROM your_table WHERE some_condition";
$result = $conn->query($sql);

// Формирование массива с данными
$data = [];
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}

// Возвращение данных в формате JSON
header("Content-Type: application/json");
echo json_encode($data);

$conn->close();
?>