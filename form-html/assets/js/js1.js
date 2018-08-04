jQuery(document).ready(function(){
    var Form1 = {
        name: 'contactformc',
        cssClass: {'warning' : 'warning','error' : 'error', 'success' : 'success'},
        id: {'error1' : 'error1', 'success1': 'success1'},
        errorPrefix: 'Error1',
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
			ColorBox: function() { $.colorbox({html:"<h2>Спасибо! Мы свяжемся с вами в течение 5 минут!</h2>"});
		setTimeout($.colorbox.close, 3000)
		},
        invalids: null,
        setInvalids: function(invalid){
            this.invalids = invalid
        }
    }
    // Boxes to hide
    var cssBoxes = '.' + Form1.cssClass['warning'] + ',.' + Form1.cssClass['error'] + ',.' + Form1.cssClass['success'];


    // hide all boxes if some exists


    $('#ajax_loader1').ajaxStart(function(){$('#send1').hide();$(this).show()
            })
    $('#ajax_loader1').ajaxComplete(function(){$('#send1').show();$(this).hide()
            })
    $('#' + Form1.name).submit(function(){
    Form1.hideBox(cssBoxes);
    // Ajax request
    $.post(Form1.action(), Form1.data(), function(data){
        var $return = eval('(' + data + ')');
        if($return === true){
            Form1.ColorBox();
            $('#contact_form1 form input[type="text"]').attr('value', '');
            $('#contact_form1 form textarea[name="message"]').attr('value', '');
            $('#contact_form img').attr('src', 'assets/img/contact/ajax-loader.gif');
            $('#contact_form img').attr('src', 'assets/php/security/1/secd41d.png?'+Math.random());
        }else if($return === false){
            Form1.showBox('#' + Form1.id['error1']);
        }
        else{
        for(var i in $return){
            Form1.ColorBor('#message1');
         }
        }
    });



        return false;
    })
})