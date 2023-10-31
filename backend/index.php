<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Параметры для подключения к почтовому серверу
$smtpHost = 'smtp-mail.outlook.com'; // Замените на адрес вашего SMTP-сервера
$smtpUsername = 'testphp1@outlook.com'; // Замените на ваше имя пользователя
$smtpPassword = 'bmwm3e46)'; // Замените на ваш пароль

$mail = new PHPMailer(true);

try {
  $inputTg = $_POST['inputTg'];
  $inputJbr = $_POST['inputJbr'];
  $inputCity = $_POST['inputCity'];
  $inputDistrict = $_POST['inputDistrict'];
  $inputPoint = $_POST['inputPoint'];

  // Настройки SMTP
  $mail->isSMTP();
  $mail->Host = $smtpHost;
  $mail->SMTPAuth = true;
  $mail->Username = $smtpUsername;
  $mail->Password = $smtpPassword;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // Устанавливаем отправителя и получателя
  $mail->setFrom($email, $name);
  $mail->addAddress('recipient@example.com'); // Замените на адрес получателя

  // Содержание письма
  $mail->isHTML(false);
  $mail->Subject = 'Новое сообщение с веб-сайта';
  $mail->Body = $message;

  $mail->send();
  echo 'Сообщение отправлено успешно';
} catch (Exception $e) {
  echo 'Произошла ошибка при отправке сообщения: ' . $mail->ErrorInfo;
}
?>