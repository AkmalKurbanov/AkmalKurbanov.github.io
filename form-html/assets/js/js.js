jQuery(document).ready(function(){
    var Form = {
        name: 'contactForm',
        cssClass: {'warning' : 'warning','error' : 'error', 'success' : 'success'},
        id: {'error' : 'error', 'success': 'success'},
        errorPrefix: 'Error',
        action: function(){return $('#' + this.name).attr('action')},
        data: function(){
            return $('#' + this.name).serialize();
        },
        hideBox: function(el){
            $(el).slideUp('slow');
        },
        showBox: function(el){
            $(el).slideDown('slow');
        },
		ColorBor: function(el){
			$(el).css("border-color", "#ff0000");
			},
		ErrorText: function(el){
			$(el).css("color", "#ff0000");
			},
		Return: function(el) {
			$(el).css("color", "#000000");
		},
		ReturnInput: function(el) {
			$(el).css("border-color", "#CCC");
		},
		ColorBox: function() { $.colorbox({html:"<h2>Спасибо! Мы свяжемся с вами в течение 5 минут!</h2>"});
		setTimeout($.colorbox.close, 3000)
		},
        invalids: null,
        setInvalids: function(invalid){
            this.invalids = invalid
        }
    }
    // Boxes to hide
    var cssBoxes = '.' + Form.cssClass['warning'] + ',.' + Form.cssClass['error'] + ',.' + Form.cssClass['success'];


    // hide all boxes if some exists


    $('#' + Form.name).submit(function(){
    Form.hideBox(cssBoxes);
    // Ajax request
    $.post(Form.action(), Form.data(), function(data){
		Form.Return('#nameError');
		Form.Return('#messageError');
		Form.ReturnInput('#message');
		Form.ReturnInput('#name');
        var $return = eval('(' + data + ')');
		
        if($return === true){
            Form.ColorBox();
            $('#contact_form form input[type="text"]').attr('value', '');
            $('#contact_form form textarea[name="message"]').attr('value', '');
            $('#contact_form img').attr('src', 'assets/img/contact/ajax-loader.gif');
            $('#contact_form img').attr('src', 'assets/php/security/1/secd41d.png?'+Math.random());
        }else if($return === false){
            Form.showBox('#' + Form.id['error']);
        }
        else{
        for(var i in $return){
            Form.ColorBor('#' + $return[i]);
            Form.ErrorText('#' + $return[i] + Form.errorPrefix);
			
         }
        }
    });



        return false;
    })
})