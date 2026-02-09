// متغیرهای حالت
let selectedElementA = null;
let selectedElementB = null;
let currentTemperature = 0;
let currentChart = null;
let ballPosition = { x: 0, y: 0 };
let reactionStarted = false;
let reactionCompleted = false;
let ballElement = null;
let currentReactionData = null;
let availableCompounds = []; // لیست ترکیبات ممکن برای جفت عناصر انتخاب شده
let selectedCompoundIndex = 0; // اندیس ترکیب انتخاب شده

// موقعیت‌های صحیح برای هر عنصر در جدول تناوبی (چپ به راست)
const elementPositions = {
    1: { row: 1, col: 1 }, 2: { row: 1, col: 18 },
    3: { row: 2, col: 1 }, 4: { row: 2, col: 2 }, 5: { row: 2, col: 13 }, 6: { row: 2, col: 14 }, 7: { row: 2, col: 15 }, 8: { row: 2, col: 16 }, 9: { row: 2, col: 17 }, 10: { row: 2, col: 18 },
    11: { row: 3, col: 1 }, 12: { row: 3, col: 2 }, 13: { row: 3, col: 13 }, 14: { row: 3, col: 14 }, 15: { row: 3, col: 15 }, 16: { row: 3, col: 16 }, 17: { row: 3, col: 17 }, 18: { row: 3, col: 18 },
    19: { row: 4, col: 1 }, 20: { row: 4, col: 2 }, 21: { row: 4, col: 3 }, 22: { row: 4, col: 4 }, 23: { row: 4, col: 5 }, 24: { row: 4, col: 6 }, 25: { row: 4, col: 7 }, 26: { row: 4, col: 8 },
    27: { row: 4, col: 9 }, 28: { row: 4, col: 10 }, 29: { row: 4, col: 11 }, 30: { row: 4, col: 12 }, 31: { row: 4, col: 13 }, 32: { row: 4, col: 14 }, 33: { row: 4, col: 15 }, 34: { row: 4, col: 16 },
    35: { row: 4, col: 17 }, 36: { row: 4, col: 18 }, 37: { row: 5, col: 1 }, 38: { row: 5, col: 2 }, 39: { row: 5, col: 3 }, 40: { row: 5, col: 4 }, 41: { row: 5, col: 5 }, 42: { row: 5, col: 6 },
    43: { row: 5, col: 7 }, 44: { row: 5, col: 8 }, 45: { row: 5, col: 9 }, 46: { row: 5, col: 10 }, 47: { row: 5, col: 11 }, 48: { row: 5, col: 12 }, 49: { row: 5, col: 13 }, 50: { row: 5, col: 14 },
    51: { row: 5, col: 15 }, 52: { row: 5, col: 16 }, 53: { row: 5, col: 17 }, 54: { row: 5, col: 18 }, 55: { row: 6, col: 1 }, 56: { row: 6, col: 2 }, 57: { row: 6, col: 3 },
    72: { row: 6, col: 4 }, 73: { row: 6, col: 5 }, 74: { row: 6, col: 6 }, 75: { row: 6, col: 7 }, 76: { row: 6, col: 8 }, 77: { row: 6, col: 9 }, 78: { row: 6, col: 10 },
    79: { row: 6, col: 11 }, 80: { row: 6, col: 12 }, 81: { row: 6, col: 13 }, 82: { row: 6, col: 14 }, 83: { row: 6, col: 15 }, 84: { row: 6, col: 16 }, 85: { row: 6, col: 17 },
    86: { row: 6, col: 18 }, 87: { row: 7, col: 1 }, 88: { row: 7, col: 2 }, 89: { row: 7, col: 3 }, 104: { row: 7, col: 4 }, 105: { row: 7, col: 5 }, 106: { row: 7, col: 6 },
    107: { row: 7, col: 7 }, 108: { row: 7, col: 8 }, 109: { row: 7, col: 9 }, 110: { row: 7, col: 10 }, 111: { row: 7, col: 11 }, 112: { row: 7, col: 12 },
    113: { row: 7, col: 13 }, 114: { row: 7, col: 14 }, 115: { row: 7, col: 15 }, 116: { row: 7, col: 16 }, 117: { row: 7, col: 17 }, 118: { row: 7, col: 18 }
};

// پایگاه داده آنتالپی استاندارد تشکیل برای ترکیبات رایج (ΔH°f در kJ/mol)
const standardEnthalpiesOfFormation = {
    // ترکیبات معدنی
    'H₂O': -285.8,
    'H₂O₂': -187.8,
    'CO': -110.5,
    'CO₂': -393.5,
    'CH₄': -74.8,
    'C₂H₆': -84.7,
    'C₂H₄': 52.4,
    'C₂H₂': 226.7,
    'CH₃OH': -238.7,
    'C₂H₅OH': -277.7,
    'NH₃': -46.1,
    'N₂H₄': 50.6,
    'NO': 90.3,
    'NO₂': 33.2,
    'N₂O': 82.1,
    'N₂O₅': 11.3,
    'HCl': -92.3,
    'HF': -273.3,
    'HBr': -36.3,
    'HI': 26.5,
    'H₂S': -20.6,
    'H₂Se': 29.7,
    'H₂Te': 99.6,
    'SO₂': -296.8,
    'SO₃': -395.7,
    'PH₃': 5.4,
    'AsH₃': 66.4,
    'SbH₃': 145.1,
    'SiH₄': 34.3,
    'B₂H₆': 36.0,

    // اکسیدهای فلزی
    'Li₂O': -597.9,
    'Li₂O₂': -634.3,
    'Na₂O': -414.2,
    'Na₂O₂': -510.9,
    'K₂O': -363.2,
    'KO₂': -284.5,
    'MgO': -601.6,
    'CaO': -635.1,
    'CaO₂': -655.0,
    'SrO': -592.0,
    'BaO': -553.5,
    'BaO₂': -634.3,
    'Al₂O₃': -1675.7,
    'FeO': -272.0,
    'Fe₂O₃': -824.2,
    'Fe₃O₄': -1118.4,
    'Cu₂O': -168.6,
    'CuO': -157.3,
    'ZnO': -348.0,
    'HgO': -90.8,
    'NiO': -239.7,
    'CoO': -237.9,
    'Co₃O₄': -891.0,
    'MnO': -385.2,
    'MnO₂': -520.0,
    'Cr₂O₃': -1139.7,
    'CrO₃': -589.5,
    'TiO₂': -944.0,
    'SnO': -285.8,
    'SnO₂': -577.6,
    'PbO': -217.3,
    'PbO₂': -277.4,
    'BeO': -609.6,
    'Cs₂O': -345.8,
    'Rb₂O': -330.1,

    // هالیدهای فلزی
    'LiF': -616.0,
    'NaF': -573.6,
    'KF': -567.3,
    'MgF₂': -1124.2,
    'CaF₂': -1228.0,
    'AlF₃': -1510.4,
    'SiF₄': -1615.0,
    'LiCl': -408.6,
    'NaCl': -411.2,
    'KCl': -436.7,
    'MgCl₂': -641.6,
    'CaCl₂': -795.4,
    'AlCl₃': -704.2,
    'SiCl₄': -657.0,
    'FeCl₂': -341.8,
    'FeCl₃': -399.5,
    'CuCl': -137.2,
    'CuCl₂': -220.1,
    'ZnCl₂': -415.1,
    'AgCl': -127.1,
    'NiCl₂': -305.3,
    'CoCl₂': -312.5,
    'MnCl₂': -481.3,
    'CrCl₂': -395.4,
    'CrCl₃': -556.5,
    'TiCl₄': -763.2,
    'SnCl₂': -325.1,
    'SnCl₄': -471.5,
    'PbCl₂': -359.4,
    'HgCl₂': -224.3,
    'Hg₂Cl₂': -265.4,
    'SeCl₄': -242.7,
    'TeCl₄': -326.4,
    'AsCl₃': -305.0,
    'SbCl₃': -382.2,
    'SbCl₅': -440.2,
    'BeCl₂': -490.0,
    'SrCl₂': -828.9,
    'BaCl₂': -858.6,
    'CsCl': -442.8,
    'RbCl': -435.4,

    // سایر ترکیبات مهم
    'NaBr': -361.1,
    'KBr': -393.8,
    'AgBr': -100.4,
    'NaI': -287.8,
    'KI': -327.9,
    'AgI': -61.8,
    'Li₂S': -447.3,
    'Na₂S': -364.8,
    'K₂S': -380.7,
    'MgS': -346.0,
    'CaS': -482.4,
    'FeS': -100.0,
    'FeS₂': -178.2,
    'Cu₂S': -79.5,
    'CuS': -53.1,
    'ZnS': -205.0,
    'Ag₂S': -32.6,
    'PbS': -100.4,
    'HgS': -58.2,
    'Li₃N': -164.8,
    'Mg₃N₂': -461.1,
    'AlN': -318.0,
    'Si₃N₄': -744.8,
    'CaC₂': -59.8,
    'Al₄C₃': -209.2,
    'SiC': -65.3,
    'Fe₃C': 25.1,
    'ZnSe': -163.0,
    'CdSe': -142.7,
    'CdTe': -92.0,
    'BN': -254.4,
    'P₃N₅': -300.0,
    'B₂O₃': -1273.5,
    'SiO₂': -910.7,
    'P₄O₆': -1640.1,
    'P₄O₁₀': -2984.0,
    'Cl₂O': 80.3,
    'ClO₂': 102.5,
    'SeO₂': -225.0,
    'TeO₂': -322.6,
    'As₂O₃': -657.0,
    'As₂O₅': -924.9,
    'Sb₂O₃': -692.0,

    // هالیدهای غیرفلزی
    'CCl₄': -135.4,
    'CS₂': 117.4,
    'PCl₃': -287.0,
    'PCl₅': -374.9,
    'BCl₃': -403.8
};

// آنتالپی پیوند متوسط برای تخمین (kJ/mol)
const averageBondEnthalpies = {
    'H-H': 436,
    'H-O': 463,
    'H-N': 391,
    'H-C': 413,
    'H-F': 567,
    'H-Cl': 431,
    'H-Br': 366,
    'H-I': 299,
    'O=O': 498,
    'O-O': 146,
    'N≡N': 945,
    'N-N': 160,
    'N=N': 418,
    'C-C': 348,
    'C=C': 614,
    'C≡C': 839,
    'C-O': 360,
    'C=O': 743,
    'C-N': 305,
    'C≡N': 891,
    'C-F': 485,
    'C-Cl': 328,
    'C-Br': 276,
    'C-I': 240,
    'Si-O': 466,
    'Si-Si': 226,
    'F-F': 155,
    'Cl-Cl': 242,
    'Br-Br': 193,
    'I-I': 151,
    'S-S': 266,
    'S=O': 523,
    'S=O (double)': 532,
    'P-P': 197,
    'P=O': 544
};

