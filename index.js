var divs = document.querySelectorAll('span.q-text.qu-cursor--pointer.qt_read_more.qu-color--blue_dark.qu-fontFamily--sans.qu-bg--white.qu-hover--textDecoration--underline');

[].forEach.call(divs, function(div) {

    if (div.innerText.indexOf('more') > -1) {
        console.log(div.innerText);
        div.click();
    }
    

});
