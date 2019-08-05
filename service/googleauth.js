const {google} = require('googleapis');

google.auth.getClient({
	// Scopes can be specified either as an array or as a single, space-delimited string.
	scopes: ['https://www.googleapis.com/auth/wallet_object.issuer'],
	keyFilename: 'key.json'
});

module.exports = google