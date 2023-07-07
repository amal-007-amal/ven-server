'user restrict'
var dbConn = require('../../config/dbConn');

//create user object
class User {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.dob = user.dob;
        this.mobile_no = user.mobile_no;
        this.gender = user.gender;
    }
    static create(newEmp, result) {
        dbConn.query("INSERT INTO ven_user set ?", newEmp, function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }
    static findAll(result) {
        dbConn.query("Select * from ven_user", function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('user : ', res);
                result(null, res);
            }
        });
    }
    static update(user, result) {
        console.log("user update ",user)
        dbConn.query("UPDATE ven_user SET name=?,email=?,mobile_no=?,gender=?,dob=? WHERE id = ?", [user.name, user.email, user.mobile_no, user.gender, user.dob, user.id], function (err, res) {
            console.log("update ",res)
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
    }
}

module.exports = User;


