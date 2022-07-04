
function changeToHeb() {

    $('#langBtnHe').css('pointer-events', 'none');
    $('#langBtnEn').css('pointer-events', 'all');

    $("head").append("<link rel='stylesheet' type='text/css' href='css/main_he.css' id='hebCss'/>");
    $('title').html('עמרי שלו - קורות חיים');

    $('#nameHead').hide().html('עמרי שלו - קורות חיים').fadeIn('slow');
    $('#aboutMeLink').hide().html('על עצמי').fadeIn('slow');
    $('#experienceLink').hide().html('ניסיון').fadeIn('slow');
    $('#educationLink').hide().html('לימודים').fadeIn('slow');
    $('#projectsLink').hide().html('פרוייקטים').fadeIn('slow');
    $('#skillsLink').hide().html('כישורים').fadeIn('slow');
    $('#contactLink').hide().html('צור קשר').fadeIn('slow');

    $('#aboutMeLinkMenu').hide().html('על עצמי').fadeIn('slow');
    $('#experienceLinkMenu').hide().html('ניסיון').fadeIn('slow');
    $('#educationLinkMenu').hide().html('לימודים').fadeIn('slow');
    $('#projectsLinkMenu').hide().html('פרוייקטים').fadeIn('slow');
    $('#skillsLinkMenu').hide().html('כישורים').fadeIn('slow');
    $('#contactLinkMenu').hide().html('צור קשר').fadeIn('slow');

    $('#aboutMeHead').hide().html('על עצמי').fadeIn('slow');
    $('#aboutMeDesc').hide().html("מגיל צעיר תמיד התעניינתי בטכנולוגיה. בין אם זה לחקור טק חדש, ללמוד מיומנויות נוספות במחשב או לפתור בעיות טכנולוגיות. אני מביא את הערכים הללו לכל חוויה לאורך חיי ברמה האישית והמקצועית. למידע נוסף עלי המשך לחקור את האתר שלי או תפנה/י אליי <a href='javascript:void(0)'" + "onclick='goToDiv(`#footer`)'" + ">ישירות.</a>").fadeIn('slow');
 
    $('#experienceHead').hide().html('ניסיון').fadeIn('slow');
    $('#jobOneHeader').hide().html('©011Global - מפתח פרונט-אנד').fadeIn('slow');
    $('#jobOnePeriod').hide().html('אוקטובר 2018 - היום').fadeIn('slow');

    $('#jobOneDesc1').hide().html('פיתוח ווב ע"י HTML5, javaScript, jQuery ו SQL').fadeIn('slow');
    $('#jobOneDesc2').hide().html('עיצוב ווב ע"י CSS 3.0').fadeIn('slow');

    $('.experienceDesc li:first-child').hide().html("פיתוח ווב באמצעות HTML, ג'אווה סקריפט, jQuery וSQL").fadeIn('slow');
    $('.experienceDesc li:last-child').hide().html("עיצוב אתרים באמצעות CSS 3.0").fadeIn('slow');

    $('#educationHead').hide().html('לימודים').fadeIn('slow');
    $('#schoolOneHeader').hide().html("ג'ון ברייס© - מפתח פול סטאק").fadeIn('slow');
    $('#schoolOnePeriod').hide().html('אוקטובר 2017 - אוגוסט 2018').fadeIn('slow');

    
    $('#schoolOneDesc1').hide().html('פיתוח ווב ע"י HTML5, javaScript, jQuery ו SQL').fadeIn('slow');
    $('#schoolOneDesc2').hide().html('עיצוב ווב ע"י CSS 3.0').fadeIn('slow');

    $('#schoolTwoDesc1').hide().html('פיתוח ווב ע"י HTML5 ו javaScript').fadeIn('slow');
    $('#schoolTwoDesc2').hide().html('עיצוב ווב ע"י CSS 3.0').fadeIn('slow');
    $('#schoolTwoDesc3').hide().html('פיתוח אפליקציות לאנדרואיד ו iOS').fadeIn('slow');

    $('.educationDesc li:first-child').hide().html("פיתוח ווב באמצעות HTML, ג'אווה סקריפט, jQuery, אנגולר 6, Node.js, PHP וSQL").fadeIn('slow');
    $('.educationDesc li:nth-child(2)').hide().html("עיצוב אתרים באמצעות CSS 3.0").fadeIn('slow');
    $('#schoolTwoHeader').hide().html("האקר יו© - פיתוח אפליקציות").fadeIn('slow');
    $('.educationDesc li:nth-child(3)').hide().html('פיתוח אפליקציות אנדרואיד וiOS').fadeIn('slow');

    $('#projectsHead').hide().html('פרויקטים אישיים').fadeIn('slow');
    $('#omrisMoviesProjectHeader').hide().html('הסרטים שלי').fadeIn('slow');
    $('#omrisMoviesProjectDesc').html('מצא מידע על הסרטים, תוכניות ושחקנים האהובים עליך (שחקנים, תמונות, סרטונים ועוד) (פרוייקט אנגולר)').fadeIn('slow');
    $('#superheroProjectHeader').hide().html('גיבורי על').fadeIn('slow');
    $('#superheroProjectDesc').hide().html('חפש מידע על גיבורי העל האהובים עליך').fadeIn('slow');
    $('#myMoviesProjectHeader').hide().html('רשימת הסרטים שלי').fadeIn('slow');
    $('#myMoviesProjectDesc').hide().html('רשימה של סרטים שיש לי בכוננים חיצוניים').fadeIn('slow');

    $('#movieInfoProjectHeader').hide().html('סרטים').fadeIn('slow');
    $('#movieInfoProjectDesc').html('מצא מידע על הסרטים, תוכניות ושחקנים האהובים עליך (שחקנים, תמונות, סרטונים ועוד)').fadeIn('slow');

    $('#countriesProjectHeader').hide().html('מדינות').fadeIn('slow');
    $('#countriesProjectDesc').hide().html('חפש מידע על מדינות (עיר בירה, מטבע, שער הדולר & יורו ועוד)').fadeIn('slow');
    $('#birthdaysProjectHeader').hide().html('ימי הולדת').fadeIn('slow');
    $('#birthdaysProjectDesc').hide().html('מציג את היום שבו יהיה לך יומולדת בשנים הבאות').fadeIn('slow');
    $('#shoppingListProjectHeader').hide().html('רשימת קניות באמצעות אנגולר').fadeIn('slow');
    $('#shoppingListProjectDesc').hide().html('הוסף מוצרים לעגלת הקניות שלך').fadeIn('slow');

    $('#skillsHead').hide().html('הכישורים שלי').fadeIn('slow');

    $('.sentenceTitle').hide().html('"הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו"').fadeIn('slow');
    $('.sentenceDesc').hide().html('אברהם לינקולן').fadeIn('slow');

    $('#nameLbl').hide().html('שם').fadeIn('slow');
    $('#emailLbl').hide().html('אימייל').fadeIn('slow');
    $('#contentFormLbl').hide().html('תוכן ההודעה').fadeIn('slow');
    $('#contactForm h2').hide().html('צור קשר').fadeIn('slow');
    $('#submitBtn').hide().html('שלח').fadeIn('slow');
    $('#emailSentPop h2').hide().html('אימייל נשלח').fadeIn('slow');
    $('.popupBtn').hide().html('סגור').fadeIn('slow');
    
    $('#phone').hide().html('+טלפון: 972508862867').fadeIn('slow');
    $('#email').hide().html('אימייל: omriknight9@gmail.com').fadeIn('slow');
    $('#pdf').hide().html('קורות חיים').fadeIn('slow');

    $('.sidebar').css({ 'left': 'unset', right: '-1000px' });
    lang = 2;
}

