
//DeveloperName: Ramachandra
//PurposeOf the Code : AgentRigistration and Login 
//09-01-2020
//<---------------------------------------------------->


//To start the server
const express=require('express');
var router=express.Router();

//For Db connection
var mysqlConnection=require('../model/db.js');

//FOr Registration
router.post('/',(req,res)=>{
    
    var sql="INSERT INTO agentRegistration(aid, password, name, mobileNumber, referralCode, qualification, smartphone, bike, createdDate, verifiedStatus, cLatitude, cLongitude) VALUES \
    (?,?,?,?,?,?,?,?,?,?,?,?)";
    var sql2="select * from agentRegistration where mobileNumber="+req.body.mobileNumber
    
    mysqlConnection.query(sql2,function(err,results){
        console.log(results.length+"select Query lenth");
        if(results.length<=0){
         
            mysqlConnection.query(sql,[req.body.aid,req.body.password,req.body.name,req.body.mobileNumber,req.body.referralCode,req.body.qualification,req.body.smartphone,req.body.bike,req.body.createdDate,req.body.verifiedStatus,req.body.cLatitude,req.body.cLongitude],(err2,result,fields)=>{
              
                if(result.affectedRows>0){
                    res.json({"result":"success"});
                }
                else{
                    
                    res.json({"result":"fail"});
                }
            });
        }
        else{
            res.send("Agent Alresdy Rigistered");
        }
   });

});