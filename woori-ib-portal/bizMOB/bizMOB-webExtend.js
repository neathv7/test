/**
 * bizMOB Web Extend
 * @author 최명훈
 * @version 0.1
 */

var bizMOBCore = window.bizMOBCore;

var bizMOBWeb = {};

bizMOBWeb.name = "bizMOBWeb";
bizMOBWeb.version = "0.1";



/**
 *
 * 01.클래스 설명 : Http 기능 클래스
 * 02.제품구분 : bizMOB Xross
 * 03.기능(콤퍼넌트) 명 : bizMOB Http Client 관련 기능
 *
 * @author 김승현
 * @version 1.0
 *
 */
bizMOBWeb.Localization = new Object();

bizMOBWeb.Localization.servicename = "Localization";

 // 모듈 config 변수
 bizMOBWeb.Localization.config = {};

 // 모듈 config init 함수
 bizMOBWeb.Localization.setConfig = function(config) {
    //  var setting = bizMOBCore.Localization.config;
    //  bizMOBCore.Localization.config = Object.assign({}, setting, config);
    //  bizMOBCore.Module.logger(this.servicename, "bizMOBCore Module init", "D", "Config initialized - " + JSON.stringify(config));
};

bizMOBWeb.Localization.setLocale = function(arg){
    var action = "setlocale";
    var localeCd = arguments[0]._sLocaleCd;
    
    bizMOBWeb.Properties.set({ "_sKey" : "currentLocaleCd", "_vValue" : localeCd  });
    bizMOBCore.Module.logger("bizMOBWeb", action ,"D", "Locale is stored. : " + localeCd);
    let response = {
        result: true,
        locale: localeCd
    }
    arg._fCallback(response);
    
}

bizMOBWeb.Localization.getLocale = function(arg){
    var action = "getlocale";
    let localeCd = "";
    var storedLocaleCd = bizMOBWeb.Properties.get({ "_sKey" : "currentLocaleCd" });

    if(storedLocaleCd) {
        localeCd = storedLocaleCd;
        bizMOBCore.Module.logger("bizMOBWeb", action ,"D", "Locale is initialized  to stored language: " + localeCd);
    }else{
        localeCd = bizMOBWeb.Localization.extractLocale();
        bizMOBWeb.Properties.set({ "_sKey" : "currentLocaleCd", "_vValue" : localeCd  });
        bizMOBCore.Module.logger("bizMOBWeb", action ,"D", "Locale is initialized to new language : " + localeCd);
    }
    let response = {
        result: true,
        locale: localeCd
    }
    arg._fCallback(response);
}


bizMOBWeb.Localization.extractLocale = function(){

    let localeCd = navigator.language || navigator.userLanguage;

    return localeCd;
}


/**
 * Web Properties Class
 */
bizMOBWeb.Properties = {};
bizMOBWeb.Properties.serviceName = "WebProperties";
bizMOBWeb.Properties.prefix = "bizMOB:WEB:PROPERTIES:";

/**
 * bizMOB Web Properties Set
 * @param {object} arg
 * @param {string} arg._sKey Properties key
 * @param {any} arg._vValue Properties value
 * @param {object[]} arg._aList data map list (Ex. [{_sKey: "1", _vValue: "1"}, ...])
 */
bizMOBWeb.Properties.set = function(arg) {
    var dataList = [];

    if (Object.hasOwnProperty.call(arg, "_aList")) {
        dataList = arg._aList;
    }
    else {
        dataList = [arg];
    }

    dataList.forEach(function(data) {
        var prop = bizMOBWeb.Properties.prefix + data._sKey;
        var value = data._vValue;

        bizMOBCore.Module.logger(bizMOBWeb.Properties.serviceName, "set", "D", data._sKey + " set on bizMOB Properties.");
        localStorage.setItem(prop, value);
    });
};

/**
 * bizMOB Web Properties Get
 * @param {object} arg
 * @param {string} arg._sKey Properties key
 * @returns Properties value
 */
