# API Documentation for Slices Catering

## Fetch Token
**To obtain an authentication token for accessing the APIs**

### Endpoint
```
POST https://phoenixapi.gemseducation.com/gemsapi/token
```

### Request Body (urlencoded)
| key | value |
|-----|-------|
| grant_type | password |
| username | Nourish.Web.prod |
| password | GuceMLmUFfn8w65zKhrW |
| AppId | 46656 |

### Sample JSON Response
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600
}
```

## Get Staff Details by Email
**To retrieve staff information using an email address**

### Endpoint
```
GET https://phoenixapi.gemseducation.com/gemsapi/api/SlicesPOSEncrypt/GETEmployeeNumberByEmail
```

### Headers
| key | value |
|-----|-------|
| email | 3LcftxLuV04W8U3O6xoe4lwG+yOGyriWpxzOt8uk3ePi8qt+X15b4w== |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GETEmployeeNumberByEmail",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": {
    "employeeNumber": "10024463",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
```

## Get Slices Menu
**To retrieve the available menu items for a specific date**

### Endpoint
```
GET https://phoenixapi.gemseducation.com/gemsapi/api/SlicesPOS//GETPOSONLINEMENU
```

### Headers
| key | value |
|-----|-------|
| order-date | 2025-01-16 |
| empno | 10024463 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GETPOSONLINEMENU",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": [
    {
      "menuCategoryId": 1,
      "menuCategoryName": "Breakfast",
      "menuCategoryImage": "breakfast.jpg",
      "items": [
        {
          "itemId": 101,
          "itemName": "Eggs Benedict",
          "itemDescription": "Poached eggs with hollandaise sauce",
          "price": 25.00,
          "image": "eggs_benedict.jpg",
          "available": true
        }
      ]
    }
  ]
}
```

## Get Pickup Location
**To retrieve available pickup locations for orders**

### Endpoint
```
GET https://stsconnectptapi.phoenixsystem.ae/slicesapi/api/SlicesPOS/GET_ONLINE_PICKUP_LOCATION
```

### Headers
| key | value |
|-----|-------|
| empno | 20024141 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GET_ONLINE_PICKUP_LOCATION",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": [
    {
      "locationId": 1,
      "locationName": "Main Cafeteria",
      "isActive": true
    },
    {
      "locationId": 2,
      "locationName": "Staff Room",
      "isActive": true
    }
  ]
}
```

## Get OnlineOrder Discount
**To retrieve applicable discounts for online orders**

### Endpoint
```
GET https://stsconnectptapi.phoenixsystem.ae/slicesapi/api/SlicesPOS/GET_ONLINEORDER_DISCOUNT
```

### Headers
| key | value |
|-----|-------|
| empno | 20024141 |
| order-date | 2025-01-16 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GET_ONLINEORDER_DISCOUNT",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": {
    "discountPercentage": 5,
    "minimumOrderAmount": 50,
    "maxDiscountAmount": 25
  }
}
```

## Get Banner Images
**To retrieve promotional banner images for the application**

### Endpoint
```
GET https://phoenixapi.gemseducation.com/gemsapi/api/SlicesPOS/GetBannerImages
```

### Headers
| key | value |
|-----|-------|
| empno | 20024141 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GetBannerImages",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": [
    {
      "imageId": 1,
      "imageUrl": "https://example.com/banner1.jpg",
      "title": "Special Offer",
      "description": "20% off on breakfast items"
    },
    {
      "imageId": 2,
      "imageUrl": "https://example.com/banner2.jpg",
      "title": "New Menu",
      "description": "Try our new healthy options"
    }
  ]
}
```

## Get Staff Wallet Balance
**To retrieve the current balance in a staff member's wallet**

### Endpoint
```
GET https://stsconnectptapi.phoenixsystem.ae/slicesapi/api/SlicesPOSEncrypt/GetEmployeeWalletBalance
```

### Headers
| key | value |
|-----|-------|
| empno | 8ptfzf4CPh8Z3pCBRg/CAQ== |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GetEmployeeWalletBalance",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": {
    "balance": 250.75,
    "currency": "AED",
    "lastUpdated": "2025-01-15T10:30:45.123Z"
  }
}
```

## Get Orders List
**To retrieve a list of orders placed by a staff member**

### Endpoint
```
GET https://stsconnectptapi.phoenixsystem.ae/slicesapi/api/SlicesPOS/GetOrders
```

### Headers
| key | value |
|-----|-------|
| empno | 10024463 |
| fromDate | 2024-12-09 |
| toDate | 2024-12-31 |
| currentPage | 2 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GetOrders",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": {
    "totalRecords": 15,
    "currentPage": 2,
    "totalPages": 3,
    "orders": [
      {
        "orderId": 12345,
        "orderDate": "2024-12-20T12:30:45.123Z",
        "totalAmount": 85.50,
        "status": "COMPLETED",
        "pickupLocation": "Main Cafeteria",
        "items": [
          {
            "itemId": 101,
            "itemName": "Eggs Benedict",
            "quantity": 2,
            "price": 25.00,
            "totalPrice": 50.00
          },
          {
            "itemId": 203,
            "itemName": "Fresh Orange Juice",
            "quantity": 1,
            "price": 15.50,
            "totalPrice": 15.50
          }
        ]
      }
    ]
  }
}
```

