function checkSubscription(event, url) {
    event.preventDefault();
    
    // بيانات الاشتراك المحفوظة عند المستخدم
    let userCode = localStorage.getItem("userCode"); 
    let subDate = localStorage.getItem("subDate");

    // 1. التحقق من وجود الكود ومطابقته للقائمة المحدثة في codes.js
    // لو حذفت الكود من ملف codes.js، الشرط ده هيخلي الاشتراك يقف فوراً
    if (!userCode || typeof validCodes === 'undefined' || !validCodes.includes(userCode)) {
        alert("الاشتراك غير فعال أو تم إلغاؤه من الإدارة!");
        localStorage.clear(); // مسح كل بيانات الاشتراك القديمة
        window.location.href = "subscribe.html";
        return;
    }

    // 2. التحقق من انتهاء الـ 30 يوم
    if (subDate) {
        let now = new Date().getTime();
        let thirtyDays = 30 * 24 * 60 * 60 * 1000;
        
        if (now - subDate > thirtyDays) {
            localStorage.clear(); // مسح البيانات عند انتهاء المدة
            alert("انتهى اشتراكك الشهري! تواصل معنا للتجديد.");
            window.location.href = "subscribe.html";
            return;
        }
    }

    // إذا تجاوز كل الشروط، يفتح القناة
    window.location.href = url;
}
