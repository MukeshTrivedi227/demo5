import mysql from "mysql"
export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"azziptech" //change database name
});