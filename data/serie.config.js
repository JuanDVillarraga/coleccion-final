const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://JuanDVillarraga.github.io",
  "baseurl": "/coleccion-final",
  "title": "Habitar Doméstico Colectivo",
  "subtitle": "Colección de productos culturales: series tv, películas y videojuegos.",
  "credits": "Por: Juan Darío Villarraga Pérez ",
  "copyright": "Todos los derechos reservados, 2024",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "Nombre del producto",
        "label": "Nombre del producto",
        "type": "text"
      },
      {
        "key": "Categoría",
        "label": "Categoría",
        "type": "text"
      },
      {
        "key": "Año",
        "label": "Año",
        "type": "text"
      },
      {
        "key": "País",
        "label": "País",
        "type": "text"
      },
      {
        "key": "Género",
        "label": "Género",
        "type": "text"
      },
      {
        "key": "Sentimiento en comun",
        "label": "Sentimiento en comun",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "Nombre del producto",
      "Categoría",
      "Año",
      "País",
      "Género",
      "Sentimiento en comun"
    ]
  }
};
export default config;