// ============================================================================
// **اضافه شده: آنتروپی استاندارد (ΔS° در J/mol·K)** - داده‌های واقعی
// ============================================================================
const standardEntropies = {
    // ترکیبات مهم
    'H₂O': 69.9,      // آب مایع
    'H₂O(g)': 188.8,  // بخار آب
    'CO': 197.7,
    'CO₂': 213.6,
    'CH₄': 186.3,
    'C₂H₆': 229.6,
    'NH₃': 192.8,
    'HCl': 186.9,
    'HF': 173.8,
    'HBr': 198.7,
    'HI': 206.6,
    'H₂S': 205.8,
    'SO₂': 248.2,
    'SO₃': 256.8,
    'PH₃': 210.2,
    'SiH₄': 204.6,

    // اکسیدهای فلزی
    'Li₂O': 37.6,
    'Na₂O': 75.1,
    'K₂O': 94.1,
    'MgO': 26.9,
    'CaO': 39.7,
    'Al₂O₃': 50.9,
    'FeO': 57.5,
    'Fe₂O₃': 87.4,
    'Fe₃O₄': 146.4,
    'Cu₂O': 93.1,
    'CuO': 42.6,
    'ZnO': 43.7,
    'HgO': 70.3,
    'NiO': 38.0,
    'MnO': 59.7,
    'MnO₂': 53.1,
    'Cr₂O₃': 81.2,
    'TiO₂': 50.3,
    'SnO': 57.2,
    'SnO₂': 52.3,
    'PbO': 66.5,
    'PbO₂': 71.8,
    'SiO₂': 41.8,  // کوارتز
    'B₂O₃': 54.0,

    // هالیدهای فلزی
    'LiF': 35.7,
    'NaF': 51.5,
    'KF': 66.6,
    'MgF₂': 57.2,
    'CaF₂': 68.9,
    'AlF₃': 66.5,
    'LiCl': 59.3,
    'NaCl': 72.1,
    'KCl': 82.6,
    'MgCl₂': 89.6,
    'CaCl₂': 104.6,
    'AlCl₃': 167.4,
    'FeCl₂': 118.0,
    'FeCl₃': 142.3,
    'CuCl': 86.2,
    'CuCl₂': 108.1,
    'ZnCl₂': 111.5,
    'AgCl': 96.3,
    'NiCl₂': 107.1,

    // عناصر در حالت استاندارد
    'H₂': 130.7,
    'O₂': 205.1,
    'N₂': 191.6,
    'F₂': 202.8,
    'Cl₂': 223.1,
    'Br₂(l)': 152.2,
    'I₂(s)': 116.1,
    'S(s)': 32.1,  // S₈
    'P(s)': 41.1,  // P₄
    'C(s)': 5.7,   // گرافیت
    'Si(s)': 18.8,
    'B(s)': 5.9,

    // فلزات
    'Li(s)': 29.1,
    'Na(s)': 51.3,
    'K(s)': 64.7,
    'Mg(s)': 32.7,
    'Ca(s)': 41.6,
    'Al(s)': 28.3,
    'Fe(s)': 27.3,
    'Cu(s)': 33.2,
    'Zn(s)': 41.6,
    'Ag(s)': 42.6,
    'Ni(s)': 29.9,
    'Sn(s)': 51.2,
    'Pb(s)': 64.8,
    'Hg(l)': 76.0
};

// ============================================================================
// **تابع جدید: محاسبه تغییر آنتروپی واکنش (ΔS)**
// ============================================================================
function calculateDeltaS(compound, elementA, elementB) {
    // ΔS°_واکنش = ΣS°(محصولات) - ΣS°(واکنش‌دهندگان)

    // آنتروپی استاندارد ترکیب
    let compoundEntropy = 0;

    // جستجوی آنتروپی ترکیب در پایگاه داده
    if (standardEntropies.hasOwnProperty(compound.formula)) {
        compoundEntropy = standardEntropies[compound.formula];
    } else {
        // تخمین آنتروپی بر اساس نوع ترکیب اگر در پایگاه داده نبود
        if (compound.bondType.includes('یونی')) {
            compoundEntropy = 50 + (20 * Math.log10(compound.formula.length)); // تخمین
        } else if (compound.bondType.includes('کووالانسی')) {
            compoundEntropy = 100 + (30 * Math.log10(compound.formula.length));
        } else if (compound.compoundType.includes('گاز')) {
            compoundEntropy = 200; // گازها آنتروپی بالایی دارند
        } else if (compound.compoundType.includes('مایع')) {
            compoundEntropy = 150;
        } else {
            compoundEntropy = 80; // جامدات
        }
    }

    // آنتروپی استاندارد عناصر واکنش‌دهنده
    let reactantEntropy = 0;

    // حالت استاندارد عناصر
    const standardStateEntropies = {
        'H': standardEntropies['H₂'] / 2, // H₂ گاز است
        'O': standardEntropies['O₂'] / 2,
        'N': standardEntropies['N₂'] / 2,
        'F': standardEntropies['F₂'] / 2,
        'Cl': standardEntropies['Cl₂'] / 2,
        'Br': standardEntropies['Br₂(l)'] / 2,
        'I': standardEntropies['I₂(s)'] / 2,
        'S': standardEntropies['S(s)'],
        'P': standardEntropies['P(s)'],
        'C': standardEntropies['C(s)'],
        'Si': standardEntropies['Si(s)'],
        'B': standardEntropies['B(s)']
    };

    // محاسبه آنتروپی واکنش‌دهندگان
    const elemASymbol = elementA.symbol;
    const elemBSymbol = elementB.symbol;

    // تخمین آنتروپی عناصر
    const entropyA = standardStateEntropies[elemASymbol] ||
        (elementA.category === 'alkali' || elementA.category === 'alkaline' ? 30 :
            elementA.category === 'transition' ? 40 : 50);

    const entropyB = standardStateEntropies[elemBSymbol] ||
        (elementB.category === 'alkali' || elementB.category === 'alkaline' ? 30 :
            elementB.category === 'transition' ? 40 : 50);

    // برای واکنش‌های ساده: A + B → AB
    reactantEntropy = entropyA + entropyB;

    // تغییر آنتروپی واکنش (تبدیل به kJ/mol·K)
    const deltaS = (compoundEntropy - reactantEntropy) / 1000; // تبدیل J/mol·K به kJ/mol·K

    return deltaS;
}

// ============================================================================
// **تابع جدید: محاسبه انرژی آزاد گیبس (ΔG)**
// ============================================================================
function calculateDeltaG(compound, elementA, elementB, temperature) {
    // ΔG = ΔH - TΔS (T بر حسب کلوین)

    const deltaH = calculateDeltaH(compound, elementA, elementB);
    const deltaS = calculateDeltaS(compound, elementA, elementB);

    // تبدیل دمای سلسیوس به کلوین
    const T = temperature + 273.15;

    // محاسبه ΔG
    const deltaG = deltaH - (T * deltaS);

    return deltaG;
}

// ============================================================================
// **تابع جدید: تعیین وضعیت خودبخودی واکنش**
// ============================================================================
function getSpontaneityStatus(deltaG, temperature) {
    // ΔG < 0: واکنش خودبخودی
    // ΔG > 0: واکنش غیرخودبخودی
    // ΔG = 0: واکنش در تعادل

    if (temperature === 0) {
        return {
            text: "دمای صفر",
            color: "#3498db",
            emoji: "🌡️",
            description: "واکنش آغاز نشده"
        };
    }

    if (Math.abs(deltaG) < 5) { // حدود صفر
        return {
            text: "در تعادل",
            color: "#f39c12",
            emoji: "⚖️",
            description: "واکنش در حالت تعادل است"
        };
    }

    if (deltaG < -100) {
        return {
            text: "خودبخودی قوی",
            color: "#2ecc71",
            emoji: "🔥",
            description: "واکنش به شدت خودبخودی است"
        };
    }

    if (deltaG < 0) {
        return {
            text: "خودبخودی",
            color: "#27ae60",
            emoji: "✅",
            description: "واکنش خودبخودی است"
        };
    }

    if (deltaG > 100) {
        return {
            text: "غیرخودبخودی قوی",
            color: "#c0392b",
            emoji: "⛔",
            description: "واکنش نیاز به انرژی زیادی دارد"
        };
    }

    return {
        text: "غیرخودبخودی",
        color: "#e74c3c",
        emoji: "❌",
        description: "واکنش خودبخودی نیست"
    };
}

// مقداردهی اولیه برنامه
document.addEventListener('DOMContentLoaded', function () {
    initPeriodicTable();
    setupEventListeners();
    updateSelectionDisplay();

    // ایجاد توپ برای نمایش روی نمودار
    createTemperatureBall();

    console.log('برنامه جدول تناوبی هوشمند با پایگاه داده جامع ترکیبات آماده است!');
    console.log('تعداد عناصر فعال:', activeElements.length);
    console.log('تعداد ترکیبات ثبت شده در پایگاه داده:', Object.keys(compoundDatabase).length);
});

// ایجاد توپ برای نمایش روی نمودار
function createTemperatureBall() {
    // حذف توپ قبلی اگر وجود دارد
    const oldBall = document.getElementById('temperatureBall');
    if (oldBall) {
        oldBall.remove();
    }

    // ایجاد توپ جدید
    ballElement = document.createElement('div');
    ballElement.id = 'temperatureBall';
    ballElement.className = 'temperature-ball';

    // استایل توپ - کوچک‌تر (20px) و با موقعیت مطلق
    ballElement.style.position = 'absolute';
    ballElement.style.width = '20px';
    ballElement.style.height = '20px';
    ballElement.style.borderRadius = '50%';
    ballElement.style.background = 'radial-gradient(circle at 30% 30%, #3498db, #2980b9)';
    ballElement.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.7)';
    ballElement.style.zIndex = '1000';
    ballElement.style.display = 'none';
    ballElement.style.transition = 'left 0.3s ease, top 0.3s ease';
    ballElement.style.pointerEvents = 'none';

    // اضافه کردن محتوای توپ - بهبود یافته برای نمایش ΔG و ΔH
    ballElement.innerHTML = `
        <div class="ball-content" style="position: absolute; top: -80px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.9); color: white; padding: 8px 12px; border-radius: 6px; font-size: 12px; white-space: nowrap; display: none; min-width: 150px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1);">
            <div class="temp-value" style="font-weight: bold; margin-bottom: 4px;"></div>
            <div class="enthalpy-value" style="color: #FF6B6B; margin-bottom: 4px;"></div>
            <div class="gibbs-value" style="color: #3498db; margin-bottom: 4px;"></div>
            <div class="spontaneity-value" style="font-size: 11px; color: #f1c40f;"></div>
        </div>
    `;

    // اضافه کردن توپ به بدنه
    document.body.appendChild(ballElement);
}

// مقداردهی اولیه جدول تناوبی (با جهت درست چپ به راست)
function initPeriodicTable() {
    const table = document.getElementById('periodic-table');
    const lanthanidesContainer = document.getElementById('lanthanides');
    const actinidesContainer = document.getElementById('actinides');

    table.innerHTML = '';
    lanthanidesContainer.innerHTML = '';
    actinidesContainer.innerHTML = '';

    // ایجاد ردیف شماره گروه‌ها (چپ به راست)
    for (let group = 1; group <= 18; group++) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'group-number';
        groupDiv.textContent = group;
        groupDiv.style.gridColumn = group;  // چپ به راست
        groupDiv.style.gridRow = 1;
        table.appendChild(groupDiv);
    }

    // ایجاد عناصر اصلی (چپ به راست)
    elements.forEach(element => {
        const pos = elementPositions[element.number];
        if (!pos) return;

        const elementDiv = createElementDiv(element, {
            row: pos.row + 1,
            col: pos.col  // چپ به راست
        });
        table.appendChild(elementDiv);
    });

    // اضافه کردن لانتانیدها (چپ به راست)
    lanthanides.forEach(element => {
        const elementDiv = createElementDiv(element);
        lanthanidesContainer.appendChild(elementDiv);
    });

    // اضافه کردن آکتینیدها (چپ به راست)
    actinides.forEach(element => {
        const elementDiv = createElementDiv(element);
        actinidesContainer.appendChild(elementDiv);
    });
}

