var express = require('express');
var pool = require('./pool');
var router = express.Router();



router.get('/companypage', function (req, res) {
    res.render('company',{result:''})
})


router.get('/addcompany', function (req, res) {

    console.log(req.query)

    pool.query('insert into company_data (companyname,companyaddress,companyrevenue,companyphone) values(?,?,?,?)', [req.query.Name, req.query.Address, req.query.Revenue, req.query.Phone], function (error, result) {

        if (error) {
            console.log(error)

        }
        // else
        // {
        //     res.redirect('/eval/showcompany')
        // }

    })
})

router.get('/showcompany',function(req,res)
{

    pool.query('select * from company_data', function (error, result) {
        if (error) 
        {
            console.log(error)
            
            res.status(200).json([])
        }
        else{
            if(result.length>0)
            {res.status(200).json(result)}
            else{
                res.status(200).json({msg:'There is no company entered'})
            }
            
            
        }
        
    })

})


router.get('/addperson',function(req,res)
{
    //console.log(req.query)

    pool.query('insert into employee (empname,empaddress,empcompany) values (?,?,?)',[req.query.Name,req.query.Address,req.query.Company],function(error,result)
    {
        if(error)
        {
            console.log(error)
            res.status(500).json([])
        }
        else{
            res.status(200).json({msg:'Success'})
        }

    })
})



router.get('/overview',function(req,res)
{
    //console.log(req.query)

    pool.query('select e.* , (select c.companyname from company_data c where  c.companyid = ?) as companyname , (select c.companyaddress from company_data c where  c.companyid = ?) as companyaddress,(select c.companyrevenue from company_data c where  c.companyid = ?) as companyrevenue , (select c.companyphone from company_data c where  c.companyid = ?) as companyphone from employee e where empcompany=?;',[req.query.companyid,req.query.companyid,req.query.companyid,req.query.companyid,req.query.companyid], function(error,result)
    {
        if(error)
        {
            console.log(error)
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
    
})


module.exports = router