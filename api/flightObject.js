const google 	= require('../service/googleauth');
const signJwt 	= require('../service/signJwt');
const starlux 	= require('starlux-node-library')
const _ 		= require('lodash')

const flightObject = async (req, res, next) => {
	const reqBody = req.body || {}
	const classId = "3326180555519234028." + reqBody.classId || ""
	const objectId = "3326180555519234028." + req.params.objectId
	switch(req.method){
		case "POST":
			const object = {
				'flightObjects': [{
					"id": objectId,
					"classId": classId,
					"version": 1,
					"state": "active",
					"barcode": {
						"type": "qrCode",
						"value": reqBody.barcode || "https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2017-08/30f51eb6-c669-497e-a8dc-ad5f7749ad4d_m.jpg",
						"alternateText": "掃碼有驚喜"
					},
					"messages": [{
						"header": "messages header",
						"localizedHeader": {
							"translatedValues": [{
								"language": "en-US",
								"value": reqBody.messagesHeaderEN || "en header messages"
							}],
							"defaultValue": {
								"language": "zh-TW",
								"value": reqBody.messagesHeaderTW || "tw header messages"
							}
						},
						"body": "string",
						"localizedBody": {
							"translatedValues": [{
								"language": "en-US",
								"value": reqBody.messagesBodyEN || "en body messages"
							}],
							"defaultValue": {
								"language": "zh-TW",
								"value": reqBody.messagesBodyTW || "tw body messages"
							}
						},
						"displayInterval": {
							"start": {
								"date": reqBody.displayStart || "1985-04-12T23:20:50.52Z"
							},
							"end": {
								"date": reqBody.displayEnd || "2085-04-12T23:20:50.52Z"
							}
						},
						"id": "idstring",
						"messageType": "text"
					}],
					"validTimeInterval": {
						"start": {
							"date": reqBody.validStartTime || "1985-04-12T23:20:50.52Z"
						},
						"end": {
							"date": reqBody.validEndTime || "2019-03-05T23:20:50.52Z"
						}
					},
					"smartTapRedemptionValue": "smartTapRedemptionValue",
					"disableExpirationNotification": false,
					"infoModuleData": {
						"labelValueRows": [{
							"columns": [{
								"label": "label",
								"localizedLabel": {
									"translatedValues": [{
										"language": "zh-TW",
										"value": "label value"
									}],
									"defaultValue": {
										"language": "en-US",
										"value": "label value"
									}
								},
								"value": "value",
								"localizedValue": {
									"translatedValues": [{
										"language": "zh-TW",
										"value": "value"
									}],
									"defaultValue": {
										"language": "en-US",
										"value": "value"
									}
								}
							}]
						}],
						"showLastUpdateTime": true
					},
					"imageModulesData": [{
						"mainImage": {
							"sourceUri": {
								"uri": "http://pretty.hibarn.com/wp-content/uploads/2017/12/pJe.jpg",
								"description": "STARLUX"
							}
						}
					}],
					"linksModuleData": {
						"uris": [{
								"uri": "https://www.starlux-airlines.com/",
								"description": "Home Page"
							},
							{
								"uri": "tel:+886227911000",
								"description": "Contact us"
							}
						]
					},
					// "classReference":"3326180555519234028.ISEEYOUTOO",
					"passengerName": reqBody.passengerName || "Da Ben Den",
					"boardingAndSeatingInfo": {
						"boardingGroup": reqBody.boardingGroup || "B",
						"seatNumber": reqBody.seatNumber || "1A",
						"boardingPosition": reqBody.boardingPosition || "76",
						"sequenceNumber": reqBody.sequenceNumber || "49",
						"seatClass": reqBody.seatClass || "Cabin",
						"boardingPrivilegeImage": {
							"sourceUri": {
								"uri": "https://cdn.shopify.com/s/files/1/0310/9469/products/4014402_orig_1024x1024.png?v=1520769992",
								"description": "string",
								"localizedDescription":{
								  		"translatedValues":[{
								        	"language":"zh-TW",
								        	"value":"boardingPrivilegeImage string"
								     	}],
								  		"defaultValue":{
								     		"language":"en-US",
								     		"value":"boardingPrivilegeImage string"
								  		}
								},
								"id":"idstring"
							}
						},
						"boardingDoor": reqBody.boardingDoor || "front"
					},
					"reservationInfo": {
						"confirmationCode": reqBody.confirmationCode || "3345678",
						"eticketNumber": reqBody.eticketNumber || "3345678",
						"frequentFlyerInfo":{
						  	"frequentFlyerProgramName":{
						     	"translatedValues":[  
						        	{
						           	"language":"zh-TW",
						           	"value": "frequentFlyerInfo value"
						        	}
						     	],
						     	"defaultValue":{
						        	"language":"en-US",
						        	"value": "frequentFlyerInfo value"
						     	}
						  	},
						  	"frequentFlyerNumber": reqBody.frequentFlyerNumber || "frequentFlyerNumber"
						}
					},
					"securityProgramLogo":{
					   "sourceUri":{
					      "uri":"https://www.cssltd.co.uk/wp-content/uploads/2016/09/Home-Security.png",
					      "description":"securityProgramLogo description",
					      "localizedDescription":{
					         "translatedValues":[  
					            {
					               "language":"zh-TW",
					               "value":"securityProgramLogo"
					            }
					         ],
					         "defaultValue":{
					            "language":"en-US",
					            "value":"securityProgramLogo"
					         }
					      },
					      "id":"idstring"
					   }
					}
				}]
			}

			await google.auth.request({
				method: 'POST',
				url: 'https://www.googleapis.com/walletobjects/v1/flightObject',
				data: object.flightObjects[0]
			})
			.then(value =>{
		  		res.send(signJwt(object))
			})
			.catch(error=> {
		  		res.send(error.errors)
			})
			break
		case "PATCH":
			let data = {
				"state": reqBody.state || null,
				"barcode": {
					"value": reqBody.barcode || null,
				},
				"passengerName": reqBody.passengerName || null,
				"boardingAndSeatingInfo": {
					"boardingGroup": reqBody.boardingGroup || null,
					"seatNumber": reqBody.seatNumber || null,
					"boardingPosition": reqBody.boardingPosition || null,
					"sequenceNumber": reqBody.sequenceNumber || null,
					"seatClass": reqBody.seatClass || null,
					"boardingDoor": reqBody.boardingDoor || null
				},
				"reservationInfo": {
					"confirmationCode": reqBody.confirmationCode || null,
					"eticketNumber": reqBody.eticketNumber || null,
				},
			}

			data = _.omitBy(_.mapValues(data, (v,i)=>{
				if(_.isObject(v)){
					return _.omitBy(v, _.isNull)
				}else{
					return v
				}
			}), _.isEmpty)

			await google.auth.request({
				method: 'PATCH',
				url: 'https://www.googleapis.com/walletobjects/v1/flightObject/'+objectId,
				data: data
			})
			.then(value =>{
		  		res.send(value)
			})
			.catch(error=> {
		  		res.send(error.errors)
			})
			break
		case "GET":
			await google.auth.request({
				method: 'GET',
				url: 'https://www.googleapis.com/walletobjects/v1/flightObject/'+objectId,
			})
			.then(value =>{
		  		res.send(signJwt({flightObjects:[{id: value.data.id}]}))
			})
			.catch(error=> {
		  		res.send(error.errors)
			})
			break
	}
}

module.exports = flightObject