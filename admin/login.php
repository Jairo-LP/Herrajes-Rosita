<?php
require 'config.php';

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (($_POST['user'] ?? '') === ADMIN_USER && password_verify($_POST['pass'] ?? '', ADMIN_HASH)) {
    session_regenerate_id(true);
    $_SESSION['admin'] = true;
    header('Location: panel.php');
    exit;
  }
  $error = 'Usuario o contraseña incorrectos';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Acceso | Herrajes Rosita</title>
</head>
<body>
  <form method="post">
    <input type="text" name="user" placeholder="Usuario" required>
    <input type="password" name="pass" placeholder="Contraseña" required>
    <button>Entrar</button>
    <p><?= htmlspecialchars($error) ?></p>
  </form>
</body>
</html>