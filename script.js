// وظيفة التحقق من الاشتراك
function checkSubscription(event, url) {
    // نمنع الزر من العمل المباشر
    event.preventDefault();
    
    // نسأل المتصفح: هل المستخدم مشترك؟
    if (localStorage.getItem("isSubscribed") === "true") {
        // إذا كان مشتركاً، نفتح الرابط
        window.location.href = url;
    } else {
        // إذا لم يكن مشتركاً، نظهر رسالة ونحوله لصفحة الاشتراك
        alert("فعل الاشتراك أولاً!");
        window.location.href = "subscribe.html";
    }
}
