const google 	= require('../service/googleauth');
const _ 		= require('lodash')

const flightClass = async (req, res, next) => {
	const classId = "3326180555519234028."+req.params.classId
	const reqBody = req.body
	switch(req.method){
		case "POST":
			await google.auth.request({
			  	method: 'POST',
			  	url: 'https://www.googleapis.com/walletobjects/v1/flightClass',
			  	data: {
			  		// 一般資訊
				    "id": classId,
				    "issuerName": "STARLUX",
				    "reviewStatus": "underReview",
				    "multipleDevicesAndHoldersAllowedStatus": "oneUserAllDevices",
				    "countryCode": "Taiwan",

				    // 卡片圖樣 & 圖片模組
				    "heroImage": {
				    	"sourceUri": {
		                    "uri": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png"
				    	}
				    },
				    "imageModulesData": [
					    {
					      	"mainImage": {
					        	"sourceUri": {
					          		"uri": "http://pretty.hibarn.com/wp-content/uploads/2017/12/pJe.jpg",
					          		"description": "STARLUX"
					        	}
					      	}
					    }
					],
				    "hexBackgroundColor": "#84754E",

				    // 首頁網址
				    "homepageUri": {
		                "uri": "https://www.starlux-airlines.com/"
				    },

				    // 智慧感應功能
				    "enableSmartTap": true,

					// 連結模組
					"linksModuleData": {
					    "uris": [
					      	{
					        	"uri": "https://www.starlux-airlines.com/",
					        	"description": "Home Page"
					      	},
					      	{
					        	"uri": "tel:+886227911000",
					        	"description": "Contact us"
					      	}
					    ]
					},
				    
				    // 航班資料
				    "flightStatus": reqBody.flightStatus || "scheduled",
				    "localScheduledDepartureDateTime": reqBody.localScheduledDepartureDateTime || "2019-03-05T06:30:00",
				    "localEstimatedOrActualDepartureDateTime": reqBody.localEstimatedOrActualDepartureDateTime || "2019-03-05T06:30:00",
				    "localBoardingDateTime": reqBody.localBoardingDateTime || "2019-03-05T06:30:00",
				    "localGateClosingDateTime": reqBody.localGateClosingDateTime || "2019-03-05T06:30:00",
				    "localScheduledArrivalDateTime": reqBody.localScheduledArrivalDateTime || "2019-03-05T06:30:00",
				    "localEstimatedOrActualArrivalDateTime": reqBody.localEstimatedOrActualArrivalDateTime || "2019-03-05T06:30:00",
				    "boardingAndSeatingPolicy": {
				    	"boardingPolicy": "zoneBased",
				    	"seatClassPolicy": "cabinBased"
				    },


				    "flightHeader": {
				        // 航空公司
				        "flightNumber": reqBody.flightNumber || "0666",
				        "carrier": {
				            "kind": "walletobjects#flightCarrier",
				            "carrierIataCode": "JX",
				            "airlineName": {
				                "kind": "walletobjects#localizedString",
				                "translatedValues": [{
				                    "kind": "walletobjects#translatedString",
				                    "language": "zh-TW",
				                    "value": "星宇航空"
				                }],
				                "defaultValue": {
				                    "kind": "walletobjects#translatedString",
				                    "language": "en-US",
				                    "value": "STARLUX"
				                }
				            },
				            "airlineLogo": {
				                "kind": "walletobjects#image",
				                "sourceUri": {
				                    "kind": "walletobjects#uri",
				                    "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0S0UxTRIYsT_6Kq0xrqhgtDUnNFR00EYe5zK6TsFZEkykhpVrg",
				                    "description": "STARLUX",
				                    "localizedDescription": {
				                        "kind": "walletobjects#localizedString",
				                        "translatedValues": [{
				                            "kind": "walletobjects#translatedString",
				                            "language": "zh-TW",
				                            "value": "星宇航空"
				                        }],
				                        "defaultValue": {
				                            "kind": "walletobjects#translatedString",
				                            "language": "en-US",
				                            "value": "STARLUX"
				                        }
				                    }
				                }
				            },
				            "airlineAllianceLogo": {
				                "kind": "walletobjects#image",
				                "sourceUri": {
				                    "kind": "walletobjects#uri",
				                    "uri": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Skyteam_Logo_001.svg/1200px-Skyteam_Logo_001.svg.png",
				                    "description": "string",
				                    "localizedDescription": {
				                        "kind": "walletobjects#localizedString",
				                        "translatedValues": [{
				                            "kind": "walletobjects#translatedString",
				                            "language": "en-US",
				                            "value": "string"
				                        }],
				                        "defaultValue": {
				                            "kind": "walletobjects#translatedString",
				                            "language": "en-US",
				                            "value": "string"
				                        }
				                    }
				                }
				            }
				        },

				        // 營運航空公司
				        "operatingFlightNumber": reqBody.operatingFlightNumber || "0666",
				        "operatingCarrier": {
				            "kind": "walletobjects#flightCarrier",
				            "carrierIataCode": "JX",
				            "airlineName": {
				                "kind": "walletobjects#localizedString",
				                "translatedValues": [{
				                    "kind": "walletobjects#translatedString",
				                    "language": "zh-TW",
				                    "value": "星宇航空"
				                }],
				                "defaultValue": {
				                    "kind": "walletobjects#translatedString",
				                    "language": "en-US",
				                    "value": "STARLUX"
				                }
				            },
				            "airlineLogo": {
				                "kind": "walletobjects#image",
				                "sourceUri": {
				                    "kind": "walletobjects#uri",
				                    "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0S0UxTRIYsT_6Kq0xrqhgtDUnNFR00EYe5zK6TsFZEkykhpVrg",
				                    "description": "STARLUX",
				                    "localizedDescription": {
				                        "kind": "walletobjects#localizedString",
				                        "translatedValues": [{
				                            "kind": "walletobjects#translatedString",
				                            "language": "zh-TW",
				                            "value": "星宇航空"
				                        }],
				                        "defaultValue": {
				                            "kind": "walletobjects#translatedString",
				                            "language": "en-US",
				                            "value": "STARLUX"
				                        }
				                    }
				                }
				            },
				            "airlineAllianceLogo": {
				                "kind": "walletobjects#image",
				                "sourceUri": {
				                    "kind": "walletobjects#uri",
				                    "uri": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Skyteam_Logo_001.svg/1200px-Skyteam_Logo_001.svg.png",
				                    "description": "string",
				                    "localizedDescription": {
				                        "kind": "walletobjects#localizedString",
				                        "translatedValues": [{
				                            "kind": "walletobjects#translatedString",
				                            "language": "en-US",
				                            "value": "string"
				                        }],
				                        "defaultValue": {
				                            "kind": "walletobjects#translatedString",
				                            "language": "en-US",
				                            "value": "string"
				                        }
				                    }
				                }
				            }
				        },
				    },

				    // 航班出發地機場
				    "origin": {
				        "kind": "walletobjects#airportInfo",
				        "airportIataCode": reqBody.originAirportIataCode  || "TPE",
				        "terminal": reqBody.originTerminal  || "1",
				        "gate": reqBody.originGate  || "C2"
				    },

				    // 航班目的地機場
				    "destination": {
				        "kind": "walletobjects#airportInfo",
				        "airportIataCode": reqBody.destinationAirportIataCode  || "GGG",
				        "terminal": reqBody.destinationTerminal  || "1",
				        "gate": reqBody.destinationGate  || "C2"
				    },
				}
			})
			.then(value =>{
		  		res.send(value)
			})
			.catch(error=> {
		  		res.send(error.errors)
			})
			break
		case "PATCH":
			let data = {
		  		// 一般資訊
			    "reviewStatus": "underReview",
			    
			    // 航班資料
			    "flightStatus": reqBody.flightStatus || null,
			    "localScheduledDepartureDateTime": reqBody.localScheduledDepartureDateTime || null,
			    "localEstimatedOrActualDepartureDateTime": reqBody.localEstimatedOrActualDepartureDateTime || null,
			    "localBoardingDateTime": reqBody.localBoardingDateTime || null,
			    "localGateClosingDateTime": reqBody.localGateClosingDateTime || null,
			    "localScheduledArrivalDateTime": reqBody.localScheduledArrivalDateTime || null,
			    "localEstimatedOrActualArrivalDateTime": reqBody.localEstimatedOrActualArrivalDateTime || null,

			    // 航班出發地機場
			    "origin": {
			        "kind": "walletobjects#airportInfo",
			        "airportIataCode": reqBody.originAirportIataCode  || null,
			        "terminal": reqBody.originTerminal  || null,
			        "gate": reqBody.originGate  || null
			    },

			    // 航班目的地機場
			    "destination": {
			        "kind": "walletobjects#airportInfo",
			        "airportIataCode": reqBody.destinationAirportIataCode  || null,
			        "terminal": reqBody.destinationTerminal  || null,
			        "gate": reqBody.destinationGate  || null
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
			  	url: 'https://www.googleapis.com/walletobjects/v1/flightClass/'+classId,
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
			  	url: 'https://www.googleapis.com/walletobjects/v1/flightClass/'+classId
			})
			.then(value =>{
		  		res.send(value)
			})
			.catch(error=> {
		  		res.send(error.errors)
			})
			break
	}
}

module.exports = flightClass