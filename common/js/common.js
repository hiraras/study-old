/**
 * Created by jdy on 2018/1/2.
 */
var isTOIE;

initAjaxSetting();

initisTOIE(); //判断是否为雅思托福

judgePageState();

function initAjaxSetting() {
    if(localStorage.getItem("auth") == null){
        window.location.href = '../index.html';
    }
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader("auth", localStorage.getItem("auth"));
        }
    });
}

function initisTOIE() {
    isTOIE = localStorage.getItem("isTOIE") === "false" ? false : true;
}

function judgePageState() {
    var path = "../",
        addr = ".html";
    var stateData = {
        "405": "index", //未登录
        "406": "trial-cultivate/success", //已经是在线老师
        "407": "index", //非法访问
        "409": "trial-written/fail", //基础题没次数(一定是失败)
        "412": "home", //基本信息审核未通过
        "413": isTOIE ? "trial-IELTS/start" : "trial-written/start", //未参加基础题测试
        "416": "trial-equipment/equApply", //设备未购买
        "417": isTOIE ? "trial-IELTS/test" : "trial-written/test", //基础题正在进行
        "418": "trial-teaching/step-01", //未参加试讲
        "419": "trial-teaching/step-02", //试讲题正在进行
        "420": "trial-teaching/fail", //试讲题无次数(一定是失败)
        "421": "trial-cultivate/start", //未参加培训题
        "422": "trial-cultivate/test", //培训题正在进行
        "423": "trial-teaching/pending-review", //试讲题等待审核
        "424": "home", //教学经验未提交
        "425": "trial-cultivate/result", //培训题未通过
        "431": "trial-written/start", //基础题未通过(还有一次机会)
        "432": "trial-teaching/step-01", //录音题未通过(一定失败)
        "433": "trial-IELTS/audit", //雅思托福等待审核
        "435": isTOIE ? "trial-IELTS/success" : "trial-written/result", //基础题未查看 成功
        "436": isTOIE ? "trial-IELTS/fail" : "trial-written/result", //基础题未查看 失败
        "437": "trial-teaching/success", //试讲题未查看    成功
        "438": "trial-teaching/review-fail", //试讲题未查看    失败
        "439": "trial-cultivate/success", //培训题未查看    成功
        "440": "trial-cultivate/result" //培训题未查看    失败
    };
    $.ajax({
        type: "get",
        url: "/jyxb-quiz/external/online-quiz/get-scholar-status",
        success: function(data) {
            var state = data.code;
            if (stateData[state]) {
                var skipUrl = stateData[state] + addr;
                // var urlPath = window.location.pathname.substr(1);
                var urlPath = window.location.pathname.split(
                    "/teacher-assessment-system/"
                )[1];
                console.log(urlPath);
                if (skipUrl == urlPath) {
                    return;
                }
                if (state == 413 && urlPath == "trial-written/test.html") {
                    return;
                }
                if (state == 421 && urlPath == "trial-cultivate/test.html") {
                    return;
                }
                if (state == 418 && urlPath == "trial-teaching/step-02.html") {
                    return;
                }
                window.location.href = path + skipUrl;
            }
        }
    });
}