bizMOBWeb.Properties.get = function(arg) {
    var prefix = bizMOBWeb.Properties.prefix;

    if (arg && Object.hasOwnProperty.call(arg, "_sKey")) {
        var prop = prefix + arg._sKey;

        return localStorage.getItem(prop);
    }
    else {
        var storage = localStorage;
        var result = {};

        for (var key in storage) {
            if (Object.hasOwnProperty.call(storage, key)) {
                if (key.indexOf(prefix) === 0) {
                    result[key.replace(prefix, "")] = storage[key];
                }
            }
        }

        return result;
    }
};

/**
 * bizMOB Web Properties Remove
 * @param {object} arg
 * @param {string} arg._sKey Properties key
 */
bizMOBWeb.Properties.remove = function(arg) {
    var prop = bizMOBWeb.Properties.prefix + arg._sKey;

    bizMOBCore.Module.logger(bizMOBWeb.Properties.serviceName, "remove", "D", arg._sKey + " removed on bizMOB Properties.");

    localStorage.removeItem(prop);
    return true;
};

/**
 * Web Network Class
 */
bizMOBWeb.Network = {};
bizMOBWeb.Network.serviceName = "WebNetwork";


/**
 * bizMOB Web Server Request
 * @param {string} _sTrcode bizMOB Server 전문코드
 * @param {object} _oHeader bizMOB Server 전문 Header 객체
 * @param {object} _oBody bizMOB Server 전문 Body 객체
 * @param {boolean} _bProgressEnable (default:true) 서버에 통신 요청시 progress 표시 여부( true 또는 false )
 * @param {function} _fCallback 서버와 통신 후 실행될 callback 함수
 * @param {object} _oApproval
 * @return
 */
//  helper function to get login session id outside of module
 function getFromDataStorage(key) {
    return new Promise((resolve, reject) => {
        // Open the database
        const openRequest = indexedDB.open('__WBStorage');

        openRequest.onsuccess = () => {
            const db = openRequest.result;

            // Get the value
            const getRequest = db.transaction('_WBStore').objectStore('_WBStore').get(key);

            getRequest.onsuccess = () => {
                resolve(getRequest.result ? JSON.parse(window.atob(getRequest.result)) : '');
            };

            getRequest.onerror = () => {
                reject(getRequest.error);
            };
        };

        openRequest.onerror = () => {
            reject(openRequest.error);
        };
    });
 }

 function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    const newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    const date = new Date()

    //modified uuid to append YYYYMMDD
    return `${newGuid}-${date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2)}`;
 }

 function getHttpErrorText(httpErrorCode) {
    switch (httpErrorCode) {
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 403:
            return "Forbidden";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        case 501:
            return "Not Implemented";
        case 502:
            return "Bad Gateway";
        case 503:
            return "Service Unavailable";
        case 504:
            return "Gateway Timeout";
        case 505:
            return "HTTP Version Not Supported";
        default:
            return "Unknown Error: An unexpected error occurred.";
    }
  }

 bizMOBWeb.Network.requestTr = async function(arg) {
    var timeout = 120 * 1000; //two minutes
    var message = {
        header: Object.assign({}, {
            channel_type_code: "02",
            language_code: "En",
            error_code: "",
            error_text: "",
            info_text: "",
            message_version: "",
            session_id: await getFromDataStorage('login_session_id') || '',
            login_session_id: await getFromDataStorage('login_session_id') || '' ,
            trcode: arg._sTrcode,
            approval: arg._oApproval,
            screen_id: arg._screenID || '',
            // id_token: localStorage.getItem('id_token'),
            uuid: generateUUID(),
        }, arg._oHeader),
        body: arg._oBody
    };

    /** Parameter 셋팅 */
    var context = bizMOBCore.Network.config._bIsProxy
      ? bizMOBCore.Network.config._sContext === "/" ? "" : bizMOBCore.Network.config._sProxContext
      : bizMOBCore.Network.config._sContext === "/" ? "" : bizMOBCore.Network.config._sContext;
    var url = context + "/" + arg._sTrcode + ".json";
    var body = { message: JSON.stringify(message) };
    var option = bizMOBWeb.Http.bizmobOption();

    /** Mock 조회 여부에 따른 option 부가 정보 셋팅 */
    if (arg._bMock) {
        option.method = "GET";
        url = bizMOBCore.Network.config._sBaseUrl + "mock/" + arg._sTrcode + ".json?" + new URLSearchParams(body);
    }
    else {
        option.method = "POST";
        option.body = new URLSearchParams(body || {}).toString();
    }

    /** Http.fetch 호출 */
    bizMOBWeb.Http.fetch(url, option, timeout)
        .then((res) => {
            bizMOBCore.Module.logger(bizMOBWeb.Network.serviceName, "requestTr", "D", "Http Fetch Response");
            try {
                arg._fCallback && arg._fCallback(res.data, {status: res.status, statusText: res.statusText});
            }
            catch (e) {
                console.error("[Callback Error] " + e.name + ": " + e.message);
            }
        })
        .catch((error) => {

            let status = error?.status || 500
            let statusText = getHttpErrorText(status)

            arg._fCallback && arg._fCallback({
                header: Object.assign({}, message.header || {}, {
                    result: false,
                    error_code: 'NE0002',
                })},
                {status: status, statusText: statusText}
            );
        });
};

