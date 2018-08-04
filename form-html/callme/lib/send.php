<?php 
// украинцы — мирный и спокойный народ :)
// dedushka.org // nazartokar.com // qbx.me // nazartokar@gmail.com
// callme 2.3

//require("smtp.php");
header ("Content-Type: text/html; charset=utf-8"); //кодировка
$to = "happyrun63@gmail.com"; //получатель уведомлений

// не трогать

$HTTP_HOST = parse_url ("http://".$_SERVER["HTTP_HOST"]); 
$HTTP_HOST = str_replace (array ("http://","www."), "", $HTTP_HOST["host"]);
$from = "noreply@".$HTTP_HOST; // отправитель. Если настраиваете smtp, не забудьте указать в $from вашу почту

// данные для отправки смс

$sms['id']  = '';
$sms['key'] = '';
$sms['log'] = '';
$sms['pss'] = '';
$sms['frm'] = 'callme'; // добавьте новую подпись в смс-шлюзе и дождитесь подтверждения
$sms['num'] = '';  			// ваш номер в международном формате без "+"
$sms['prv'] = 'sms.ru'; // на выбор: sms.ru, infosmska.ru, bytehand.com, sms-sending.ru, smsaero.ru

function uc ($s) {
	return urlencode($s);
}

function gf ($s) { 
	$s = substr( (htmlspecialchars($_POST[$s])), 0, 500);
	if (strlen($s) > 1) return $s;
}

function sendSMS ($to, $msg) {
	global $sms;
	$u['sms.ru'] = "sms.ru/sms/send?api_id=".uc($sms["key"])."&to=".uc($sms["num"])."&text=".uc($msg);
	$u['bytehand.com'] = "bytehand.com:3800/send?id=".uc($sms["id"])."&key=".uc($sms["key"])."&to=".uc($sms["num"])."&partner=callme&from=".uc($sms["frm"])."&text=".uc($msg);
	$u['sms-sending.ru'] = "lcab.sms-sending.ru/lcabApi/sendSms.php?login=".uc($sms["log"])."&password=".uc($sms["pss"])."&txt=".uc($msg)."&to=".uc($sms["num"]);
	$u['infosmska.ru'] = "api.infosmska.ru/interfaces/SendMessages.ashx?login=".uc($sms['log'])."&pwd=".uc($sms["pss"])."&sender=SMS&phones=".uc($sms["num"])."&message=".uc($msg);
	$u['rocketsms.by'] = "api.rocketsms.by/simple/send?username=".uc($sms['log'])."&password=".md5(uc($sms["pss"]))."&phone=".uc($sms["num"])."&text=".uc($msg);
	$u['smsaero.ru'] = "gate.smsaero.ru/send/?user=".uc($sms["log"])."&password=".md5 (uc($sms["pss"]))."&to=".uc($sms["num"])."&text=".uc($msg)."&from=".uc($sms["frm"]);
	@$r = file_get_contents("http://".$u[$sms["prv"]]);	
}

function translit ($str) { // translit by programmerz.ru
	$tr = array("А"=>"A","Б"=>"B","В"=>"V","Г"=>"G","Д"=>"D","Е"=>"E","Ж"=>"J","З"=>"Z","И"=>"I","Й"=>"Y","К"=>"K","Л"=>"L","М"=>"M","Н"=>"N","О"=>"O","П"=>"P","Р"=>"R","С"=>"S","Т"=>"T","У"=>"U","Ф"=>"F","Х"=>"H","Ц"=>"TS","Ч"=>"4","Ш"=>"SH","Щ"=>"SCH","Ъ"=>"","Ы"=>"YI","Ь"=>"","Э"=>"E","Ю"=>"YU","Я"=>"YA","а"=>"a","б"=>"b","в"=>"v","г"=>"g","д"=>"d","е"=>"e","ж"=>"j","з"=>"z","и"=>"i","й"=>"y","к"=>"k","л"=>"l","м"=>"m","н"=>"n","о"=>"o","п"=>"p","р"=>"r","с"=>"s","т"=>"t","у"=>"u","ф"=>"f","х"=>"h","ц"=>"ts","ч"=>"4","ш"=>"sh","щ"=>"sch","ъ"=>"y","ы"=>"yi","ь"=>"","э"=>"e","ю"=>"yu","я"=>"ya");
	return strtr($str, $tr);
}

function addToMess ($c, $o) {
	global $mess;
	if (strlen ($o) > 2) {
		$mess = $mess.'<div style="margin:3px 0;background: #ffe1e0;border: 1px solid #cecece;padding:10px"><b>'.$c.':</b><br>'.$o.'</div>';
	}
}

function jsAnswer ($result, $cls, $time, $message) {
	echo '{"result": "'.$result.'","cls": "'.$cls.'","time": "'.$time.'","message": "'.$message.'"}';
	exit ();
}

function getOptions ($o) { // get callme options
	$cs = $_POST["cs"];
	$os = $_POST["os"];
	$i = 0;	
	$opts = " ";

	if ($o == 1) {
		$opts = '<div style="background: #fffce8;border:1px solid #cecece;padding:10px 10px 0">';

		foreach ($os as $value) {
			if((strlen($value) != 0) && ($value != "0")) {
				$opts .= "<b>".$cs[$i]."</b><br>".$value."<br><br>";
			}
			$i++;
		}
		$opts .= '</div>';
	} else {
		foreach ($os as $value) {
			if ((strlen($value) != 0) && ($value != "0")) {
				$opts .= $cs[$i]."(".$value.") ";
			}
			$i++;
		}		
	}
	return $opts;
}

$time = time (); // время отправки
$interval = $time - (gF("ctime"));
if ($interval < 1) { // интервал отправки (сек)
	jsAnswer ("error", "c_error", "", "Сообщение уже было отправлено.");
} else {
	//$get_data = gF('os');
	$get_data = $_POST["cs"];

	if (count($get_data) > 1) { // data to send
		$os = $_POST["os"];
		$cs = $_POST["cs"];
		$ip = $_SERVER["REMOTE_ADDR"];

		$title 	= "Lending: обратный звонок";
		$title 	= "=?UTF-8?B?".base64_encode($title)."?=";
		$mess 	= "";

		$mess .= getOptions(1);
		$mess = $mess."<div style=\"background:#bfd4ac;border:1px solid #999;padding:10px;margin: 10px 0;\">IP: ".$ip." / <a href='http://dedushka.org/whois/#".$ip."'>Определить город</a></div>";

		$mess = $mess."<a href='http://dedushka.org/tag/callme/'>Следите</a> за обновлениями.<br>Спасибо за использование Callme.";
		
		$headers	 = "Content-type: text/html; charset=utf-8\r\n"; 
		$headers	.= "From: Lending <".$from.">\r\n"; 

		$sms['msg'] = translit((getOptions(0)));
		$sms['msg'] = substr($sms['msg'], 0, 160);

		if ($to != 'yr@domain.net') { 
			mail($to, $title, $mess, $headers); 
		}

		if ( ($sms['id'] != '') || ($sms['key'] != '') || ($sms['log'] != '') ) {
			@sendSMS($num, $sms['msg']); 
		}
		jsAnswer('success', 'c_success', '', 'Спасибо, сообщение отправлено');
	} else {
		jsAnswer('error', 'c_error', '', 'Ошибка');
	}
}
?>