// ایجاد div برای یک عنصر
function createElementDiv(element, position = null) {
    const elementDiv = document.createElement('div');
    elementDiv.className = 'element';
    elementDiv.dataset.number = element.number;
    elementDiv.dataset.symbol = element.symbol;
    elementDiv.dataset.name = element.name;
    elementDiv.dataset.category = element.category;
    elementDiv.dataset.reactivity = element.reactivity;
    elementDiv.dataset.electronegativity = element.electronegativity || 'null';

    // اضافه کردن کلاس inactive برای عناصر غیرفعال
    if (!isElementActive(element.symbol)) {
        elementDiv.classList.add('inactive');
    }

    if (position) {
        elementDiv.style.gridColumn = position.col;
        elementDiv.style.gridRow = position.row;
    }

    elementDiv.style.background = `linear-gradient(135deg, ${element.color}40, ${element.color})`;
    elementDiv.style.borderColor = `${element.color}80`;

    elementDiv.innerHTML = `
        <div class="element-number">${element.number}</div>
        <div class="element-symbol-small">${element.symbol}</div>
        <div class="element-name">${element.name}</div>
    `;

    elementDiv.addEventListener('click', () => selectElement(element));
    return elementDiv;
}

// تنظیم رویدادها
function setupEventListeners() {
    // دکمه بازنشانی
    document.getElementById('reset-btn').addEventListener('click', resetSelection);

    // دکمه شبیه‌سازی
    document.getElementById('simulate-btn').addEventListener('click', startSimulation);

    // اسلایدر دما
    const tempSlider = document.getElementById('temperatureSlider');
    tempSlider.addEventListener('input', function () {
        currentTemperature = parseInt(this.value);
        document.getElementById('temperatureValue').textContent = currentTemperature;
        updateTemperatureDisplay();
        updateChart();
        updateTemperatureMarker();
    });
}

// انتخاب یک عنصر
function selectElement(element) {
    // اگر عنصر غیرفعال باشد، هیچ کاری نکن
    if (!isElementActive(element.symbol)) {
        showInactiveElementMessage(element);
        return;
    }

    playElementSound(element);

    // اگر روی عنصر انتخاب شده کلیک شود، آن را حذف کن
    if (selectedElementA && selectedElementA.number === element.number) {
        selectedElementA = null;
        updateSelectionDisplay();
        resetBondingHighlights();
        hideAllSections();
        hideCompoundDetails();
        return;
    }

    if (selectedElementB && selectedElementB.number === element.number) {
        selectedElementB = null;
        updateSelectionDisplay();
        resetBondingHighlights();
        hideAllSections();
        hideCompoundDetails();
        if (selectedElementA) {
            highlightReactiveElements(selectedElementA);
        }
        return;
    }

    // اگر هیچ عنصری انتخاب نشده، عنصر اول را انتخاب کن
    if (!selectedElementA) {
        selectedElementA = element;
        highlightReactiveElements(element);
        hideCompoundDetails();
    }
    // اگر عنصر اول انتخاب شده اما عنصر دوم نه، عنصر دوم را انتخاب کن
    else if (!selectedElementB) {
        selectedElementB = element;
        highlightOnlySelectedElements();
        showReactionPrediction();
        showAllSections();
    }
    // اگر هر دو عنصر انتخاب شده‌اند، عنصر اول را با عنصر دوم جایگزین کن و عنصر جدید را انتخاب کن
    else {
        selectedElementA = selectedElementB;
        selectedElementB = element;
        highlightOnlySelectedElements();
        showReactionPrediction();
        showAllSections();
    }

    updateSelectionDisplay();
}

// نمایش پیام برای عنصر غیرفعال
function showInactiveElementMessage(element) {
    document.getElementById('temperature-control-panel').style.display = 'none';
    document.getElementById('enthalpy-section').style.display = 'none';
    document.getElementById('compound-details-section').style.display = 'none';

    alert(`عنصر ${element.name} (${element.symbol}) یکی از ۴۰ عنصر فعال نیست.\nفقط ۴۰ عنصر فعال در این شبیه‌ساز می‌توانند واکنش دهند.`);
}

// نمایش همه بخش‌ها
function showAllSections() {
    document.getElementById('temperature-control-panel').style.display = 'block';
    document.getElementById('enthalpy-section').style.display = 'block';
    document.getElementById('compound-details-section').style.display = 'block';
    document.getElementById('simulate-btn').style.display = 'inline-block';
    initializeEnthalpyChart();
}

// مخفی کردن همه بخش‌ها
function hideAllSections() {
    document.getElementById('temperature-control-panel').style.display = 'none';
    document.getElementById('enthalpy-section').style.display = 'none';
    document.getElementById('compound-details-section').style.display = 'none';
    document.getElementById('simulate-btn').style.display = 'none';
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }
}

// مخفی کردن جزئیات ترکیب
function hideCompoundDetails() {
    document.getElementById('compound-details-section').style.display = 'none';
}

// به‌روزرسانی نمایش انتخاب
function updateSelectionDisplay() {
    const elementA = document.getElementById('selected-element-a');
    const elementB = document.getElementById('selected-element-b');

    if (selectedElementA) {
        elementA.classList.add('active');
        elementA.querySelector('.element-symbol').textContent = selectedElementA.symbol;
        elementA.querySelector('.element-symbol').style.background = `linear-gradient(135deg, ${selectedElementA.color}40, ${selectedElementA.color})`;
        elementA.querySelector('h3').textContent = selectedElementA.name;
        elementA.querySelector('p').textContent = `عنصر شماره ${selectedElementA.number} | گروه ${selectedElementA.group}`;
    } else {
        elementA.classList.remove('active');
        elementA.querySelector('.element-symbol').textContent = '?';
        elementA.querySelector('.element-symbol').style.background = 'linear-gradient(135deg, #4facfe, #00f2fe)';
        elementA.querySelector('h3').textContent = 'عنصر اول';
        elementA.querySelector('p').textContent = 'برای انتخاب کلیک کنید';
    }

    if (selectedElementB) {
        elementB.classList.add('active');
        elementB.querySelector('.element-symbol').textContent = selectedElementB.symbol;
        elementB.querySelector('.element-symbol').style.background = `linear-gradient(135deg, ${selectedElementB.color}40, ${selectedElementB.color})`;
        elementB.querySelector('h3').textContent = selectedElementB.name; // این خط اضافه شد
        elementB.querySelector('p').textContent = `عنصر شماره ${selectedElementB.number} | گروه ${selectedElementB.group}`;
    } else {
        elementB.classList.remove('active');
        elementB.querySelector('.element-symbol').textContent = '?';
        elementB.querySelector('.element-symbol').style.background = 'linear-gradient(135deg, #ff6b6b, #ff8e8e)';
        elementB.querySelector('h3').textContent = 'عنصر دوم'; // این خط اضافه شد
        elementB.querySelector('p').textContent = 'روی عنصر دیگر کلیک کنید';
    }
}

// دریافت تمام ترکیبات ممکن بین دو عنصر
function getAllCompoundsBetweenElements(elementA, elementB) {
    const symA = elementA.symbol;
    const symB = elementB.symbol;

    // ایجاد کلیدهای ممکن برای جستجو
    const key1 = `${symA}-${symB}`;
    const key2 = `${symB}-${symA}`;

    if (compoundDatabase[key1]) {
        return compoundDatabase[key1];
    } else if (compoundDatabase[key2]) {
        return compoundDatabase[key2];
    }

    return null;
}

// تابع اصلی برای پیش‌بینی واکنش بر اساس پایگاه داده ترکیبات
function predictReaction(elementA, elementB) {
    const symA = elementA.symbol;
    const symB = elementB.symbol;

    // اگر هر دو عنصر یکسان باشند
    if (symA === symB) {
        return {
            possible: false,
            reason: "همان عنصر با خودش واکنش نمی‌دهد",
            elementA: elementA,
            elementB: elementB
        };
    }

    // بررسی اینکه آیا هر دو عنصر فعال هستند
    if (!isElementActive(symA) || !isElementActive(symB)) {
        return {
            possible: false,
            reason: "یک یا هر دو عنصر غیرفعال هستند",
            elementA: elementA,
            elementB: elementB
        };
    }

    // دریافت ترکیبات ممکن از پایگاه داده
    const compounds = getAllCompoundsBetweenElements(elementA, elementB);

    if (!compounds || compounds.length === 0) {
        return {
            possible: false,
            reason: "هیچ ترکیب شناخته‌شده‌ای بین این دو عنصر در شرایط استاندارد (۰-۱۰۰۰°C) وجود ندارد",
            elementA: elementA,
            elementB: elementB
        };
    }

    // انتخاب اولین ترکیب به عنوان ترکیب اصلی برای نمایش
    const mainCompound = compounds[0];

    return {
        possible: true,
        compounds: compounds, // تمام ترکیبات ممکن
        mainCompound: mainCompound, // ترکیب اصلی برای نمایش
        elementA: elementA,
        elementB: elementB,
        electronegativityDiff: calculateElectronegativityDiff(elementA, elementB)
    };
}

// محاسبه اختلاف الکترونگاتیوی
function calculateElectronegativityDiff(elementA, elementB) {
    const enA = elementA.electronegativity;
    const enB = elementB.electronegativity;

    if (enA === null || enB === null) {
        return null;
    }

    return Math.abs(enA - enB).toFixed(2);
}

// بررسی می‌کند که آیا دو عنصر می‌توانند با هم واکنش دهند
function canElementsReact(elementA, elementB) {
    // بررسی اینکه آیا هر دو عنصر فعال هستند
    if (!isElementActive(elementA.symbol) || !isElementActive(elementB.symbol)) {
        return false;
    }

    // اگر هر دو عنصر یکسان باشند
    if (elementA.number === elementB.number) {
        return false;
    }

    // بررسی در پایگاه داده ترکیبات
    const compounds = getAllCompoundsBetweenElements(elementA, elementB);
    return compounds && compounds.length > 0;
}

// برجسته کردن عناصر واکنش‌پذیر با عنصر انتخاب شده
function highlightReactiveElements(selectedElement) {
    resetBondingHighlights();

    const selectedEl = document.querySelector(`.element[data-number="${selectedElement.number}"]`);
    if (selectedEl) {
        selectedEl.classList.add('selected');
    }

    document.querySelectorAll('.element').forEach(el => {
        const elementNumber = parseInt(el.dataset.number);
        const element = getAllElements().find(e => e.number === elementNumber);

        if (!element || element.number === selectedElement.number) return;

        // بررسی اینکه آیا عنصر فعال است
        if (!isElementActive(element.symbol)) {
            el.classList.add('non-bondable');
            return;
        }

        if (canElementsReact(selectedElement, element)) {
            el.classList.add('bondable');
        } else {
            el.classList.add('non-bondable');
        }
    });
}

// فقط دو عنصر انتخاب شده را برجسته کن و بقیه را محو کن
function highlightOnlySelectedElements() {
    resetBondingHighlights();

    if (selectedElementA) {
        const elementA = document.querySelector(`.element[data-number="${selectedElementA.number}"]`);
        if (elementA) {
            elementA.classList.add('selected');
        }
    }

    if (selectedElementB) {
        const elementB = document.querySelector(`.element[data-number="${selectedElementB.number}"]`);
        if (elementB) {
            elementB.classList.add('selected');
        }
    }

    document.querySelectorAll('.element').forEach(el => {
        const elementNumber = parseInt(el.dataset.number);

        if ((!selectedElementA || elementNumber !== selectedElementA.number) &&
            (!selectedElementB || elementNumber !== selectedElementB.number)) {
            el.classList.add('dimmed');
        }
    });
}

