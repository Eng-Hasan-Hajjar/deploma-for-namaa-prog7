const PI = 3.14159;
const SITE_NAME = 'أكاديمية التقنية';
const MAX_USERS = 100;

const TITEL = "Namaa Acadimi";



let userName = 'أحمد';
let score = 0;
let isLoggedIn = false;
let mark_project = 90;

console.log(mark_project);
mark_project=80;
console.log(mark_project);

mark_project= mark_project + 5;
console.log(mark_project);

console.log(TITEL);





let user_age = 25;         // snake_case
let userAge = 25;          // camelCase ✅ (المُفضَّل في JS)
let _privateVar = 'خاص';
let $price = 99.99;

let عمر = 25;              // عربي (مسموح لكن غير شائع)



console.log(userName);
console.log(user_age);
console.log(_privateVar);
console.log($price);


// أفضل الممارسات في التسمية:
const MAX_SIZE = 100;      // الثوابت بالأحرف الكبيرة
let currentUser = null;    // camelCase للمتغيرات
function getUserName() {}  // camelCase للدوال
class UserProfile {}       // PascalCase للـ Classes


 let x = 10;
{
 
  const y = 20;
  console.log(x); // ✅ 10
}

x=x+10
console.log(x); 