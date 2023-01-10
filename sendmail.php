<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage("ua", "phpmailer/language/");
$mail->isHTML(true);

// Від кого письмо
$mail->setFrom("rubakvlad7@gmail.com", "Рибак Владислав");

// Кому відправити
$mail->addAddress("rubakvlad5@gmail.com");

// Тема письма
$mail->Subject = "Contact Information";

// Тіло письма
$body = "<h1>Somebody send information</h1>";

if (trim(!empty($_POST["name"]))){
	$body .= "<p><strong>Ім'я та Прізвище:</strong>".$_POST["name"]."</p";
}
if (trim(!empty($_POST["email"]))){
	$body .= "<p><strong>E-mail:</strong>".$_POST["email"]."</p";
}
if (trim(!empty($_POST["number"]))){
	$body .= "<p><strong>Номер телефону:</strong>".$_POST["number"]."</p";
}
if (trim(!empty($_POST["message"]))){
	$body .= "<p><strong>Повідомлення:</strong>".$_POST["message"]."</p";
}


// Прикріпити файл
if (!empty($_FILES["image"]["tmp_name"])){
	// Шлях загрузки файла
	$filePath = __DIR__ . "/files/" . $_FILES["image"]["name"];
	// Грузимо файл
	if (copy($_FILES["image"]["tmp_name"], $filePath)){
		$fileAttach = $filePath;
		$body .= "<p><strong>Photo in application</strong>";
		$mail->addAttachment($fileAttach);
	}
}

$mail->Body = $body;

// Відправляємо
if (!$mail->send()){
	$message = "Error";
} else {
	$message = "Data was send";
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);
?>