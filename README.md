# Slices Catering
undefined

[Fetch Token](#fetch token)

[Get Staff Details by Email](#get staff details by email)

[Get Slices Menu](#get slices menu)

[Get Pickup Location](#get pickup location)

[Get OnlineOrder Discount](#get onlineorder discount)

[Get Banner Images](#get banner images)

[Get Staff Wallet Balance](#get staff wallet balance)

[Get Orders List](#get orders list)

[Cancel Order](#cancel order)

[Checkout API](#checkout api)

[Get Wallet Transaction History](#get wallet transaction history)

[Wallet topup](#wallet topup)



##### **POST** Fetch Token

`/slicesapi/token`

**Body** urlencoded (urlencoded)
```urlencoded
[{"type":"text","key":"grant_type","value":"password"},{"type":"text","key":"username","value":"SLICESDEV"},{"type":"text","key":"password","value":"af699oe7-fi71-41uf-8dd2-990ak4f46l23"},{"type":"text","key":"AppId","value":"9452"}]
````

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

`/slicesapi/api/SlicesPOSEncrypt/GETEmployeeNumberByEmail`



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

`/slicesapi/api/SlicesPOS//GETPOSONLINEMENU`



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
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28863.jpg",
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
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28885.jpg",
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
},
{
"itemId": 28918,
"categoryId": 83,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28918.jpg",
"name": "Roasted Tomato n Basil Soup Parmesan Toast",
"description": "A comforting and vibrant dish made from ripe, juicy tomatoes enhanced with basil. Served along with parmesan crusted toast. A timeless favourite.",
"ingredients": "Tomato, Water, Wholemeal Wheatflour, Parmesan [Milk], Potato, Double Cream [Milk], Egg, Basil, Onions, Carrots, Celery, Sunflower Oil, Wheatflour, Black Pepper, Butter [Milk], Sugar, Salt, Garlic Base Powder, Yeast",
"calories": "649kJ/156kcak",
"allergens": [
"Celery",
"Egg",
"Gluten",
"Milk"
],
"price": 20.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.95,
"quantity": 1.00,
"itemCategory": "Soups",
"itembaserate": 19.05,
"vatperc": 5.00
}
]
},
"snacks": {
"items": [
{
"itemId": 28864,
"categoryId": 91,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28864.jpg",
"name": "Banana Cake Slice",
"description": "A moist sweet cake made by using banana, whole wheat flour, oil and flavoured enhanced with cinnamon and all spice.",
"ingredients": "Brown Sugar, Bananas, Sunflower Oil, Wholemeal Wheatflour, Egg, Raisins, Raising Agent: Sodium Hydrogen Carbonate E500, Cinnamon, Allspice",
"calories": "1771kJ/423kcal",
"allergens": [
"Egg",
"Gluten"
],
"price": 8.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.38,
"quantity": 1.00,
"itemCategory": "Snacks",
"itembaserate": 7.62,
"vatperc": 5.00
},
{
"itemId": 28871,
"categoryId": 91,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28871.jpg",
"name": "Carrot Cake Slice",
"description": "A moist sweet cake made by using carrot, whole wheat flour, oil and enhanced with vanilla and cinnamon.",
"ingredients": "Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Carrots, Brown Sugar, Sunflower Oil, Egg, Raisins, Baking Powder [Wheat], Raising Agent: Sodium Hydrogen Carbonate E500",
"calories": "1495kJ/357kcal",
"allergens": [
"Egg",
"Gluten"
],
"price": 8.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.38,
"quantity": 1.00,
"itemCategory": "Snacks",
"itembaserate": 7.62,
"vatperc": 5.00
},
{
"itemId": 28889,
"categoryId": 91,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28889.jpg",
"name": "Granola Bar",
"description": "A nut-free wholesome snack bar made with rolled oats, seeds and honey. Chewy, slightly crunchy, and perfect for a healthy, allergen-friendly treat.",
"ingredients": "Oats, Honey, Raisins, Sunflower Seeds, Coconut Oil, Pumpkin Seeds, Brown Sugar, Salt",
"calories": "2100kJ/503kcal",
"allergens": [
"Gluten"
],
"price": 9.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.43,
"quantity": 1.00,
"itemCategory": "Snacks",
"itembaserate": 8.57,
"vatperc": 5.00
}
]
},
"soups & Sandwich Combo": {
"items": [
{
"itemId": 28870,
"categoryId": 92,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28870.jpg",
"name": "Broccoli n Spinach Soup Mini Veggie Sandwich",
"description": "A vibrant, nutrient-packed soup that combines the earthy flavors of broccoli with the fresh, leafy notes of spinach. A perfect choice for a light meal, along with a mini veg sandwich. ",
"ingredients": "Water, Broccoli, Wholemeal Wheatflour, Spinach, Single Cream [Milk], Carrots, Potato, Mayonnaise Standard Retail, Tomato, Green Chilli Peppers, Sunflower Oil, Celery, Wheatflour, Salt, Butter [Milk], Onions, Sugar, Black Pepper, Yeast",
"calories": "555kJ/133kcal",
"allergens": [
"Celery",
"Egg",
"Gluten",
"Milk"
],
"price": 22.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.05,
"quantity": 1.00,
"itemCategory": "Soups & Sandwich Combo",
"itembaserate": 20.95,
"vatperc": 5.00
}
]
},
"asian Mains": {
"items": [
{
"itemId": 28873,
"categoryId": 74,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28873.jpg",
"name": "Chicken Biryani n Garlic Raita",
"description": "A delicious, one-pot meal that offers a perfect blend of tender chicken, spiced rice, and vibrant flavors. Served with garlic flavoured yoghurt dip.",
"ingredients": "Chicken, Onions, White Basmati Rice, Sunflower Oil, Whole Milk Yogurt, Coriander Leaves, Tomato, Mint, Onions, Fried In Rapeseed Oil, Butter Ghee [Milk], Garlic, Ginger, Cumin Powder, Salt, Green Chilli Peppers, Raisins, Lemons, Cardamom Green Dry, Black Pepper, Cinnamon Whole, Fennel Seeds, Cumin Seeds, Mace, Turmeric, Saffron",
"calories": "936kJ/233kcal",
"allergens": [
"Milk"
],
"price": 18.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.86,
"quantity": 1.00,
"itemCategory": "Asian Mains",
"itembaserate": 17.14,
"vatperc": 5.00
},
{
"itemId": 28906,
"categoryId": 74,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28906.jpg",
"name": "Paneer Tikka Masala Steamed Rice",
"description": "A popular Indian dish made with chunks of Indian cottage cheese, simmered in a rich tomato sauce. Served with aromatic basmati rice, paneer tikka masala is a beloved, comforting vegetarian dish.",
"ingredients": "Tomato, White Basmati Rice, Onions, Paneer Cheese [Milk], Carrots, Cauliflower, Green Beans, Water, Single Cream [Milk], Tomato Puree, Sunflower Oil, Cumin Powder, Ginger, Garlic, Green Chilli Peppers, Garam Masala, Salt, Coriander Powder, Chilli Powder Kashmiri, Kasuri Methi, Cardamom Green Dry, Cinnamon Whole, Turmeric, Black Pepper, Cloves, Bay Leaf",
"calories": "637kJ/162kcal",
"allergens": [
"Milk"
],
"price": 16.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.76,
"quantity": 1.00,
"itemCategory": "Asian Mains",
"itembaserate": 15.24,
"vatperc": 5.00
},
{
"itemId": 28930,
"categoryId": 74,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28930.jpg",
"name": "Vegetable Korma Steamed Rice",
"description": "A rich and creamy Indian curry made with a variety of mixed vegetables simmered in a fragrant, mildly spiced gravy. Served with fragrant basmati rice.",
"ingredients": "Water, White Basmati Rice, Onions, Whole Milk Yogurt, Single Cream [Milk], Carrots, Potato, Peas, Sunflower Oil, Ginger, Garlic, Salt, Garam Masala, Turmeric, Bay Leaf, Cardamom Green Dry",
"calories": "597kJ/143kcal",
"allergens": [
"Milk"
],
"price": 14.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.67,
"quantity": 1.00,
"itemCategory": "Asian Mains",
"itembaserate": 13.33,
"vatperc": 5.00
}
]
},
"classic Mains - Chicken": {
"items": [
{
"itemId": 28875,
"categoryId": 85,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28875.jpg",
"name": "Chicken Fricasse Garlic Quinoa n Grilled Broccoli",
"description": "A classic French dish that features tender chicken pieces simmered in a creamy, white sauce. Served with garlic tossed quinoa and grilled broccoli.",
"ingredients": "Broccoli, Chicken, Stock, Chicken, Quinoa, Milk, Single Cream [Milk], Mushrooms, Sunflower Oil, Salt, Garlic, Butter [Milk], Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Parsley, Black Pepper, Dried Onion, Bay Leaf, Cloves",
"calories": "647kJ/155kcal",
"allergens": [
"Dairy",
"Egg",
"Fish",
"Gluten"
],
"price": 22.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.05,
"quantity": 1.00,
"itemCategory": "Classic Mains - Chicken",
"itembaserate": 20.95,
"vatperc": 5.00
}
]
},
"arabic Favourites": {
"items": [
{
"itemId": 28878,
"categoryId": 73,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28878.jpg",
"name": "Chicken Shish Tawook Steamed Rice Babaganoush",
"description": "A delicious Middle Eastern meal combining the savory flavors of marinated, grilled chicken skewers with the creamy richness of baba ganoush. Served with steamed basmati rice.",
"ingredients": "Chicken, White Basmati Rice, Aubergine, Whole Milk Yogurt, Olive Oil, Lemon Juice, Salt, Cumin Powder, Garlic, White Pepper, Paprika, Cinnamon, Sunflower Oil, Ginger, Allspice",
"calories": "665kJ/161kcal",
"allergens": [
"Milk"
],
"price": 24.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.14,
"quantity": 1.00,
"itemCategory": "Arabic Favourites",
"itembaserate": 22.86,
"vatperc": 5.00
},
{
"itemId": 28931,
"categoryId": 73,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28931.jpg",
"name": "Vermicilli Rice and Beef Kofta",
"description": "A flavorful Middle Eastern-inspired dish combining the light, delicate texture of vermicelli rice with juicy, spiced beef koftas. A satisfying, well-balanced meal with a delightful mix of textures and flavors.",
"ingredients": "Minced Beef, Water, White Basmati Rice, Whole Milk Yogurt, Vermicelli, Raw, Onions, Sunflower Oil, Parsley, Cumin Roasted Powder, Garlic, Coriander Leaves, Cumin Powder, Salt, Cardamom, Nutmeg",
"calories": "716kJ/176kcal",
"allergens": [
"Milk"
],
"price": 28.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.33,
"quantity": 1.00,
"itemCategory": "Arabic Favourites",
"itembaserate": 26.67,
"vatperc": 5.00
}
]
},
"classic Pastas": {
"items": [
{
"itemId": 28887,
"categoryId": 88,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28887.jpg",
"name": "Fettuccine Alfredo",
"description": "A creamy, indulgent pasta dish that features fettuccine pasta tossed in a rich sauce made from butter, heavy cream, and Parmesan cheese along with a steamed mix vegetables.",
"ingredients": "Pasta [Wheat, Eggs], Single Cream [Milk], Water, Cauliflower, Green Chilli Peppers, Carrots, Broccoli, Green Beans, Sunflower Oil, Parmesan [Milk], Garlic, Parsley, Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Butter [Milk],Salted Butter, Stock Cubes, Vegetable, Salt, Black Pepper",
"calories": "604kJ/144kcal",
"allergens": [
"Egg",
"Fish",
"Gluten",
"Milk"
],
"price": 22.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.05,
"quantity": 1.00,
"itemCategory": "Classic Pastas",
"itembaserate": 20.95,
"vatperc": 5.00
},
{
"itemId": 28907,
"categoryId": 88,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28907.jpg",
"name": "Penne Pasta Marinara Sauce",
"description": "Combines hearty penne pasta with a flavorful, tangy tomato-based sauce. Simple yet satisfying.",
"ingredients": "Tomato, Pasta Shapes Coloured Flavoured Dried [Wheat], Water, Sunflower Oil, Rapeseed Oil, Salt, Garlic, Oregano",
"calories": "590kJ/141kcal",
"allergens": [
"Gluten"
],
"price": 20.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.95,
"quantity": 1.00,
"itemCategory": "Classic Pastas",
"itembaserate": 19.05,
"vatperc": 5.00
}
]
},
"breakfast": {
"items": [
{
"itemId": 28888,
"categoryId": 76,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28888.jpg",
"name": "Frittata",
"description": "An Italian-style omelette that is typically made by whisking eggs with ingredients like vegetables and cheese. It’s versatile and can be enjoyed for breakfast, lunch, or dinner.",
"ingredients": "Egg, Cherry Tomato, Carrots, Onions, Mushrooms, Sunflower Oil, Salt, Black Pepper, Garlic",
"calories": "646kJ/156kcal",
"allergens": [
"Egg"
],
"price": 15.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.71,
"quantity": 1.00,
"itemCategory": "Breakfast",
"itembaserate": 14.29,
"vatperc": 5.00
},
{
"itemId": 28901,
"categoryId": 76,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28901.jpg",
"name": "Mix veg cheddar omlette with toast",
"description": "Golden omelette filled with melted, cheddar cheese.Simple yet indulgent, savory flavor in every bite, perfect for breakfast or a quick meal.",
"ingredients": "Egg, Cheddar Cheese [Milk], Tomato, Green Chilli Peppers, Onions, Cherry Tomato, Sunflower Oil, Salt, Black Pepper, Celery, Coriander Leaves, Lemon Juice, Cumin Roasted Powder, Chilli Powder",
"calories": "686kJ/686kcal",
"allergens": [
"Celery",
"Egg",
"Milk"
],
"price": 15.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.71,
"quantity": 1.00,
"itemCategory": "Breakfast",
"itembaserate": 14.29,
"vatperc": 5.00
},
{
"itemId": 28919,
"categoryId": 76,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28919.jpg",
"name": "Shakshuka egg with Arabic bread & hummus",
"description": "Eggs cooked in a flavorful tomato sauce with onions, garlic, bell peppers, and spices like cumin, paprika, and chili. A vibrant, hearty meal often enjoyed for breakfast or brunch.",
"ingredients": "Egg, Tomato, Arabic Bread, Sunflower Oil, Onions, Green Chilli Peppers, Red Chilli Peppers, Salt, Garlic, Black Pepper, Olive Oil, Chilli Flakes Dry, Cumin Roasted Powder, Tahini Paste [Sesame], Lemon Juice, White Pepper, Cumin Seeds, Raising Agent: Sodium Hydrogen Carbonate E500",
"calories": "988kJ/261kcal",
"allergens": [
"Egg",
"Gluten"
],
"price": 14.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.67,
"quantity": 1.00,
"itemCategory": "Breakfast",
"itembaserate": 13.33,
"vatperc": 5.00
},
{
"itemId": 28925,
"categoryId": 76,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28925.jpg",
"name": "Turkish eggs",
"description": "A take on the traditional dish featuring fried eggs served over creamy yogurt mixed with garlic, topped with paprika infused olive oil. A flavourful and comforting dish.",
"ingredients": "Whole Milk Yogurt, Egg, Olive Oil, Sunflower Oil, Cherry Tomato, Garlic, Parsley, Chilli Flakes Dry, Salt, Black Pepper",
"calories": "1080kJ/261kcal",
"allergens": [
"Egg",
"Milk"
],
"price": 15.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.71,
"quantity": 1.00,
"itemCategory": "Breakfast",
"itembaserate": 14.29,
"vatperc": 5.00
}
]
},
"classic Mains - Seafood": {
"items": [
{
"itemId": 28896,
"categoryId": 86,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28896.jpg",
"name": "Grilled White Fish Chimichuri Sauce n Steamed Rice",
"description": "A flavorful, fresh dish that combines the taste of grilled fish with the vibrant, herbaceous coriander notes of chimichurri. Served with steamed basmati rice.",
"ingredients": "Catfish, White Basmati Rice, Cauliflower, Parsley, Sunflower Oil, Green Chilli Peppers, Carrots, Broccoli, Green Beans, Coriander Leaves, Lemon Juice, Garlic, Salt, Paprika, Oregano, White Pepper, Chilli Flakes Dry",
"calories": "684kJ/164kcal",
"allergens": [
"Fish"
],
"price": 38.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.81,
"quantity": 1.00,
"itemCategory": "Classic Mains - Seafood",
"itembaserate": 36.19,
"vatperc": 5.00
},
{
"itemId": 28905,
"categoryId": 86,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28905.jpg",
"name": "Pan Seared Fish Fillet Lemon Butter Sc and Steamed Veggies",
"description": "A simple yet elegant dish that highlights the delicate flavors of the fish with a rich, tangy sauce. Served with steamed veg.",
"ingredients": "Brown Trout [Fish], White Basmati Rice, Water, Butter [Milk], Carrots, Cauliflower, Green Beans, Lemon Juice, Sunflower Oil, Parsley, Salt, Cinnamon, Salt, Nutmeg, Cardamom, Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Garlic, Black Pepper, Cumin Roasted Powder",
"calories": "823kJ/198kcal",
"allergens": [
"Fish",
"Gluten",
"Milk"
],
"price": 38.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.81,
"quantity": 1.00,
"itemCategory": "Classic Mains - Seafood",
"itembaserate": 36.19,
"vatperc": 5.00
}
]
},
"salads ": {
"items": [
{
"itemId": 28903,
"categoryId": 90,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28903.jpg",
"name": "Moroccan Cous Cous Shrimp Salad",
"description": " A light, fluffy couscous with succulent shrimp, all tossed in a medley of fresh cucumber, tomatoes, and bell peppers.",
"ingredients": "Shrimps [Crustaceans], Couscous [Wheat], Parsley, Lemon Juice, Raisins, Lemons, Olive Oil, Cranberries, Salt, Sunflower Oil, Oregano, Black Pepper, Stock Cubes, Vegetable, White Pepper",
"calories": "687kJ/163kcal",
"allergens": [
"Crustaceans",
"Gluten"
],
"price": 18.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.86,
"quantity": 1.00,
"itemCategory": "Salads ",
"itembaserate": 17.14,
"vatperc": 5.00
},
{
"itemId": 28921,
"categoryId": 90,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28921.jpg",
"name": "Spiced Chickpea Salad",
"description": "A vibrant, flavorful dish that combines chickpeas with a mix of tomatoes, peppers, and leafy greens. Mildly spiced with paprika.Served with a zesty lemon dressing.",
"ingredients": "Lettuce, Chick Peas, Water, Green Chilli Peppers, Lemon Juice, Red Peppers, Yellow Peppers, Cherry Tomato, Salt, Paprika, Sunflower Oil, Black Pepper, Raising Agent: Sodium Hydrogen Carbonate E500",
"calories": "371kJ/89kcal",
"allergens": [
"None"
],
"price": 18.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.86,
"quantity": 1.00,
"itemCategory": "Salads ",
"itembaserate": 17.14,
"vatperc": 5.00
},
{
"itemId": 28923,
"categoryId": 90,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28923.jpg",
"name": "Tabouleh Salad with Falafel",
"description": "A flavorful Mediterranean salad that combines the freshness of parsley, tomatoes, cucumber, and onions. Dessed with tangy lemon oil complemented with falafel.",
"ingredients": "Couscous [Wheat], Parsley, Tomato, Chick Peas, Onions, Water, Sunflower Oil, Olive Oil, Mint, Lemon Juice, Garlic Base Powder, Vinegar [Barley], Coriander Roasted Powder, Garlic, Salt, Raising Agent: Sodium Hydrogen Carbonate E500, Cumin Roasted Powder, Black Pepper, Chilli Flakes Dry",
"calories": "868kJ/210kcal",
"allergens": [
"Gluten"
],
"price": 18.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.86,
"quantity": 1.00,
"itemCategory": "Salads ",
"itembaserate": 17.14,
"vatperc": 5.00
},
{
"itemId": 28932,
"categoryId": 90,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28932.jpg",
"name": "Vietnamese Grilled Chicken Salad",
"description": "A combination of tender, marinated grilled chicken on a bed of fine rice noodles with crisp vegetables. Dressed with a peppery chilli lemon oil sauce.",
"ingredients": "Rice Noodles, Fine, Dried, Boiled In Unsalted Water, Chicken, Lettuce, Carrots, Beansprouts, Cucumber, Soy Sauce, Light And Dark Varieties [Wheat, Soybeans], Coriander Leaves, Vinegar [Barley], Oregano, Sugar, Salt, Sunflower Oil, Lemon Juice, Red Chilli Peppers, Chilli Flakes Dry, Garlic, White Pepper",
"calories": "425kJ/101kcal",
"allergens": [
"Gluten",
"Soya"
],
"price": 20.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.95,
"quantity": 1.00,
"itemCategory": "Salads ",
"itembaserate": 19.05,
"vatperc": 5.00
}
]
},
"light Eats": {
"items": [
{
"itemId": 28908,
"categoryId": 78,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28908.jpg",
"name": "Pie - Beef n Carrot",
"description": "A classic hearty dish encased in a flaky, buttery pastry crust, filled with a mixture of beef and carrot offering rich and comforting flavours.",
"ingredients": "Water, Butter [Milk], Wheatflour, Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Braising Steak, Mushrooms, Carrots, Egg, Onions, Sunflower Oil, Stock Cubes, Beef, Salt, Vinegar [Barley], Rosemary",
"calories": "1210kJ/290kcal",
"allergens": [
"Barley",
"Dairy",
"Egg",
"Fish",
"Gluten"
],
"price": 16.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.76,
"quantity": 1.00,
"itemCategory": "Light Eats",
"itembaserate": 15.24,
"vatperc": 5.00
},
{
"itemId": 28910,
"categoryId": 78,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28910.jpg",
"name": "Pie - Chicken Filling",
"description": "A hearty dish encased in a flaky, buttery pastry crust, filled with a mixture of grilled herb chicken and aromatic vegetables offering rich and comforting flavours.",
"ingredients": "Chicken, Butter [Milk], Wheatflour, Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Milk, Mushrooms, Onions, Egg, Sunflower Oil, Salt, Dried Onion, Vinegar [Barley], Rosemary, Bay Leaf, Black Pepper, Cloves",
"calories": "1254kJ/300kcal",
"allergens": [
"Barley",
"Dairy",
"Egg",
"Gluten"
],
"price": 15.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.71,
"quantity": 1.00,
"itemCategory": "Light Eats",
"itembaserate": 14.29,
"vatperc": 5.00
},
{
"itemId": 28913,
"categoryId": 78,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28913.jpg",
"name": "Quiche - Mushroom n Chicken",
"description": "A savory, custard-filled tart made with a buttery pastry crust.It combines mushrooms, grilled herb chicken, cheese and a creamy egg mixture for a delicious and hearty dish.",
"ingredients": "Milk, Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Egg, Mozzarella [Milk], Chicken Breast, Mushrooms, Single Cream [Milk], Butter [Milk], Onions, Sunflower Oil, Green Chilli Peppers, Red Peppers, Yellow Peppers, Salt, Nutmeg, Black Pepper",
"calories": "980kJ/235kcal",
"allergens": [
"Dairy",
"Egg",
"Gluten"
],
"price": 12.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.57,
"quantity": 1.00,
"itemCategory": "Light Eats",
"itembaserate": 11.43,
"vatperc": 5.00
},
{
"itemId": 28914,
"categoryId": 78,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28914.jpg",
"name": "Quiche - Spinach n Cheese",
"description": "A savory, custard-filled tart made with a buttery pastry crust.It combines tender spinach, cheese and a creamy egg mixture for a delicious and hearty dish.",
"ingredients": "Milk, Spinach, Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Egg, Onions, Sunflower Oil, Single Cream [Milk], Mozzarella [Milk], Butter [Milk], Cheddar Cheese [Milk], Green Peppers, Yellow Peppers, Salt, Garlic, Nutmeg, Salted Egg Yolk (10% Salt), Black Pepper",
"calories": "1155kJ/278kcal",
"allergens": [
"Dairy",
"Egg",
"Gluten"
],
"price": 12.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 0.57,
"quantity": 1.00,
"itemCategory": "Light Eats",
"itembaserate": 11.43,
"vatperc": 5.00
}
]
},
"classic Mains- Beef": {
"items": [
{
"itemId": 28915,
"categoryId": 87,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28915.jpg",
"name": "Roast Beef Peppercorn Cream Sauce Grilled Mix Veg",
"description": "A classic and indulgent dish featuring perfectly roasted beef, served with a rich and flavorful peppercorn sauce and grilled veg.",
"ingredients": "Braising Steak, Potatoes, Sunflower Oil, Flesh Only, Cauliflower, Green Chilli Peppers, Carrots, Broccoli, Green Beans, Sunflower Oil, Double Cream [Milk], Milk, Salt, Black Pepper, Stock Cubes, Beef, Butter [Milk], Wheatflour (With Added Calcium, Iron, Niacin, Thiamin), Dried Onion, Bay Leaf, Cloves",
"calories": "817kJ/196kcal",
"allergens": [
"Gluten",
"Milk"
],
"price": 22.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.05,
"quantity": 1.00,
"itemCategory": "Classic Mains- Beef",
"itembaserate": 20.95,
"vatperc": 5.00
}
]
},
"plant Based Mains": {
"items": [
{
"itemId": 28926,
"categoryId": 89,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28926.jpg",
"name": "Vegan Chilli Con Carne",
"description": "A plant-based version of the classic Mexican dish, offering all the rich, hearty flavors without the meat.",
"ingredients": "Water, White Basmati Rice, Dried Soya Beans, Onions, Tomato, Red Kidney Beans, Sunflower Oil, Tomato Puree, Paprika, Garlic, Salt, Cumin Seeds, Oregano, Thyme",
"calories": "830kJ/198kcal",
"allergens": [
"Soy"
],
"price": 21.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.00,
"quantity": 1.00,
"itemCategory": "Plant Based Mains",
"itembaserate": 20.00,
"vatperc": 5.00
},
{
"itemId": 28927,
"categoryId": 89,
"imageUrl": "https://school.gemseducation.com/phoenixfiles/Inventory/Item/28927.jpg",
"name": "Vegan Meat Ball Tomato Basil Sauce",
"description": "Made with plant-based ingredients, in a classic tomato sauce is a hearty and flavorful dish.A deliciously comforting and satisfying meal.",
"ingredients": "Tomato, White Basmati Rice, Planted Mock Chicken, Soy Meal, Raw, Water, Potato, Onions, Sunflower Oil, Tomato Puree, Carrots, Salt, Cornflour, Celery, Parsley, Basil, Black Pepper, Garlic, Mustard, Smooth, Oregano",
"calories": "627kJ/149kcal",
"allergens": [
"Celery",
"Mustard",
"Soy"
],
"price": 21.00,
"currency": "AED",
"itemTax": "VAT5",
"itemTaxRate": 1.00,
"quantity": 1.00,
"itemCategory": "Plant Based Mains",
"itembaserate": 20.00,
"vatperc": 5.00
}
]
}
}
}
}
````
##### **GET** Get Pickup Location

`/slicesapi/api/SlicesPOS/GET_ONLINE_PICKUP_LOCATION`



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

`/slicesapi/api/SlicesPOSEncrypt/GET_ONLINEORDER_DISCOUNT`



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

`/slicesapi/api/SlicesPOS/GetBannerImages`



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
"imageUrl": "https://uat-phoenix.phoenixsystem.ae/phoenixfiles/Inventory/SLICESBANNERIMAGES/banner1.png"
},
{
"title": "image2",
"imageUrl": "https://uat-phoenix.phoenixsystem.ae/phoenixfiles/Inventory/SLICESBANNERIMAGES/banner2.jpg"
},
{
"title": "image3",
"imageUrl": "https://uat-phoenix.phoenixsystem.ae/phoenixfiles/Inventory/SLICESBANNERIMAGES/banner3.jpg"
}
]
}
````
##### **GET** Get Staff Wallet Balance

`/slicesapi/api/SlicesPOSEncrypt/GetEmployeeWalletBalance`



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

`/slicesapi/api/SlicesPOS/GetOrders`



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

`/slicesapi/api/SlicesPOSEncrypt/CancelOrder`



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

`/slicesapi/api/SlicesPOSEncrypt/CreateOrder`

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

`/slicesapi/api/SlicesPOS/GetWalletTransactionHistory`



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

`/slicesapi/api/Payment/POST_FEE_DETAILS_ENCRYPT_SLICES_POS`

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
