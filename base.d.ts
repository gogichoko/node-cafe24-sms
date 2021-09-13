interface remainRequest {
    /** 아이디 */
    user_id: string;
    /** 인증키 */
    secure: string;
    /** base64 1 */
    mode: '1';
}
interface SenderPhoneRequest {
    /** 아이디 */
    userId: string;
    /** 인증키 */
    passwd: string;
}
interface SenderRequest {
    /** 아이디 */
    user_id: string;
    /** 인증키 */
    secure: string;
    /** SMS = 90 byte 이하, LMS = 2,000 byte 이하 */
    msg: string;
    /** 받는번호 (ex XXX-XXXX-XXXX), destination 사용시 공백 */
    rphone: string;
    /** 보내는 번호 (ex 010 , 02) */
    sphone1: string;
    /** 보내는 번호 */
    sphone2: string;
    /** 보내는 번호 */
    sphone3: string;
    /** 예약날짜 (ex : 20080930) */
    rdate: string;
    /** 예약시간 (ex : 173000) - 최소 10분 이상 */
    rtime: string;
    /** base64 1 */
    mode: '1';
    /** 테스트 요청 */
    testflag: '' | 'Y';
    /** 이름삽입번호 (ex 000-000-0000|이름, 000-000-0001|이름2) {name} */
    destination: string;
    /** 반복 설정 */
    repeatFlag: '' | 'Y';
    /** 반복 횟수 1~10 */
    repeatNum: string;
    /** 반복 횟수 (15분 이상) */
    repeatTime: string;
    /** 단문(SMS) / 장문(LMS) */
    smsType: 'S' | 'L';
    /** 제목 */
    subject: string;
}
declare function requestRemain(param: remainRequest): any;
declare function requestSenderPhone(param: SenderPhoneRequest): any;
declare function requestSender(param: SenderRequest): any;
export { requestRemain, requestSenderPhone, requestSender };
