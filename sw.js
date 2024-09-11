self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Hi from push notification!',
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
