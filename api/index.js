import mysql from 'mysql';
import express from 'express';
import {dbCred} from '../config';
const router=express.Router();
const con = mysql.createConnection({...dbCred});

const query=(sql,res)=>{
    con.query(sql,(err,response,fields)=>{
        err?
        console.error('Something went wrong fetching the query\n%s',err):'';
        res.json({response})
    })
}

router.get('/get-users',(req,res)=>{
    const sql=`SELECT * FROM USERS`;
    query(sql,res);
});

router.get('/get-tours',(req,res)=>{
    const sql=`SELECT * FROM tours`;
    query(sql,res);
})
export default router;