/**
 * bizMOB Web Server Request Login
 * @param {string} _sUserId 인증 받을 사용자 아이디
 * @param {string} _sPassword 인증 받을 사용자 패스워드
 * @param {string} _sTrcode 레거시 로그인 인증 전문코드
 * @param {string} _oHeader 레거시 로그인 인증 전문 Header 객체
 * @param {string} _oBody 레거시 로그인 인증 전문 Body 객체
 * @param {boolean} _bProgressEnable (default:true) 서버에 통신 요청시 progress 표시 여부( true 또는 false )
 * @param {function} _fCallback 서버와 통신 후 실행될 callback 함수
 */
 bizMOBWeb.Network.requestLogin = function(arg) {
    var timeout = 10 * 1000;
    var legacy_message = {
        header: Object.assign({}, {
            result: true,
            error_code: "",
            error_text: "",
            info_text: "",
            message_version: "",
            login_session_id: "",
            trcode: arg._sTrcode
        }, arg._oHeader),
        body: arg._oBody
    };

    /** Parameter 셋팅 */
    var url = (bizMOBCore.Network.config._sContext === "/" ? "" : bizMOBCore.Network.config._sContext) + "/LOGIN.json";
    var message = {
        header: {
            result: true,
            error_code: "",
            error_text: "",
            info_text: "",
            locale: 'ko',
            message_version: "",
            login_session_id: "",
            trcode: "LOGIN",
        },
        body: {
            os_type: 'web',
            user_id: arg._sUserId,
            password: arg._sPassword,
            legacy_message: legacy_message,
            legacy_trcode: arg._sTrcode,
            app_key: bizMOBCore.App.config._sAppKey ? bizMOBCore.App.config._sAppKey : "",
            emulator_flag: true,
            manual_phone_number: false,
            device_id: '',
            phone_number: '',
        },
    };

    bizMOBCore.Module.logger(this.serviceName, "requestLogin", "D", "Web Request Parameter");
    bizMOBCore.Module.logger(this.serviceName, "requestLogin", "D",  JSON.stringify(message));

    var body = { message: JSON.stringify(message) };
    var option = bizMOBWeb.Http.bizmobOption();

    /** Mock 조회 여부에 따른 option 부가 정보 셋팅 */
    if (arg._bMock) {
        option.method = "GET";
        url = bizMOBCore.Network.config._sBaseUrl + "mock/" + arg._sTrcode + ".json?" + new URLSearchParams(body);
        bizMOBCore.Module.logger(this.serviceName, "requestLogin", "W", "Mock Data Request.");
    }
    else {
        option.method = "POST";
        option.body = new URLSearchParams(body || {}).toString();
    }

    /** Http.fetch 호출 */
    bizMOBWeb.Http.fetch(url, option, timeout)
        .then(function(res) {
            bizMOBCore.Module.logger(bizMOBWeb.Network.serviceName, "requestTr", "D", "Http Fetch Response");

            if (!res.data.header.result) {
                bizMOBCore.Module.logger(bizMOBWeb.Network.serviceName, "requestLogin", "E", "Request Login Error: " + JSON.stringify(res.data));
            }

            try {
                arg._fCallback && arg._fCallback(res.data.header.result ? res.data.body.legacy_message : res.data);
            }
            catch (e) {
                console.error("[Callback Error] " + e.name + ": " + e.message);
            }
        })
        .catch(function(e) {
            arg._fCallback && arg._fCallback({
                header: Object.assign({}, message.header || {}, {
                    result: false,
                    error_code: 'NE0002',
                }),
            });
        });
};

