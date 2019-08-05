const jws		= require("jws");
const google 	= require("./googleauth")

const signJwt = (object) => {
	const header = {
		"alg": "RS256",
		"typ": "JWT"
	}
  	const payload = {
		'iss': "starluxcale@starluxcale.iam.gserviceaccount.com",
		'aud': 'google',
		'typ': 'savetoandroidpay',
		'iat':  Math.floor(new Date().getTime() / 1000),
		'payload': object,
		'origins' : []
	}
	// console.log({ header, payload, secret: google.auth.cachedCredential.key })
	// console.log("https://pay.google.com/gp/v/save/"+jws.sign({ header, payload, secret: google.auth.cachedCredential.key }))
	return ("https://pay.google.com/gp/v/save/"+jws.sign({ header, payload, secret: google.auth.cachedCredential.key }))
}

module.exports = signJwt