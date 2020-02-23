const exp = require('express');
//const path = require('path');
const logger = require('morgan');

const app = exp();

app.set( 'views', path.join(__dirname, 'html') );
app.set( 'view engine', 'html');

app.use( logger('dev') );
app.use( express.static( path.join(__dirname, 'public') ) );

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

mobiscroll.scrollview('#demo-fixed', {
    layout: 'fixed',
    itemWidth: 80,
    rtl: true
});

mobiscroll.scrollview('#demo-variable', {
    rtl: true
});

mobiscroll.scrollview('#demo-paging', {
    layout: 3,
    paging: true,
    rtl: true
});

mobiscroll.scrollview('#demo-fullpage', {
    layout: 1,
    paging: true,
    rtl: true
});

mobiscroll.form('#myform', {
    rtl: true
});