/**
 *
 * 01.클래스 설명 : Http 기능 클래스
 * 02.제품구분 : bizMOB Xross
 * 03.기능(콤퍼넌트) 명 : bizMOB Http Client 관련 기능
 */
bizMOBWeb.Http = {};

/**
 * bizMOB Server용 fetch option 정보
 */
bizMOBWeb.Http.bizmobOption = function() {
    return {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Content-Language": 'en',
            "Accept-Language": 'en',
            // "Content-Language": bizMOBCore.Network.currentlocale,
            // "Accept-Language": bizMOBCore.Network.currentlocale,
            "user_key": bizMOBCore.App.config._sUserKey || ''
        },
        // mode: "cors", // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    };
};

/**
 * 요청 파라미터를 fetch 형태에 맞춰서 변경 후 요청
 * @param {object} arg 요청 객체
 * @param {string} arg.url
 * @param {number} arg.timeout 요청 제한시간
 * @param {number} arg.retries 실패시 제요청 회수
 * @param {object} arg.option fetch options
 * @param {object} arg.headers request 요청 header
 * @param {object} arg.body request 요청 body
 * @param {function} arg.callback (custom) 요청 성공/실패시 응답값 반환 함수
 * @return
 */
bizMOBWeb.Http.request = function(arg) {
    // 변수 설정
    var url = arg.url;
    var option = Object.assign({}, arg.option, {
        method: arg.method,
        headers: arg.headers,
        body: new URLSearchParams(arg.body || {}).toString(),
    });
    var timeout = arg.timeout;
    var retries = arg.retries;

    // Get 변수 처리
    if (option.method === "GET") {
        url += "?" + option.body;
        delete option.body;
    }

    // custom 변수 제거
    delete option.timeout;
    delete option.retries;

    // Http.fetch 요청
    bizMOBWeb.Http.fetch(url, option, timeout, retries)
        .then(function(res) { arg.callback && arg.callback(res); })
        .catch(function(res) { arg.callback && arg.callback(res); });
};

/**
 * timeout + retries + fetch
 * @param {string} url 요청 URL
 * @param {object} opt fetch 옵션
 * @param {number} limitTime Timeout 시간
 * @param {number} retries 재시도 횟수
 *
 * @return
 * @param {boolean} ok 성공여부
 * @param {number} status 결과 코드 (200, 404, ...)
 * @param {string} statusText 결과 Text
 * @param {object} data 데이터
 */
bizMOBWeb.Http.fetch = function(url, opt, limitTime, retries) {
    var option = opt; // fetch option 셋팅
    var limit = limitTime || 5000; // timeout 시간
    var retry = retries || 1; // 재요청 회수

    // Fetch 요청 Promise
    var attemptFetch = function(url, opt) {
        return new Promise(function(resolve, reject) {
            fetch(url, opt).then(function (res) {
                if (res.ok) {
                    resolve(res.json());
                }
                else {
                    reject(res);
                }
            }).catch(error => {
                console.log(error);
            });
        });
    };

    // Timeout 제한 Promise
    var timeout = function(timeout) {
        return new Promise(function(_, reject) {
            setTimeout(function() { reject(new Error("timeout error")); }, timeout);
        });
    };

    // Promise 객체 Return
    return new Promise(function(resolve, reject) {
        var attempts = 1;
        var executeFetch = function() {
            var fetchAttempt = Promise.race([ attemptFetch(url, option), timeout(limit) ]); // 요청 경쟁
            var maxRetry = retry; // 최대 리트라이 회수

            // Fetch 요청
            fetchAttempt
                .then(function(data) {
                    resolve({ ok: true, status: 200, statusText: "OK", data: data });
                })
                .catch(function(res) {
                    if (attempts < maxRetry) {
                        attempts++;
                        executeFetch(); // 재발송 회수만큼 재귀 호출
                    }
                    else {
                        reject({ ok: res.ok, status: res.status, statusText: res.statusText, data: null });
                    }
                });
        };

        // 요청 함수 실행
        executeFetch();
    });
};