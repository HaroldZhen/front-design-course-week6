"use strict";

$(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 100);
  $(".loader").loaders();
  $('body').css('overflow', 'hidden');
  setTimeout(function () {
    $('body').css('overflow', 'auto');
    $(".loading").fadeOut(600);
  }, 800);
});
AOS.init();
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 2000
  } // direction: 'vertical',

});

function favoriteShow() {
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: '已收藏展覽',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}

function addTicket() {
  var showName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '展覽';
  Swal.fire({
    title: showName,
    inputLabel: '你想購買幾張票？',
    icon: 'question',
    input: 'range',
    inputAttributes: {
      min: 1,
      max: 10,
      step: 1
    },
    inputValue: 1
  });
}

function loginMsg() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '登入成功',
    text: '模擬登入訊息',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}

function registerMsg() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '註冊成功',
    text: '模擬註冊訊息',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}

function subscriptionMsg() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '感謝你的訂閱',
    text: '我們將定期寄送活動資訊給你',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}

function addProductMsg() {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: '已新增到購物車',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 1500
  });
}
//# sourceMappingURL=all.js.map
