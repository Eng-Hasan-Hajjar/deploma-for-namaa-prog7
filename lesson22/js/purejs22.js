
function example() {

  var z = 30;
  console.log(z); // ✅ 30
}

//console.log(z);
// ⚠️ مشكلة var في الحلقات
for (var i = 0; i < 3; i++) { 

}

//console.log(i); // ✅ 3 — var تتسرب خارج الحلقة!
for (let j = 0; j < 3; j++) { }




// ══ 1. String (النص) ══
const name = "Kurtuba ";          // بعلامات مزدوجة
const city = 'madrid';             // بعلامات مفردة
const msg  = `halla  ${name}!`; // Template Literal ✅
console.log(msg);
// ══ 2. Number (الرقم) ══
const age      = 25;       // عدد صحيح
const price    = 99.99;    // عدد عشري
const negative = -50;      // عدد سالب
const big      = 1_000_000; // فاصل للوضوح (ES2021)
const inf      = Infinity;  // ما لا نهاية
const notNum   = NaN;       // Not a Number
console.log('run variables console');
console.log(big);
console.log(inf);
console.log(notNum);
// ══ 3. Boolean (المنطقي) ══
const isActive  = true;
const isDeleted = false;
const hasAccess = true;

// ══ 4. null (قيمة فارغة متعمدة) ══
let currentUser = null;    // لا يوجد مستخدم حالياً — متعمد
let selectedItem = null;

// ══ 5. undefined (غير معرّف) ══
let notDefined;            // لم تُعطَ قيمة — undefined تلقائياً
console.log(notDefined);   // undefined

// ══ 6. BigInt (أعداد ضخمة جداً) ══
const bigNumber = 9007199254740991n; // n في النهاية
console.log(bigNumber);
// ══ 7. Symbol (معرّف فريد) ══
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false — كل Symbol فريد



// Object — كائن يحتوي على خصائص (key: value)
const user = {
  name:    'Ahmad al salem',
  age:     25,
  city:    'istanbule',
  isAdmin: false,
};


// الوصول للخصائص
console.log(user.name);      // 'أحمد محمد' — Dot notation
console.log(user['age']);    // 25 — Bracket notation
console.log(user.age);

// تعديل خاصية
user.age = 26;
// إضافة خاصية جديدة
user.email = 'ahmed@example.com';


console.log(user.isAdmin);
// حذف خاصية
delete user.isAdmin;

console.log(user.isAdmin);


// Array — مصفوفة (نوع خاص من Object)
const fruits = ['تفاح', 'موز', 'برتقال'];
const numbers = [1, 2, 3, 4, 5];
const mixed  = [1, 'نص', true, null, {name: 'أحمد'}];

console.log(fruits[0]);        // 'تفاح' — الفهرس يبدأ من 0
console.log(fruits[2]);  
console.log(fruits.length);    // 3
fruits.push('عنب');    
        // إضافة للنهاية

        console.log(fruits.length);
fruits.pop();                  // حذف من النهاية
console.log(fruits.length);





console.log(typeof 'نص');         // 'string'
console.log(typeof 42);           // 'number'
console.log(typeof true);         // 'boolean'
console.log(typeof undefined);    // 'undefined'
console.log(typeof null);         // 'object' ⚠️ خطأ تاريخي في JS
console.log(typeof {});           // 'object'
console.log(typeof []);           // 'object' (المصفوفة object أيضاً)
console.log(typeof function(){}); // 'function'
console.log(typeof Symbol());     // 'symbol'
console.log(typeof 42n);          // 'bigint'

// للتحقق من مصفوفة
console.log(Array.isArray([]));   // true ✅
console.log(Array.isArray({}));   // false

// للتحقق من null
const val = null;
console.log(val === null);        // true ✅





// إلى String
String(42);          // '42'
String(true);        // 'true'
String(null);        // 'null'
(42).toString();     // '42'
(255).toString(16);  // 'ff' (hexadecimal)

// إلى Number
Number('42');        // 42
Number('3.14');      // 3.14
Number('');          // 0
Number(true);        // 1
Number(false);       // 0
Number(null);        // 0
Number('abc');       // NaN
parseInt('42px');    // 42 (يأخذ الرقم فقط)
parseFloat('3.14m'); // 3.14

// إلى Boolean
Boolean(0);          // false
Boolean('');         // false
Boolean(null);       // false
Boolean(undefined);  // false
Boolean(NaN);        // false
// كل ما عدا هؤلاء = true (Truthy)
Boolean(1);          // true
Boolean('نص');       // true
Boolean([]);         // true (مصفوفة فارغة = true!)
Boolean({});         // true

// ══ تحويل ضمني (Implicit) — احذر منه ══
console.log('5' + 3);   // '53' — رقم تحوّل لنص
console.log('5' - 3);   // 2   — نص تحوّل لرقم
console.log('5' * '2'); // 10  — كلاهما تحوّل لرقم
console.log(true + 1);  // 2   — true = 1





//العمليات الحسابية (Arithmetic)
const a = 10;
const b = 3;

console.log(a + b);   // 13  — الجمع
console.log(a - b);   // 7   — الطرح
console.log(a * b);   // 30  — الضرب
console.log(a / b);   // 3.333... — القسمة
console.log(a % b);   // 1   — باقي القسمة (Modulo)
console.log(a ** b);  // 1000 — الأس (10³)
console.log(Math.floor(a / b)); // 3 — قسمة صحيحة

// عمليات الزيادة والنقصان
let count = 0;
count++;         // count = 1 (Post-increment)
++count;         // count = 2 (Pre-increment)
count--;         // count = 1 (Post-decrement)
--count;         // count = 0 (Pre-decrement)

// الفرق بين Pre وPost
let x = 5;
console.log(x++); // 5 — يُطبع أولاً ثم يزيد
console.log(x);   // 6
console.log(++x); // 7 — يزيد أولاً ثم يُطبع



let score = 100;

score = 100;    // إسناد عادي
score += 10;    // score = score + 10  → 110
score -= 5;     // score = score - 5   → 105
score *= 2;     // score = score * 2   → 210
score /= 3;     // score = score / 3   → 70
score %= 4;     // score = score % 4   → 2
score **= 3;    // score = score ** 3  → 8

// Nullish Coalescing Assignment (ES2021)
let name2 = null;
name2 ??= 'مجهول';  // يُسند فقط إذا كانت null أو undefined
console.log(name2); // 'مجهول'

// Logical OR Assignment
let user2 = '';
user2 ||= '';   // يُسند إذا كانت falsy
console.log(user2); // 'زائر'





// ══ المقارنة الضعيفة == (تحوّل الأنواع) ══
console.log(5 == '5');   // true  ⚠️ (رقم ونص متساويان!)
console.log(0 == false); // true  ⚠️
console.log(null == undefined); // true ⚠️

// ══ المقارنة الصارمة === (لا تحوّل) ✅ استخدم دائماً ══
console.log(5 === '5');  // false ✅ (نوع مختلف)
console.log(5 === 5);    // true  ✅
console.log(0 === false);// false ✅

// بقية عوامل المقارنة
console.log(10 > 5);    // true  — أكبر من
console.log(10 < 5);    // false — أصغر من
console.log(10 >= 10);  // true  — أكبر أو يساوي
console.log(10 <= 9);   // false — أصغر أو يساوي
console.log(5 !== '5'); // true  — لا يساوي (صارم)
console.log(5 != 6);    // true  — لا يساوي (ضعيف)

// مقارنة النصوص (ترتيب أبجدي)
console.log('أ' < 'ب');  // true
console.log('z' > 'a');  // true
