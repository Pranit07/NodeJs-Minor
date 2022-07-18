$('#document').ready(function () {

    $('select').formSelect();

    //--------- calling showcompany api on every reload----------//

    $.getJSON('http://localhost:3000/eval/showcompany', function (data) {


        //-------- Managing company entries----------------------//

        if (Array.isArray(data)) {

            data.map((item) => {
                h = ""
                h += "<tr><td><fieldset class='fieldset'>"
                h += "<div class='card'>"
                h += "<div class='cname'>"
                h += item.companyname
                h += "</div></div>"
                h += "<div class='row cardrow'><div class='col s12'>"
                h += "<b>Address: </b>" + item.companyaddress
                h += "</div></div>"
                h += "<div class='row cardrow'><div class='col s12'>"
                h += "<b>Revenue: </b>" + item.companyrevenue
                h += "</div></div>"
                h += "<div class='row cardrow'><div class='col s12'>"
                h += "<b>Phone: </b>" + item.companyphone
                h += "</div></div>"
                h += "<div class='over'>"
                h+="<button class='overviewbtn' style='background:transparent;border:0px;' id='overviewbtn" + item.companyid + "' companyid=" + item.companyid + ">Company Overview</button></div>"
                h += "</div></fieldset></td></tr>"
                $('#tbody').append(h)


                $('#pcompany').append($("<option>").text(item.companyname).val(item.companyid))
                $('select').formSelect();

            })
        }
        else {
            $('#entry').html("<fieldset class='fieldset'>" + JSON.stringify(data.msg) + "</fieldset>")
        }
    })

    //=========    create company save button===========//

    $('#btn').click(function () {

        $('#entry').html("")
        $.getJSON('http://localhost:3000/eval/addcompany', { Name: $('#Name').val(), Address: $('#Address').val(), Revenue: $('#Revenue').val(), Phone: $('#Phone').val() }, function (data) {

        })

        location.reload(true)
    });

    //================ create person save button ===================//

    $('#personbtn').click(function () {
        $.getJSON('http://localhost:3000/eval/addperson', { Name: $('#pname').val(), Address: $('#paddress').val(), Company: $('#pcompany').val() }, function (data) {
            location.reload(true)
        })
    })


    //---------------- Company overview button function--------------//



    $(document).on('click', '.overviewbtn', function () {


        $.getJSON('http://localhost:3000/eval/overview', { companyid: $(this).attr('companyid') }, function (data) {

            if (data.length > 0) {
                h = ""
                str = ""

                //-----------------------html string for making multiple employee rows--------------//

                for (i = 0; i < data.length; i++) {
                    str += "<tr><td>"
                    str += "<div class='cname'>"
                    str += data[i].empname + "</div>"
                    str += "<div class='row cardrow'><div class='col s12'>"
                    str += "<b>Address:   </b>" + data[i].empaddress + "</div></div>"
                    str += "<div class='over'></div>"
                    str += "</div></td></tr>"
                }

                // -------------------- html string for employee rows--------------//

                h += "<div class='col s12' style='font-size:25px;'>"
                h += "<fieldset class='fieldset'>"
                h += "<div class='card'>"
                h += "<div class='cname'>"
                h += "Profile Overview"
                h += "</div><div class='row cardrow'>"
                h += "<div class='col s6'>"
                h += "<b>Address:   </b>" + data[0].companyaddress
                h += "</div><div class='col s6'>"
                h += "<b>Total Employees:   </b>" + data.length
                h += "</div></div>"
                h += "<div class='row cardrow'><div class='col s12'>"
                h += "<b>Revenue:   </b>" + data[0].companyrevenue + "</div></div>"
                h += "<div class='row cardrow'><div class='col s12'>"
                h += "<b>Phone:   </b>" + data[0].companyphone + "</div></div>"
                h += "<div class='over'></div></div>"
                h += "<div class='card'>"
                h += "<div class='cname'>"
                h += "Employees </div>"
                h += "<div class='row cardrow'> <div class='col s12'>"
                h += "<table><tbody>"
                h += str
                h += "</tbody></table></div></div>"
                h += "<div class='over'>"
                h+="<button style='background:transparent; border:0px;' class='close' id='close'> Close </button></div>"
                h+="</div></fieldset></div></div>"

                $('#next').html(h)

            }
            else
            {   close = ""
                close+="<fieldset style='border-radius: 5px; font-size:25px; '>"
                close+="<legend><button style='background:transparent; border:0px;' class='close' id='close'> Close </button></legend>"
                close+="There is no employee registered</fieldset>"
                $('#next').html(close)
            }
        })

    });

    $(document).on('click', '.close', function () {
        
        location.reload(true)
    
    });
    

});