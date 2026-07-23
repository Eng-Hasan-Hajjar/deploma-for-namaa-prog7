
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