h += "<tr><td><fieldset class='fieldset'>"
                h += "<div class='card' style='height:auto; border-radius:5px;'>"
                h += "<div class='cname' style='height: 50px; background:#dfe6e9; margin-top: 15px; border-radius: 5px 5px 0px 0px; display: flex; justify-content: left; align-items: center; font-size: 25px; padding: 10px; color:blue'>"
                h += item.companyname
                h += "</div></div>"
                h += "<div class='row cardrow' style='display:flex; justify-content:left; align-items: center; padding: 15px; font-size: 20px;'><div class='col s12'>"
                h += "<b>Address: </b>" + item.companyaddress
                h += "</div></div>"
                h += "<div class='row cardrow' style='display:flex; justify-content:left; align-items: center; padding: 15px; font-size: 20px;'><div class='col s12'>"
                h += "<b>Revenue: </b>" + item.companyrevenue
                h += "</div></div>"
                h += "<div class='row cardrow' style='display:flex; justify-content:left; align-items: center; padding: 15px; font-size: 20px;'><div class='col s12'>"
                h += "<b>Phone: </b>" + item.companyphone
                h += "</div></div>"
                h += "<div class='over' style='height: 30px; background:#dfe6e9; margin-top: 15px; border-radius: 0px 0px 5px 5px; display: flex; justify-content: left; align-items: center; font-size: 18px; padding: 10px; color:blue'><button style='background:transparent; border:0px;' class='overviewbtn' id='overviewbtn" + item.companyid + "' companyid=" + item.companyid + ">Company Overview</button></div>"
                h += "</div></fieldset></td></tr>"
                $('#tbody').append(h)