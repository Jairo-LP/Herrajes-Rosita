<?php
require 'config.php';
require_admin();

if (empty($_SESSION['csrf'])) {
  $_SESSION['csrf'] = bin2hex(random_bytes(16));
}

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (!hash_equals($_SESSION['csrf'], $_POST['csrf'] ?? '')) {
    die('Token inválido');
  }

  $products = load_products();
  $id = (int)($_POST['id'] ?? 0);

  foreach ($products as &$p) {
    if ($p['id'] !== $id) continue;

    $p['price'] = round((float)$_POST['price'], 2);

    if (($_POST['oldPrice'] ?? '') !== '') {
      $p['oldPrice'] = round((float)$_POST['oldPrice'], 2);
    } else {
      unset($p['oldPrice']);
    }

    if (!empty($_FILES['img']['tmp_name'])) {
      $permitidos = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
      $mime = (new finfo(FILEINFO_MIME_TYPE))->file($_FILES['img']['tmp_name']);

      if (isset($permitidos[$mime]) && $_FILES['img']['size'] < 2 * 1024 * 1024) {
        $nombre = uniqid('p') . '.' . $permitidos[$mime];
        if (move_uploaded_file($_FILES['img']['tmp_name'], __DIR__ . '/../imgcat/' . $nombre)) {
          $p['img'] = 'imgcat/' . $nombre;
        }
      } else {
        $mensaje = 'Imagen no válida (solo JPG, PNG o WEBP de menos de 2 MB).';
      }
    }
    break;
  }
  unset($p);

  save_products($products);
  if ($mensaje === '') $mensaje = 'Cambios guardados.';
}

$products = load_products();
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel | Herrajes Rosita</title>
  <style>
    body { font-family: sans-serif; max-width: 900px; margin: 20px auto; padding: 0 12px; }
    form { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #ddd; }
    form strong { flex: 1; }
    input[type=number] { width: 90px; }
  </style>
</head>
<body>
  <p><a href="logout.php">Cerrar sesión</a> · <a href="../index.html">Ver tienda</a></p>
  <?php if ($mensaje): ?><p><strong><?= htmlspecialchars($mensaje) ?></strong></p><?php endif; ?>

  <?php foreach ($products as $p): ?>
    <form method="post" enctype="multipart/form-data">
      <input type="hidden" name="csrf" value="<?= $_SESSION['csrf'] ?>">
      <input type="hidden" name="id" value="<?= (int)$p['id'] ?>">
      <img src="../<?= htmlspecialchars($p['img']) ?>" width="60" alt="">
      <strong><?= htmlspecialchars($p['name']) ?></strong>
      Precio: <input name="price" type="number" step="0.01" value="<?= $p['price'] ?>" required>
      Antes: <input name="oldPrice" type="number" step="0.01" value="<?= $p['oldPrice'] ?? '' ?>">
      <input type="file" name="img" accept="image/*">
      <button>Guardar</button>
    </form>
  <?php endforeach; ?>
</body>
</html>