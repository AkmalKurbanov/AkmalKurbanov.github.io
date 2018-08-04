<!DOCTYPE html>
<html><head>
	<script src="stuff/highlight.js"></script>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script src="stuff/etc.js"></script>
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=latin,cyrillic" rel="stylesheet" type="text/css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link rel="stylesheet" href="stuff/bs.css">
	<link rel="stylesheet" href="stuff/style.css">
	<link rel="stylesheet" href="stuff/highlight.css">
	<link href="stuff/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
	<title>Buyme 1.4 &#151; бесплатный скрипт покупки за один клик</title>
</head>
<body>

<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-23131825-1', 'auto');
ga('send', 'pageview');
</script>

<script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter20963398 = new Ya.Metrika({id:20963398, webvisor:true, clickmap:true, accurateTrackBounce:true, trackHash:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/20963398" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<script type="text/javascript">new Image().src = "//counter.yadro.ru/hit?r" + escape(top.document.referrer) + ((typeof(screen)=="undefined")?"" : ";s"+screen.width+"*"+screen.height+"*" + (screen.colorDepth?screen.colorDepth:screen.pixelDepth)) + ";u"+escape(document.URL) + ";h"+escape(document.title.substring(0,80)) + ";" +Math.random();</script>

<div class="navbar-inverse">
	<div class="container">
		<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
			<ul class="nav navbar-nav">
				<li><a href="#settings">Настройка скрипта</a></li>
				<li><a href="#license">Убрать копирайт</a></li>
				<li><a href="/scripts">Заказать установку</a></li>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li><a target="_blank" href="http://qbx.me">Форум</a></li>
				<li><a target="_blank" href="http://dedushka.org">Блог</a></li>
			</ul>
		</nav>
	</div>
</div>

<header class="jumbotron subhead">
	<div class="container text-center">
		<h1><a href="http://dedushka.org/tag/buyme">Buyme</a> <small>1.4</small></h1>
		<p class="lead">Скрипт оформления заказа за один клик</p>
	</div>
</header>

<div class="colored"></div>

<div class="container">
	<div class="dsa text-center">
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- 728 ded -->
		<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-7280770907817284" data-ad-slot="6021294753"></ins>
		<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-sm-3">
			<h3>Простой</h3>
			<p class="grey">Скрипт предельно прост в установке и работе. <a href="http://dedushka.org/kod/5625.html">Установка</a> займет менее 10 минут. </p>
		</div>
		<div class="col-sm-3">
			<h3>Универсальный</h3>
			<p class="grey">Работает на любой платформе: Joomla, Prestashop, Bitrix, Wordpress, Opencart, Webasyst, ModX и любых других, где есть доступ к FTP.</p>
		</div>
		<div class="col-sm-3">
			<h3>Удобный</h3>
			<p class="grey">Уведомления приходят на e-mail и в <a href="http://dedushka.org/kod/3903.html">СМС</a>. В комплекте шаблоны настроек для 5 самых популярных смс-провайдеров и <a href="http://qbx.me/viewtopic.php?f=16&t=108">SMTP</a>-настройка.</p>
		</div>
		<div class="col-sm-3">
			<h3>Популярный</h3>
			<p class="grey">Запущен в 2013-м и работает на нескольких тысячах сайтах.</p>
		</div>
	</div>
</div>

<hr>

<div class="container">
	<h2>Пример</h2> 
	<p>Для примера я добавил несколько товаров. Вы можете получать в уведомлениях о покупке не только название, но и цену, выпадающие поля, чекбоксы и статическую информацию о товаре. </p>

	<div class="row goods">

		<div class="b1c-good col-xs-3 text-center">
			<div class="inside">	
				<div class="h5 b1c-name">Apple iPhone 5S</div>
				<div class="img"><img src="stuff/img/gd-01.jpg" alt=""></div>
				<div class="row">
					<div class="col-xs-4 text-right"><label>Цвет</label></div>
					<div class="col-xs-8">
						<input class="form-control input-sm" type="Text" data-bme="Цвет" placeholder="Укажите">
					</div> 
				</div>
				<div class="row">
					<div class="col-xs-4 text-right"><label>Память</label></div>
					<div class="col-xs-8">
						<select class="form-control input-sm" data-bme="Память">
							<option>8 Гб</option>
							<option>16 Гб</option>
							<option>32 Гб</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-5 text-right b1c-price">от 479&thinsp;&euro;</div>
					<div class="col-xs-7 text-left"><button class="b1c">Купить</button></div>
				</div>
			</div>
		</div>

		<div class="b1c-good col-xs-3 text-center">
			<div class="inside">	
				<div class="h5 b1c-name">Samsung Galaxy S5</div>
				<div class="img"><img src="stuff/img/gd-02.jpg" alt=""></div>
				<div class="row">
					<div class="col-xs-5 text-right"><label>Платформа</label></div>
					<div class="col-xs-7">
						<div class="caption" data-bme="Платформа">Android 4.4</div>
					</div> 
				</div>
				<div class="row">
					<div class="col-xs-4 text-right"><label>Память</label></div>
					<div class="col-xs-8">
						<select class="form-control input-sm" data-bme="Память">
							<option>8 Гб</option>
							<option>16 Гб</option>
							<option>32 Гб</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-5 text-right b1c-price">от 472&thinsp;&euro;</div>
					<div class="col-xs-7 text-left"><button class="b1c">Купить</button></div>
				</div>
			</div>
		</div>

		<div class="b1c-good col-xs-3 text-center">
			<div class="inside">	
				<div class="h5 b1c-name">Sony Xperia Z2</div>
				<div class="img"><img src="stuff/img/gd-03.jpg" alt=""></div>
				<div>
					<label>
						<input type="checkbox" data-bme="Подарочная упаковка">&nbsp;Подарочная&nbsp;упаковка
					</label>
				</div>
				<div class="row">
					<div class="col-xs-4 text-right"><label>Память</label></div>
					<div class="col-xs-8">
						<select class="form-control input-sm" data-bme="Память">
							<option>8 Гб</option>
							<option>16 Гб</option>
							<option>32 Гб</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-5 text-right b1c-price">от 314&thinsp;&euro;</div>
					<div class="col-xs-7 text-left"><button class="b1c">Купить</button></div>
				</div>
			</div>
		</div>

		<div class="b1c-good col-xs-3 text-center">
			<div class="inside">	
				<div class="h5 b1c-name">Samsung Galaxy S4</div>
				<div class="img"><img src="stuff/img/gd-04.jpg" alt=""></div>
				<div class="row">
					<div class="col-xs-4 text-right"><label>Цвет</label></div>
					<div class="col-xs-8">
						<select class="form-control input-sm" data-bme="Цвет">
							<option>Черный</option>
							<option>Красный</option>
							<option>Белый</option>
						</select>
					</div> 
				</div>
				<div class="row">
					<div class="col-xs-4 text-right"><label>Память</label></div>
					<div class="col-xs-8">
						<select class="form-control input-sm" data-bme="Память">
							<option>8 Гб</option>
							<option>16 Гб</option>
							<option>32 Гб</option>
						</select>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-5 text-right b1c-price">от 314&thinsp;&euro;</div>
					<div class="col-xs-7 text-left"><button class="b1c">Купить</button></div>
				</div>
			</div>
		</div>

	</div>

	<p>Смотрите пример и читайте инструкцию, чтобы настроить скрипт правильно.</p>

	<h2 class="page-header" id="settings">Настройка</h2>

	<ul class="nav nav-tabs tab-settings">
		<li class="active"><a href="#home">Настройка</a></li>
		<li><a href="#fields">Настройка формы</a></li>
		<li><a href="#texts">Тексты</a></li>
		<li><a href="#required">Обязательные поля</a></li>
		<li><a href="#placeholder">Placholder</a></li>
		<li><a href="#example">Пример</a></li>
	</ul>

	<div class="tab-content">
		<div class="tab-pane fade in active" id="home">
			<p>Сначала нужно настроить товар. Для этого любому блоку, который включает в себя название товара и кнопку &laquo;купить&raquo;, присвойте <code>class="b1c-good"</code>. Название товара должно иметь <code>class="b1c-name"</code>. Если у вас есть дополнительные поля (выпадающие списки, текстовые поля и блоки, радиокнопки, чекбоксы, цена товара и т.д.), то каждому полю, которое вы хотите получать в уведомлении, добавьте атрибут <code>data-bme="имя поля"</code>. </p>
			<p>Это минимально необходимая настройка, теперь можно переходить к настройке самого скрипта.</p> 
			<p>Все настройки указываются в файле <code>buyme/js/config.js</code>. Чтобы изменить поля, которые появляются в форме, укажите их названия в переменной <code>fields</code> через запятую.
			<p>Все параметры указываются как свойства объекта <code>bmeData</code> в формате <code>"имя свойства": "значение"</code> и разделенные запятыми. Если это звучит сложно, не расстраивайтесь, ниже есть пример, в котором все понятно. </p>

			<h3>Настройка товара</h3>

			<p>Свежая инструкция по настройке скрипта и кода товара есть <a href="http://dedushka.org/kod/5625.html">в блоге</a>, она постоянно обновляется.</p>
		</div>

		<div class="tab-pane fade" id="required">
			<p>Вы можете указать, какие из полей требуют заполнения, для этого добавьте после значения поля в переменной <code>fields</code> звездочку. </p>
			<p>Например: <code>Имя*</code></p>
		</div>

		<div class="tab-pane fade" id="placeholder">
			<p>Название поля может отличаться от параметра <code>placeholder</code>. Чтобы указать, какой текст будет использоваться в качестве placeholder, укажите его в скобках после названия поля. Этот параметр будет действовать и для текстовых полей, и для текстовых блоков (textarea).</p>
			<p>Например: <code>Имя (Укажите имя)</code>, <code>-Адрес доставки (Укажите город и адрес)</code></p>
		</div>

		<div class="tab-pane fade" id="texts">
			<div class="panel panel-default">
				<table class="table table-striped table-bordered">
					<tbody>
						<tr>
							<th>Параметр</th>
							<th>Назначение</th>
							<th>Варианты</th>
						</tr>
						<tr>
							<td><code>caption.description</code></td>
							<td>Описание процесса заказа вверху формы</td>
							<td>Чтобы оформить заказ, заполните форму. В течение пары часов с вами свяжется менеджер и уточнит детали заказа, а также время доставки.</td>
						</tr>
						<tr>
							<td><code>caption.title</code></td>
							<td>Заголовок формы</td>
							<td>Купить [название товара]</td>
						</tr>
						<tr>
							<td><code>caption.button</code></td>
							<td>Надпись на кнопке &laquo;Купить&raquo;</td>
							<td>Оформить заказ</td>
						</tr>
						<tr>
							<td><code>caption.sending</code></td>
							<td>Сообщение внизу формы во время отправки</td>
							<td>Отправка</td>
						</tr>
						<tr>
							<td><code>caption.error</code></td>
							<td>Сообщение внизу формы в случае ошибки</td>
							<td>Заполните все поля</td>
						</tr>
						<tr>
							<td><code>txt.yes</code>, <code>txt.no</code></td>
							<td>Да, Нет</td>
							<td>...</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="tab-pane fade" id="fields">

			<div class="panel panel-default">
				<table class="table table-striped table-bordered">
					<tbody><tr>
						<th>Параметр</th>
						<th>Назначение</th>
						<th>Варианты</th>
					</tr>
					<tr>
						<td><code>fields</code></td>
						<td colspan="2">Список полей для всплывающей формы. Указываются через запятую.
							<ul>
								<li><b>текстовое поле</b> — не требует дополнительного кода ( <code>ваше имя</code> )</li>
								<li><b>текстовый блок</b> — ставьте перед названием минус ( <code>-Комментарий</code> )</li>
								<li><b>выпадающий список</b> — ставьте перед названием <code>!</code> и разделяйте варианты для выбора таким же символом ( <code>!Ваш вопрос!Узнать наличие!Сделать заказ</code> )</li>
								<li><b>чекбокс</b> — знак вопроса перед именем ( <code>?Подарочная упаковка</code> )</li>
								<li>если поле должно быть обязательно заполнено, после его название добавьте звездочку ( <code>имя*</code> )</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td><code>template</code></td>
						<td>Название шаблона. Если вы создаете новый, помещайте его в отельную папку в <code>templates</code> и указывайте в этой переменной ее название</td>
						<td><code>default</code></td>
					</tr>
					<tr>
						<td><code>license</code></td>
						<td>Лицензия, чтобы законно скрыть копирайт. Этот ключ можно купить <a href="http://get.nazartokar.com">здесь</a>)</td>
						<td><code>00000000</code></td>
					</tr>
					<tr>
						<td><code>showCopyright</code></td>
						<td>Показывать ли копирайт; действует только если указана лицензия</td>
						<td><code>0</code></td>
					</tr>
				</tbody></table>
			</div>
		</div>

		<div class="tab-pane fade" id="example">
			<p>Этот код — значение по умолчанию, которое сохраняется в файле <code>buyme/js/config.js</code>. Чтобы все работало, достаточно не трогать его. Если хотите менять значения, пользуйтесь таблицей выше. Если что-то пошло не так, скопируйте этот код и замените им то, что получилось у вас.</p>

			<pre class="panel panel-default">var bmeData = {
	"caption.description": "Чтобы оформить заказ, заполните форму. В течение пары часов с вами свяжется менеджер и уточнит детали заказа, а также время доставки.",
	"caption.title": "Купить",
	"caption.button": "Оформить заказ", 

	"caption.sending": "Отправка", 
	"caption.error": "Заполните все поля",

	"txt.yes": "Да",
	"txt.no": "Нет",

	"fields": "Ваше имя(Укажите имя), Телефон (Номер телефона)*, -Адрес доставки(Укажите город и адрес доставки)*, !Доставка!Самовывоз!Курьерская доставка, ?Подарочная упаковка",

	"template": "default",

	"license": "0",
	"showCopyright": "0"
}</pre>
		</div>
	</div>

	<hr>

	<p>Напоминаю: настройки должны быть сохранены в файле <code>buyme/js/config.js</code>.</p>

	<h2 class="page-header">Подключение</h2>

	<p>Обратите внимание: если вы обновляете более старую версию Buyme, вам нужно будет удалить её код и установить заново. Это несложно, тем не менее, код придётся обновить.</p>

	<blockquote>О том, как настраивать SMS, написано здесь: <a href="http://dedushka.org/kod/3903.html">настройка СМС в Buyme и Callme</a>.</blockquote>

	<p>Скачивайте архив (ссылка ниже), распаковывайте его в корневую папку <code>buyme</code>. Открывайте в Notepad++ или Sublime Text (<b><u>не</u></b> блокноте) файл <code>buyme/lib/send.php</code> и меняйте почту на свою. Если отправка почты не работает или у вас есть лишнее время, вы можете подключить отправку почты через SMTP. Данные указывайте в файле <code>buyme/lib/smtp.php</code>.</p>

	<p>Установка скрипта производится так: перед закрывающимся тегом <code>&lt;/head&gt;</code> добавляем такой код:</p>
	<pre>&lt;script src="/buyme/js/buyme.js" charset="utf-8"&gt;&lt;/script&gt;</pre>

	<h3 class="page-header" id="license">Лицензия</h3>

	<p>Чтобы убрать копирайт, нужно купить лицензию. Это стоит не менее 7$ на ваше усмотрение. Реквизиты указаны на <a href="http://get.nazartokar.com">странице с лицензиями</a>. Оплачиваете и заполняете форму на этом сайте, а я в ответ отправляю вам ключ для скрипта. Все посто.</p>

	<p>Пользоваться скриптом можно совершенно бесплатно, оставляя копирайт. Если хотите новых версий и технической поддержки, поддерживайте и вы меня материально: <a href="http://dedushka.org/pay">здесь все реквизиты</a>. Тех, кто помогает больше всего, я указываю на <a href="http://dedushka.org/thanks">странице благодарностей</a> со ссылками на их проекты. Копирайт прошу не удалять — чем больше пользователей, тем больше будет новых доработок.</p>

	<h3 class="page-header">Помощь</h3>

	<p>Если что-то не получается, вы можете заказать у меня <a href="http://dedushka.org/scripts">установку скрипта</a> на любую CMS. Также разрабатываю другие скрипты на заказ, верстаю. Заинтересован в постоянном удаленном сотрудничестве.</p>
</div>

<div class="container">
	<div class="dsa text-center">
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- 728 ded -->
		<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-7280770907817284" data-ad-slot="6021294753"></ins>
		<script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>
	</div>
</div>

<footer>
	<div class="container text-center">Следите за новыми версиями <a href="http://dedushka.org/">на сайте</a> и <a href="http://qbx.me/">форуме</a>. Спасибо за поддержку! &middot; <a href="mailto:a@dedushka.org">Назар Токарь</a></div>
</footer>

<script type="text/javascript" src="js/buyme.js" charset="utf-8"></script>
<script type="text/javascript" src="stuff/bs.tabs.js"></script>
</body>
</html>