jQuery(document).ready(function(){
    var Form3 = {
        name: 'contactformb',
        cssClass: {'warning' : 'warning','error' : 'error', 'success' : 'success'},
        id: {'error3' : 'error3', 'success3': 'success3'},
        errorPrefix: 'Error3',
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
    var cssBoxes = '.' + Form3.cssClass['warning'] + ',.' + Form3.cssClass['error'] + ',.' + Form3.cssClass['success'];


    // hide all boxes if some exists


    $('#ajax_loader3').ajaxStart(function(){$('#send3').hide();$(this).show()
            })
    $('#ajax_loader3').ajaxComplete(function(){$('#send3').show();$(this).hide()
            })
    $('#' + Form3.name).submit(function(){
    Form3.hideBox(cssBoxes);
    // Ajax request
    $.post(Form3.action(), Form3.data(), function(data){
        var $return = eval('(' + data + ')');
        if($return === true){
            Form3.showBox('#' + Form3.id['success3']);
            $('#contact_form1 form input[type="text"]').attr('value', '');
            $('#contact_form1 form textarea[name="message"]').attr('value', '');
            $('#contact_form img').attr('src', 'assets/img/contact/ajax-loader.gif');
            $('#contact_form img').attr('src', 'assets/php/security/1/secd41d.png?'+Math.random());
        }else if($return === false){
            Form3.showBox('#' + Form3.id['error3']);
        }
        else{
        for(var i in $return){
              Form3.ColorBor('#message3');
		   Form3.ErrorText('#messageError3');
         }
        }
    });



        return false;
    })
})