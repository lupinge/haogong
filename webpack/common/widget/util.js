//说明：util.js是封装的公共js库

// 初始化rem
function setRem(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}
setRem();
window.addEventListener('resize',setRem);

/*
 @name: checkUrl
 @author: luping
 @desc: 检测当前url中有无指定的字符串
 @param: str (要检测的字符串)
 @return: bool
*/
exports.checkUrl = function (str) {
    var url = (window.location.href).trim();
    if(url.indexOf(str.trim()) > -1){
        return true;
    }else{
        return false;
    }
};

/*
 @name:
 @author: luping
 @desc:
 @param:
 @return:
*/