<?php
session_start();

const ADMIN_USER = 'rosita';
// Hash bcrypt de la contraseña 'abc123' (cámbiala antes de entregar el proyecto)
const ADMIN_HASH = '$2y$10$YBGFuBARKYut.EF67qfdpucVHAfR8PQIpy1aytidsWfRV0MH0W2Ie';
const JSON_PATH  = __DIR__ . '/../data/products.json';

function require_admin() {
  if (empty($_SESSION['admin'])) {
    header('Location: login.php');
    exit;
  }
}

function load_products() {
  return json_decode(file_get_contents(JSON_PATH), true) ?: [];
}

function save_products($products) {
  file_put_contents(
    JSON_PATH,
    json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE),
    LOCK_EX
  );
}