function changeToEng() {
    $('#langBtnEn').css('pointer-events', 'none');
    $('#langBtnHe').css('pointer-events', 'all');

    $('#hebCss').remove();
    $('title').html('Omri Shalev - CV');

    $('#nameHead').hide().html('Omri Shalev - CV').fadeIn('slow');
    $('#aboutMeLink').hide().html('About me').fadeIn('slow');
    $('#experienceLink').hide().html('Experience').fadeIn('slow');
    $('#educationLink').hide().html('Education').fadeIn('slow');
    $('#projectsLink').hide().html('Projects').fadeIn('slow');
    $('#skillsLink').hide().html('Skills').fadeIn('slow');
    $('#contactLink').hide().html('Contact').fadeIn('slow');

    $('#aboutMeLinkMenu').hide().html('About me').fadeIn('slow');
    $('#experienceLinkMenu').hide().html('Experience').fadeIn('slow');
    $('#educationLinkMenu').hide().html('Education').fadeIn('slow');
    $('#projectsLinkMenu').hide().html('Projects').fadeIn('slow');
    $('#skillsLinkMenu').hide().html('Skills').fadeIn('slow');
    $('#contactLinkMenu').hide().html('Contact').fadeIn('slow');

    $('#aboutMeHead').hide().html('About Me').fadeIn('slow');
    $('#aboutMeDesc').hide().html("From a young age, I’ve always had an interest in technology. Whether it’s exploring new tech, learning additional skills in the computer, or solving technological problems. I bring these values to every experience throughout my life on a personal and professional level. To learn more about me, keep exploring my site or reach out <a href='javascript:void(0)'" + "onclick='goToDiv(`#footer`)'" + ">directly.</a>").fadeIn('slow');
    $('#experienceHead').hide().html('Experience').fadeIn('slow');
    $('#jobOneHeader').hide().html('011Global© - Front-End Developer').fadeIn('slow');
    $('#jobOnePeriod').hide().html('October 2018 - Today').fadeIn('slow');
    $('#jobOneDesc1').hide().html('Web Development by HTML 5, JavaScript, jQuery and SQL').fadeIn('slow');
    $('#jobOneDesc2').hide().html('Web Design by CSS 3.0').fadeIn('slow');

    $('#schoolOneDesc1').hide().html('Web Development by HTML 5, JavaScript, jQuery and SQL').fadeIn('slow');
    $('#schoolOneDesc2').hide().html('Web Design by CSS 3.0').fadeIn('slow');

    $('#schoolTwoDesc1').hide().html('Web Development by HTML 5 and JavaScript').fadeIn('slow');
    $('#schoolTwoDesc2').hide().html('Web Design by CSS 3.0').fadeIn('slow');
    $('#schoolTwoDesc3').hide().html('Android & iOS Apps Development').fadeIn('slow');

    $('.experienceDesc div ul li:first-child').hide().html('Web Development by HTML 5, JavaScript, jQuery and SQL').fadeIn('slow');
    $('.experienceDesc div ul li:last-child').html('Web Design by CSS 3.0').fadeIn('slow');
    
    $('#educationHead').hide().html('Education').fadeIn('slow');
    $('#schoolOneHeader').hide().html('John Bryce© - Full Stack Web Developer').fadeIn('slow');
    $('#schoolOnePeriod').hide().html('October 2017 - August 2018').fadeIn('slow');
    $('.educationDesc li:first-child').hide().html('Web Development by HTML 5, JavaScript, jQuery, Angular 4, Node.js, PHP and SQL').fadeIn('slow');
    $('.educationDesc li:nth-child(2)').hide().html('Web Design by CSS 3.0').fadeIn('slow');
    $('#schoolTwoHeader').hide().html("HackerU© - Application Development ").fadeIn('slow');
    $('.educationDesc li:nth-child(3)').hide().html('Android & iOS Apps Development').fadeIn('slow');

    $('#projectsHead').hide().html('Personal Projects').fadeIn('slow');
    $('#omrisMoviesProjectHeader').hide().html('omris-movies').fadeIn('slow');
    $('#omrisMoviesProjectDesc').hide().html('Find Info About Your Favorite Movies,TV Shows And Actors (Cast, Images, Videos etc..) (Angular Project)').fadeIn('slow');
    $('#superheroProjectHeader').hide().html('Superheroes').fadeIn('slow');
    $('#superheroProjectDesc').hide().html('Search Info About Your Favorite Superheroes').fadeIn('slow');
    $('#myMoviesProjectHeader').hide().html('My Movie List').fadeIn('slow');
    $('#myMoviesProjectDesc').hide().html('List Of Movies That I Have In My External Drives').fadeIn('slow');

    $('#movieInfoProjectHeader').hide().html('MovieInfo').fadeIn('slow');
    $('#movieInfoProjectDesc').hide().html('Find Info About Your Favorite Movies,TV Shows And Actors (Cast, Images, Videos etc..)').fadeIn('slow');

    $('#countriesProjectHeader').hide().html('Countries').fadeIn('slow');
    $('#countriesProjectDesc').hide().html('Search Info About Countries (Captial, Currency, Dollar & Euro Rate etc..)').fadeIn('slow');
    $('#birthdaysProjectHeader').hide().html('Birthdays').fadeIn('slow');
    $('#birthdaysProjectDesc').hide().html('Shows What Day Of The Week Is Your Birthday For Upcoming Years').fadeIn('slow');
    $('#shoppingListProjectHeader').hide().html('Angular Shopping List').fadeIn('slow');
    $('#shoppingListProjectDesc').hide().html('Add Products To Your Shopping Cart').fadeIn('slow');
    
    $('#skillsHead').hide().html('My Skills').fadeIn('slow');

    $('.sentenceTitle').hide().html('"The best way to predict the future is to create it"').fadeIn('slow');
    $('.sentenceDesc').hide().html('Abraham Lincoln').fadeIn('slow');

    $('#nameLbl').hide().html('Name').fadeIn('slow');
    $('#emailLbl').hide().html('Email').fadeIn('slow');
    $('#contentFormLbl').hide().html('Your Message Here').fadeIn('slow');
    $('#contactForm h2').hide().html('Contact').fadeIn('slow');
    $('#submitBtn').hide().html('Submit').fadeIn('slow');
    $('#emailSentPop h2').hide().html('Email Sent').fadeIn('slow');
    $('.popupBtn').hide().html('Close').fadeIn('slow');
    
    $('#phone').hide().html('Phone: +972508862867').fadeIn('slow');
    $('#email').hide().html('Email: omriknight9@gmail.com').fadeIn('slow');
    $('#pdf').hide().html('Curriculum Vitae').fadeIn('slow');

    $('.sidebar').css({'right': 'unset', 'left': '-1000px'});

    lang = 1;
}
