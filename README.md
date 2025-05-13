

##### **POST** Fetch Token
**To obtain an authentication token for accessing the APIs**

`/slicesapi/token`



**Body** urlencoded (urlencoded)
| type | key | value |
| --- | --- | --- |
| text | grant_type | password |
| text | username | SLICESDEV |
| text | password | af699oe7-fi71-41uf-8dd2-990ak4f46l23 |
| text | AppId | 9452 |



**Response**
```
{
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJUb2tlbkNsYWltIjoie1wiSXNWYWxpZENsaWVudFwiOlwiWUVTXCIsXCJJc0VuYWJsZUNsYWltVmFsaWRhdGlvblwiOlwiTk9cIixcIkFwcFVzZXJcIjpcIlwiLFwiVXNlclR5cGVcIjpcIlwiLFwic3R1ZGVudHNcIjpcIlwifSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJTTElDRVNERVYiLCJqdGkiOiI2Yjk3ODcyMy1mNjM4LTQzYmEtODViYS1iYmFiMjNjYWFiMGUiLCJleHAiOjE3NDcxNTY4MzAsImlzcyI6InBob2VuaXhhcGkiLCJhdWQiOiJHRU1TIn0.ybKPNpbIu0NO6CEWgJ-l4vPpUfOjhm9vdo8xLFrajwA",
"token_type": "bearer",
"expires_in": 43200,
"userName": "SLICESDEV",
".issued": "Tue, 13 May 2025 09:20:30 GMT",
".expires": "Tue, 13 May 2025 21:20:30 GMT"
}
````
##### **GET** Get Staff Details by Email
Fetch the Employee number to pass in subsequent service. if user not found in tenant then empty response will come

`/slicesapi/api/SlicesPOSEncrypt/GETEmployeeNumberByEmail`

**Headers**
| key | value |
| --- | --- |
| email | UneAUf6kJ2yhTbhQ3dc3wIxJ5X1VsrzhvRiH8VsA4KE= |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOSEncrypt/GETEmployeeNumberByEmail",
"success": "true",
"responseCode": "OK",
"message": null,
"data": "10031881"
}
````
##### **GET** Get Slices Menu
Fetch the Menu items to display in portal

`/slicesapi/api/SlicesPOS//GETPOSONLINEMENU`

**Headers**
| key | value |
| --- | --- |
| order-date | 2024-12-25 |
| empno | {empo} |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/gemsapi/api/SlicesPOS/GETPOSONLINEMENU",
"success": "true",
"responseCode": "OK",
"message": null,
"data": {
"date": "2025-05-16",
"menu": {
"soups": {
"items": [
{
"itemId": 28863,
"categoryId": 83,
"imageUrl": "{BaseURL}/Inventory/Item/28863.jpg",
"name": "Arabic Lentil Soup Arabic toast",
"description": "a warm, hearty soup made from red lentils simmered with onions, garlic, and aromatic cumin and coriander. Enriched with a squeeze of lemon juice for a refreshing tang. Served with toast.",
"ingredients": "Water, Toasted Bread Brown, [Wheat], Lentils, Potato, Olive Oil, Lemon Juice, Onions, Carrots, Celery, Sunflower Oil, Salt, Cumin Roasted Powder",
"calories": "795kJ/190kcal",
"allergens": [
"Celery",
"Gluten"
],
"price": 20.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.95,
"quantity": 1.00,
"itemCategory": "Soups",
"itembaserate": 19.05,
"vatperc": 5.00
},
{
"itemId": 28885,
"categoryId": 83,
"imageUrl": "{BaseURL}/Inventory/Item/28885.jpg",
"name": "Creamy Mushroom Soup Parmesan Toast",
"description": "A warm, creamy blend of earthy mushrooms, aromatic herbs, and rich flavors, perfect for comfort in a bowl. Served along with parmesan crusted toast.",
"ingredients": "Water, Mushrooms, Wholemeal Wheatflour, Parmesan [Milk], Single Cream [Milk], Potato, Egg, Onions, Carrots, Celery, Wheatflour, Sunflower Oil, Salt, Black Pepper, Butter [Milk], Sugar, Yeast",
"calories": "540kJ/129kcal",
"allergens": [
"Celery",
"Egg",
"Gluten",
"Milk"
],
"price": 18.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.86,
"quantity": 1.00,
"itemCategory": "Soups",
"itembaserate": 17.14,
"vatperc": 5.00
}
]
}
}
}
}
````
##### **GET** Get Pickup Location
Fetch the pickup location

