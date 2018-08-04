<?php
function CheckCurlResponse($code)
{
	$code=(int)$code;
	$errors=array(
		301=>'Moved permanently',
		400=>'Bad request',
		401=>'Unauthorized',
		403=>'Forbidden',
		404=>'Not found',
		500=>'Internal server error',
		502=>'Bad gateway',
		503=>'Service unavailable'
	);
	try
	{
		#Если код ответа не равен 200 или 204 - возвращаем сообщение об ошибке
		if($code!=200 && $code!=204)
			throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error',$code);
	}
	catch(Exception $E)
	{
		die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
	}
}

$data=array(
	'name'=>isset($_POST['name']) ? $_POST['name'] : 'ss',
	'company'=>isset($_POST['company']) ? $_POST['company'] : '',
	'position'=>isset($_POST['position']) ? $_POST['position'] : '',
	'phone'=>isset($_POST['phone']) ? $_POST['phone'] : '',
	'email'=>isset($_POST['email']) ? $_POST['email'] : 'sd',
	'web'=>isset($_POST['web']) ? $_POST['web'] : '',
	'jabber'=>isset($_POST['jabber']) ? $_POST['jabber'] : '',
	'scope'=>isset($_POST['scope']) && is_array($_POST['scope']) ? $_POST['scope'] : array()
);

$scope_info=array(
	'it'=>'IT, телекоммуникации, связь, электроника',
	'auto'=>'Автосервис, автобизнес',
	'bookkeeping'=>'Бухгалтерия, аудит',
	'restaurants'=>'Рестораны, фастфуд',
	'economy'=>'Экономика, финансы'
);
?>