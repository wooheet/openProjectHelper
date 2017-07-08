const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.detail_page = functions.https.onRequest((request, response) => {
 response.redirect('https://opensourceproject-73d9a.firebaseapp.com/detail_page.html');
});

exports.rules_page = functions.https.onRequest((request, response) => {
 response.redirect('https://opensourceproject-73d9a.firebaseapp.com/usage-rules.html');
});
