
function changeLang(lang) {

    if (lang == 1) {
        $('#langBtnEn').css('pointer-events', 'none');
        $('#langBtnHe').css('pointer-events', 'all');

        $('#usFlag').css({'pointer-events': 'none', 'opacity': .5});
        $('#isFlag').css({'pointer-events': 'all', 'opacity': 1});
    
        $('#hebCss').remove();
        $('title').html('Portfolio');
    
        $('#aboutMeHead').hide().html('About me').fadeIn('slow');
        $('#aboutMeDesc').hide().html("From a young age, I’ve always had an interest in technology. Whether it’s exploring new tech, learning additional skills in the computer, or solving technological problems. I bring these values to every experience throughout my life on a personal and professional level. To learn more about me, keep exploring my projects or reach out <a href='javascript:void(0)'" + "onclick='goToDiv(`#footer`)'" + ">directly.</a>").fadeIn('slow');
    
        $('#workHead').hide().html('Work Projects').fadeIn('slow');
    
        $('#projectsHead').hide().html('Personal Projects').fadeIn('slow');
    
        $('#theMoviesSite .projectDesc').hide().html('Find Info About Your Favorite Movies,TV Shows And Actors (Cast, Images, Videos etc..)').fadeIn('slow');
        $('#superheroesSite .projectDesc').hide().html('Search Info About Your Favorite Superheroes').fadeIn('slow');
        $('#myMovies .projectDesc').hide().html('List Of Movies That I Have In My External Drives').fadeIn('slow');
        $('#angularShoppingList .projectDesc').hide().html('Add Products To Your Shopping Cart').fadeIn('slow');
        $('#birthdays .projectDesc').hide().html('Shows What Day Of The Week Is Your Birthday For Upcoming Years').fadeIn('slow');
    
        $('#skillsHead').hide().html('Skills').fadeIn('slow');
    
        lang = 2;

    } else {
        $('#isFlag').css({'pointer-events': 'none', 'opacity': .5});
        $('#usFlag').css({'pointer-events': 'all', 'opacity': 1});
    
        $("head").append("<link rel='stylesheet' type='text/css' href='css/main_he.css' id='hebCss'/>");
        $('title').html('תיק עבודות');
    
        $('#aboutMeHead').hide().html('על עצמי').fadeIn('slow');
        $('#aboutMeDesc').hide().html("מגיל צעיר תמיד התעניינתי בטכנולוגיה. בין אם זה לחקור טק חדש, ללמוד מיומנויות נוספות במחשב או לפתור בעיות טכנולוגיות. אני מביא את הערכים הללו לכל חוויה לאורך חיי ברמה האישית והמקצועית. למידע נוסף עלי המשך לחקור את האתר שלי או תפנה/י אליי <a href='javascript:void(0)'" + "onclick='goToDiv(`#footer`)'" + ">ישירות.</a>").fadeIn('slow');
    
        $('#workHead').hide().html('פרוייקטים בעבודה').fadeIn('slow');
    
        $('#projectsHead').hide().html('פרוייקטים אישיים').fadeIn('slow');
    
        $('#theMoviesSite .projectDesc').hide().html('מצא מידע על הסרטים, תוכניות ושחקנים האהובים עליך (שחקנים, תמונות, סרטונים ועוד)').fadeIn('slow');
        $('#superheroesSite .projectDesc').hide().html('חפש מידע על גיבורי העל האהובים עליך').fadeIn('slow');
        $('#myMovies .projectDesc').hide().html('רשימה של סרטים שיש לי בכוננים חיצוניים').fadeIn('slow');
        $('#angularShoppingList .projectDesc').hide().html('רשימת קניות באמצעות אנגולר').fadeIn('slow');
        $('#birthdays .projectDesc').hide().html('מציג את היום שבו יהיה לך יומולדת בשנים הבאות').fadeIn('slow');
    
        $('#skillsHead').hide().html('כישורים').fadeIn('slow');
    
        lang = 1;
    }


}