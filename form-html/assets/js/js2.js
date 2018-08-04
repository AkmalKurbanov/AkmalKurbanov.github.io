jQuery(document).ready(function(){
    var Form2 = {
        name: 'contactforma',
        cssClass: {'warning' : 'warning','error' : 'error', 'success' : 'success'},
        id: {'error2' : 'error2', 'success2': 'success2'},
        errorPrefix: 'Error2',
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
        invalids: null,
        setInvalids: function(invalid){
            this.invalids = invalid
        }
    }
    // Boxes to hide
    var cssBoxes = '.' + Form2.cssClass['warning'] + ',.' + Form2.cssClass['error'] + ',.' + Form2.cssClass['success'];


    // hide all boxes if some exists


    $('#ajax_loader2').ajaxStart(function(){$('#send2').hide();$(this).show()
            })
    $('#ajax_loader2').ajaxComplete(function(){$('#send2').show();$(this).hide()
            })
    $('#' + Form2.name).submit(function(){
    Form2.hideBox(cssBoxes);
    // Ajax request
    $.post(Form2.action(), Form2.data(), function(data){
        var $return = eval('(' + data + ')');
        if($return === true){
            $.colorbox({html:"<h2>Спасибо! Мы свяжемся с вами в течение 30 минут!</h2>"});
            $('#contact_form1 form input[type="text"]').attr('value', '');
            $('#contact_form1 form textarea[name="message"]').attr('value', '');
            $('#contact_form img').attr('src', 'assets/img/contact/ajax-loader.gif');
            $('#contact_form img').attr('src', 'assets/php/security/1/secd41d.png?'+Math.random());
        }else if($return === false){
            Form2.showBox('#' + Form2.id['error2']);
        }
        else{
        for(var i in $return){
           Form2.ColorBor('#message2');
		   Form2.ErrorText('#messageError2');
         }
        }
    });



        return false;
    })
})