$(function () {
    $("a.about2,a.skills2,a.portfolio2,a.footer2").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
      return false;
       });
    });

    $('body').append('<div class="upbtn"></div>');            
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.upbtn').css({
            bottom: '15px'
        });
        } else {
        $('.upbtn').css({
            bottom: '-80px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

let rus = {
    hello: 'Главная',
    abouten: 'Обо мне',
    skillsen: 'Навыки',
    portfolio2en: 'Портфолио',
    footer2en: 'Связь со мной',
    Denis: 'Денис Новик',
    preinfoen: 'UX | UI дизайнер 24 года, Минск',
    meeten: 'Привет, я Денис – UX/UI дизайнер из Минска. Я интересуюсь дизайном и всем, что с ним связано. <br/><br/> Я учусь на курсах "Веб- и мобильный дизайн интерфейсы" в IT-Академии. <br/><br/>Готовы к реализации отличных проектов с замечательными людьми.',
    programsen: 'Я работаю в таких программах, как',
    linktositeen: 'Онлайн магазин вещей - Домашняя страница',
    reeboken: 'Концепт онлайн-магазина Reebok',
    brauneng: 'Концепт одностраничного сайта Braun',
    feedbacken: 'Хотите узнать больше или просто поболтать?<br/> Добро пожаловать!',
    btnen: 'Отправить сообщение',
    socialinfoen: 'Ставьте лайки на LinkedIn, Instagram, Behance, Dribble'
  };
  
  let eng = {
    hello: 'Home',
    abouten: 'About me',
    skillsen: 'Skills',
    portfolio2en: 'Portfolio',
    footer2en: 'Contacts',
    Denis: 'Denis Novik',
    preinfoen: 'UX | UI designer 24 years old, Minsk',
    meeten: 'Hi, Im Denis – UX/UI designer from Minsk. Im interested in design and everything connected with it. <br/> <br/> Im studying at courses "Web and mobile design interfaces" in IT-Academy. <br/><br/>Ready to implement excellent projects with wonderful people.',
    programsen: 'I work in such programs as',
    linktositeen: 'Online fashion store - Homepage',
    reeboken: 'Reebok Store - Concept',
    brauneng: 'Braun Landing Page - Concept',
    feedbacken: 'Want to know more or just chat? <br/>You are welcome!',
    btnen: 'Send message',
    socialinfoen: 'Like me on </br> LinkedIn, Instagram, Behance, Dribble'
  };
  
  changeLagnuage();
  
  function changeLagnuage(){
    let language = lang.checked ? rus : eng;
    document.querySelectorAll('[text]').forEach(el => {
      el.innerHTML = language[el.getAttribute('text')];
    })
  }