// داده کامل برای تمامی ۱۱۸ عنصر با نام‌های فارسی
const elements = [
    // ردیف ۱
    { number: 1, symbol: "H", name: "هیدروژن", category: "nonmetal", group: 1, period: 1, color: "#9d65c9", reactivity: "high", electronegativity: 2.20, oxidationStates: [+1, -1], atomicWeight: 1.008 },
    { number: 2, symbol: "He", name: "هلیوم", category: "noble", group: 18, period: 1, color: "#a0c8ff", reactivity: "very_low", electronegativity: null, oxidationStates: [0], atomicWeight: 4.003 },

    // ردیف ۲
    { number: 3, symbol: "Li", name: "لیتیم", category: "alkali", group: 1, period: 2, color: "#4facfe", reactivity: "very_high", electronegativity: 0.98, oxidationStates: [+1], atomicWeight: 6.941 },
    { number: 4, symbol: "Be", name: "بریلیم", category: "alkaline", group: 2, period: 2, color: "#00f2fe", reactivity: "low", electronegativity: 1.57, oxidationStates: [+2], atomicWeight: 9.012 },
    { number: 5, symbol: "B", name: "بور", category: "metalloid", group: 13, period: 2, color: "#ffe66d", reactivity: "low", electronegativity: 2.04, oxidationStates: [+3], atomicWeight: 10.81 },
    { number: 6, symbol: "C", name: "کربن", category: "nonmetal", group: 14, period: 2, color: "#9d65c9", reactivity: "medium", electronegativity: 2.55, oxidationStates: [+4, +2, -4], atomicWeight: 12.01 },
    { number: 7, symbol: "N", name: "نیتروژن", category: "nonmetal", group: 15, period: 2, color: "#9d65c9", reactivity: "low", electronegativity: 3.04, oxidationStates: [-3, +1, +2, +3, +4, +5], atomicWeight: 14.01 },
    { number: 8, symbol: "O", name: "اکسیژن", category: "nonmetal", group: 16, period: 2, color: "#9d65c9", reactivity: "high", electronegativity: 3.44, oxidationStates: [-2, -1], atomicWeight: 16.00 },
    { number: 9, symbol: "F", name: "فلوئور", category: "halogen", group: 17, period: 2, color: "#ff9966", reactivity: "very_high", electronegativity: 3.98, oxidationStates: [-1], atomicWeight: 19.00 },
    { number: 10, symbol: "Ne", name: "نئون", category: "noble", group: 18, period: 2, color: "#a0c8ff", reactivity: "very_low", electronegativity: null, oxidationStates: [0], atomicWeight: 20.18 },

    // ردیف ۳
    { number: 11, symbol: "Na", name: "سدیم", category: "alkali", group: 1, period: 3, color: "#4facfe", reactivity: "very_high", electronegativity: 0.93, oxidationStates: [+1], atomicWeight: 22.99 },
    { number: 12, symbol: "Mg", name: "منیزیم", category: "alkaline", group: 2, period: 3, color: "#00f2fe", reactivity: "high", electronegativity: 1.31, oxidationStates: [+2], atomicWeight: 24.31 },
    { number: 13, symbol: "Al", name: "آلومینیوم", category: "post-transition", group: 13, period: 3, color: "#4ecdc4", reactivity: "medium", electronegativity: 1.61, oxidationStates: [+3], atomicWeight: 26.98 },
    { number: 14, symbol: "Si", name: "سیلیسیم", category: "metalloid", group: 14, period: 3, color: "#ffe66d", reactivity: "low", electronegativity: 1.90, oxidationStates: [+4, -4], atomicWeight: 28.09 },
    { number: 15, symbol: "P", name: "فسفر", category: "nonmetal", group: 15, period: 3, color: "#9d65c9", reactivity: "medium", electronegativity: 2.19, oxidationStates: [-3, +3, +5], atomicWeight: 30.97 },
    { number: 16, symbol: "S", name: "گوگرد", category: "nonmetal", group: 16, period: 3, color: "#9d65c9", reactivity: "medium", electronegativity: 2.58, oxidationStates: [-2, +2, +4, +6], atomicWeight: 32.07 },
    { number: 17, symbol: "Cl", name: "کلر", category: "halogen", group: 17, period: 3, color: "#ff9966", reactivity: "high", electronegativity: 3.16, oxidationStates: [-1, +1, +3, +5, +7], atomicWeight: 35.45 },
    { number: 18, symbol: "Ar", name: "آرگون", category: "noble", group: 18, period: 3, color: "#a0c8ff", reactivity: "very_low", electronegativity: null, oxidationStates: [0], atomicWeight: 39.95 },

    // ردیف ۴
    { number: 19, symbol: "K", name: "پتاسیم", category: "alkali", group: 1, period: 4, color: "#4facfe", reactivity: "very_high", electronegativity: 0.82, oxidationStates: [+1], atomicWeight: 39.10 },
    { number: 20, symbol: "Ca", name: "کلسیم", category: "alkaline", group: 2, period: 4, color: "#00f2fe", reactivity: "high", electronegativity: 1.00, oxidationStates: [+2], atomicWeight: 40.08 },
    { number: 21, symbol: "Sc", name: "اسکاندیم", category: "transition", group: 3, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.36, oxidationStates: [+3], atomicWeight: 44.96 },
    { number: 22, symbol: "Ti", name: "تیتانیوم", category: "transition", group: 4, period: 4, color: "#ff6b6b", reactivity: "low", electronegativity: 1.54, oxidationStates: [+2, +3, +4], atomicWeight: 47.87 },
    { number: 23, symbol: "V", name: "وانادیم", category: "transition", group: 5, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.63, oxidationStates: [+2, +3, +4, +5], atomicWeight: 50.94 },
    { number: 24, symbol: "Cr", name: "کروم", category: "transition", group: 6, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.66, oxidationStates: [+2, +3, +6], atomicWeight: 52.00 },
    { number: 25, symbol: "Mn", name: "منگنز", category: "transition", group: 7, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.55, oxidationStates: [+2, +3, +4, +6, +7], atomicWeight: 54.94 },
    { number: 26, symbol: "Fe", name: "آهن", category: "transition", group: 8, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.83, oxidationStates: [+2, +3], atomicWeight: 55.85 },
    { number: 27, symbol: "Co", name: "کبالت", category: "transition", group: 9, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.88, oxidationStates: [+2, +3], atomicWeight: 58.93 },
    { number: 28, symbol: "Ni", name: "نیکل", category: "transition", group: 10, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.91, oxidationStates: [+2], atomicWeight: 58.69 },
    { number: 29, symbol: "Cu", name: "مس", category: "transition", group: 11, period: 4, color: "#ff6b6b", reactivity: "low", electronegativity: 1.90, oxidationStates: [+1, +2], atomicWeight: 63.55 },
    { number: 30, symbol: "Zn", name: "روی", category: "transition", group: 12, period: 4, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.65, oxidationStates: [+2], atomicWeight: 65.38 },
    { number: 31, symbol: "Ga", name: "گالیم", category: "post-transition", group: 13, period: 4, color: "#4ecdc4", reactivity: "low", electronegativity: 1.81, oxidationStates: [+1, +3], atomicWeight: 69.72 },
    { number: 32, symbol: "Ge", name: "ژرمانیم", category: "metalloid", group: 14, period: 4, color: "#ffe66d", reactivity: "low", electronegativity: 2.01, oxidationStates: [+2, +4], atomicWeight: 72.63 },
    { number: 33, symbol: "As", name: "آرسنیک", category: "metalloid", group: 15, period: 4, color: "#ffe66d", reactivity: "low", electronegativity: 2.18, oxidationStates: [-3, +3, +5], atomicWeight: 74.92 },
    { number: 34, symbol: "Se", name: "سلنیوم", category: "nonmetal", group: 16, period: 4, color: "#9d65c9", reactivity: "medium", electronegativity: 2.55, oxidationStates: [-2, +2, +4, +6], atomicWeight: 78.97 },
    { number: 35, symbol: "Br", name: "برم", category: "halogen", group: 17, period: 4, color: "#ff9966", reactivity: "medium", electronegativity: 2.96, oxidationStates: [-1, +1, +3, +5], atomicWeight: 79.90 },
    { number: 36, symbol: "Kr", name: "کریپتون", category: "noble", group: 18, period: 4, color: "#a0c8ff", reactivity: "very_low", electronegativity: 3.00, oxidationStates: [0, +2], atomicWeight: 83.80 },

    // ردیف ۵
    { number: 37, symbol: "Rb", name: "روبیدیم", category: "alkali", group: 1, period: 5, color: "#4facfe", reactivity: "very_high", electronegativity: 0.82, oxidationStates: [+1], atomicWeight: 85.47 },
    { number: 38, symbol: "Sr", name: "استرانسیم", category: "alkaline", group: 2, period: 5, color: "#00f2fe", reactivity: "high", electronegativity: 0.95, oxidationStates: [+2], atomicWeight: 87.62 },
    { number: 39, symbol: "Y", name: "ایتریم", category: "transition", group: 3, period: 5, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.22, oxidationStates: [+3], atomicWeight: 88.91 },
    { number: 40, symbol: "Zr", name: "زیرکونیم", category: "transition", group: 4, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 1.33, oxidationStates: [+4], atomicWeight: 91.22 },
    { number: 41, symbol: "Nb", name: "نیوبیم", category: "transition", group: 5, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 1.60, oxidationStates: [+2, +3, +4, +5], atomicWeight: 92.91 },
    { number: 42, symbol: "Mo", name: "مولیبدن", category: "transition", group: 6, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 2.16, oxidationStates: [+2, +3, +4, +5, +6], atomicWeight: 95.95 },
    { number: 43, symbol: "Tc", name: "تکنسیوم", category: "transition", group: 7, period: 5, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.90, oxidationStates: [+4, +7], atomicWeight: 98 },
    { number: 44, symbol: "Ru", name: "روتنیم", category: "transition", group: 8, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 2.20, oxidationStates: [+2, +3, +4, +6, +8], atomicWeight: 101.07 },
    { number: 45, symbol: "Rh", name: "رودیم", category: "transition", group: 9, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 2.28, oxidationStates: [+2, +3, +4], atomicWeight: 102.91 },
    { number: 46, symbol: "Pd", name: "پالادیم", category: "transition", group: 10, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 2.20, oxidationStates: [+2, +4], atomicWeight: 106.42 },
    { number: 47, symbol: "Ag", name: "نقره", category: "transition", group: 11, period: 5, color: "#ff6b6b", reactivity: "low", electronegativity: 1.93, oxidationStates: [+1], atomicWeight: 107.87 },
    { number: 48, symbol: "Cd", name: "کادمیم", category: "transition", group: 12, period: 5, color: "#ff6b6b", reactivity: "medium", electronegativity: 1.69, oxidationStates: [+2], atomicWeight: 112.41 },
    { number: 49, symbol: "In", name: "ایندیم", category: "post-transition", group: 13, period: 5, color: "#4ecdc4", reactivity: "low", electronegativity: 1.78, oxidationStates: [+1, +3], atomicWeight: 114.82 },
    { number: 50, symbol: "Sn", name: "قلع", category: "post-transition", group: 14, period: 5, color: "#4ecdc4", reactivity: "low", electronegativity: 1.96, oxidationStates: [+2, +4], atomicWeight: 118.71 },
    { number: 51, symbol: "Sb", name: "آنتیموان", category: "metalloid", group: 15, period: 5, color: "#ffe66d", reactivity: "low", electronegativity: 2.05, oxidationStates: [-3, +3, +5], atomicWeight: 121.76 },
    { number: 52, symbol: "Te", name: "تلوریوم", category: "metalloid", group: 16, period: 5, color: "#ffe66d", reactivity: "low", electronegativity: 2.10, oxidationStates: [-2, +2, +4, +6], atomicWeight: 127.60 },
    { number: 53, symbol: "I", name: "ید", category: "halogen", group: 17, period: 5, color: "#ff9966", reactivity: "low", electronegativity: 2.66, oxidationStates: [-1, +1, +3, +5, +7], atomicWeight: 126.90 },
    { number: 54, symbol: "Xe", name: "زنون", category: "noble", group: 18, period: 5, color: "#a0c8ff", reactivity: "very_low", electronegativity: 2.60, oxidationStates: [0, +2, +4, +6, +8], atomicWeight: 131.29 },

    // ردیف ۶
    { number: 55, symbol: "Cs", name: "سزیم", category: "alkali", group: 1, period: 6, color: "#4facfe", reactivity: "very_high", electronegativity: 0.79, oxidationStates: [+1], atomicWeight: 132.91 },
    { number: 56, symbol: "Ba", name: "باریم", category: "alkaline", group: 2, period: 6, color: "#00f2fe", reactivity: "high", electronegativity: 0.89, oxidationStates: [+2], atomicWeight: 137.33 },
    { number: 57, symbol: "La", name: "لانتان", category: "lanthanide", group: 3, period: 6, color: "#ff9a76", reactivity: "high", electronegativity: 1.10, oxidationStates: [+3], atomicWeight: 138.91 },
    { number: 72, symbol: "Hf", name: "هافنیم", category: "transition", group: 4, period: 6, color: "#ff6b6b", reactivity: "low", electronegativity: 1.30, oxidationStates: [+4], atomicWeight: 178.49 },
    { number: 73, symbol: "Ta", name: "تانتال", category: "transition", group: 5, period: 6, color: "#ff6b6b", reactivity: "very_low", electronegativity: 1.50, oxidationStates: [+5], atomicWeight: 180.95 },
    { number: 74, symbol: "W", name: "تنگستن", category: "transition", group: 6, period: 6, color: "#ff6b6b", reactivity: "very_low", electronegativity: 2.36, oxidationStates: [+2, +3, +4, +5, +6], atomicWeight: 183.84 },
    { number: 75, symbol: "Re", name: "رنیوم", category: "transition", group: 7, period: 6, color: "#ff6b6b", reactivity: "low", electronegativity: 1.90, oxidationStates: [-1, +1, +2, +3, +4, +5, +6, +7], atomicWeight: 186.21 },
    { number: 76, symbol: "Os", name: "اسمیم", category: "transition", group: 8, period: 6, color: "#ff6b6b", reactivity: "low", electronegativity: 2.20, oxidationStates: [+2, +3, +4, +6, +8], atomicWeight: 190.23 },
    { number: 77, symbol: "Ir", name: "ایریدیم", category: "transition", group: 9, period: 6, color: "#ff6b6b", reactivity: "very_low", electronegativity: 2.20, oxidationStates: [+1, +2, +3, +4, +6], atomicWeight: 192.22 },
    { number: 78, symbol: "Pt", name: "پلاتین", category: "transition", group: 10, period: 6, color: "#ff6b6b", reactivity: "very_low", electronegativity: 2.28, oxidationStates: [+2, +4], atomicWeight: 195.08 },
    { number: 79, symbol: "Au", name: "طلا", category: "transition", group: 11, period: 6, color: "#ff6b6b", reactivity: "very_low", electronegativity: 2.54, oxidationStates: [+1, +3], atomicWeight: 196.97 },
    { number: 80, symbol: "Hg", name: "جیوه", category: "transition", group: 12, period: 6, color: "#ff6b6b", reactivity: "low", electronegativity: 2.00, oxidationStates: [+1, +2], atomicWeight: 200.59 },
    { number: 81, symbol: "Tl", name: "تالیم", category: "post-transition", group: 13, period: 6, color: "#4ecdc4", reactivity: "medium", electronegativity: 1.62, oxidationStates: [+1, +3], atomicWeight: 204.38 },
    { number: 82, symbol: "Pb", name: "سرب", category: "post-transition", group: 14, period: 6, color: "#4ecdc4", reactivity: "low", electronegativity: 2.33, oxidationStates: [+2, +4], atomicWeight: 207.20 },
    { number: 83, symbol: "Bi", name: "بیسموت", category: "post-transition", group: 15, period: 6, color: "#4ecdc4", reactivity: "low", electronegativity: 2.02, oxidationStates: [+3, +5], atomicWeight: 208.98 },
    { number: 84, symbol: "Po", name: "پولونیم", category: "post-transition", group: 16, period: 6, color: "#4ecdc4", reactivity: "medium", electronegativity: 2.00, oxidationStates: [-2, +2, +4, +6], atomicWeight: 209 },
    { number: 85, symbol: "At", name: "استاتین", category: "halogen", group: 17, period: 6, color: "#ff9966", reactivity: "medium", electronegativity: 2.20, oxidationStates: [-1, +1, +3, +5, +7], atomicWeight: 210 },
    { number: 86, symbol: "Rn", name: "رادون", category: "noble", group: 18, period: 6, color: "#a0c8ff", reactivity: "very_low", electronegativity: 2.20, oxidationStates: [0, +2], atomicWeight: 222 },

    // ردیف ۷
    { number: 87, symbol: "Fr", name: "فرانسیوم", category: "alkali", group: 1, period: 7, color: "#4facfe", reactivity: "very_high", electronegativity: 0.70, oxidationStates: [+1], atomicWeight: 223 },
    { number: 88, symbol: "Ra", name: "رادیم", category: "alkaline", group: 2, period: 7, color: "#00f2fe", reactivity: "high", electronegativity: 0.90, oxidationStates: [+2], atomicWeight: 226 },
    { number: 89, symbol: "Ac", name: "آکتینیم", category: "actinide", group: 3, period: 7, color: "#ff9a76", reactivity: "high", electronegativity: 1.10, oxidationStates: [+3], atomicWeight: 227 },
    { number: 104, symbol: "Rf", name: "رادرفوردیم", category: "transition", group: 4, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+4], atomicWeight: 267 },
    { number: 105, symbol: "Db", name: "دوبنیم", category: "transition", group: 5, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+5], atomicWeight: 268 },
    { number: 106, symbol: "Sg", name: "سیبورگیوم", category: "transition", group: 6, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+6], atomicWeight: 269 },
    { number: 107, symbol: "Bh", name: "بوریوم", category: "transition", group: 7, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+7], atomicWeight: 270 },
    { number: 108, symbol: "Hs", name: "هاسیم", category: "transition", group: 8, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+8], atomicWeight: 269 },
    { number: 109, symbol: "Mt", name: "مایتنریم", category: "transition", group: 9, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+6], atomicWeight: 278 },
    { number: 110, symbol: "Ds", name: "دارمشتاتیم", category: "transition", group: 10, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+4], atomicWeight: 281 },
    { number: 111, symbol: "Rg", name: "رونتگنیم", category: "transition", group: 11, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+3], atomicWeight: 282 },
    { number: 112, symbol: "Cn", name: "کوپرنیسیم", category: "transition", group: 12, period: 7, color: "#ff6b6b", reactivity: "unknown", electronegativity: null, oxidationStates: [+2], atomicWeight: 285 },
    { number: 113, symbol: "Nh", name: "نیهونیم", category: "post-transition", group: 13, period: 7, color: "#4ecdc4", reactivity: "unknown", electronegativity: null, oxidationStates: [+3], atomicWeight: 286 },
    { number: 114, symbol: "Fl", name: "فلروویوم", category: "post-transition", group: 14, period: 7, color: "#4ecdc4", reactivity: "unknown", electronegativity: null, oxidationStates: [+2], atomicWeight: 289 },
    { number: 115, symbol: "Mc", name: "مسکوویوم", category: "post-transition", group: 15, period: 7, color: "#4ecdc4", reactivity: "unknown", electronegativity: null, oxidationStates: [+3], atomicWeight: 290 },
    { number: 116, symbol: "Lv", name: "لیورموریوم", category: "post-transition", group: 16, period: 7, color: "#4ecdc4", reactivity: "unknown", electronegativity: null, oxidationStates: [+2], atomicWeight: 293 },
    { number: 117, symbol: "Ts", name: "تنسین", category: "halogen", group: 17, period: 7, color: "#ff9966", reactivity: "unknown", electronegativity: null, oxidationStates: [+1], atomicWeight: 294 },
    { number: 118, symbol: "Og", name: "اوگانسون", category: "noble", group: 18, period: 7, color: "#a0c8ff", reactivity: "unknown", electronegativity: null, oxidationStates: [0], atomicWeight: 294 }
];

