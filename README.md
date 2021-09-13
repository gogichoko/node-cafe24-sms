# (Nodejs) @gogichoko/cafe24-sms

카페24 호스팅센터에서 제공하는 SMS호스팅을   
Nodejs axios 모듈로 요청합니다

MIT 라이센스를 따르며 저자 또는 저작권자는 소프트웨어 및   
사용에 관해서 아무런 책임을 지지 않습니다.

### install 
```
npm install git+https://github.com/gogichoko/node-cafe24-sms.git
```

### Example A (잔여건수 조회)
```
const userId = ''; //Cafe24 userId
const secure = ''; //Cafe24 SMS호스팅에서 발급받은 secure

const cafe24Sms = require('@gogichoko/cafe24-sms');

cafe24Sms.base.requestRemain({
    user_id : userId,
    secure : secure,
    mode : '1'
}).then(function(data){
    console.log(data.data);
}).catch(function(err){
    console.log(err.response.data);
})
```

### Example B (발신번호 목록 조회)
```
const userId = ''; //Cafe24 userId
const secure = ''; //Cafe24 SMS호스팅에서 발급받은 secure

const cafe24Sms = require('@gogichoko/cafe24-sms');

cafe24Sms.base.requestSenderPhone({
    userId : userId,
    passwd : secure
}).then(function(data){
    console.log(data.data);
}).catch(function(err){
    console.log(err.response.data);
})
```

### Example C (문자전송)
```
const userId = ''; //Cafe24 userId
const secure = ''; //Cafe24 SMS호스팅에서 발급받은 secure
const rphone = ''; //받는 번호 (ex XXX-XXXX-XXXX)
const sphone1 = ''; //보내는 번호 (첫번째 자리 010 , 02)
const sphone2 = ''; //보내는 번호 (두번째 자리)
const sphone3 = ''; //보내는 번호 (세번째 자리)

const cafe24Sms = require('@gogichoko/cafe24-sms');

cafe24Sms.base.requestSender({
    user_id : userId,
    secure : secure,
    msg : 'Test Message',
    rphone : rphone, //받는 번호 (ex XXX-XXXX-XXXX)
    sphone1 : sphone1, //보내는 번호 (첫번째 자리 010 , 02)
    sphone2 : sphone2, //보내는 번호 (두번째 자리)
    sphone3 : sphone3, //보내는 번호 (세번째 자리)
    rdate : '',
    rtime : '',
    mode : '1',
    testflag : '',
    destination : '',
    repeatFlag : '',
    repeatNum : '',
    repeatTime : '',
    smsType : 'S',
    subject : ''
}).then(function(data){
    console.log(data.data);
}).catch(function(err){
    console.log(err.response.data);
})
```