`/slicesapi/api/SlicesPOS/GET_ONLINE_PICKUP_LOCATION`

**Headers**
| key | value |
| --- | --- |
| empno | {empo} |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOS/GET_ONLINE_PICKUP_LOCATION",
"success": "true",
"responseCode": "OK",
"message": null,
"data": [
{
"pickupID": 2,
"pickupLocation": "Main Cafe",
"locationDesc": "Main Cafe"
}
]
}
````
##### **GET** Get OnlineOrder Discount
Fetch the Order discount

`/slicesapi/api/SlicesPOSEncrypt/GET_ONLINEORDER_DISCOUNT`

**Headers**
| key | value |
| --- | --- |
| empno | {empo} |
| order-date | 2024-12-01 |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOSEncrypt/GET_ONLINEORDER_DISCOUNT",
"success": "true",
"responseCode": "OK",
"message": null,
"data": []
}
````
##### **GET** Get Banner Images
Fetch the Dashboard banner images

`/slicesapi/api/SlicesPOS/GetBannerImages`

**Headers**
| key | value |
| --- | --- |
| empno | {empo} |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOS/GetBannerImages",
"success": "true",
"responseCode": "OK",
"message": null,
"data": [
{
"title": "image1",
"imageUrl": "{BaseURL}/Inventory/SLICESBANNERIMAGES/banner1.png"
},
{
"title": "image2",
"imageUrl": "{BaseURL}/Inventory/SLICESBANNERIMAGES/banner2.jpg"
},
{
"title": "image3",
"imageUrl": "{BaseURL}/Inventory/SLICESBANNERIMAGES/banner3.jpg"
}
]
}
````
##### **GET** Get Staff Wallet Balance
Fethc the wallet balance

`/slicesapi/api/SlicesPOSEncrypt/GetEmployeeWalletBalance`

**Headers**
| key | value |
| --- | --- |
| empno | 8ptfzf4CPh8Z3pCBRg/CAQ== |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOSEncrypt/GetEmployeeWalletBalance",
"success": "true",
"responseCode": "OK",
"message": null,
"data": "177.98"
}
````
##### **GET** Get Orders List
View my past orders

`/slicesapi/api/SlicesPOS/GetOrders`

**Headers**
| key | value |
| --- | --- |
| empno | {empo} |
| fromDate | 2024-12-09 |
| toDate | 2024-12-31 |
| currentPage | 1 |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOS/GetOrders",
"success": "true",
"responseCode": "OK",
"message": null,
"data": {
"orders": [],
"totalPage": 0,
"currentPage": 1,
"orderFilters": {
"fromDate": "2024-12-09T00:00:00",
"toDate": "2024-12-31T00:00:00"
}
}
}
````
##### **POST** Cancel Order
Cancel the order

`/slicesapi/api/SlicesPOSEncrypt/CancelOrder`

**Headers**
| key | value |
| --- | --- |
| empno | 8ptfzf4CPh8Z3pCBRg/CAQ== |
| ids | zlCEx+TpwZo= |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOSEncrypt/CancelOrder",
"success": "false",
"responseCode": "OK",
"message": null,
"data": "Error on Cancel the Order."
}
````
##### **POST** Checkout API
Add the items to the cart and create the orderID and proceed with the payment

`/slicesapi/api/SlicesPOSEncrypt/CreateOrder`