## Cancel Order
**To cancel an existing order**

### Endpoint
```
POST https://stsconnectptapi.phoenixsystem.ae/slicesapi/api/SlicesPOSEncrypt/CancelOrder
```

### Headers
| key | value |
|-----|-------|
| empno | 8ptfzf4CPh8Z3pCBRg/CAQ== |
| ids | 200 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "CancelOrder",
  "success": "true",
  "responseCode": null,
  "message": "Order cancelled successfully",
  "data": {
    "orderId": 200,
    "refundStatus": "INITIATED",
    "refundAmount": 85.50
  }
}
```

## Checkout API
**To place a new order**

### Endpoint
```
POST https://phoenixapi.gemseducation.com/gemsapi//api/SlicesPOSEncrypt/CreateOrder
```

### Headers
| key | value |
|-----|-------|
| accept | application/json, text/plain, / |
| authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |
| content-type | application/json |
| empno | NkBp/vEx5SmEbQgMhUeWBA== |
| redirecturl | http://localhost:3000/scp/orderPlaced |

### Request Body
```json
{
  "body": "pYJ1oh9HKEZK/oa/c16vczqF/SAZn3hiUALJUCemYqXrQ2fCCg9tJWXi/Z1xJRimDDDQGCn1GRRRnPT/Qf"
}
```

### Sample JSON Response
```json
{
  "cmd": "CreateOrder",
  "success": "true",
  "responseCode": null,
  "message": "Order created successfully",
  "data": {
    "orderId": 12346,
    "orderDate": "2025-01-16T09:45:30.123Z",
    "totalAmount": 95.25,
    "status": "PROCESSING",
    "estimatedPickupTime": "2025-01-16T12:30:00.000Z",
    "paymentMethod": "WALLET"
  }
}
```

## Get Wallet Transaction History
**To retrieve the transaction history for a staff member's wallet**

### Endpoint
```
GET https://stsconnectptapi.phoenixsystem.ae/slicesapi/api/SlicesPOS/GetWalletTransactionHistory
```

### Headers
| key | value |
|-----|-------|
| empno | 10024463 |
| currentPage | 1 |
| Authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |

### Sample JSON Response
```json
{
  "cmd": "GetWalletTransactionHistory",
  "success": "true",
  "responseCode": null,
  "message": null,
  "data": {
    "totalRecords": 10,
    "currentPage": 1,
    "totalPages": 2,
    "transactions": [
      {
        "transactionId": "TRX12345",
        "date": "2025-01-15T14:25:30.123Z",
        "type": "TOPUP",
        "amount": 100.00,
        "balance": 250.75,
        "description": "Wallet topup"
      },
      {
        "transactionId": "TRX12344",
        "date": "2025-01-14T12:15:45.456Z",
        "type": "PURCHASE",
        "amount": -85.50,
        "balance": 150.75,
        "description": "Order #12345"
      }
    ]
  }
}
```

## Wallet Topup
**To add funds to a staff member's wallet**

### Endpoint
```
POST https://phoenixapi.gemseducation.com/gemsapi/api/Payment/POST_FEE_DETAILS_ENCRYPT_SLICES_POS
```

### Headers
| key | value |
|-----|-------|
| accept | application/json, text/plain, / |
| activityfeecolltype | STAFF_CATERING |
| authorization | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... |
| content-type | application/json |
| origin | http://localhost:3000 |
| paymentorigin | STAFF_CATERING_WEB |
| paymentto | STAFF_CATERING |
| redirecturl | http://localhost:3000/scp/wallet?topup= |
| referer | http://localhost:3000/ |

### Request Body
```json
[
  {
    "STU_NO": "KrYjLm0XZezw9UqGC7bjNw==",
    "OnlinePaymentAllowed": true,
    "UserMessageforOnlinePaymentBlock": null,
    "PaymentTypeID": 1889,
    "PayingAmount": "oLI61NyOgyE=",
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
```

### Sample JSON Response
```json
{
  "cmd": "POST_FEE_DETAILS_ENCRYPT_SLICES_POS",
  "success": "true",
  "responseCode": null,
  "message": "Payment processed successfully",
  "data": {
    "paymentId": "PAY12345",
    "amount": 100.00,
    "date": "2025-01-16T10:20:30.123Z",
    "status": "SUCCESS",
    "redirectUrl": "http://localhost:3000/scp/wallet?topup=PAY12345"
  }
}
```
