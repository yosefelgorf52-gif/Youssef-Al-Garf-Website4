function checkSubscription(event, url) {
    event.preventDefault();
    
    let subDate = localStorage.getItem("subDate");
    let isSubscribed = localStorage.getItem("isSubscribed");

    // التحقق من انتهاء الـ 30 يوم (30 يوم * 24 ساعة * 60 دقيقة * 60 ثانية * 1000 مللي ثانية)
    if (subDate) {
        let now = new Date().getTime();
        let thirtyDays = 30 * 24 * 60 * 60 * 1000;
        
        if (now - subDate > thirtyDays) {
            // الاشتراك انتهى
            localStorage.removeItem("isSubscribed");
            localStorage.removeItem("subDate");
            alert("انتهى اشتراكك الشهري! تواصل معنا للتجديد.");
            window.location.href = "subscribe.html";
            return;
        }
    }

    // التحقق من وجود اشتراك فعال
    if (isSubscribed === "true") {
        window.location.href = url;
    } else {
        alert("فعل الاشتراك أولاً!");
        window.location.href = "subscribe.html";
    }
}