**Headers**
| key | value |
| --- | --- |
| accept | application/json, text/plain, */* |
| authorization | *****BEARER TOKEN***** |
| content-type | application/json |
| empno | NkBp/vEx5SmEbQgMhUeWBA== |
| redirecturl | http://localhost:3000/scp/orderPlaced |


**Body** raw (json)
```json
{
"body": "pYJ1oh9HKEZK/oa/c16vczqF/SAZn3hiUALJUCemYqXrQ2fCCg9tJXBTbLhIlEB/lW4z/pXhI8xAQBJc8H37IfSKu4FQfENjVRQvGJi66Tk+KIUfZQGHkQlhMq1+2yZlOwDnlcvZf4ayUixUqE7YqOeCyBy0a/iFdUJgp1XuD5hkapmqlKy0zPHx+FmNyzycJ8iicP37sDM9UUQvL020CIZEhASr/0f4tfeTf9clvgSQjPTUNGe7vtirOFufTetSEblceUtJtKPGQMKp+27DQ0V57QMjjdv8wLmpU97Bu9O3444vtag2bvIrijJZ4ceW07UcgU9Um5KK2CX63g7+xdL2CSM7eD/ZueZ22EjrUQsjBJz/a+WEmpjdulsgQBJti6PwMYTUKSBiDKX88ksVz8+jRQRdPpu9MJ0nPuLN+w3J08AOTEAGZd0yEWykRp1Fm/n0XgzF6wj/mX3FGT+M0ZhLFa3x3WPS88OybtsF5Zgg7zaJYVInvYZpMbeq3SNwwE0BPjx/ReqG4t47cjkyamiLfx5lSL9oUnjy8pYn3VO9Qv8NNCoTYzPhKyvgpwghSto+vJIhKOwaheQDAXJuMrQ0uSeHDKYWB4r5OZNCucUSZt/rQPU65Fybrt3JI4eMf0dUD7zfCkpm7olLxRULQvWO9N8U8+RlOCHrnFBELe5HgBwNVgWh4lE48TRFp4FXHmA++KgF8Ajj92qiRraZ9UIWCatfG+1Atsahuvc0DGxOGVTd1pAlJheklnHjLm7zkp+6k0jdmdiua6Ky0r9aKkdjSZFXAXaK1v2mg5XV7xBuBRRNgdatrLjPi95CKtZoC+OoBZGkkjw1tiQkjs/x+KoxGXxNjCI8wkT8iz1rODwkFIwqsFrWZuHXX2alS4Phl6pRdrZ6gYq77UIzGIxRu+QeEn9xNb+VZo1casqWgXuuGMIdnOQTV7rzmRA0S7eSn8c9M9D2KPmfu0gmDLr0gm1GqLC9Ol/U7xBCSYySl4OOQg2E0sPVxih7Ln4woK0RYwQnni7/YcJq69PzUjcL4aY6bZBCzjxRRhATFI/2kDqsaGcW/aPOS97xVo/eHSVidamiqhOnnFBst9p27cQUuxY0ExMQqj2buCUmE0pIaQlFrS3Eamg991eajBrHathwYnZMxcWJRdZrwFtuFEVg1C4RaZoyJh0v8kJTyT2S78HA42ez1uUhjpkSlBiv6v0Z5JPxmJWh/NBdz5JP/R7+EdUyNjJLpYKmcc23RLT/slLgtAY7Dac39f08qFHS94EqCY+YuJxUZlOR8b9L0CMggsTXZEHyGhyxtCkJxBE+u43DF07KRD0MLAzEKd9GfG53rQ/eQ9wPZRULJJCFSKJsqrni7YsZAP+IvsPxT2oqqJtQA5+SJnpr/T8+lmvHIetLe9QQ2D7sWK0wjbFKGmWyLviLbWAC5+4sTSdAOfMTHEk/sTVih/0XnIaorlDm0UrJOKn6SyLzUr9zHSCd9hjUJfB0ke8dIHX7zzsFkemlt8TVwUhlBwX1dAzsT/Wzj4Vh+GzJu4bHyTnlJm9+RMnfDupXIH/mMGLCjj974kKv68M9AAUDaZYIy/gpVPy2PgNB/uY+c1IPZU2qyfY0uWaEzevRPSXPVu3UlFbkwhiz5cjp2T525VKR3JDtziGBdmh0trSJJRe1EO1/Sbc/KLtxBGiWiSI+E2zJ5r6y9LSb7tONRLaXa7JheTq+rbnR/fFePY7tUx1UDukoq9Z11r0wtj8N5hEVc+N08KvR1bKP48VyUZdGiFGA4l12bz5LQasp/HnPW/m+YhfvgPwuR0EP5jfcSQegIQUJMV7cqyubbIC5zbEvdot5LEadws19zmG7TGhj2pEvwNZ9yH3oyBomFvpOnog8OCXbxgAacnStPlL6Qbz9Q/3IroSt0W5cYtDEz8TzWjVg7rEjQ1wmkEMWg8kLHw9A0BQL"
}
````


**Response**
```
{
"Response": null,
"OrderId": 0,
"PaymentRefNo": null,
"PaymentRedirectURL": null,
"PaymentStatus": null,
"Message": null,
"Success": false
}
````
##### **GET** Get Wallet Transaction History
View past transaction history

`/slicesapi/api/SlicesPOS/GetWalletTransactionHistory`

**Headers**
| key | value |
| --- | --- |
| empno | {empo} |
| currentPage | 1 |
| Authorization | *****BEARER TOKEN***** |





**Response**
```
{
"cmd": "/slicesapi/api/SlicesPOS/GetWalletTransactionHistory",
"success": "true",
"responseCode": "OK",
"message": null,
"data": {
"wallet": {
"walletBalance": 3.6,
"topupActionButton": true,
"currency": "AED"
},
"history": [
{
"trantype": "Deducted for Purchase Order No:25SO000516",
"transDate": "27 February 2025",
"transAmount": 6.4,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 88.6
},
{
"trantype": "Topup",
"transDate": "27 February 2025",
"transAmount": 10,
"entryType": "CR",
"displaycolor": "green",
"lastBalance": 95
},
{
"trantype": "Purchase Order No:25SO000502",
"transDate": "21 February 2025",
"transAmount": 71.2,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 85
},
{
"trantype": "Deducted for Purchase Order No:25SO000469",
"transDate": "12 February 2025",
"transAmount": 28.8,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 156.2
},
{
"trantype": "Topup",
"transDate": "12 February 2025",
"transAmount": 100,
"entryType": "CR",
"displaycolor": "green",
"lastBalance": 185
},
{
"trantype": "Purchase Order No:25SO000466",
"transDate": "11 February 2025",
"transAmount": 20.4,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 85
},
{
"trantype": "Deducted for Purchase Order No:25SO000464",
"transDate": "11 February 2025",
"transAmount": 28.8,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 105.4
},
{
"trantype": "Deducted for Purchase Order No:25SO000431",
"transDate": "07 February 2025",
"transAmount": 10,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 134.2
},
{
"trantype": "Deducted for Purchase Order No:25SO000291",
"transDate": "28 January 2025",
"transAmount": 14.4,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 144.2
},
{
"trantype": "Deducted for Purchase Order No:25SO000288",
"transDate": "24 January 2025",
"transAmount": 12,
"entryType": "DR",
"displaycolor": "red",
"lastBalance": 158.6
}
],
"totalPages": 2,
"totalRecords": 17,
"currentPage": 1
}
}
````
##### **POST** Wallet topup
Add the amount  to the topup the wallet

`/slicesapi/api/Payment/POST_FEE_DETAILS_ENCRYPT_SLICES_POS`

**Headers**
| key | value |
| --- | --- |
| accept | application/json, text/plain, */* |
| activityfeecolltype | STAFF_CATERING |
| authorization | *****BEARER TOKEN***** |
| content-type | application/json |
| origin | http://localhost:3000 |
| paymentorigin | PARENT_EXP_WEB |
| paymentto | STAFF_CATERING |
| redirecturl | http://localhost:3000/scp/wallet?topup= |
| referer | http://localhost:3000/ |


