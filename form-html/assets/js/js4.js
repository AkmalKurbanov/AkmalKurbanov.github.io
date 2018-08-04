jQuery(document).ready(function(){
    var Form4 = {
        name: 'contactfarmc',
        cssClass: {'warning' : 'warning','error' : 'error', 'success' : 'success'},
        id: {'error4' : 'error4', 'success4': 'success4'},
        errorPrefix: 'Error4',
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
        invalids: null,
        setInvalids: function(invalid){
            this.invalids = invalid
        }
    }
    // Boxes to hide
    var cssBoxes = '.' + Form4.cssClass['warning'] + ',.' + Form4.cssClass['error'] + ',.' + Form4.cssClass['success'];


    // hide all boxes if some exists


    $('#ajax_loader4').ajaxStart(function(){$('#send4').hide();$(this).show()
            })
    $('#ajax_loader4').ajaxComplete(function(){$('#send4').show();$(this).hide()
            })
    $('#' + Form4.name).submit(function(){
    Form4.hideBox(cssBoxes);
    // Ajax request
    $.post(Form4.action(), Form4.data(), function(data){
        var $return = eval('(' + data + ')');
        if($return === true){
            Form4.showBox('#' + Form4.id['success4']);
            $('#contact_form1 form input[type="text"]').attr('value', '');
            $('#contact_form1 form textarea[name="message"]').attr('value', '');
            $('#contact_form img').attr('src', 'assets/img/contact/ajax-loader.gif');
            $('#contact_form img').attr('src', 'assets/php/security/1/secd41d.png?'+Math.random());
        }else if($return === false){
            Form4.showBox('#' + Form4.id['error4']);
        }
        else{
        for(var i in $return){
            Form4.showBox('#' + $return[i] + Form4.errorPrefix);
         }
        }
    });



        return false;
    })
})

