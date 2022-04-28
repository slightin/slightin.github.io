var num = makeround()
var myDate = new Date()
var myhour = myDate.getHours()

function makeround() {
    return Math.floor(Math.random() * 100);
}

function check() {
    if (document.querySelector("#put").value < 0 || document.querySelector("#put").value > 100) {
        document.querySelector("#range").style.animation = "ishake 1s";
        document.querySelector("#headbar").innerText = "超出范围"
    }
    else if (document.querySelector("#put").value == num) {
        document.querySelector("#headbar").innerText = "猜对了"
        document.querySelector("#headbar").style.background = "cornflowerblue"
        $("#restart").removeClass('none')
        $("#put").addClass('none')
    }
    else if (document.querySelector("#put").value < num) document.querySelector("#headbar").innerText = "猜小了"
    else if (document.querySelector("#put").value > num) document.querySelector("#headbar").innerText = "猜大了"
    document.querySelector("#put").value = ""
    document.querySelector("#headbar").style.animation = "ishake 1s";

}

function restart() {
    num = makeround()
    document.querySelector("#headbar").style.background = "coral"
    document.querySelector("#headbar").innerHTML = "<b>猜数游戏</b>"
    $("#restart").addClass('none')
    $("#put").removeClass('none')
}

function timtip(hour) {
    if (hour < 3) {
        document.querySelector("#tip").innerText = "夜猫子好，反正不睡觉，不如来玩个猜数游戏吧"
    }

    else if (hour < 6) {
        document.querySelector("#tip").innerText = "凌晨好，来玩个猜数游戏吧"
    }
    else if (hour < 9) {
        document.querySelector("#tip").innerText = "早上好，来玩个猜数游戏清醒一下吧"
    }

    else if (hour < 12) {
        document.querySelector("#tip").innerText = "上午好，来玩个猜数游戏放松一下吧"
    }

    else if (hour < 13) {
        document.querySelector("#tip").innerText = "中午好，打盹前先来玩个猜数游戏吧"
    }

    else if (hour < 20) {
        document.querySelector("#tip").innerText = "下午好，来玩个猜数游戏放松一下吧"
    }

    else {
        document.querySelector("#tip").innerText = "晚上好，睡觉之前先来玩个猜数游戏吧"
    }
}

setTimeout("timtip(myhour)", 100)
