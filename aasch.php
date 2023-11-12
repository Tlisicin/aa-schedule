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

// Выполнение запроса
$sql = "SELECT id, name FROM groups WHERE some_condition";
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