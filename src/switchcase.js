
let browser ='safari';

switch (browser) {
    case 'chrome':
        console.log('launch chrome');
        break;
    case 'safari':
        console.log('launch safari');
        break;
    case 'edge':
        console.log('launch edge');
        break;
    case 'firfox':
        console.log('launch firfox');
        break;

    default:
        console.log('invalid browser...please pass correct browser.');
        break;
}

//switch case use cases:

//1. cross browser
//2. multi env: QA, Dev, UAT, STG, PROD
//3. multi user: user, Admin, Customer, Vendor, Partner
//4. Localization: Arebic, English, Spanish, French
//5. Uber: mini, sedan, SUV, luxury
//6. payment: upi, cc, db, paypal, stripe, wire
//7. api status code: 200, 400, 500, 300
//8. os: mac,windows, linux, cloud, server
//9. loan type: home, car, edu, personal