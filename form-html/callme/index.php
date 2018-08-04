<?php defined('_JEXEC') or die('Restricted access');
$doc = JFactory::getDocument();
$this->addStyleSheet('templates/' . $this->template . '/css/template.css');
$this->addStyleSheet('templates/' . $this->template . '/css/bootstrap.css');
$doc->addScript('templates/' . $this->template . '/js/bootstrap.js');
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:jdoc="http://www.w3.org/1999/XSL/Transform"
      xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>">
<head>
    <jdoc:include type="head"/>

    <script type="text/javascript" charset="utf-8" src="/buyme/js/jquery.js"></script>
    <script type="text/javascript" charset="utf-8" src="/callme/js/callme.js"></script>
    <script type="text/javascript" charset="utf-8" src="/buyme/js/buyme.js"></script>

</head>
<body>
<!--    <jdoc:include type="modules" name="test1" style="none"/>-->
<div class="back1">
    <div class="container">
        <div class="row">
            <div class="col-xs-3">
				<a href="/">
					<jdoc:include type="modules" name="logo" style="none"/>
				</a>
            </div>
            <div class="col-xs-4">
                <div class="address">
                    <jdoc:include type="modules" name="header" style="none"/>
                </div>
            </div>
            <div class="col-xs-2">
                <div class="work_time">
                    <jdoc:include type="modules" name="header2" style="none"/>
                </div>
            </div>
            <div class="col-xs-3">
                <div class="lozung">
                    <jdoc:include type="modules" name="header3" style="none"/>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="back2">
    <div class="container">
        <div class="row">
            <div class="col-xs-3">
                <div class="arenda">
                    <jdoc:include type="modules" name="arenda" style="none"/>
                </div>
            </div>
            <div class="col-xs-9">
                <div class="topmenu">
                    <jdoc:include type="modules" name="mainmenu" style="none"/>
                </div>
                <div class="callme_viewform zakaz_obr_zv callme_viewform">
                    <jdoc:include type="modules" name="header1" style="none"/>
                </div>
                <!--<div class="slider">
                    <jdoc:include type="modules" name="slideshow" style="none" />
                </div>-->
            </div>
        </div>
    </div>
</div>
 
 <div class="b2">
    <div class="container">
        <div class="row">
            <div class="col-xs-6">
				<jdoc:include type="modules" name="slideshow" style="none"/>
			</div> 
				<div class="col-xs-6">
						<jdoc:include type="modules" name="head" style="none"/>
				</div>
        </div>
    </div>
 </div>