**Body** raw (json)
```json
[
{
"STU_NO": "NkBp/vEx5SmEbQgMhUeWBA==",
"OnlinePaymentAllowed": true,
"UserMessageforOnlinePaymentBlock": null,
"PaymentTypeID": 1889,
"PayingAmount": "oLI761NyOgyE=",
"IpAddress": "1.0.0",
"PaymentProcessingCharge": 0,
"PayMode": null,
"FeeDetail": [
{
"BlockPayNow": false,
"AdvanceDetails": null,
"AdvancePaymentAvailable": false,
"FeeID": 41,
"FeeDescription": "Slices Fees",
"DueAmount": "zxK72chytdU=",
"PayAmount": "oLI61NyOgyE=",
"OriginalAmount": "zxK72chytdU=",
"DiscAmount": "zxK72chytdU=",
"ActivityRefID": "zxK72chytdU=",
"ActivityFeeCollType": null
}
],
"DiscountDetails": [
{
"Month": null,
"FeeAmount": null,
"DiscPrec": "zxK72chytdU=",
"DiscAmount": "zxK72chytdU=",
"NetAmount": null
}
]
}
]
````


**Response**
```
{
"Response": {
"Cmd": "/slicesapi/api/Payment/POST_FEE_DETAILS_ENCRYPT_SLICES_POS",
"Success": "false",
"ResponseCode": "BadRequest",
"ErrorCode": "E22",
"Message": "Exception catch",
"Data": null,
"TransactionId": 0
},
"PaymentRefNo": "",
"PaymentRedirectURL": ""
}
````