// ریست برجستگی‌ها
function resetBondingHighlights() {
    document.querySelectorAll('.element').forEach(el => {
        el.classList.remove('selected');
        el.classList.remove('bondable');
        el.classList.remove('non-bondable');
        el.classList.remove('dimmed');
    });
}

// نمایش پیش‌بینی واکنش
function showReactionPrediction() {
    if (!selectedElementA || !selectedElementB) return;

    // بررسی آیا هر دو عنصر فعال هستند
    if (!isElementActive(selectedElementA.symbol) || !isElementActive(selectedElementB.symbol)) {
        showNoReactionMessage("یک یا هر دو عنصر غیرفعال هستند");
        return;
    }

    // پیش‌بینی واکنش
    const prediction = predictReaction(selectedElementA, selectedElementB);

    if (!prediction.possible) {
        showNoReactionMessage(prediction.reason);
        return;
    }

    // ذخیره داده‌های واکنش برای نمودار
    currentReactionData = prediction;
    availableCompounds = prediction.compounds;
    selectedCompoundIndex = 0; // بازنشانی به ترکیب اول

    // نمایش اطلاعات در نوار واکنش
    updateReactionInfoBar(prediction);

    // نمایش اطلاعات ترکیب
    updateCompoundDetailsDisplay(prediction.mainCompound);

    // نمایش سایر ترکیبات ممکن
    displayOtherCompounds();

    // به‌روزرسانی نمایش واکنش برای نمودار
    updateReactionDisplay();
}

// به‌روزرسانی نوار اطلاعات واکنش - بهبود یافته با ΔG
function updateReactionInfoBar(prediction) {
    const mainCompound = prediction.mainCompound;
    const enDiff = prediction.electronegativityDiff;
    const deltaH = calculateDeltaH(mainCompound, prediction.elementA, prediction.elementB);
    const activationTemp = mainCompound.formationTemp || calculateReactionTemperature(mainCompound);

    // محاسبه ΔG در دمای فعلی
    const deltaG = calculateDeltaG(mainCompound, prediction.elementA, prediction.elementB, currentTemperature);

    // محاسبه ΔS
    const deltaS = calculateDeltaS(mainCompound, prediction.elementA, prediction.elementB);

    // تعیین وضعیت خودبخودی
    const spontaneity = getSpontaneityStatus(deltaG, currentTemperature);

    // تعیین سرعت واکنش بر اساس نوع واکنش و دمای فعال‌سازی
    let reactionSpeed = "متوسط";
    if (mainCompound.reactionType.includes('مستقیم') || mainCompound.reactionType.includes('انفجاری')) {
        reactionSpeed = "سریع";
    } else if (mainCompound.reactionType.includes('کاتالیزوری')) {
        reactionSpeed = "آهسته";
    }

    // به‌روزرسانی مقادیر در نوار اطلاعات
    document.getElementById('reactionSpeedValue').textContent = reactionSpeed;
    document.getElementById('activationTempValue').textContent = `${activationTemp}°C`;
    document.getElementById('enthalpyValue').textContent = `${deltaH.toFixed(1)} kJ/mol`;

    // ============================================================================
    // **اضافه شده: نمایش ΔG و وضعیت خودبخودی**
    // ============================================================================
    // ابتدا بررسی می‌کنیم که آیا المان‌های مورد نظر در HTML وجود دارند
    let gibbsEnergyElement = document.getElementById('gibbsEnergyValue');
    let spontaneityElement = document.getElementById('spontaneityStatus');
    let entropyElement = document.getElementById('entropyValue');

    // اگر المان‌ها وجود ندارند، آنها را ایجاد می‌کنیم
    if (!gibbsEnergyElement) {
        gibbsEnergyElement = document.createElement('div');
        gibbsEnergyElement.id = 'gibbsEnergyValue';
        // پیدا کردن نوار اطلاعات و اضافه کردن المان جدید
        const infoBar = document.querySelector('.reaction-info-bar') || document.querySelector('.info-bar');
        if (infoBar) {
            const newRow = document.createElement('div');
            newRow.className = 'info-row';
            newRow.innerHTML = '<span class="info-label">انرژی آزاد گیبس (ΔG):</span>' +
                `<span class="info-value" id="gibbsEnergyValue">${deltaG.toFixed(1)} kJ/mol</span>`;
            infoBar.appendChild(newRow);
            gibbsEnergyElement = document.getElementById('gibbsEnergyValue');
        }
    }

    if (!spontaneityElement) {
        spontaneityElement = document.createElement('div');
        spontaneityElement.id = 'spontaneityStatus';
        const infoBar = document.querySelector('.reaction-info-bar') || document.querySelector('.info-bar');
        if (infoBar) {
            const newRow = document.createElement('div');
            newRow.className = 'info-row';
            newRow.innerHTML = '<span class="info-label">وضعیت خودبخودی:</span>' +
                `<span class="info-value" id="spontaneityStatus">${spontaneity.emoji} ${spontaneity.text}</span>`;
            infoBar.appendChild(newRow);
            spontaneityElement = document.getElementById('spontaneityStatus');
        }
    }

    if (!entropyElement) {
        entropyElement = document.createElement('div');
        entropyElement.id = 'entropyValue';
        const infoBar = document.querySelector('.reaction-info-bar') || document.querySelector('.info-bar');
        if (infoBar) {
            const newRow = document.createElement('div');
            newRow.className = 'info-row';
            newRow.innerHTML = '<span class="info-label">تغییر آنتروپی (ΔS):</span>' +
                `<span class="info-value" id="entropyValue">${(deltaS * 1000).toFixed(1)} J/mol·K</span>`;
            infoBar.appendChild(newRow);
            entropyElement = document.getElementById('entropyValue');
        }
    }

    // به‌روزرسانی مقادیر
    if (gibbsEnergyElement) {
        gibbsEnergyElement.textContent = `${deltaG.toFixed(1)} kJ/mol`;
        gibbsEnergyElement.style.color = deltaG < 0 ? '#27ae60' : '#e74c3c';
        gibbsEnergyElement.style.fontWeight = 'bold';
    }

    if (spontaneityElement) {
        spontaneityElement.textContent = `${spontaneity.emoji} ${spontaneity.text}`;
        spontaneityElement.style.color = spontaneity.color;
        spontaneityElement.style.fontWeight = 'bold';
        spontaneityElement.title = spontaneity.description;
    }

    if (entropyElement) {
        entropyElement.textContent = `${(deltaS * 1000).toFixed(1)} J/mol·K`;
        entropyElement.style.color = deltaS > 0 ? '#27ae60' : '#e74c3c';
    }

    // به‌روزرسانی وضعیت واکنش
    document.getElementById('reactionStatus').textContent = spontaneity.description;
    document.getElementById('reactionStatus').style.color = spontaneity.color;
}

// به‌روزرسانی نمایش جزئیات ترکیب
function updateCompoundDetailsDisplay(compound) {
    // نمایش فرمول و نام ترکیب
    document.getElementById('compoundFormulaDisplay').textContent = compound.formula;
    document.getElementById('compoundNameDisplay').textContent = compound.name;

    // نمایش اطلاعات دیگر
    document.getElementById('compoundFormula').textContent = compound.formula;
    document.getElementById('bondTypeDisplay').textContent = compound.bondType;
    document.getElementById('compoundTypeDisplay').textContent = compound.compoundType;
    document.getElementById('geometryType').textContent = getGeometryType(compound);
    document.getElementById('physicalState').textContent = compound.physicalState;
    document.getElementById('polarityDisplay').textContent = compound.polarity;
    document.getElementById('meltingPointDisplay').textContent = `${compound.meltingPoint}°C`;
    document.getElementById('compoundUses').textContent = getCompoundUses(compound);

    // اضافه کردن کلاس‌های مربوط به نوع پیوند و ترکیب
    const bondTypeClass = getBondTypeClass(compound.bondType);
    const compoundTypeClass = getCompoundTypeClass(compound.compoundType);

    const bondTypeElement = document.getElementById('bondTypeDisplay');
    const compoundTypeElement = document.getElementById('compoundTypeDisplay');

    bondTypeElement.className = 'detail-value-compact ' + bondTypeClass;
    compoundTypeElement.className = 'detail-value-compact ' + compoundTypeClass;

    // نمایش شکل هندسی
    displayGeometryASCII(compound);
}