<div class="b2">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <div class="blurb section calculator">
                    <div class="container">
                        <h1><span>Посчитайте стоимость натяжных потолков</span></h1>
                        <p>
                        </p><form class="form-horizontal" action="/order/">
                            <input type="hidden" name="summa" value="28655">
                            <br>
                            <div class="control-group">
                                <select name="type" id="type">
                                    <option value="0">Выберите тип полотна</option>
                                    <option value="Матовые">Матовые</option>
                                    <option value="Глянцевые">Глянцевые</option>
                                    <option value="Тканевые">Тканевые</option>
                                </select>
                            </div>
                            <div class="control-group">
                                <input class="form-control placeholder" name="plocahd" type="text" placeholder="Площадь комнаты">
                            </div>
                            <p id="error" style="color:red;"></p>
                            <p id="summa">
                                Стоимость: <span>18700</span> рублей
                            </p><p>
                                <input type="submit" class="button large pink" value="Заказать сейчас">
                            </p></form>
                        <p></p>
                    </div>
                </div>

                <script>
                    $('input[name=plocahd]').on('keyup', function(){
                        var val = $(this).val();
                        var type = $('select[name=type]').val();
                        var price;
                        var error = 0;

                        if(isNaN(val)){
                            error = 2;
                            $(this).val('');
                        } else if (val<8) {
                            error = 1;
                        } else if (val<=10 && val>=8) {
                            if (type=='Матовые') {
                                price = 621;
                            } else if (type=='Глянцевые') {
                                price = 634;
                            } else if (type=='Тканевые') {
                                price = 1342;
                            } else {
                                price = 0;
                                error = 2;
                                $('#error').text('Выберите тип полотна');
                            }
                        } else if (val<=20 && val>10) {
                            if (type=='Матовые') {
                                price = 534;
                            } else if (type=='Глянцевые') {
                                price = 621;
                            } else if (type=='Тканевые') {
                                price = 1324;
                            } else {
                                price = 0;
                                error = 2;
                                $('#error').text('Выберите тип полотна');
                            }
                        } else if (val<=30 && val>20) {
                            if (type=='Матовые') {
                                price = 521;
                            } else if (type=='Глянцевые') {
                                price = 617;
                            } else if (type=='Тканевые') {
                                price = 1234;
                            } else {
                                price = 0;
                                error = 2;
                                $('#error').text('Выберите тип полотна');
                            }
                        } else if (val<=50 && val>30) {
                            if (type=='Матовые') {
                                price = 421;
                            } else if (type=='Глянцевые') {
                                price = 550;
                            } else if (type=='Тканевые') {
                                price = 1134;
                            } else {
                                price = 0;
                                error = 2;
                                $('#error').text('Выберите тип полотна');
                            }
                        } else if (val>50) {
                            if (type=='Матовые') {
                                price = 340;
                            } else if (type=='Глянцевые') {
                                price = 521;
                            } else if (type=='Тканевые') {
                                price = 1021;
                            } else {
                                price = 0;
                                error = 2;
                                $('#error').text('Выберите тип полотна');
                            }
                        };
                        if (error == 1) {
                            $('#error').text('Минимальная площадь монтажа - 8 м2');
                        } else if (error == 2) {
                            return false;
                        } else {
                            $('#error').text('');
                            var summa = price*val;
                            $('input[name=summa]').val(summa);
                            $('#summa span').text(summa);
                        }
                    });
                    $('select[name=type]').on('change', function(){
                        var val = $('input[name=plocahd]').val();
                        var type = $(this).val();
                        var price;
                        var error = 0;

                        if(isNaN(val)){
                            error = 2;
                            $('input[name=plocahd]').val('');
                        } else if (val<8) {
                            error = 1;
                        } else if (val<=10 && val>=8) {
                            if (type=='Матовые') {
                                price = 621;
                            } else if (type=='Глянцевые') {
                                price = 634;
                            } else if (type=='Тканевые') {
                                price = 1342;
                            }
                        } else if (val<=20 && val>10) {
                            if (type=='Матовые') {
                                price = 534;
                            } else if (type=='Глянцевые') {
                                price = 621;
                            } else if (type=='Тканевые') {
                                price = 1324;
                            }
                        } else if (val<=30 && val>20) {
                            if (type=='Матовые') {
                                price = 521;
                            } else if (type=='Глянцевые') {
                                price = 617;
                            } else if (type=='Тканевые') {
                                price = 1234;
                            }
                        } else if (val<=50 && val>30) {
                            if (type=='Матовые') {
                                price = 421;
                            } else if (type=='Глянцевые') {
                                price = 550;
                            } else if (type=='Тканевые') {
                                price = 1134;
                            }
                        } else if (val>50) {
                            if (type=='Матовые') {
                                price = 340;
                            } else if (type=='Глянцевые') {
                                price = 521;
                            } else if (type=='Тканевые') {
                                price = 1021;
                            }
                        };
                        if (error == 1) {
                            $('#error').text('Минимальная площадь монтажа - 8 м2');
                        } else if (error == 2) {
                            return false;
                        } else {
                            $('#error').text('');
                            var summa = price*val;
                            $('#summa span').text(summa);
                        }
                    });
                </script>


            </div>
          </div>
    </div>
</div>
 
<div class="back3">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
				<jdoc:include type="modules" name="position1" style="none"/>
			</div>
        </div>
    </div>
	<div class="container">
        <div class="row">
            <div class="col-xs-3">
				<div class="leftmenu">
					<jdoc:include type="modules" name="left" style="none"/>
				</div>
			</div>
			<div class="col-xs-9">
				<div class="content">
				<jdoc:include type="component"/>
				</div>
			</div>
        </div>
    </div>
	
	 

    </div>
 
	
</div>

<div class="back4">

    <div class="container">
        <div class="row">
		
		<div class="predlog">
            <div class="col-xs-12">
				<jdoc:include type="modules" name="position2" style="none"/>
			</div> 
			</div>	
        </div>
    <div class="container">
		
        <div class="row">
           <div class="col-xs-2">
			 
				<span>
				<a href="/">
					<jdoc:include type="modules" name="logo" style="none"/>
				</a>
				</span>
            </div>
			 <div class="col-xs-2">
			  </div>
			  <div class="col-xs-3">
				<div id="fo1">
				<h3>Мы в соц сетях:</h3>
				<a href="#"><div class="vk" id="vk"><!--<img src="/../images/prsocial6.png" />--></div></a>
				<a href="#"><div class="fb" id="fb"><!--<img src="/../images/prsocial6.png" />--></div></a>
				<a href="#"><div class="ok" id="ok"><!--<img src="/../images/prsocial6.png" />--></div></a>
				
				</div>
		 			
            </div>
			
			 <div class="col-xs-4">
               
            </div>
			
				 <div class="col-xs-4">
				<div class="tellefon">
				<h3>Телефоны</h3>
				<a href="tel:+7 988 769 77 75">+7(9887)69-77-75</a><br>
				<a href="tel:+7 8617 63-76-15">+7(8617)63-76-15</a>
				<br>ug-potolki@yandex.ru
				</div>            
</div>
        </div>
    </div>
	 		
     
    </div>
	
	
	
</div>


</body>
</html>