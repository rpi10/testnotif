// Listen for the 'push' event to handle notification
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Logic when the notification is clicked
    event.waitUntil(
        clients.openWindow('https://www.example.com') // Replace with the action you'd like
    );
});
