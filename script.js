function checkSubscription(event, url) {
    event.preventDefault();
    
    let subDate = localStorage.getItem("subDate");
    let isSubscribed = localStorage.getItem("isSubscribed");

    if (subDate) {
        let now = new Date().getTime();
        let thirtyDays = 30 * 24 * 60 * 60 * 1000;
        
        if (now - subDate > thirtyDays) {
            localStorage.removeItem("isSubscribed");
            localStorage.removeItem("subDate");
            alert("انتهى اشتراكك الشهري! تواصل معنا للتجديد.");
            window.location.href = "subscribe.html";
            return;
        }
    }

    if (isSubscribed === "true") {
        window.location.href = url;
    } else {
        alert("فعل الاشتراك أولاً!");
        window.location.href = "subscribe.html";
    }
}
