// 退出事件
$('.return').click(function () {
    $('.close').click()
})

$('#tijiaoDd').click(function () {
    $("#address.modal").addClass('add')
})
// 个人中心切换页面
var userPage = $('#userPage>ul>li')
var userPageMain = $('#userPageMain>div')
// 初始化
window.onload = function () {
    for (var i = 0; i < userPage.length; i++) {
        userPageMain.addClass('userNone');
        $(userPageMain[0]).removeClass('userNone');
        userPage.removeClass('userAddStyle');
        $(userPage[0]).addClass('userAddStyle');
    }
    $('.userVip').addClass('userNone')
}
userPage.click(e => {
    $(userPage[0]).click(function () {
        $('.userVip').hide()
        $('.up1').show();
    })
    var index = $(e.target).index()
    for (var i = 0; i < userPage.length; i++) {
        userPageMain.addClass('userNone');
        $(userPageMain[index]).removeClass('userNone');
        userPage.removeClass('userAddStyle');
        $(userPage[index]).addClass('userAddStyle');
    }
})

$('.userPage').click(function () {
    $('.up1').hide();
    $('.userVip').show()
})

$('.return').click(function () {
    $('.close').click()
})
$('#tijiaoDd').click(function () {
    $("#address.modal").addClass('add')
})
