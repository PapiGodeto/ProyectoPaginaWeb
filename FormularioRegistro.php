<?php
$servername = "127.0.0.1";
$database = "paginaweb";
$username = "root";
$password = "1234";

// Crea la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verifica la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtiene los datos del formulario
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$edad = $_POST['edad'];
$sexo = $_POST['sexo'];
$ciudad = $_POST['ciudad'];
$celular = $_POST['celular'];
$transporte = $_POST['transporte'];
$camisa = $_POST['camisa'];
$talla = isset($_POST['talla']) ? $_POST['talla'] : null;
$comentarios = $_POST['comentarios'];

// Prepara la consulta SQL para insertar datos en la tabla
$sql = "INSERT INTO formulario_registro (nombre, apellido, edad, sexo, ciudad, celular, transporte, camisa, talla, comentarios) 
        VALUES ('$nombre', '$apellido', $edad, '$sexo', '$ciudad', '$celular', '$transporte', '$camisa', '$talla', '$comentarios')";

// Ejecuta la consulta
if ($conn->query($sql) === TRUE) {
    // Redirige a la pantalla de inicio
    header("Location: inicio.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cierra la conexión
$conn->close();
?>