// لانتانیدها و آکتینیدها
const lanthanides = [
    { number: 58, symbol: "Ce", name: "سریم", category: "lanthanide", color: "#ff9a76", reactivity: "high", electronegativity: 1.12, oxidationStates: [+3, +4], atomicWeight: 140.12 },
    { number: 59, symbol: "Pr", name: "پرازئودیمیم", category: "lanthanide", color: "#ff9a76", reactivity: "high", electronegativity: 1.13, oxidationStates: [+3], atomicWeight: 140.91 },
    { number: 60, symbol: "Nd", name: "نئودیمیم", category: "lanthanide", color: "#ff9a76", reactivity: "high", electronegativity: 1.14, oxidationStates: [+3], atomicWeight: 144.24 },
    { number: 61, symbol: "Pm", name: "پرومتیم", category: "lanthanide", color: "#ff9a76", reactivity: "high", electronegativity: 1.13, oxidationStates: [+3], atomicWeight: 145 },
    { number: 62, symbol: "Sm", name: "ساماریوم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.17, oxidationStates: [+2, +3], atomicWeight: 150.36 },
    { number: 63, symbol: "Eu", name: "اروپیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.20, oxidationStates: [+2, +3], atomicWeight: 151.96 },
    { number: 64, symbol: "Gd", name: "گادولینیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.20, oxidationStates: [+3], atomicWeight: 157.25 },
    { number: 65, symbol: "Tb", name: "تربیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.20, oxidationStates: [+3], atomicWeight: 158.93 },
    { number: 66, symbol: "Dy", name: "دیسپروزیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.22, oxidationStates: [+3], atomicWeight: 162.50 },
    { number: 67, symbol: "Ho", name: "هولمیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.23, oxidationStates: [+3], atomicWeight: 164.93 },
    { number: 68, symbol: "Er", name: "اربیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.24, oxidationStates: [+3], atomicWeight: 167.26 },
    { number: 69, symbol: "Tm", name: "تولیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.25, oxidationStates: [+3], atomicWeight: 168.93 },
    { number: 70, symbol: "Yb", name: "ایتربیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.10, oxidationStates: [+2, +3], atomicWeight: 173.05 },
    { number: 71, symbol: "Lu", name: "لوتتیم", category: "lanthanide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.27, oxidationStates: [+3], atomicWeight: 174.97 }
];

const actinides = [
    { number: 90, symbol: "Th", name: "توریم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+4], atomicWeight: 232.04 },
    { number: 91, symbol: "Pa", name: "پروتاکتینیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.50, oxidationStates: [+4, +5], atomicWeight: 231.04 },
    { number: 92, symbol: "U", name: "اورانیوم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.38, oxidationStates: [+3, +4, +5, +6], atomicWeight: 238.03 },
    { number: 93, symbol: "Np", name: "نپتونیوم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.36, oxidationStates: [+3, +4, +5, +6], atomicWeight: 237 },
    { number: 94, symbol: "Pu", name: "پلوتونیوم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.28, oxidationStates: [+3, +4, +5, +6], atomicWeight: 244 },
    { number: 95, symbol: "Am", name: "امریسیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3, +4, +5, +6], atomicWeight: 243 },
    { number: 96, symbol: "Cm", name: "کوریوم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 247 },
    { number: 97, symbol: "Bk", name: "برکلیوم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3, +4], atomicWeight: 247 },
    { number: 98, symbol: "Cf", name: "کالیفرنیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 251 },
    { number: 99, symbol: "Es", name: "اینشتینیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 252 },
    { number: 100, symbol: "Fm", name: "فرمیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 257 },
    { number: 101, symbol: "Md", name: "مندلیفیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 258 },
    { number: 102, symbol: "No", name: "نوبلیوم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 259 },
    { number: 103, symbol: "Lr", name: "لارنسیم", category: "actinide", color: "#ff9a76", reactivity: "medium", electronegativity: 1.30, oxidationStates: [+3], atomicWeight: 262 }
];

// فهرست ۴۰ عنصر فعال (همان 40 عنصر اولیه)
const activeElements = [
    'H', 'C', 'N', 'O', 'F', 'P', 'S', 'Cl', 'Br', 'I',
    'B', 'Si',
    'Na', 'K', 'Li',
    'Mg', 'Ca', 'Be', 'Sr', 'Ba', 'Cs', 'Rb',
    'Al',
    'Fe', 'Cu', 'Zn', 'Ag', 'Ni', 'Co', 'Mn', 'Cr', 'Ti',
    'Sn', 'Pb', 'Hg',
    'Se', 'Te', 'As', 'Sb'
];

// پایگاه داده جامع ترکیبات شیمیایی بین عناصر فعال
// ساختار: ترکیبات دو عنصری (Binary Compounds)
const compoundDatabase = {
    // =============== ترکیبات هیدروژن ===============
    'H-Li': [
        {
            formula: 'LiH',
            name: 'لیتیم هیدرید',
            bondType: 'یونی',
            compoundType: 'هیدرید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 689,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'لیتیم هیدرید یک ترکیب یونی است که از واکنش لیتیم فلزی با هیدروژن تشکیل می‌شود.',
            commonName: 'لیتیم هیدرید'
        }
    ],
    'H-Na': [
        {
            formula: 'NaH',
            name: 'سدیم هیدرید',
            bondType: 'یونی',
            compoundType: 'هیدرید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 800,
            formationTemp: 350,
            reactionType: 'مستقیم',
            description: 'سدیم هیدرید یک باز قوی و عامل کاهنده قوی است.',
            commonName: 'سدیم هیدرید'
        }
    ],
    'H-K': [
        {
            formula: 'KH',
            name: 'پتاسیم هیدرید',
            bondType: 'یونی',
            compoundType: 'هیدرید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 600,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'پتاسیم هیدرید مشابه سایر هیدریدهای فلزات قلیایی رفتار می‌کند.',
            commonName: 'پتاسیم هیدرید'
        }
    ],
    'H-Mg': [
        {
            formula: 'MgH₂',
            name: 'منیزیم هیدرید',
            bondType: 'یونی',
            compoundType: 'هیدرید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 327,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'منیزیم هیدرید یک ماده ذخیره‌سازی هیدروژن است.',
            commonName: 'منیزیم هیدرید'
        }
    ],
    'H-Ca': [
        {
            formula: 'CaH₂',
            name: 'کلسیم هیدرید',
            bondType: 'یونی',
            compoundType: 'هیدرید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 816,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'کلسیم هیدرید به عنوان خشک‌کن و عامل کاهنده استفاده می‌شود.',
            commonName: 'کلسیم هیدرید'
        }
    ],
    'H-Al': [
        {
            formula: 'AlH₃',
            name: 'آلومینیوم هیدرید',
            bondType: 'کووالانسی-یونی',
            compoundType: 'هیدرید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 150,
            formationTemp: 160,
            reactionType: 'غیرمستقیم',
            description: 'آلومینیوم هیدرید در سنتزهای آلی استفاده می‌شود.',
            commonName: 'آلانیان'
        }
    ],
    'H-B': [
        {
            formula: 'B₂H₆',
            name: 'دی‌بوران',
            bondType: 'کووالانسی',
            compoundType: 'بوران',
            physicalState: 'گاز',
            polarity: 'ناقطبی',
            meltingPoint: -165,
            formationTemp: 100,
            reactionType: 'غیرمستقیم',
            description: 'دی‌بوران یک ترکیب بور-هیدروژن با پیوندهای سه‌مرکزی است.',
            commonName: 'دی‌بوران'
        }
    ],
    'H-C': [
        {
            formula: 'CH₄',
            name: 'متان',
            bondType: 'کووالانسی',
            compoundType: 'هیدروکربن',
            physicalState: 'گاز',
            polarity: 'ناقطبی',
            meltingPoint: -182,
            formationTemp: 450,
            reactionType: 'مستقیم (با کاتالیزور)',
            description: 'متان ساده‌ترین آلکان و جزء اصلی گاز طبیعی است.',
            commonName: 'متان'
        },
        {
            formula: 'C₂H₆',
            name: 'اتان',
            bondType: 'کووالانسی',
            compoundType: 'هیدروکربن',
            physicalState: 'گاز',
            polarity: 'ناقطبی',
            meltingPoint: -183,
            formationTemp: 475,
            reactionType: 'غیرمستقیم',
            description: 'اتان دومین عضو خانواده آلکان‌هاست.',
            commonName: 'اتان'
        }
    ],
    'H-N': [
        {
            formula: 'NH₃',
            name: 'آمونیاک',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -78,
            formationTemp: 450,
            reactionType: 'مستقیم (فرآیند هابر)',
            description: 'آمونیاک یکی از مهم‌ترین مواد شیمیایی صنعتی است.',
            commonName: 'آمونیاک'
        },
        {
            formula: 'N₂H₄',
            name: 'هیدرازین',
            bondType: 'کووالانسی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: 2,
            formationTemp: 200,
            reactionType: 'غیرمستقیم',
            description: 'هیدرازین به عنوان سوخت موشک استفاده می‌شود.',
            commonName: 'هیدرازین'
        }
    ],
    'H-O': [
        {
            formula: 'H₂O',
            name: 'آب',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: 0,
            formationTemp: 570,
            reactionType: 'احتراق',
            description: 'آب ترکیب حیاتی برای زندگی و یکی از فراوان‌ترین ترکیبات زمین است.',
            commonName: 'آب'
        },
        {
            formula: 'H₂O₂',
            name: 'هیدروژن پراکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'پراکسید',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: -0.4,
            formationTemp: 200,
            reactionType: 'غیرمستقیم',
            description: 'هیدروژن پراکسید یک اکسنده و سفیدکننده است.',
            commonName: 'آب اکسیژنه'
        }
    ],
    'H-F': [
        {
            formula: 'HF',
            name: 'هیدروژن فلوئورید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هالید هیدروژن',
            physicalState: 'مایع/گاز',
            polarity: 'قطبی',
            meltingPoint: -83,
            formationTemp: 20,
            reactionType: 'مستقیم (انفجاری)',
            description: 'HF یک اسید ضعیف اما خورنده است که می‌تواند شیشه را حل کند.',
            commonName: 'هیدروفلوئوریک اسید'
        }
    ],
    'H-Cl': [
        {
            formula: 'HCl',
            name: 'هیدروژن کلرید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هالید هیدروژن',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -114,
            formationTemp: 250,
            reactionType: 'مستقیم',
            description: 'هیدروژن کلرید در آب حل شده و اسید هیدروکلریک می‌دهد.',
            commonName: 'هیدروکلریک اسید (در محلول آبی)'
        }
    ],
    'H-Br': [
        {
            formula: 'HBr',
            name: 'هیدروژن برمید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هالید هیدروژن',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -86,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'هیدروژن برمید یک اسید قوی است.',
            commonName: 'هیدروبرمیک اسید (در محلول آبی)'
        }
    ],
    'H-I': [
        {
            formula: 'HI',
            name: 'هیدروژن یدید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هالید هیدروژن',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -51,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'هیدروژن یدید یک عامل کاهنده قوی است.',
            commonName: 'هیدرویدیک اسید (در محلول آبی)'
        }
    ],
    'H-S': [
        {
            formula: 'H₂S',
            name: 'هیدروژن سولفید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -85,
            formationTemp: 350,
            reactionType: 'مستقیم',
            description: 'هیدروژن سولفید گازی سمی با بوی تخم مرغ گندیده است.',
            commonName: 'سولفید هیدروژن'
        }
    ],
    'H-Se': [
        {
            formula: 'H₂Se',
            name: 'هیدروژن سلنید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -66,
            formationTemp: 300,
            reactionType: 'غیرمستقیم',
            description: 'هیدروژن سلنید گازی سمی و بدبو است.',
            commonName: 'سلنید هیدروژن'
        }
    ],
    'H-Te': [
        {
            formula: 'H₂Te',
            name: 'هیدروژن تلورید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -49,
            formationTemp: 250,
            reactionType: 'غیرمستقیم',
            description: 'هیدروژن تلورید ناپایدارترین هیدرید گروه ۱۶ است.',
            commonName: 'تلورید هیدروژن'
        }
    ],
    'H-Si': [
        {
            formula: 'SiH₄',
            name: 'سیلان',
            bondType: 'کووالانسی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'ناقطبی',
            meltingPoint: -185,
            formationTemp: 400,
            reactionType: 'غیرمستقیم',
            description: 'سیلان در تولید نیمه‌هادی‌ها استفاده می‌شود.',
            commonName: 'سیلان'
        }
    ],
    'H-P': [
        {
            formula: 'PH₃',
            name: 'فسفین',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -132,
            formationTemp: 300,
            reactionType: 'غیرمستقیم',
            description: 'فسفین گازی سمی و بدبو با بوی ماهی گندیده است.',
            commonName: 'فسفین'
        }
    ],
    'H-As': [
        {
            formula: 'AsH₃',
            name: 'آرسین',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -117,
            formationTemp: 300,
            reactionType: 'غیرمستقیم',
            description: 'آرسین گازی بسیار سمی است.',
            commonName: 'آرسین'
        }
    ],
    'H-Sb': [
        {
            formula: 'SbH₃',
            name: 'استیبین',
            bondType: 'کووالانسی قطبی',
            compoundType: 'هیدرید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -88,
            formationTemp: 200,
            reactionType: 'غیرمستقیم',
            description: 'استیبین گازی سمی و ناپایدار است.',
            commonName: 'استیبین'
        }
    ],

    // =============== ترکیبات اکسیژن ===============
    'O-Li': [
        {
            formula: 'Li₂O',
            name: 'لیتیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1438,
            formationTemp: 600,
            reactionType: 'احتراق',
            description: 'لیتیم اکسید یک اکسید بازی قوی است.',
            commonName: 'لیتیم اکسید'
        },
        {
            formula: 'Li₂O₂',
            name: 'لیتیم پراکسید',
            bondType: 'یونی',
            compoundType: 'پراکسید',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 195,
            formationTemp: 450,
            reactionType: 'مستقیم',
            description: 'لیتیم پراکسید به عنوان منبع اکسیژن استفاده می‌شود.',
            commonName: 'لیتیم پراکسید'
        }
    ],
    'O-Na': [
        {
            formula: 'Na₂O',
            name: 'سدیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1132,
            formationTemp: 400,
            reactionType: 'احتراق',
            description: 'سدیم اکسید با آب واکنش شدیدی داده و سدیم هیدروکسید می‌دهد.',
            commonName: 'سدیم اکسید'
        },
        {
            formula: 'Na₂O₂',
            name: 'سدیم پراکسید',
            bondType: 'یونی',
            compoundType: 'پراکسید',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 460,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'سدیم پراکسید یک اکسنده قوی است.',
            commonName: 'سدیم پراکسید'
        }
    ],
    'O-K': [
        {
            formula: 'K₂O',
            name: 'پتاسیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 740,
            formationTemp: 350,
            reactionType: 'احتراق',
            description: 'پتاسیم اکسید یک اکسید بازی بسیار قوی است.',
            commonName: 'پتاسیم اکسید'
        },
        {
            formula: 'KO₂',
            name: 'پتاسیم سوپراکسید',
            bondType: 'یونی',
            compoundType: 'سوپراکسید',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 560,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در دستگاه‌های تنفسی استفاده می‌شود.',
            commonName: 'پتاسیم سوپراکسید'
        }
    ],
    'O-Mg': [
        {
            formula: 'MgO',
            name: 'منیزیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2852,
            formationTemp: 650,
            reactionType: 'احتراق',
            description: 'منیزیم اکسید به عنوان ماده نسوز استفاده می‌شود.',
            commonName: 'منیزیم اکسید'
        }
    ],
    'O-Ca': [
        {
            formula: 'CaO',
            name: 'کلسیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2572,
            formationTemp: 842,
            reactionType: 'تجزیه حرارتی',
            description: 'کلسیم اکسید با آب واکنش داده و آهک هیدراته می‌دهد.',
            commonName: 'آهک زنده'
        }
    ],
    'O-Al': [
        {
            formula: 'Al₂O₃',
            name: 'آلومینیوم اکسید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2072,
            formationTemp: 660,
            reactionType: 'احتراق',
            description: 'آلومینا ماده اولیه تولید آلومینیوم و ماده نسوز مهمی است.',
            commonName: 'آلومینا'
        }
    ],
    'O-Si': [
        {
            formula: 'SiO₂',
            name: 'سیلیسیم دی‌اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 1713,
            formationTemp: 1410,
            reactionType: 'مستقیم',
            description: 'سیلیس اصلی‌ترین جزء شن و ماسه و شیشه است.',
            commonName: 'سیلیس'
        }
    ],
    'O-P': [
        {
            formula: 'P₄O₁₀',
            name: 'فسفر پنتااکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 340,
            formationTemp: 44,
            reactionType: 'احتراق',
            description: 'یک خشک‌کن قوی برای گازها و مایعات است.',
            commonName: 'فسفر پنتااکسید'
        },
        {
            formula: 'P₄O₆',
            name: 'فسفر تری‌اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'مایع/جامد',
            polarity: 'قطبی',
            meltingPoint: 24,
            formationTemp: 44,
            reactionType: 'احتراق ناقص',
            description: 'در احتراق ناقص فسفر تشکیل می‌شود.',
            commonName: 'فسفر تری‌اکسید'
        }
    ],
    'O-S': [
        {
            formula: 'SO₂',
            name: 'گوگرد دی‌اکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -75,
            formationTemp: 115,
            reactionType: 'احتراق',
            description: 'گازی سمی که باعث باران اسیدی می‌شود.',
            commonName: 'گوگرد دی‌اکسید'
        },
        {
            formula: 'SO₃',
            name: 'گوگرد تری‌اکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'مایع/جامد',
            polarity: 'قطبی',
            meltingPoint: 17,
            formationTemp: 450,
            reactionType: 'کاتالیزوری',
            description: 'در تولید اسید سولفوریک استفاده می‌شود.',
            commonName: 'گوگرد تری‌اکسید'
        }
    ],
    'O-Cl': [
        {
            formula: 'Cl₂O',
            name: 'دی‌کلرین مونوکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید هالوژن',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -120,
            formationTemp: 0,
            reactionType: 'مستقیم',
            description: 'یک اکسنده و سفیدکننده است.',
            commonName: 'مونوکسید دی‌کلر'
        },
        {
            formula: 'ClO₂',
            name: 'کلرین دی‌اکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید هالوژن',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -59,
            formationTemp: 50,
            reactionType: 'غیرمستقیم',
            description: 'برای ضدعفونی آب استفاده می‌شود.',
            commonName: 'دی‌اکسید کلر'
        }
    ],
    'O-N': [
        {
            formula: 'NO',
            name: 'نیتروژن مونوکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -164,
            formationTemp: 1200,
            reactionType: 'مستقیم (در دماهای بالا)',
            description: 'یک پیام‌رسان بیولوژیکی مهم و آلاینده هوا.',
            commonName: 'نیتریک اکسید'
        },
        {
            formula: 'NO₂',
            name: 'نیتروژن دی‌اکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -11,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'گازی قهوه‌ای رنگ و سمی که در تشکیل دود نقش دارد.',
            commonName: 'نیتروژن دی‌اکسید'
        },
        {
            formula: 'N₂O',
            name: 'نیتروژن اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -91,
            formationTemp: 250,
            reactionType: 'تجزیه حرارتی',
            description: 'گازی بی‌رنگ که به عنوان هوشبر استفاده می‌شود.',
            commonName: 'نیتروس اکسید'
        }
    ],
    'O-C': [
        {
            formula: 'CO',
            name: 'کربن مونوکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'گاز',
            polarity: 'کمی قطبی',
            meltingPoint: -205,
            formationTemp: 700,
            reactionType: 'احتراق ناقص',
            description: 'گازی سمی و بی‌رنگ که از احتراق ناقص کربن ایجاد می‌شود.',
            commonName: 'کربن مونوکسید'
        },
        {
            formula: 'CO₂',
            name: 'کربن دی‌اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'گاز',
            polarity: 'ناقطبی',
            meltingPoint: -78,
            formationTemp: 800,
            reactionType: 'احتراق کامل',
            description: 'گازی گلخانه‌ای که در تنفس و فتوسنتز نقش دارد.',
            commonName: 'کربن دی‌اکسید'
        }
    ],
    'O-B': [
        {
            formula: 'B₂O₃',
            name: 'بورون تری‌اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 450,
            formationTemp: 800,
            reactionType: 'احتراق',
            description: 'در تولید شیشه‌های بوروسیلیکات استفاده می‌شود.',
            commonName: 'بوریک اکسید'
        }
    ],
    'O-Fe': [
        {
            formula: 'FeO',
            name: 'آهن(II) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1377,
            formationTemp: 800,
            reactionType: 'اکسیداسیون',
            description: 'اکسید آهن دوظرفیتی که در کانی ووستیت یافت می‌شود.',
            commonName: 'آهن اکسید'
        },
        {
            formula: 'Fe₂O₃',
            name: 'آهن(III) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1566,
            formationTemp: 800,
            reactionType: 'اکسیداسیون',
            description: 'اکسید آهن سه‌ظرفیتی که به عنوان سنگ آهن و رنگدانه استفاده می‌شود.',
            commonName: 'هماتیت'
        },
        {
            formula: 'Fe₃O₄',
            name: 'آهن(II,III) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی مختلط',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1597,
            formationTemp: 800,
            reactionType: 'اکسیداسیون',
            description: 'مگنتیت یک کانی مغناطیسی مهم است.',
            commonName: 'مگنتیت'
        }
    ],
    'O-Cu': [
        {
            formula: 'Cu₂O',
            name: 'مس(I) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1235,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'اکسید مس یک‌ظرفیتی با رنگ قرمز یا نارنجی.',
            commonName: 'کوپریت'
        },
        {
            formula: 'CuO',
            name: 'مس(II) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1326,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'اکسید مس دوظرفیتی با رنگ سیاه.',
            commonName: 'تنوریت'
        }
    ],
    'O-Zn': [
        {
            formula: 'ZnO',
            name: 'روی اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1975,
            formationTemp: 420,
            reactionType: 'اکسیداسیون',
            description: 'در کرم‌های ضدآفتاب و به عنوان رنگدانه سفید استفاده می‌شود.',
            commonName: 'روی اکسید'
        }
    ],
    'O-Sn': [
        {
            formula: 'SnO',
            name: 'قلع(II) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1080,
            formationTemp: 232,
            reactionType: 'اکسیداسیون',
            description: 'اکسید قلع دوظرفیتی.',
            commonName: 'قلع اکسید'
        },
        {
            formula: 'SnO₂',
            name: 'قلع(IV) اکسید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1630,
            formationTemp: 400,
            reactionType: 'اکسیداسیون',
            description: 'ماده اولیه تولید فلز قلع و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'کاسیتریت'
        }
    ],
    'O-Pb': [
        {
            formula: 'PbO',
            name: 'سرب(II) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 888,
            formationTemp: 327,
            reactionType: 'اکسیداسیون',
            description: 'در تولید شیشه و سرامیک استفاده می‌شود.',
            commonName: 'لیتارژ'
        },
        {
            formula: 'PbO₂',
            name: 'سرب(IV) اکسید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 290,
            formationTemp: 400,
            reactionType: 'اکسیداسیون',
            description: 'در باتری‌های سربی-اسیدی استفاده می‌شود.',
            commonName: 'سرب دی‌اکسید'
        }
    ],
    'O-Hg': [
        {
            formula: 'HgO',
            name: 'جیوه اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 500,
            formationTemp: 350,
            reactionType: 'اکسیداسیون',
            description: 'با حرارت به جیوه و اکسیژن تجزیه می‌شود.',
            commonName: 'جیوه اکسید'
        }
    ],
    'O-Ni': [
        {
            formula: 'NiO',
            name: 'نیکل اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1955,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'در باتری‌ها و به عنوان رنگدانه استفاده می‌شود.',
            commonName: 'نیکل اکسید'
        }
    ],
    'O-Co': [
        {
            formula: 'CoO',
            name: 'کبالت اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1933,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'در رنگدانه‌های آبی و سبز استفاده می‌شود.',
            commonName: 'کبالت اکسید'
        },
        {
            formula: 'Co₃O₄',
            name: 'کبالت(II,III) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی مختلط',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 895,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'یک کاتالیزور مهم در صنعت.',
            commonName: 'کبالت اکسید'
        }
    ],
    'O-Mn': [
        {
            formula: 'MnO',
            name: 'منگنز(II) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1945,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'در تولید فولاد استفاده می‌شود.',
            commonName: 'منگنز اکسید'
        },
        {
            formula: 'MnO₂',
            name: 'منگنز(IV) اکسید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 535,
            formationTemp: 600,
            reactionType: 'اکسیداسیون',
            description: 'در باتری‌های خشک و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'پیرولوسیت'
        }
    ],
    'O-Cr': [
        {
            formula: 'Cr₂O₃',
            name: 'کروم(III) اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2435,
            formationTemp: 800,
            reactionType: 'اکسیداسیون',
            description: 'به عنوان رنگدانه سبز و ساینده استفاده می‌شود.',
            commonName: 'اکسید کروم سبز'
        },
        {
            formula: 'CrO₃',
            name: 'کروم(VI) اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 197,
            formationTemp: 250,
            reactionType: 'اکسیداسیون',
            description: 'یک اکسنده قوی و سمی.',
            commonName: 'اسید کرومیک'
        }
    ],
    'O-Ti': [
        {
            formula: 'TiO₂',
            name: 'تیتانیوم دی‌اکسید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1843,
            formationTemp: 800,
            reactionType: 'اکسیداسیون',
            description: 'در رنگدانه‌های سفید و ضدآفتاب‌ها استفاده می‌شود.',
            commonName: 'تیتانیا'
        }
    ],
    'O-Se': [
        {
            formula: 'SeO₂',
            name: 'سلنیوم دی‌اکسید',
            bondType: 'کووالانسی قطبی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 340,
            formationTemp: 300,
            reactionType: 'احتراق',
            description: 'یک اکسنده در سنتزهای آلی.',
            commonName: 'سلنیوم دی‌اکسید'
        }
    ],
    'O-Te': [
        {
            formula: 'TeO₂',
            name: 'تلوریوم دی‌اکسید',
            bondType: 'کووالانسی-یونی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 733,
            formationTemp: 400,
            reactionType: 'احتراق',
            description: 'در تولید شیشه‌های نوری استفاده می‌شود.',
            commonName: 'تلوریوم دی‌اکسید'
        }
    ],
    'O-As': [
        {
            formula: 'As₂O₃',
            name: 'آرسنیک تری‌اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 313,
            formationTemp: 300,
            reactionType: 'احتراق',
            description: 'ترکیبی بسیار سمی.',
            commonName: 'آرسنیک تری‌اکسید'
        },
        {
            formula: 'As₂O₅',
            name: 'آرسنیک پنتااکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 315,
            formationTemp: 300,
            reactionType: 'اکسیداسیون',
            description: 'یک اسید بدون‌آب.',
            commonName: 'آرسنیک پنتااکسید'
        }
    ],
    'O-Sb': [
        {
            formula: 'Sb₂O₃',
            name: 'آنتیموان تری‌اکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 656,
            formationTemp: 400,
            reactionType: 'احتراق',
            description: 'به عنوان بازدارنده شعله استفاده می‌شود.',
            commonName: 'آنتیموان تری‌اکسید'
        }
    ],
    'O-Be': [
        {
            formula: 'BeO',
            name: 'بریلیم اکسید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2578,
            formationTemp: 900,
            reactionType: 'احتراق',
            description: 'رسانای حرارتی عالی اما سمی.',
            commonName: 'بریلیا'
        }
    ],
    'O-Sr': [
        {
            formula: 'SrO',
            name: 'استرانسیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2531,
            formationTemp: 777,
            reactionType: 'احتراق',
            description: 'یک اکسید بازی قوی.',
            commonName: 'استرانسیم اکسید'
        }
    ],
    'O-Ba': [
        {
            formula: 'BaO',
            name: 'باریم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1923,
            formationTemp: 727,
            reactionType: 'احتراق',
            description: 'در تولید شیشه و سرامیک استفاده می‌شود.',
            commonName: 'باریم اکسید'
        },
        {
            formula: 'BaO₂',
            name: 'باریم پراکسید',
            bondType: 'یونی',
            compoundType: 'پراکسید',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 450,
            formationTemp: 500,
            reactionType: 'اکسیداسیون',
            description: 'به عنوان منبع اکسیژن استفاده می‌شود.',
            commonName: 'باریم پراکسید'
        }
    ],
    'O-Cs': [
        {
            formula: 'Cs₂O',
            name: 'سزیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 490,
            formationTemp: 28,
            reactionType: 'احتراق',
            description: 'اکسیدی با خاصیت بازی بسیار قوی.',
            commonName: 'سزیم اکسید'
        }
    ],
    'O-Rb': [
        {
            formula: 'Rb₂O',
            name: 'روبیدیم اکسید',
            bondType: 'یونی',
            compoundType: 'اکسید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 400,
            formationTemp: 39,
            reactionType: 'احتراق',
            description: 'اکسید بازی قوی.',
            commonName: 'روبیدیم اکسید'
        }
    ],

    // =============== ترکیبات هالوژن‌ها با فلزات ===============
    'F-Li': [
        {
            formula: 'LiF',
            name: 'لیتیم فلوئورید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 845,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'کم‌حلال‌ترین فلوئورید فلزات قلیایی.',
            commonName: 'لیتیم فلوئورید'
        }
    ],
    'F-Na': [
        {
            formula: 'NaF',
            name: 'سدیم فلوئورید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 993,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در خمیردندان برای جلوگیری از پوسیدگی دندان استفاده می‌شود.',
            commonName: 'سدیم فلوئورید'
        }
    ],
    'F-K': [
        {
            formula: 'KF',
            name: 'پتاسیم فلوئورید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 858,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'به عنوان فلورینه‌کننده در سنتزهای آلی استفاده می‌شود.',
            commonName: 'پتاسیم فلوئورید'
        }
    ],
    'F-Mg': [
        {
            formula: 'MgF₂',
            name: 'منیزیم فلوئورید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1261,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'در صنایع نوری و تولید شیشه استفاده می‌شود.',
            commonName: 'منیزیم فلوئورید'
        }
    ],
    'F-Ca': [
        {
            formula: 'CaF₂',
            name: 'کلسیم فلوئورید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1418,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'به عنوان سنگ معدن فلورین و در تولید اسید هیدروفلوئوریک استفاده می‌شود.',
            commonName: 'فلوریت'
        }
    ],
    'F-Al': [
        {
            formula: 'AlF₃',
            name: 'آلومینیوم فلوئورید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1291,
            formationTemp: 700,
            reactionType: 'مستقیم',
            description: 'در تولید آلومینیوم استفاده می‌شود.',
            commonName: 'آلومینیوم فلوئورید'
        }
    ],
    'F-Si': [
        {
            formula: 'SiF₄',
            name: 'سیلیسیم تترافلوئورید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'گاز',
            polarity: 'ناقطبی',
            meltingPoint: -90,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'با آب واکنش داده و اسید هگزافلوئوروسیلیسیک می‌دهد.',
            commonName: 'سیلیسیم تترافلوئورید'
        }
    ],

    'Cl-Li': [
        {
            formula: 'LiCl',
            name: 'لیتیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 605,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'به عنوان خشک‌کن و در باتری‌ها استفاده می‌شود.',
            commonName: 'لیتیم کلرید'
        }
    ],
    'Cl-Na': [
        {
            formula: 'NaCl',
            name: 'سدیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 801,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'نمک طعام، یکی از مهم‌ترین و فراوان‌ترین ترکیبات شیمیایی.',
            commonName: 'نمک خوراکی'
        }
    ],
    'Cl-K': [
        {
            formula: 'KCl',
            name: 'پتاسیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 770,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'به عنوان کود و جایگزین نمک برای افراد دارای فشار خون بالا استفاده می‌شود.',
            commonName: 'پتاسیم کلرید'
        }
    ],
    'Cl-Mg': [
        {
            formula: 'MgCl₂',
            name: 'منیزیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 714,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'در تولید منیزیم و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'منیزیم کلرید'
        }
    ],
    'Cl-Ca': [
        {
            formula: 'CaCl₂',
            name: 'کلسیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 772,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'به عنوان خشک‌کن و برای ذوب یخ جاده‌ها استفاده می‌شود.',
            commonName: 'کلسیم کلرید'
        }
    ],
    'Cl-Al': [
        {
            formula: 'AlCl₃',
            name: 'آلومینیوم کلرید',
            bondType: 'کووالانسی-یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 192,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'کاتالیزور مهم در واکنش‌های آلکیل‌دار کردن فریدل-کرافتس.',
            commonName: 'آلومینیوم کلرید'
        }
    ],
    'Cl-Si': [
        {
            formula: 'SiCl₄',
            name: 'سیلیسیم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'ناقطبی',
            meltingPoint: -68,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در تولید سیلیسیم خالص و دود سیلیس استفاده می‌شود.',
            commonName: 'سیلیسیم تتراکلرید'
        }
    ],
    'Cl-Fe': [
        {
            formula: 'FeCl₂',
            name: 'آهن(II) کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 677,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'به عنوان کاتالیزور و در تصفیه آب استفاده می‌شود.',
            commonName: 'آهن کلرید'
        },
        {
            formula: 'FeCl₃',
            name: 'آهن(III) کلرید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 306,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در حکاکی فلزات و به عنوان منعقدکننده در تصفیه آب استفاده می‌شود.',
            commonName: 'کلرید فریک'
        }
    ],
    'Cl-Cu': [
        {
            formula: 'CuCl',
            name: 'مس(I) کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 430,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در کاتالیزورها و به عنوان رنگدانه استفاده می‌شود.',
            commonName: 'کلرید مسوز'
        },
        {
            formula: 'CuCl₂',
            name: 'مس(II) کلرید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 620,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در کاتالیزورها و رنگ‌ها استفاده می‌شود.',
            commonName: 'کلرید کوپریک'
        }
    ],
    'Cl-Zn': [
        {
            formula: 'ZnCl₂',
            name: 'روی کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 290,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'به عنوان کاتالیزور و شار در لحیم‌کاری استفاده می‌شود.',
            commonName: 'روی کلرید'
        }
    ],
    'Cl-Ag': [
        {
            formula: 'AgCl',
            name: 'نقره کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 455,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در عکاسی و به عنوان آنتی‌باکتریال استفاده می‌شود.',
            commonName: 'نقره کلرید'
        }
    ],
    'Cl-Ni': [
        {
            formula: 'NiCl₂',
            name: 'نیکل کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1001,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در آبکاری نیکل و کاتالیزورها استفاده می‌شود.',
            commonName: 'نیکل کلرید'
        }
    ],
    'Cl-Co': [
        {
            formula: 'CoCl₂',
            name: 'کبالت کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 735,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'به عنوان شناساگر رطوبت استفاده می‌شود.',
            commonName: 'کبالت کلرید'
        }
    ],
    'Cl-Mn': [
        {
            formula: 'MnCl₂',
            name: 'منگنز کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 652,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در تولید باتری‌ها و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'منگنز کلرید'
        }
    ],
    'Cl-Cr': [
        {
            formula: 'CrCl₂',
            name: 'کروم(II) کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 824,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'یک عامل کاهنده قوی.',
            commonName: 'کروم کلرید'
        },
        {
            formula: 'CrCl₃',
            name: 'کروم(III) کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1152,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در آبکاری کروم و رنگدانه‌ها استفاده می‌شود.',
            commonName: 'کروم کلرید'
        }
    ],
    'Cl-Ti': [
        {
            formula: 'TiCl₄',
            name: 'تیتانیوم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'مایع',
            polarity: 'ناقطبی',
            meltingPoint: -25,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در تولید تیتانیوم فلزی و دود تیتانیوم استفاده می‌شود.',
            commonName: 'تیتانیوم تتراکلرید'
        }
    ],
    'Cl-Sn': [
        {
            formula: 'SnCl₂',
            name: 'قلع(II) کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 247,
            formationTemp: 250,
            reactionType: 'مستقیم',
            description: 'به عنوان کاتالیزور و عامل کاهنده استفاده می‌شود.',
            commonName: 'قلع کلرید'
        },
        {
            formula: 'SnCl₄',
            name: 'قلع(IV) کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: -33,
            formationTemp: 250,
            reactionType: 'مستقیم',
            description: 'در آبکاری و تولید شیشه استفاده می‌شود.',
            commonName: 'قلع کلرید'
        }
    ],
    'Cl-Pb': [
        {
            formula: 'PbCl₂',
            name: 'سرب(II) کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 501,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'کم‌حلال در آب.',
            commonName: 'سرب کلرید'
        }
    ],
    'Cl-Hg': [
        {
            formula: 'HgCl₂',
            name: 'جیوه(II) کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 277,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'ترکیبی بسیار سمی که به عنوان ضدعفونی‌کننده استفاده می‌شود.',
            commonName: 'کلرید مرکوریک'
        },
        {
            formula: 'Hg₂Cl₂',
            name: 'جیوه(I) کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 383,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'در الکترود کالومل استفاده می‌شود.',
            commonName: 'کلرید مرکوروس'
        }
    ],
    'Cl-Se': [
        {
            formula: 'SeCl₄',
            name: 'سلنیوم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 305,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'در سنتزهای شیمیایی استفاده می‌شود.',
            commonName: 'سلنیوم تتراکلرید'
        }
    ],
    'Cl-Te': [
        {
            formula: 'TeCl₄',
            name: 'تلوریوم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 224,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'در سنتزهای شیمیایی استفاده می‌شود.',
            commonName: 'تلوریوم تتراکلرید'
        }
    ],
    'Cl-As': [
        {
            formula: 'AsCl₃',
            name: 'آرسنیک تری‌کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: -16,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'ترکیبی بسیار سمی.',
            commonName: 'آرسنیک تری‌کلرید'
        }
    ],
    'Cl-Sb': [
        {
            formula: 'SbCl₃',
            name: 'آنتیموان تری‌کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 73,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'در آبکاری و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'آنتیموان تری‌کلرید'
        },
        {
            formula: 'SbCl₅',
            name: 'آنتیموان پنتاکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: 3,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'کاتالیزور مهم در سنتزهای آلی.',
            commonName: 'آنتیموان پنتاکلرید'
        }
    ],
    'Cl-Be': [
        {
            formula: 'BeCl₂',
            name: 'بریلیم کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 415,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'بریلیم کلرید'
        }
    ],
    'Cl-Sr': [
        {
            formula: 'SrCl₂',
            name: 'استرانسیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 875,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'در آتش‌بازی برای ایجاد رنگ قرمز استفاده می‌شود.',
            commonName: 'استرانسیم کلرید'
        }
    ],
    'Cl-Ba': [
        {
            formula: 'BaCl₂',
            name: 'باریم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 962,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'ترکیبی سمی که در آزمایشگاه برای شناسایی سولفات‌ها استفاده می‌شود.',
            commonName: 'باریم کلرید'
        }
    ],
    'Cl-Cs': [
        {
            formula: 'CsCl',
            name: 'سزیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 645,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'ساختار بلوری مکعبی ساده دارد.',
            commonName: 'سزیم کلرید'
        }
    ],
    'Cl-Rb': [
        {
            formula: 'RbCl',
            name: 'روبیدیم کلرید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 718,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'خواصی مشابه کلریدهای دیگر فلزات قلیایی دارد.',
            commonName: 'روبیدیم کلرید'
        }
    ],

    // ترکیبات برم (Br) - فقط چند نمونه مهم
    'Br-Na': [
        {
            formula: 'NaBr',
            name: 'سدیم برمید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 747,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در عکاسی و داروسازی استفاده می‌شود.',
            commonName: 'سدیم برمید'
        }
    ],
    'Br-K': [
        {
            formula: 'KBr',
            name: 'پتاسیم برمید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 734,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در پزشکی به عنوان آرام‌بخش استفاده می‌شود.',
            commonName: 'پتاسیم برمید'
        }
    ],
    'Br-Ag': [
        {
            formula: 'AgBr',
            name: 'نقره برمید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 432,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در فیلم عکاسی استفاده می‌شود.',
            commonName: 'نقره برمید'
        }
    ],

    // ترکیبات ید (I) - فقط چند نمونه مهم
    'I-Na': [
        {
            formula: 'NaI',
            name: 'سدیم یدید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 661,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در پزشکی و عکاسی استفاده می‌شود.',
            commonName: 'سدیم یدید'
        }
    ],
    'I-K': [
        {
            formula: 'KI',
            name: 'پتاسیم یدید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 681,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در درمان بیماری‌های تیروئید و به عنوان آنتی‌اکسیدان استفاده می‌شود.',
            commonName: 'پتاسیم یدید'
        }
    ],
    'I-Ag': [
        {
            formula: 'AgI',
            name: 'نقره یدید',
            bondType: 'یونی',
            compoundType: 'هالید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 558,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'در بارورسازی ابرها و عکاسی استفاده می‌شود.',
            commonName: 'نقره یدید'
        }
    ],

    // =============== ترکیبات گوگرد با فلزات ===============
    'S-Li': [
        {
            formula: 'Li₂S',
            name: 'لیتیم سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 938,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در باتری‌های لیتیم-سولفور استفاده می‌شود.',
            commonName: 'لیتیم سولفید'
        }
    ],
    'S-Na': [
        {
            formula: 'Na₂S',
            name: 'سدیم سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1180,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در دباغی چرم و تولید کاغذ استفاده می‌شود.',
            commonName: 'سدیم سولفید'
        }
    ],
    'S-K': [
        {
            formula: 'K₂S',
            name: 'پتاسیم سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 840,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در سنتزهای شیمیایی استفاده می‌شود.',
            commonName: 'پتاسیم سولفید'
        }
    ],
    'S-Mg': [
        {
            formula: 'MgS',
            name: 'منیزیم سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2000,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'در صنایع نوری استفاده می‌شود.',
            commonName: 'منیزیم سولفید'
        }
    ],
    'S-Ca': [
        {
            formula: 'CaS',
            name: 'کلسیم سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2525,
            formationTemp: 700,
            reactionType: 'مستقیم',
            description: 'در رنگدانه‌های درخشان و دباغی استفاده می‌شود.',
            commonName: 'هپار کلسیم'
        }
    ],
    'S-Fe': [
        {
            formula: 'FeS',
            name: 'آهن(II) سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1194,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'در کانی پیریت یافت می‌شود.',
            commonName: 'پیروتیت'
        },
        {
            formula: 'FeS₂',
            name: 'آهن دی‌سولفید',
            bondType: 'کووالانسی-یونی',
            compoundType: 'دی‌سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'ناقطبی',
            meltingPoint: 1171,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'به عنوان سنگ معدن آهن و در تولید اسید سولفوریک استفاده می‌شود.',
            commonName: 'پیریت'
        }
    ],
    'S-Cu': [
        {
            formula: 'Cu₂S',
            name: 'مس(I) سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1130,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'یک کانی مهم مس.',
            commonName: 'کوولیت'
        },
        {
            formula: 'CuS',
            name: 'مس(II) سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 103,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'کمیاب‌تر از Cu₂S.',
            commonName: 'کوولینیت'
        }
    ],
    'S-Zn': [
        {
            formula: 'ZnS',
            name: 'روی سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1850,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'در رنگدانه‌های درخشان و LEDها استفاده می‌شود.',
            commonName: 'اسفالریت'
        }
    ],
    'S-Ag': [
        {
            formula: 'Ag₂S',
            name: 'نقره سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 836,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'سیاهی که روی نقره ایجاد می‌شود از این ترکیب است.',
            commonName: 'آرجنتیت'
        }
    ],
    'S-Pb': [
        {
            formula: 'PbS',
            name: 'سرب سولفید',
            bondType: 'یونی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1118,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'سنگ معدن اصلی سرب.',
            commonName: 'گالنا'
        }
    ],
    'S-Hg': [
        {
            formula: 'HgS',
            name: 'جیوه سولفید',
            bondType: 'کووالانسی',
            compoundType: 'سولفید فلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 584,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'به عنوان رنگدانه قرمز (شنگرف) استفاده می‌شود.',
            commonName: 'سینابار'
        }
    ],

    // =============== ترکیبات نیتروژن با فلزات ===============
    'N-Li': [
        {
            formula: 'Li₃N',
            name: 'لیتیم نیترید',
            bondType: 'یونی',
            compoundType: 'نیترید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 813,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'تنها نیترید پایدار فلزات قلیایی.',
            commonName: 'لیتیم نیترید'
        }
    ],
    'N-Mg': [
        {
            formula: 'Mg₃N₂',
            name: 'منیزیم نیترید',
            bondType: 'یونی',
            compoundType: 'نیترید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1500,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'با آب واکنش داده و آمونیاک آزاد می‌کند.',
            commonName: 'منیزیم نیترید'
        }
    ],
    'N-Al': [
        {
            formula: 'AlN',
            name: 'آلومینیوم نیترید',
            bondType: 'کووالانسی',
            compoundType: 'نیترید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2200,
            formationTemp: 800,
            reactionType: 'مستقیم',
            description: 'یک ماده نیمه‌رسانا با هدایت حرارتی عالی.',
            commonName: 'آلومینیوم نیترید'
        }
    ],
    'N-Si': [
        {
            formula: 'Si₃N₄',
            name: 'سیلیسیم نیترید',
            bondType: 'کووالانسی',
            compoundType: 'نیترید نافلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 1900,
            formationTemp: 1400,
            reactionType: 'مستقیم',
            description: 'سرامیک مهندسی با مقاومت حرارتی و شیمیایی عالی.',
            commonName: 'سیلیسیم نیترید'
        }
    ],

    // =============== ترکیبات فسفر با فلزات ===============
    'P-Na': [
        {
            formula: 'Na₃P',
            name: 'سدیم فسفید',
            bondType: 'یونی',
            compoundType: 'فسفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 750,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'با آب واکنش شدیدی داده و فسفین تولید می‌کند.',
            commonName: 'سدیم فسفید'
        }
    ],
    'P-Ca': [
        {
            formula: 'Ca₃P₂',
            name: 'کلسیم فسفید',
            bondType: 'یونی',
            compoundType: 'فسفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1600,
            formationTemp: 700,
            reactionType: 'مستقیم',
            description: 'در تله‌های جونده‌کش استفاده می‌شود.',
            commonName: 'کلسیم فسفید'
        }
    ],
    'P-Zn': [
        {
            formula: 'Zn₃P₂',
            name: 'روی فسفید',
            bondType: 'یونی',
            compoundType: 'فسفید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1160,
            formationTemp: 500,
            reactionType: 'مستقیم',
            description: 'به عنوان جونده‌کش استفاده می‌شود.',
            commonName: 'روی فسفید'
        }
    ],

    // =============== ترکیبات کربن با فلزات (کاربیدها) ===============
    'C-Ca': [
        {
            formula: 'CaC₂',
            name: 'کلسیم کاربید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'کاربید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2300,
            formationTemp: 2000,
            reactionType: 'کوره قوس الکتریکی',
            description: 'با آب واکنش داده و استیلن تولید می‌کند.',
            commonName: 'کاربید کلسیم'
        }
    ],
    'C-Al': [
        {
            formula: 'Al₄C₃',
            name: 'آلومینیوم کاربید',
            bondType: 'کووالانسی-یونی',
            compoundType: 'کاربید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2100,
            formationTemp: 1000,
            reactionType: 'مستقیم',
            description: 'با آب واکنش داده و متان تولید می‌کند.',
            commonName: 'آلومینیوم کاربید'
        }
    ],
    'C-Si': [
        {
            formula: 'SiC',
            name: 'سیلیسیم کاربید',
            bondType: 'کووالانسی',
            compoundType: 'کاربید نافلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 2730,
            formationTemp: 1600,
            reactionType: 'مستقیم',
            description: 'ساینده و ماده نسوز مهم.',
            commonName: 'کاربوراندوم'
        }
    ],
    'C-Fe': [
        {
            formula: 'Fe₃C',
            name: 'آهن کاربید',
            bondType: 'بینابینی',
            compoundType: 'کاربید فلزی',
            physicalState: 'جامد',
            polarity: 'فلزی',
            meltingPoint: 1227,
            formationTemp: 1200,
            reactionType: 'در فولاد',
            description: 'سیمانیت، جزء اصلی فولاد.',
            commonName: 'سیمانیت'
        }
    ],

    // =============== ترکیبات سلنیوم و تلوریوم با فلزات ===============
    'Se-Zn': [
        {
            formula: 'ZnSe',
            name: 'روی سلنید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'سلنید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1525,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'نیمه‌رسانای مهم در LEDها و لیزرها.',
            commonName: 'روی سلنید'
        }
    ],
    'Se-Cd': [
        {
            formula: 'CdSe',
            name: 'کادمیم سلنید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'سلنید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1268,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'در سلول‌های خورشیدی و سنسورها استفاده می‌شود.',
            commonName: 'کادمیم سلنید'
        }
    ],
    'Te-Cd': [
        {
            formula: 'CdTe',
            name: 'کادمیم تلورید',
            bondType: 'یونی-کووالانسی',
            compoundType: 'تلورید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 1041,
            formationTemp: 600,
            reactionType: 'مستقیم',
            description: 'در سلول‌های خورشیدی و آشکارسازهای پرتو ایکس استفاده می‌شود.',
            commonName: 'کادمیم تلورید'
        }
    ],

    // =============== ترکیبات فلز با فلز (آلیاژهای مهم) ===============
    'Fe-C': [
        {
            formula: 'Fe-C آلیاژ',
            name: 'فولاد',
            bondType: 'فلزی',
            compoundType: 'آلیاژ',
            physicalState: 'جامد',
            polarity: 'غیرقطبی',
            meltingPoint: 1370,
            formationTemp: 1500,
            reactionType: 'ذوب و آلیاژسازی',
            description: 'آلیاژ آهن و کربن با محتوای کربن معمولاً کمتر از 2%.',
            commonName: 'فولاد'
        }
    ],
    'Cu-Zn': [
        {
            formula: 'Cu-Zn آلیاژ',
            name: 'برنج',
            bondType: 'فلزی',
            compoundType: 'آلیاژ',
            physicalState: 'جامد',
            polarity: 'غیرقطبی',
            meltingPoint: 900,
            formationTemp: 1000,
            reactionType: 'ذوب و آلیاژسازی',
            description: 'آلیاژی از مس و روی با رنگ طلایی.',
            commonName: 'برنج'
        }
    ],
    'Cu-Sn': [
        {
            formula: 'Cu-Sn آلیاژ',
            name: 'برنز',
            bondType: 'فلزی',
            compoundType: 'آلیاژ',
            physicalState: 'جامد',
            polarity: 'غیرقطبی',
            meltingPoint: 950,
            formationTemp: 1100,
            reactionType: 'ذوب و آلیاژسازی',
            description: 'آلیاژی از مس و قلع، اولین آلیاژ ساخته شده توسط بشر.',
            commonName: 'برنز'
        }
    ],
    'Sn-Pb': [
        {
            formula: 'Sn-Pb آلیاژ',
            name: 'لحیم',
            bondType: 'فلزی',
            compoundType: 'آلیاژ',
            physicalState: 'جامد/مایع',
            polarity: 'غیرقطبی',
            meltingPoint: 183,
            formationTemp: 250,
            reactionType: 'ذوب و آلیاژسازی',
            description: 'آلیاژی از قلع و سرب برای اتصال فلزات.',
            commonName: 'لحیم'
        }
    ],
    'Ni-Cr': [
        {
            formula: 'Ni-Cr آلیاژ',
            name: 'نیکروم',
            bondType: 'فلزی',
            compoundType: 'آلیاژ',
            physicalState: 'جامد',
            polarity: 'غیرقطبی',
            meltingPoint: 1350,
            formationTemp: 1400,
            reactionType: 'ذوب و آلیاژسازی',
            description: 'آلیاژی از نیکل و کروم با مقاومت الکتریکی بالا.',
            commonName: 'نیکروم'
        }
    ],
    'Fe-Ni': [
        {
            formula: 'Fe-Ni آلیاژ',
            name: 'اینوار',
            bondType: 'فلزی',
            compoundType: 'آلیاژ',
            physicalState: 'جامد',
            polarity: 'غیرقطبی',
            meltingPoint: 1427,
            formationTemp: 1500,
            reactionType: 'ذوب و آلیاژسازی',
            description: 'آلیاژی با ضریب انبساط حرارتی بسیار پایین.',
            commonName: 'اینوار'
        }
    ],

    // =============== سایر ترکیبات مهم ===============
    'Cl-C': [
        {
            formula: 'CCl₄',
            name: 'کربن تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'ناقطبی',
            meltingPoint: -23,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'حلال آلی که قبلاً به طور گسترده استفاده می‌شد اما به دلیل سمیت کمتر استفاده می‌شود.',
            commonName: 'تتراکلرید کربن'
        }
    ],
    'S-C': [
        {
            formula: 'CS₂',
            name: 'کربن دی‌سولفید',
            bondType: 'کووالانسی',
            compoundType: 'سولفید نافلزی',
            physicalState: 'مایع',
            polarity: 'ناقطبی',
            meltingPoint: -111,
            formationTemp: 300,
            reactionType: 'مستقیم',
            description: 'حلال آلی فرار و قابل اشتعال.',
            commonName: 'کربن دی‌سولفید'
        }
    ],
    'N-O': [
        {
            formula: 'N₂O₅',
            name: 'نیتروژن پنتااکسید',
            bondType: 'کووالانسی',
            compoundType: 'اکسید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 30,
            formationTemp: 0,
            reactionType: 'اکسیداسیون',
            description: 'انیدرید اسید نیتریک.',
            commonName: 'نیتروژن پنتااکسید'
        }
    ],
    'P-Cl': [
        {
            formula: 'PCl₃',
            name: 'فسفر تری‌کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: -93,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'در سنتز آلی استفاده می‌شود.',
            commonName: 'فسفر تری‌کلرید'
        },
        {
            formula: 'PCl₅',
            name: 'فسفر پنتاکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 167,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'در سنتز آلی استفاده می‌شود.',
            commonName: 'فسفر پنتاکلرید'
        }
    ],
    'As-Cl': [
        {
            formula: 'AsCl₃',
            name: 'آرسنیک تری‌کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'قطبی',
            meltingPoint: -16,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'ترکیبی بسیار سمی.',
            commonName: 'آرسنیک تری‌کلرید'
        }
    ],
    'Sb-Cl': [
        {
            formula: 'SbCl₃',
            name: 'آنتیموان تری‌کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 73,
            formationTemp: 100,
            reactionType: 'مستقیم',
            description: 'در آبکاری و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'آنتیموان تری‌کلرید'
        }
    ],
    'Se-Cl': [
        {
            formula: 'SeCl₄',
            name: 'سلنیوم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 305,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'در سنتزهای شیمیایی استفاده می‌شود.',
            commonName: 'سلنیوم تتراکلرید'
        }
    ],
    'Te-Cl': [
        {
            formula: 'TeCl₄',
            name: 'تلوریوم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 224,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'در سنتزهای شیمیایی استفاده می‌شود.',
            commonName: 'تلوریوم تتراکلرید'
        }
    ],
    'B-Cl': [
        {
            formula: 'BCl₃',
            name: 'بورون تری‌کلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'گاز',
            polarity: 'قطبی',
            meltingPoint: -107,
            formationTemp: 200,
            reactionType: 'مستقیم',
            description: 'در تولید بورون خالص و به عنوان کاتالیزور استفاده می‌شود.',
            commonName: 'بورون تری‌کلرید'
        }
    ],
    'Si-Cl': [
        {
            formula: 'SiCl₄',
            name: 'سیلیسیم تتراکلرید',
            bondType: 'کووالانسی',
            compoundType: 'هالید نافلزی',
            physicalState: 'مایع',
            polarity: 'ناقطبی',
            meltingPoint: -68,
            formationTemp: 400,
            reactionType: 'مستقیم',
            description: 'در تولید سیلیسیم خالص و دود سیلیس استفاده می‌شود.',
            commonName: 'سیلیسیم تتراکلرید'
        }
    ],
    'C-Si': [
        {
            formula: 'SiC',
            name: 'سیلیسیم کاربید',
            bondType: 'کووالانسی',
            compoundType: 'کاربید نافلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 2730,
            formationTemp: 1600,
            reactionType: 'مستقیم',
            description: 'ساینده و ماده نسوز مهم.',
            commonName: 'کاربوراندوم'
        }
    ],
    'B-N': [
        {
            formula: 'BN',
            name: 'بورون نیترید',
            bondType: 'کووالانسی',
            compoundType: 'نیترید نافلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 2973,
            formationTemp: 1500,
            reactionType: 'مستقیم',
            description: 'ماده‌ای با ساختاری مشابه گرافیت یا الماس.',
            commonName: 'بورون نیترید'
        }
    ],
    'Al-N': [
        {
            formula: 'AlN',
            name: 'آلومینیوم نیترید',
            bondType: 'کووالانسی',
            compoundType: 'نیترید فلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 2200,
            formationTemp: 800,
            reactionType: 'مستقیم',
            description: 'یک ماده نیمه‌رسانا با هدایت حرارتی عالی.',
            commonName: 'آلومینیوم نیترید'
        }
    ],
    'Si-N': [
        {
            formula: 'Si₃N₄',
            name: 'سیلیسیم نیترید',
            bondType: 'کووالانسی',
            compoundType: 'نیترید نافلزی',
            physicalState: 'جامد',
            polarity: 'کمی قطبی',
            meltingPoint: 1900,
            formationTemp: 1400,
            reactionType: 'مستقیم',
            description: 'سرامیک مهندسی با مقاومت حرارتی و شیمیایی عالی.',
            commonName: 'سیلیسیم نیترید'
        }
    ],
    'P-N': [
        {
            formula: 'P₃N₅',
            name: 'فسفر نیترید',
            bondType: 'کووالانسی',
            compoundType: 'نیترید نافلزی',
            physicalState: 'جامد',
            polarity: 'قطبی',
            meltingPoint: 850,
            formationTemp: 800,
            reactionType: 'مستقیم',
            description: 'ترکیبی نیمه‌رسانا.',
            commonName: 'فسفر نیترید'
        }
    ]
};

// تابع برای بررسی فعال بودن عنصر
function isElementActive(elementSymbol) {
    return activeElements.includes(elementSymbol);
}

// تابع برای دریافت الکترونگاتیوی عنصر
function getElectronegativity(elementSymbol) {
    const element = [...elements, ...lanthanides, ...actinides].find(e => e.symbol === elementSymbol);
    return element ? element.electronegativity : null;
}

// تابع برای دریافت تمام ترکیبات ممکن بین دو عنصر
function getCompoundsBetweenElements(element1Symbol, element2Symbol) {
    // ایجاد کلیدهای ممکن برای جستجو
    const key1 = `${element1Symbol}-${element2Symbol}`;
    const key2 = `${element2Symbol}-${element1Symbol}`;

    if (compoundDatabase[key1]) {
        return compoundDatabase[key1];
    } else if (compoundDatabase[key2]) {
        return compoundDatabase[key2];
    }

    return null;
}

// تابع برای بررسی امکان واکنش بین دو عنصر
function canElementsReact(element1Symbol, element2Symbol) {
    const compounds = getCompoundsBetweenElements(element1Symbol, element2Symbol);
    return compounds && compounds.length > 0;
}

// تابع کمکی برای ایجاد متن با اندیس پایین
function subscript(number) {
    const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    return number.toString().split('').map(digit => subscripts[parseInt(digit)]).join('');
}
