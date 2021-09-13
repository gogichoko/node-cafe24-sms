"use strict";
exports.__esModule = true;
exports.requestSender = exports.requestSenderPhone = exports.requestRemain = void 0;
var crypto = require("crypto");
var axios = require('axios');
var urlSmsRemain = 'https://sslsms.cafe24.com/sms_remain.php';
var urlSmsSenderPhone = "https://sslsms.cafe24.com/smsSenderPhone.php";
var urlSmsSender = 'https://sslsms.cafe24.com/sms_sender.php';
function createBoundary() {
    var num = String(Math.floor(Math.random() * 32000));
    var buffer = Buffer.from(num);
    var digestArr = crypto.createHash('md5').update(buffer).digest( /* "base64" */);
    var boundary = '';
    for (var i = 0; i < digestArr.length; i++) {
        boundary = boundary + digestArr[i].toString(16);
    }
    boundary = '---------------------' + boundary.substring(0, 11);
    return boundary;
}
function b64(str) {
    return Buffer.from(str, "utf8").toString('base64');
}
function requestRemain(param) {
    var keys = [
        'user_id',
        'secure',
        'mode'
    ];
    var values = [
        param.user_id,
        param.secure,
        param.mode
    ];
    var boundary = createBoundary();
    var reqData = '';
    for (var i = 0; i < keys.length; i++) {
        reqData += '--' + boundary + '\n';
        reqData += 'Content-Disposition: form-data; name="' + keys[i] + '"\n';
        reqData += '\n' + b64(values[i]) + '\n';
        reqData += '--' + boundary + '\n';
    }
    return axios({
        method: "post",
        url: urlSmsRemain,
        data: reqData,
        headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8; boundary="' + boundary + '"',
            'User-Agent': "Mozilla/5.0"
        }
    });
}
exports.requestRemain = requestRemain;
function requestSenderPhone(param) {
    var params = 'userId=' + param.userId + '&passwd=' + param.passwd;
    var config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0'
        }
    };
    return axios.post(urlSmsSenderPhone, params, config);
}
exports.requestSenderPhone = requestSenderPhone;
function requestSender(param) {
    var keys = [
        'user_id',
        'secure',
        'msg',
        'rphone',
        'sphone1',
        'sphone2',
        'sphone3',
        'rdate',
        'rtime',
        'mode',
        'testflag',
        'destination',
        'repeatFlag',
        'repeatNum',
        'repeatTime',
        'smsType',
        'subject'
    ];
    var values = [
        param.user_id,
        param.secure,
        param.msg,
        param.rphone,
        param.sphone1,
        param.sphone2,
        param.sphone3,
        param.rdate,
        param.rtime,
        param.mode,
        param.testflag,
        param.destination,
        param.repeatFlag,
        param.repeatNum,
        param.repeatTime,
        param.smsType,
        param.subject // 'subject'
    ];
    var boundary = createBoundary();
    var reqData = '';
    for (var i = 0; i < keys.length; i++) {
        reqData += '--' + boundary + '\n';
        reqData += 'Content-Disposition: form-data; name="' + keys[i] + '"\n';
        reqData += '\n' + b64(values[i]) + '\n';
        reqData += '--' + boundary + '\n';
    }
    return axios({
        method: "post",
        url: urlSmsSender,
        data: reqData,
        headers: {
            'Content-Type': 'multipart/form-data; charset=utf-8; boundary="' + boundary + '"',
            'User-Agent': "Mozilla/5.0"
        }
    });
}
exports.requestSender = requestSender;
