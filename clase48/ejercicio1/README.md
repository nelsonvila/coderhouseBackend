
# Running the app

```bash
denon start
```

# Browser:

Get Products
```bash
curl --location 'http://localhost:8080/api/productos'
```

Add Products

```bash
curl --location 'http://localhost:8080/api/productos' \
--header 'Content-Type: application/json' \
--data '{
    "nombre": "TV LG AMG-12",
    "descripcion": "televisor LG Smart 43",
    "precio": 4500
}'
```