// نمایش سایر ترکیبات ممکن
function displayOtherCompounds() {
    const container = document.getElementById('compound-details-section');

    // حذف بخش قبلی اگر وجود دارد
    const oldSection = container.querySelector('.other-compounds-container');
    if (oldSection) {
        oldSection.remove();
    }

    if (!availableCompounds || availableCompounds.length <= 1) return;

    const otherCompounds = availableCompounds.slice(1);

    const otherCompoundsHTML = `
        <div class="other-compounds-container">
            <div class="other-compounds">
                <h4><i class="fas fa-list"></i> سایر ترکیبات ممکن بین ${currentReactionData.elementA.symbol} و ${currentReactionData.elementB.symbol}</h4>
                <div class="compounds-list">
                    ${otherCompounds.map((compound, index) => `
                        <div class="compound-item ${selectedCompoundIndex === index + 1 ? 'selected' : ''}" data-index="${index + 1}">
                            <div class="compound-item-formula">${compound.formula}</div>
                            <div class="compound-item-name">${compound.name}</div>
                            <div class="compound-item-type">${compound.compoundType}</div>
                            <button class="select-compound-btn" data-index="${index + 1}">
                                <i class="fas fa-eye"></i> مشاهده
                            </button>
                        </div>
                    `).join('')}
                </div>
                <p class="info-text">برای مشاهده اطلاعات هر ترکیب روی دکمه "مشاهده" کلیک کنید.</p>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', otherCompoundsHTML);

    // اضافه کردن event listener به دکمه‌ها
    container.querySelectorAll('.select-compound-btn').forEach(button => {
        button.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            selectCompound(index);
        });
    });
}

// انتخاب یک ترکیب خاص از لیست ترکیبات
function selectCompound(index) {
    if (!availableCompounds || index < 0 || index >= availableCompounds.length) return;

    const compound = availableCompounds[index];
    selectedCompoundIndex = index;

    // به‌روزرسانی ترکیب اصلی در داده‌های واکنش
    currentReactionData.mainCompound = compound;

    // به‌روزرسانی نمایش جزئیات ترکیب
    updateCompoundDetailsDisplay(compound);

    // به‌روزرسانی نوار اطلاعات واکنش
    updateReactionInfoBar(currentReactionData);

    // به‌روزرسانی سایر ترکیبات (برای هایلایت کردن ترکیب انتخاب شده)
    displayOtherCompounds();

    // به‌روزرسانی نمودار
    updateChart();
    updateTemperatureMarker();

    // اسکرول به بالای بخش جزئیات ترکیب
    document.getElementById('compound-details-section').scrollIntoView({ behavior: 'smooth' });
}

// دریافت کلاس CSS بر اساس نوع پیوند
function getBondTypeClass(bondType) {
    if (bondType.includes('یونی')) return 'bond-type-ionic';
    if (bondType.includes('کووالانسی')) return 'bond-type-covalent';
    if (bondType.includes('فلزی')) return 'bond-type-metallic';
    return '';
}

// دریافت کلاس CSS بر اساس نوع ترکیب
function getCompoundTypeClass(compoundType) {
    if (compoundType.includes('اکسید')) return 'compound-type-oxide';
    if (compoundType.includes('هالید') || compoundType.includes('کلرید') || compoundType.includes('فلوئورید') || compoundType.includes('برمید') || compoundType.includes('یدید')) return 'compound-type-halide';
    if (compoundType.includes('سولفید')) return 'compound-type-sulfide';
    if (compoundType.includes('نیترید')) return 'compound-type-nitride';
    if (compoundType.includes('کاربید')) return 'compound-type-carbide';
    if (compoundType.includes('هیدرید')) return 'compound-type-hydride';
    if (compoundType.includes('آلیاژ')) return 'compound-type-alloy';
    return '';
}

// به‌روزرسانی نمایش واکنش
function updateReactionDisplay() {
    if (!currentReactionData || !currentReactionData.mainCompound) return;

    const compound = currentReactionData.mainCompound;
    const elementA = currentReactionData.elementA;
    const elementB = currentReactionData.elementB;

    // محاسبه ΔH
    let deltaH = calculateDeltaH(compound, elementA, elementB);

    // نمایش شکل هندسی
    displayGeometryASCII(compound);
}

// ============================================================================
// **تابع calculateDeltaH - بدون تغییر**
// ============================================================================
function calculateDeltaH(compound, elementA, elementB) {
    // 1. ابتدا بررسی کن آیا مقدار استاندارد در پایگاه داده وجود دارد
    if (standardEnthalpiesOfFormation.hasOwnProperty(compound.formula)) {
        return standardEnthalpiesOfFormation[compound.formula];
    }

    // 2. برای ترکیبات دو عنصری ساده، از مدل پیوندی استفاده کن
    // مدل: ΔH = Σ انرژی پیوندهای شکسته - Σ انرژی پیوندهای تشکیل شده

    let bondsBroken = 0;
    let bondsFormed = 0;

    // تخمین نوع پیوندهای شکسته و تشکیل شده بر اساس نوع ترکیب
    if (compound.bondType.includes('یونی')) {
        // برای ترکیبات یونی: انرژی شبکه بلوری
        const ionicBondEnergy = estimateIonicLatticeEnergy(elementA, elementB, compound.formula);
        bondsFormed = ionicBondEnergy;

        // انرژی مورد نیاز برای تبدیل عناصر به یون‌های گازی
        bondsBroken = estimateIonizationAndElectronAffinity(elementA, elementB);

        // ΔH برای ترکیبات یونی معمولاً منفی است (گرماده)
        return (bondsBroken - bondsFormed);

    } else if (compound.bondType.includes('کووالانسی')) {
        // برای ترکیبات کووالانسی: استفاده از انرژی پیوند متوسط
        const covalentBondEnergy = estimateCovalentBondEnergy(elementA, elementB, compound);
        bondsFormed = covalentBondEnergy;

        // انرژی شکستن پیوندهای عناصر در حالت استاندارد
        bondsBroken = estimateElementBondEnergies(elementA, elementB);

        return (bondsBroken - bondsFormed);

    } else if (compound.bondType.includes('فلزی') || compound.compoundType.includes('آلیاژ')) {
        // برای آلیاژها: انرژی مخلوط شدن معمولاً کمی منفی است
        return -50 + (Math.random() * 30 - 15);
    }

    // 3. اگر هیچکدام از موارد بالا صدق نکرد، از تخمین مبتنی بر نوع ترکیب استفاده کن
    return estimateEnthalpyByCompoundType(compound, elementA, elementB);
}

// تخمین انرژی شبکه بلوری برای ترکیبات یونی
function estimateIonicLatticeEnergy(elementA, elementB, formula) {
    // انرژی شبکه بلوری تقریبی بر اساس نوع یون‌ها
    const ionSizes = {
        'Li⁺': 76, 'Na⁺': 102, 'K⁺': 138, 'Rb⁺': 152, 'Cs⁺': 167,
        'Mg²⁺': 72, 'Ca²⁺': 100, 'Sr²⁺': 118, 'Ba²⁺': 135,
        'Al³⁺': 53, 'Fe²⁺': 78, 'Fe³⁺': 64, 'Cu⁺': 77, 'Cu²⁺': 73,
        'Zn²⁺': 74, 'Ag⁺': 115, 'F⁻': 133, 'Cl⁻': 181, 'Br⁻': 196,
        'I⁻': 220, 'O²⁻': 140, 'S²⁻': 184
    };

    // بار یون‌ها
    let chargeA = 1;
    let chargeB = 1;

    // تشخیص بار از فرمول
    if (formula.includes('₂') || formula.includes('₃') || formula.includes('₄')) {
        // بارهای مختلف
        if (formula.includes('O₂') || formula.includes('O₃')) {
            chargeB = -2;
        } else if (formula.includes('S₂')) {
            chargeB = -2;
        } else if (formula.includes('F₂') || formula.includes('F₃')) {
            chargeB = -1;
        } else if (formula.includes('Cl₂') || formula.includes('Cl₃')) {
            chargeB = -1;
        }
    }

    // انرژی شبکه متناسب با حاصلضرب بارها و معکوس شعاع یونی
    const productOfCharges = Math.abs(chargeA * chargeB);
    const latticeEnergy = -800 * productOfCharges; // پایه

    // تنظیم بر اساس اندازه یون‌ها
    const ionA = elementA.symbol + (chargeA > 0 ? '⁺'.repeat(chargeA) : '⁻'.repeat(-chargeA));
    const ionB = elementB.symbol + (chargeB > 0 ? '⁺'.repeat(chargeB) : '⁻'.repeat(-chargeB));

    const sizeA = ionSizes[ionA] || 100;
    const sizeB = ionSizes[ionB] || 100;
    const distance = sizeA + sizeB;

    // انرژی شبکه ~ 1/r
    const adjustedEnergy = latticeEnergy * (100 / distance);

    return adjustedEnergy;
}

// تخمین انرژی یونش و الکترونخواهی
function estimateIonizationAndElectronAffinity(elementA, elementB) {
    // انرژی یونش اول (kJ/mol) برای برخی عناصر
    const ionizationEnergies = {
        'Li': 520, 'Na': 496, 'K': 419, 'Rb': 403, 'Cs': 376,
        'Mg': 738, 'Ca': 590, 'Sr': 550, 'Ba': 503,
        'Al': 578, 'Fe': 762, 'Cu': 745, 'Zn': 906, 'Ag': 731
    };

    // الکترونخواهی (kJ/mol) برای برخی عناصر
    const electronAffinities = {
        'F': -328, 'Cl': -349, 'Br': -325, 'I': -295,
        'O': -141, 'S': -200, 'Se': -195, 'Te': -190
    };

    const ieA = ionizationEnergies[elementA.symbol] || 600;
    const ieB = ionizationEnergies[elementB.symbol] || 600;
    const eaA = electronAffinities[elementA.symbol] || -100;
    const eaB = electronAffinities[elementB.symbol] || -100;

    // مجموع انرژی‌های مورد نیاز
    return (ieA + ieB) + (eaA + eaB);
}

// تخمین انرژی پیوند کووالانسی
function estimateCovalentBondEnergy(elementA, elementB, compound) {
    // انرژی پیوند متوسط بین دو عنصر
    const bondKey = `${elementA.symbol}-${elementB.symbol}`;

    // انرژی‌های پیوندی شناخته شده
    const knownBondEnergies = {
        'H-O': 463, 'H-N': 391, 'H-C': 413, 'H-F': 567, 'H-Cl': 431,
        'H-Br': 366, 'H-I': 299, 'C-O': 360, 'C=O': 743, 'C-N': 305,
        'N-O': 201, 'N=O': 607, 'O-O': 146, 'O=O': 498, 'Cl-O': 205,
        'S-O': 523, 'P-O': 335, 'Si-O': 466, 'B-O': 536, 'F-F': 155,
        'Cl-Cl': 242, 'Br-Br': 193, 'I-I': 151, 'S-S': 266
    };

    if (knownBondEnergies[bondKey]) {
        return knownBondEnergies[bondKey];
    }

    // اگر پیوند شناخته شده نیست، بر اساس الکترونگاتیوی تخمین بزن
    const enA = elementA.electronegativity || 2.0;
    const enB = elementB.electronegativity || 2.0;
    const enDiff = Math.abs(enA - enB);

    // انرژی پیوند پایه
    let bondEnergy = 300;

    // تنظیم بر اساس اختلاف الکترونگاتیوی
    if (enDiff < 0.5) {
        bondEnergy = 250; // پیوند غیرقطبی
    } else if (enDiff < 1.0) {
        bondEnergy = 300; // کمی قطبی
    } else if (enDiff < 1.7) {
        bondEnergy = 350; // قطبی
    } else {
        bondEnergy = 400; // بسیار قطبی (نزدیک به یونی)
    }

    // تنظیم بر اساس اندازه اتم‌ها
    const radiusA = getAtomicRadius(elementA);
    const radiusB = getAtomicRadius(elementB);
    const avgRadius = (radiusA + radiusB) / 2;

    // پیوندهای کوتاه‌تر قوی‌تر هستند
    bondEnergy *= (100 / avgRadius);

    return bondEnergy;
}

// تخمین انرژی پیوندهای عناصر در حالت استاندارد
function estimateElementBondEnergies(elementA, elementB) {
    // انرژی مورد نیاز برای شکستن پیوندهای عناصر در حالت استاندارد
    const elementBondEnergies = {
        'H₂': 436, 'O₂': 498, 'N₂': 945, 'F₂': 155, 'Cl₂': 242,
        'Br₂': 193, 'I₂': 151, 'S₈': 266, 'P₄': 197, 'C(گرافیت)': 718,
        'Si': 456, 'B': 563
    };

    // حالت استاندارد عناصر
    const standardStates = {
        'H': 'H₂', 'O': 'O₂', 'N': 'N₂', 'F': 'F₂', 'Cl': 'Cl₂',
        'Br': 'Br₂', 'I': 'I₂', 'S': 'S₈', 'P': 'P₄', 'C': 'C(گرافیت)',
        'Si': 'Si', 'B': 'B'
    };

    const stateA = standardStates[elementA.symbol] || elementA.symbol;
    const stateB = standardStates[elementB.symbol] || elementB.symbol;

    const energyA = elementBondEnergies[stateA] || 200;
    const energyB = elementBondEnergies[stateB] || 200;

    return (energyA + energyB) / 2;
}

// تخمین آنتالپی بر اساس نوع ترکیب
function estimateEnthalpyByCompoundType(compound, elementA, elementB) {
    let baseEnthalpy = 0;

    // بر اساس نوع ترکیب
    if (compound.compoundType.includes('اکسید فلزی')) {
        baseEnthalpy = -400;
    } else if (compound.compoundType.includes('هالید فلزی')) {
        baseEnthalpy = -300;
    } else if (compound.compoundType.includes('سولفید فلزی')) {
        baseEnthalpy = -200;
    } else if (compound.compoundType.includes('هیدرید')) {
        baseEnthalpy = -150;
    } else if (compound.compoundType.includes('نیترید')) {
        baseEnthalpy = -250;
    } else if (compound.compoundType.includes('کاربید')) {
        baseEnthalpy = -100;
    } else if (compound.compoundType.includes('پراکسید')) {
        baseEnthalpy = -200;
    } else if (compound.compoundType.includes('سوپراکسید')) {
        baseEnthalpy = -150;
    } else if (compound.compoundType.includes('آلیاژ')) {
        baseEnthalpy = -50;
    }

    // تنظیم بر اساس الکترونگاتیوی
    const enDiff = calculateElectronegativityDiff(elementA, elementB);
    if (enDiff && enDiff > 1.7) {
        baseEnthalpy *= 1.5; // ترکیبات یونی گرماده‌تر هستند
    }

    // اضافه کردن جزئیات بیشتر
    if (compound.bondType.includes('یونی')) {
        baseEnthalpy -= 100;
    } else if (compound.bondType.includes('کووالانسی قطبی')) {
        baseEnthalpy -= 50;
    }

    return baseEnthalpy;
}

// دریافت شعاع اتمی تقریبی
function getAtomicRadius(element) {
    const atomicRadii = {
        'H': 53, 'He': 31,
        'Li': 167, 'Be': 112, 'B': 87, 'C': 67, 'N': 56, 'O': 48, 'F': 42, 'Ne': 38,
        'Na': 190, 'Mg': 145, 'Al': 118, 'Si': 111, 'P': 98, 'S': 88, 'Cl': 79, 'Ar': 71,
        'K': 243, 'Ca': 194, 'Sc': 184, 'Ti': 176, 'V': 171, 'Cr': 166, 'Mn': 161, 'Fe': 156,
        'Co': 152, 'Ni': 149, 'Cu': 145, 'Zn': 142, 'Ga': 136, 'Ge': 125, 'As': 114, 'Se': 103,
        'Br': 94, 'Kr': 88, 'Rb': 265, 'Sr': 219, 'Y': 212, 'Zr': 206, 'Nb': 198, 'Mo': 190,
        'Tc': 183, 'Ru': 178, 'Rh': 173, 'Pd': 169, 'Ag': 165, 'Cd': 161, 'In': 156, 'Sn': 145,
        'Sb': 133, 'Te': 123, 'I': 115, 'Xe': 108, 'Cs': 298, 'Ba': 253, 'La': 226,
        'Hf': 208, 'Ta': 200, 'W': 193, 'Re': 188, 'Os': 185, 'Ir': 180, 'Pt': 177,
        'Au': 174, 'Hg': 171, 'Tl': 156, 'Pb': 154, 'Bi': 143, 'Po': 135, 'At': 127,
        'Rn': 120, 'Fr': 315, 'Ra': 283, 'Ac': 260
    };

    return atomicRadii[element.symbol] || 100;
}

// دریافت نوع هندسه بر اساس نوع ترکیب
function getGeometryType(compound) {
    if (compound.bondType.includes('یونی')) {
        return 'شبکه‌ای بلوری';
    } else if (compound.bondType.includes('کووالانسی')) {
        if (compound.formula.includes('H₂')) {
            return 'خمیده';
        } else if (compound.formula.includes('CO₂') || compound.formula.includes('CS₂')) {
            return 'خطی';
        } else if (compound.formula.includes('CH₄')) {
            return 'چهاروجهی';
        } else if (compound.formula.includes('NH₃')) {
            return 'هرمی';
        } else {
            return 'مولکولی';
        }
    } else if (compound.bondType.includes('فلزی')) {
        return 'شبکه فلزی';
    }

    return 'متفاوت';
}

// دریافت کاربردهای ترکیب
function getCompoundUses(compound) {
    const commonName = compound.commonName || '';

    if (commonName.includes('نمک خوراکی') || compound.formula === 'NaCl') {
        return 'غذایی، صنعتی، ذوب یخ';
    } else if (compound.formula === 'H₂O') {
        return 'حیات، صنایع، کشاورزی';
    } else if (compound.formula === 'CO₂') {
        return 'گازهای نوشابه، اطفاء حریق، صنایع';
    } else if (compound.formula === 'NH₃') {
        return 'کودهای شیمیایی، صنایع پتروشیمی';
    } else if (compound.formula.includes('آلیاژ')) {
        return 'ساخت و ساز، صنعت، مهندسی';
    } else if (compound.compoundType.includes('اکسید فلزی')) {
        return 'رنگدانه، کاتالیزور، مواد نسوز';
    } else if (compound.compoundType.includes('هالید فلزی')) {
        return 'مواد شیمیایی پایه، کاتالیزور';
    } else if (compound.compoundType.includes('سولفید فلزی')) {
        return 'استخراج فلزات، نیمه‌هادی‌ها';
    }

    return 'مواد شیمیایی پایه، صنعتی';
}

// نمایش شکل هندسی به صورت ASCII
function displayGeometryASCII(compound) {
    const geometryASCII = document.getElementById('geometryASCII');
    let asciiArt = '';

    const geometryType = getGeometryType(compound);

    if (geometryType === 'شبکه‌ای بلوری') {
        asciiArt = `
        +   -   +   -   +
        -   +   -   +   -
        +   -   +   -   +
        -   +   -   +   -
        +   -   +   -   +
        (شبکه یونی بلوری)
        `;
    } else if (geometryType === 'شبکه فلزی') {
        asciiArt = `
        ●   ●   ●   ●   ●
          ●   ●   ●   ●
        ●   ●   ●   ●   ●
          ●   ●   ●   ●
        ●   ●   ●   ●   ●
        (شبکه فلزی)
        `;
    } else if (geometryType === 'خطی') {
        asciiArt = `
        O ==== C ==== O
        (مولکول خطی)
        `;
    } else if (geometryType === 'خمیده') {
        asciiArt = `
           H
            \\
             O
            /
           H
        (مولکول خمیده)
        `;
    } else if (geometryType === 'هرمی') {
        asciiArt = `
            N
           /|\\
          H H H
        (هرم مثلثی)
        `;
    } else if (geometryType === 'چهاروجهی') {
        asciiArt = `
            H
             \\
          H - C - H
             /
            H
        (چهاروجهی)
        `;
    } else {
        asciiArt = `
        A — B
        (مولکول ساده)
        `;
    }

    geometryASCII.textContent = asciiArt;
}

// نمایش پیام عدم واکنش
function showNoReactionMessage(reason = "") {
    alert(`واکنش شیمیایی ممکن نیست\n${reason}`);

    // مخفی کردن بخش‌ها
    hideAllSections();
}

// ریست همه چیز
function resetSelection() {
    selectedElementA = null;
    selectedElementB = null;
    currentTemperature = 0;
    currentReactionData = null;
    availableCompounds = [];
    selectedCompoundIndex = 0;
    reactionStarted = false;
    reactionCompleted = false;

    updateSelectionDisplay();
    resetBondingHighlights();
    hideAllSections();

    document.getElementById('temperatureSlider').value = 0;
    document.getElementById('temperatureValue').textContent = '0';

    // ریست نوار اطلاعات واکنش
    document.getElementById('reactionSpeedValue').textContent = '-';
    document.getElementById('activationTempValue').textContent = '-';
    document.getElementById('enthalpyValue').textContent = '-';
    document.getElementById('reactionStatus').textContent = 'آغاز نشده';

    // ریست اطلاعات ترکیب
    document.getElementById('compoundFormulaDisplay').textContent = '-';
    document.getElementById('compoundNameDisplay').textContent = '-';
    document.getElementById('compoundFormula').textContent = '-';
    document.getElementById('bondTypeDisplay').textContent = '-';
    document.getElementById('compoundTypeDisplay').textContent = '-';
    document.getElementById('geometryType').textContent = '-';
    document.getElementById('physicalState').textContent = '-';
    document.getElementById('polarityDisplay').textContent = '-';
    document.getElementById('meltingPointDisplay').textContent = '-';
    document.getElementById('compoundUses').textContent = '-';
    document.getElementById('geometryASCII').textContent = 'شکل نمایش داده می‌شود';

    // ریست اطلاعات ترمودینامیکی اضافه شده
    const gibbsElement = document.getElementById('gibbsEnergyValue');
    const spontaneityElement = document.getElementById('spontaneityStatus');
    const entropyElement = document.getElementById('entropyValue');

    if (gibbsElement) gibbsElement.textContent = '-';
    if (spontaneityElement) spontaneityElement.textContent = '-';
    if (entropyElement) entropyElement.textContent = '-';

    // مخفی کردن توپ
    if (ballElement) {
        ballElement.style.display = 'none';
    }
}

// شروع شبیه‌سازی
function startSimulation() {
    if (!currentReactionData) return;

    reactionStarted = true;
    reactionCompleted = false;
    currentTemperature = 0;

    document.getElementById('temperatureSlider').value = 0;
    document.getElementById('temperatureValue').textContent = '0';

    updateTemperatureDisplay();
    updateChart();
    updateTemperatureMarker();
}

// ============================================================================
// **تابع محاسبه دمای واکنش - بدون تغییر**
// ============================================================================
function calculateReactionTemperature(compound) {
    // دمای واکنش بر اساس نوع ترکیب
    let baseTemp = 300;

    if (compound.formationTemp) {
        return compound.formationTemp;
    }

    if (compound.compoundType.includes('اکسید فلزی')) {
        baseTemp = 500;
    } else if (compound.compoundType.includes('هالید فلزی')) {
        baseTemp = 300;
    } else if (compound.compoundType.includes('سولفید فلزی')) {
        baseTemp = 400;
    } else if (compound.compoundType.includes('هیدرید')) {
        baseTemp = 200;
    } else if (compound.compoundType.includes('نیترید')) {
        baseTemp = 700;
    } else if (compound.compoundType.includes('کاربید')) {
        baseTemp = 800;
    } else if (compound.compoundType.includes('آلیاژ')) {
        baseTemp = 600;
    }

    // برای ترکیبات خاص
    if (compound.formula === 'H₂O') baseTemp = 570;
    else if (compound.formula === 'CO₂') baseTemp = 800;
    else if (compound.formula === 'NaCl') baseTemp = 300;
    else if (compound.formula === 'NH₃') baseTemp = 450;
    else if (compound.formula === 'CH₄') baseTemp = 475;
    else if (compound.formula === 'Fe₂O₃') baseTemp = 800;
    else if (compound.formula === 'Al₂O₃') baseTemp = 660;

    return baseTemp;
}

// ============================================================================
// **راه‌اندازی نمودار آنتالپی با دو خط (ΔH و ΔG)**
// ============================================================================
function initializeEnthalpyChart() {
    if (currentChart) {
        currentChart.destroy();
    }

    const ctx = document.getElementById('enthalpyChart').getContext('2d');

    // داده‌های اولیه نمودار
    const initialData = generateEnthalpyChartData();

    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: initialData.labels,
            datasets: [
                {
                    label: 'تغییر آنتالپی (ΔH)',
                    data: initialData.enthalpy,
                    borderColor: '#FF6B6B',
                    backgroundColor: '#FF6B6B20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.2,
                    pointRadius: 3,
                    pointBackgroundColor: '#FF6B6B',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2
                },
                {
                    label: 'انرژی آزاد گیبس (ΔG)',
                    data: initialData.gibbs,
                    borderColor: '#3498db',
                    backgroundColor: '#3498db20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.2,
                    pointRadius: 3,
                    pointBackgroundColor: '#3498db',
                    pointBorderColor: '#FFFFFF',
                    pointBorderWidth: 2,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Segoe UI',
                            size: 14,
                            weight: 'bold'
                        },
                        color: '#333',
                        padding: 20
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        family: 'Segoe UI',
                        size: 13
                    },
                    bodyFont: {
                        family: 'Segoe UI',
                        size: 13
                    },
                    padding: 12,
                    cornerRadius: 6,
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }

                            if (context.datasetIndex === 0) {
                                label += context.parsed.y.toFixed(1) + ' kJ/mol (ΔH)';
                            } else {
                                label += context.parsed.y.toFixed(1) + ' kJ/mol (ΔG)';

                                // اضافه کردن وضعیت خودبخودی در tooltip
                                const spontaneity = getSpontaneityStatus(context.parsed.y, initialData.labels[context.dataIndex]);
                                if (spontaneity) {
                                    label += ` - ${spontaneity.text}`;
                                }
                            }
                            return label;
                        },
                        title: function (context) {
                            return 'دما: ' + context[0].label + '°C';
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'دما (°C)',
                        font: {
                            size: 14,
                            family: 'Segoe UI',
                            weight: 'bold'
                        },
                        color: '#333',
                        padding: { top: 10, bottom: 10 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: true,
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    ticks: {
                        font: {
                            family: 'Segoe UI',
                            size: 12
                        },
                        color: '#555'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'انرژی (kJ/mol)',
                        font: {
                            size: 14,
                            family: 'Segoe UI',
                            weight: 'bold'
                        },
                        color: '#333',
                        padding: { top: 10, bottom: 10 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)',
                        drawBorder: true,
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    ticks: {
                        font: {
                            family: 'Segoe UI',
                            size: 12
                        },
                        color: '#555',
                        callback: function (value) {
                            return value.toFixed(0);
                        }
                    },
                    beginAtZero: false
                }
            },
            animation: {
                duration: 500,
                easing: 'easeOutQuart'
            },
            interaction: {
                intersect: false,
                mode: 'nearest'
            },
            elements: {
                line: {
                    tension: 0.2
                }
            }
        }
    });

    // اضافه کردن خط عمودی برای دمای واکنش
    addReactionTemperatureLine();

    updateTemperatureMarker();
}

// ============================================================================
// **تولید داده‌های نمودار آنتالپی با ΔG**
// ============================================================================
function generateEnthalpyChartData() {
    if (!currentReactionData || !currentReactionData.mainCompound) {
        return { labels: [], enthalpy: [], gibbs: [] };
    }

    const compound = currentReactionData.mainCompound;
    const elementA = currentReactionData.elementA;
    const elementB = currentReactionData.elementB;

    const deltaH = calculateDeltaH(compound, elementA, elementB);
    const deltaS = calculateDeltaS(compound, elementA, elementB);
    const activationTemp = compound.formationTemp || calculateReactionTemperature(compound);

    const labels = [];
    const enthalpy = [];
    const gibbs = [];
    const steps = 20; // تعداد نقاط مناسب برای نمودار

    // تولید داده‌ها از 0 تا 1000 درجه سانتی‌گراد
    for (let i = 0; i <= steps; i++) {
        const temp = (i / steps) * 1000;
        labels.push(Math.round(temp));

        let enthalpyValue;

        if (temp < activationTemp * 0.3) {
            // منطقه 1: قبل از شروع واکنش - ΔH نزدیک به صفر
            enthalpyValue = 0;
        } else if (temp < activationTemp * 0.7) {
            // منطقه 2: گرمایش - افزایش جزئی ΔH (مصرف انرژی)
            const progress = (temp - activationTemp * 0.3) / (activationTemp * 0.4);
            enthalpyValue = 0.1 * Math.abs(deltaH) * progress;
        } else if (temp < activationTemp) {
            // منطقه 3: نزدیک به دمای واکنش - افزایش بیشتر ΔH
            const progress = (temp - activationTemp * 0.7) / (activationTemp * 0.3);
            enthalpyValue = 0.3 * Math.abs(deltaH) * progress;
        } else if (temp < activationTemp + 100) {
            // منطقه 4: شروع واکنش - تغییر سریع به سمت ΔH نهایی
            const progress = (temp - activationTemp) / 100;
            if (deltaH < 0) {
                // واکنش گرماده: کاهش آنتالپی
                enthalpyValue = 0.3 * Math.abs(deltaH) - progress * (0.3 * Math.abs(deltaH) + Math.abs(deltaH));
            } else {
                // واکنش گرماگیر: افزایش آنتالپی
                enthalpyValue = 0.3 * deltaH + progress * (deltaH - 0.3 * deltaH);
            }
        } else {
            // منطقه 5: بعد از واکنش - ΔH ثابت
            enthalpyValue = deltaH;
        }

        enthalpy.push(parseFloat(enthalpyValue.toFixed(1)));

        // محاسبه ΔG برای این دما
        const T = temp + 273.15; // به کلوین
        const deltaGValue = deltaH - (T * deltaS);
        gibbs.push(parseFloat(deltaGValue.toFixed(1)));
    }

    // محاسبه موقعیت نشانگر دما
    if (currentTemperature >= 0) {
        const tempProgress = Math.min(currentTemperature / 1000, 1);
        const tempIndex = Math.floor(tempProgress * steps);

        if (tempIndex >= 0 && tempIndex < enthalpy.length) {
            ballPosition.x = tempProgress * 100;
            ballPosition.y = enthalpy[tempIndex];
        }

        // بررسی اتمام واکنش
        if (currentTemperature >= activationTemp + 150 && !reactionCompleted && reactionStarted) {
            reactionCompleted = true;
            showReactionComplete();
        }
    }

    return { labels, enthalpy, gibbs };
}

// ============================================================================
// **اضافه کردن خط دمای واکنش به نمودار**
// ============================================================================
function addReactionTemperatureLine() {
    if (!currentChart || !currentReactionData) return;

    const compound = currentReactionData.mainCompound;
    const activationTemp = compound.formationTemp || calculateReactionTemperature(compound);

    // ایجاد خط عمودی برای دمای واکنش
    const linePlugin = {
        id: 'reactionTempLine',
        afterDraw(chart) {
            const ctx = chart.ctx;
            const xAxis = chart.scales.x;
            const yAxis = chart.scales.y;

            // پیدا کردن موقعیت x برای دمای واکنش
            const xValue = activationTemp;
            const xPixel = xAxis.getPixelForValue(xValue);

            // اگر دمای واکنش در محدوده نمودار است
            if (xPixel >= xAxis.left && xPixel <= xAxis.right) {
                ctx.save();

                // رسم خط عمودی
                ctx.strokeStyle = '#4ECDC4';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 3]);
                ctx.beginPath();
                ctx.moveTo(xPixel, yAxis.top);
                ctx.lineTo(xPixel, yAxis.bottom);
                ctx.stroke();

                // اضافه کردن متن
                ctx.fillStyle = '#4ECDC4';
                ctx.font = 'bold 12px Segoe UI';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText(`دمای واکنش: ${activationTemp}°C`, xPixel, yAxis.top - 5);

                // اضافه کردن علامت
                ctx.fillStyle = '#4ECDC4';
                ctx.beginPath();
                ctx.arc(xPixel, yAxis.top - 15, 6, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }
        }
    };

    // اضافه کردن پلاگین اگر وجود نداشته باشد
    if (!currentChart.config.plugins) {
        currentChart.config.plugins = [];
    }

    // بررسی وجود پلاگین
    const existingPluginIndex = currentChart.config.plugins.findIndex(p => p.id === 'reactionTempLine');
    if (existingPluginIndex === -1) {
        currentChart.config.plugins.push(linePlugin);
    }

    currentChart.update();
}

// ============================================================================
// **به‌روزرسانی نشانگر دمای فعلی با اطلاعات ΔG**
// ============================================================================
function updateTemperatureMarker() {
    if (!ballElement || !currentChart) return;

    const chartWrapper = document.querySelector('.chart-wrapper');
    const chartCanvas = document.getElementById('enthalpyChart');

    if (!chartWrapper || !chartCanvas) return;

    const wrapperRect = chartWrapper.getBoundingClientRect();
    const chartRect = chartCanvas.getBoundingClientRect();

    // محاسبه موقعیت نشانگر بر اساس دمای فعلی
    const tempProgress = Math.min(currentTemperature / 1000, 1);
    const xPercent = tempProgress;

    // محاسبه موقعیت دقیق X روی نمودار
    const xAxis = currentChart.scales.x;
    const minX = xAxis.min;
    const maxX = xAxis.max;
    const xValue = minX + (maxX - minX) * xPercent;
    const markerX = xAxis.getPixelForValue(xValue);

    // پیدا کردن مقدار Y متناظر با دما
    const chartData = generateEnthalpyChartData();
    let enthalpyValue = 0;
    let gibbsValue = 0;

    // یافتن نزدیک‌ترین نقطه به دمای فعلی
    for (let i = 0; i < chartData.labels.length; i++) {
        if (chartData.labels[i] >= xValue) {
            enthalpyValue = chartData.enthalpy[i];
            gibbsValue = chartData.gibbs[i];
            break;
        }
    }

    // محاسبه موقعیت Y برای ΔH
    const yAxis = currentChart.scales.y;
    const markerY = yAxis.getPixelForValue(enthalpyValue);

    // تنظیم موقعیت توپ نسبت به صفحه
    const ballX = wrapperRect.left + (markerX - chartRect.left);
    const ballY = wrapperRect.top + (markerY - chartRect.top);

    // اعمال موقعیت به توپ
    ballElement.style.left = (ballX - 10) + 'px'; // 10px = نصف عرض توپ
    ballElement.style.top = (ballY - 10) + 'px'; // 10px = نصف ارتفاع توپ

    // به‌روزرسانی محتوای توپ
    const contentElement = ballElement.querySelector('.ball-content');
    const tempValueElement = ballElement.querySelector('.temp-value');
    const enthalpyValueElement = ballElement.querySelector('.enthalpy-value');
    const gibbsValueElement = ballElement.querySelector('.gibbs-value');
    const spontaneityValueElement = ballElement.querySelector('.spontaneity-value');

    if (contentElement && tempValueElement && enthalpyValueElement && gibbsValueElement) {
        tempValueElement.textContent = `🌡️ دما: ${currentTemperature}°C`;
        enthalpyValueElement.textContent = `ΔH = ${enthalpyValue.toFixed(1)} kJ/mol`;
        gibbsValueElement.textContent = `ΔG = ${gibbsValue.toFixed(1)} kJ/mol`;

        // اضافه کردن وضعیت خودبخودی
        const spontaneity = getSpontaneityStatus(gibbsValue, currentTemperature);
        spontaneityValueElement.textContent = `وضعیت: ${spontaneity.text}`;
        spontaneityValueElement.style.color = spontaneity.color;
    }

    // نمایش توپ
    ballElement.style.display = 'block';

    // تغییر رنگ توپ بر اساس وضعیت ΔG
    if (gibbsValue < -50) {
        ballElement.style.background = 'radial-gradient(circle at 30% 30%, #2ecc71, #27ae60)';
        ballElement.style.boxShadow = '0 0 15px rgba(46, 204, 113, 0.8)';
    } else if (gibbsValue < 0) {
        ballElement.style.background = 'radial-gradient(circle at 30% 30%, #3498db, #2980b9)';
        ballElement.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.7)';
    } else if (gibbsValue < 50) {
        ballElement.style.background = 'radial-gradient(circle at 30% 30%, #f39c12, #e67e22)';
        ballElement.style.boxShadow = '0 0 10px rgba(243, 156, 18, 0.7)';
    } else {
        ballElement.style.background = 'radial-gradient(circle at 30% 30%, #e74c3c, #c0392b)';
        ballElement.style.boxShadow = '0 0 10px rgba(231, 76, 60, 0.7)';
    }

    // نمایش محتوای توپ هنگام hover
    ballElement.addEventListener('mouseenter', function () {
        if (contentElement) {
            contentElement.style.display = 'block';
        }
    });

    ballElement.addEventListener('mouseleave', function () {
        if (contentElement) {
            contentElement.style.display = 'none';
        }
    });
}

// ============================================================================
// **به‌روزرسانی نمودار**
// ============================================================================
function updateChart() {
    if (!currentChart || !currentReactionData) return;

    const chartData = generateEnthalpyChartData();

    currentChart.data.labels = chartData.labels;
    currentChart.data.datasets[0].data = chartData.enthalpy;
    currentChart.data.datasets[1].data = chartData.gibbs;

    // تنظیم رنگ بر اساس علامت ΔH و ΔG
    const deltaH = calculateDeltaH(currentReactionData.mainCompound,
        currentReactionData.elementA,
        currentReactionData.elementB);

    if (deltaH < 0) {
        // گرماده: قرمز
        currentChart.data.datasets[0].borderColor = '#FF6B6B';
        currentChart.data.datasets[0].backgroundColor = '#FF6B6B20';
        currentChart.data.datasets[0].pointBackgroundColor = '#FF6B6B';
    } else {
        // گرماگیر: آبی
        currentChart.data.datasets[0].borderColor = '#3498db';
        currentChart.data.datasets[0].backgroundColor = '#3498db20';
        currentChart.data.datasets[0].pointBackgroundColor = '#3498db';
    }

    // تنظیم رنگ ΔG بر اساس مقدار
    // ΔG منفی (خودبخودی): سبز، ΔG مثبت (غیرخودبخودی): نارنجی
    const avgGibbs = chartData.gibbs.reduce((a, b) => a + b, 0) / chartData.gibbs.length;
    if (avgGibbs < 0) {
        currentChart.data.datasets[1].borderColor = '#2ecc71';
        currentChart.data.datasets[1].backgroundColor = '#2ecc7120';
        currentChart.data.datasets[1].pointBackgroundColor = '#2ecc71';
    } else {
        currentChart.data.datasets[1].borderColor = '#e67e22';
        currentChart.data.datasets[1].backgroundColor = '#e67e2220';
        currentChart.data.datasets[1].pointBackgroundColor = '#e67e22';
    }

    // تنظیم محدوده محور Y
    const allValues = [...chartData.enthalpy, ...chartData.gibbs];
    const minEnergy = Math.min(...allValues);
    const maxEnergy = Math.max(...allValues);
    const padding = Math.max(Math.abs(minEnergy), Math.abs(maxEnergy)) * 0.2;

    currentChart.options.scales.y.min = minEnergy - padding;
    currentChart.options.scales.y.max = maxEnergy + padding;

    currentChart.update();

    // به‌روزرسانی خط دمای واکنش
    addReactionTemperatureLine();

    // به‌روزرسانی نشانگر دما
    updateTemperatureMarker();
}

// ============================================================================
// **به‌روزرسانی نمایش دما با اطلاعات ΔG**
// ============================================================================
function updateTemperatureDisplay() {
    if (!currentReactionData || !currentReactionData.mainCompound) return;

    const compound = currentReactionData.mainCompound;
    const activationTemp = compound.formationTemp || calculateReactionTemperature(compound);
    const deltaH = calculateDeltaH(compound, currentReactionData.elementA, currentReactionData.elementB);
    const deltaG = calculateDeltaG(compound, currentReactionData.elementA, currentReactionData.elementB, currentTemperature);

    let statusText = '';
    let statusColor = '#7f8c8d';
    let reactionType = deltaH < 0 ? 'گرماده' : 'گرماگیر';
    const spontaneity = getSpontaneityStatus(deltaG, currentTemperature);

    // حذف اموجی آتش از متن وضعیت
    if (currentTemperature === 0) {
        statusText = `آغاز نشده - دمای صفر | واکنش ${reactionType}`;
        statusColor = '#3498db';
    } else if (currentTemperature < activationTemp * 0.3) {
        statusText = `گرمایش اولیه | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#3498db';
    } else if (currentTemperature < activationTemp * 0.7) {
        statusText = `در حال گرم شدن | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#f39c12';
    } else if (currentTemperature < activationTemp) {
        statusText = `نزدیک به دمای واکنش | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#e74c3c';
    } else if (currentTemperature < activationTemp + 50) {
        statusText = `واکنش آغاز شده | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#9b59b6';
    } else if (currentTemperature < activationTemp + 150) {
        statusText = `واکنش در حال پیشرفت | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#9b59b6';
    } else if (currentTemperature < activationTemp + 300) {
        statusText = `واکنش نزدیک به پایان | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#1abc9c';
    } else {
        statusText = `واکنش کامل شد | واکنش ${reactionType} | ${spontaneity.text}`;
        statusColor = '#2ecc71';
    }

    document.getElementById('reactionStatus').textContent = statusText;
    document.getElementById('reactionStatus').style.color = statusColor;

    // به‌روزرسانی سرعت واکنش
    updateReactionSpeed();
}

// ============================================================================
// **به‌روزرسانی سرعت واکنش**
// ============================================================================
function updateReactionSpeed() {
    if (!currentReactionData || !currentReactionData.mainCompound) return;

    const activationTemp = currentReactionData.mainCompound.formationTemp ||
        calculateReactionTemperature(currentReactionData.mainCompound);

    let reactionSpeed = "صفر";
    let speedColor = "#95a5a6";

    if (currentTemperature === 0) {
        reactionSpeed = "صفر";
        speedColor = "#95a5a6";
    } else if (currentTemperature < activationTemp * 0.3) {
        reactionSpeed = "خیلی آهسته";
        speedColor = "#3498db";
    } else if (currentTemperature < activationTemp * 0.7) {
        reactionSpeed = "آهسته";
        speedColor = "#f39c12";
    } else if (currentTemperature < activationTemp) {
        reactionSpeed = "متوسط";
        speedColor = "#e74c3c";
    } else if (currentTemperature < activationTemp + 50) {
        reactionSpeed = "سریع";
        speedColor = "#9b59b6";
    } else if (currentTemperature < activationTemp + 150) {
        reactionSpeed = "خیلی سریع";
        speedColor = "#1abc9c";
    } else {
        reactionSpeed = "کامل";
        speedColor = "#2ecc71";
    }

    document.getElementById('reactionSpeedValue').textContent = reactionSpeed;
    document.getElementById('reactionSpeedValue').style.color = speedColor;
}

// ============================================================================
// **نمایش کامل شدن واکنش**
// ============================================================================
function showReactionComplete() {
    // انیمیشن تکمیل واکنش
    ballElement.style.background = 'radial-gradient(circle at 30% 30%, #2ecc71, #27ae60)';
    ballElement.style.boxShadow = '0 0 30px rgba(46, 204, 113, 0.8)';

    // نمایش پیام
    setTimeout(() => {
        const compound = currentReactionData.mainCompound;
        const deltaH = calculateDeltaH(compound, currentReactionData.elementA, currentReactionData.elementB);
        const deltaS = calculateDeltaS(compound, currentReactionData.elementA, currentReactionData.elementB);
        const deltaG = calculateDeltaG(compound, currentReactionData.elementA, currentReactionData.elementB, currentTemperature);

        const activationTemp = compound.formationTemp || calculateReactionTemperature(compound);
        const reactionType = deltaH < 0 ? 'گرماده' : 'گرماگیر';
        const energyReleased = Math.abs(deltaH).toFixed(1);

        let message = `✅ واکنش شیمیایی با موفقیت تکمیل شد!\n\n`;
        message += `ترکیب تشکیل شده: ${compound.formula} (${compound.name})\n`;
        message += `نوع واکنش: ${reactionType}\n`;
        message += `تغییر آنتالپی (ΔH): ${deltaH.toFixed(1)} kJ/mol\n`;
        message += `تغییر آنتروپی (ΔS): ${(deltaS * 1000).toFixed(1)} J/mol·K\n`;
        message += `انرژی آزاد گیبس (ΔG): ${deltaG.toFixed(1)} kJ/mol\n`;
        message += `وضعیت خودبخودی: ${getSpontaneityStatus(deltaG, currentTemperature).text}\n`;

        if (deltaH < 0) {
            message += `انرژی آزاد شده: ${energyReleased} kJ/mol\n`;
        } else {
            message += `انرژی جذب شده: ${energyReleased} kJ/mol\n`;
        }

        message += `دمای واکنش: ${activationTemp}°C\n`;
        message += `دمای نهایی: ${currentTemperature}°C`;

        if (deltaH < -200) {
            message += '\n\n⚠️ هشدار: این واکنش گرماده قوی است!';
        } else if (deltaH > 100) {
            message += '\n\n⚠️ توجه: این واکنش گرماگیر قوی است و نیاز به انرژی زیادی دارد.';
        }

        if (deltaG < -100) {
            message += '\n\n✅ این واکنش به شدت خودبخودی است!';
        } else if (deltaG > 100) {
            message += '\n\n⛔ این واکنش در این دما غیرخودبخودی است.';
        }

        alert(message);
    }, 500);
}

// ============================================================================
// **توابع کمکی**
// ============================================================================

// تابع کمکی برای یافتن حداقل انرژی در نمودار
function getMinEnergy() {
    if (!currentReactionData) return 0;

    const chartData = generateEnthalpyChartData();
    if (chartData.enthalpy.length === 0) return 0;

    let min = Math.min(...chartData.enthalpy);
    const deltaH = calculateDeltaH(currentReactionData.mainCompound,
        currentReactionData.elementA,
        currentReactionData.elementB);

    // اطمینان از اینکه حداقل کمتر از انرژی نهایی نباشد
    const finalEnergy = chartData.enthalpy[chartData.enthalpy.length - 1];
    return Math.min(min, finalEnergy - 50);
}

// تابع کمکی برای یافتن حداکثر انرژی در نمودار
function getMaxEnergy() {
    if (!currentReactionData) return 100;

    const chartData = generateEnthalpyChartData();
    if (chartData.enthalpy.length === 0) return 100;

    let max = Math.max(...chartData.enthalpy);
    const deltaH = calculateDeltaH(currentReactionData.mainCompound,
        currentReactionData.elementA,
        currentReactionData.elementB);

    // اطمینان از اینکه حداکثر بیشتر از انرژی اولیه باشد
    const initialEnergy = chartData.enthalpy[0];
    return Math.max(max, initialEnergy + 50);
}

// تابع getMinEnergy برای استفاده در updateTemperatureMarker
function getMinEnergy(energyArray = null) {
    if (!energyArray && currentReactionData) {
        const chartData = generateEnthalpyChartData();
        energyArray = chartData.enthalpy;
    }

    if (!energyArray || energyArray.length === 0) return 0;

    let min = Math.min(...energyArray);

    // برای اطمینان از نمایش مناسب در نمودار
    return Math.floor(min / 50) * 50;
}

// تابع getMaxEnergy برای استفاده در updateTemperatureMarker
function getMaxEnergy(energyArray = null) {
    if (!energyArray && currentReactionData) {
        const chartData = generateEnthalpyChartData();
        energyArray = chartData.enthalpy;
    }

    if (!energyArray || energyArray.length === 0) return 100;

    let max = Math.max(...energyArray);

    // برای اطمینان از نمایش مناسب در نمودار
    return Math.ceil(max / 50) * 50 + 50;
}

// پخش صدای مناسب برای عنصر
function playElementSound(element) {
    // استفاده از Web Audio API برای تولید صداهای ساده
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // فرکانس‌های مختلف بر اساس نوع عنصر
        let frequency = 440;
        if (['alkali', 'alkaline'].includes(element.category)) frequency = 220;
        else if (['transition'].includes(element.category)) frequency = 330;
        else if (['nonmetal', 'halogen'].includes(element.category)) frequency = 550;
        else if (['metalloid'].includes(element.category)) frequency = 660;

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        // در صورت خطا، هیچ کاری نکن
    }
}

// دریافت تمام عناصر
function getAllElements() {
    return [...elements, ...lanthanides, ...actinides];
}
