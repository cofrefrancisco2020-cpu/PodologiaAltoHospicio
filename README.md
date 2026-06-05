# Podologia Alto Hospicio - Version 02

## Fecha

05 de junio de 2026

## Objetivo de la version

Crear una segunda version profesional de la pagina web, manteniendo el diseño y la conversion de `Version-01`, pero simplificando la organizacion de recursos para que todos los assets queden en una sola carpeta.

## Cambios realizados

- Se creo `Version-02` sin sobrescribir `Version-01`.
- Se mantuvo la landing page responsive en `index.html`.
- Se mantuvo la identidad visual limpia, clinica y cercana para podologia.
- Se dejo la imagen hero generada con `imagegen` directamente en `assets`.
- Se agregaron botones de WhatsApp con mensajes predefinidos.
- Se agrego boton flotante de WhatsApp visible en toda la pagina.
- Se agrego acceso a Instagram con placeholder.
- Se agrego formulario simple que prepara una consulta por WhatsApp.
- Se crearon secciones de servicios, tratamientos, ubicacion, contacto y preguntas frecuentes.
- Se agrego mapa referencial de Alto Hospicio usando coordenadas, sin incorporar rubros ajenos al servicio de podologia.
- Se eliminaron subcarpetas internas de assets.
- Se dejaron todos los recursos directamente en `assets`.
- Se agregaron metadatos SEO local y datos estructurados Schema.org.

## Mejoras implementadas

- Carga rapida: sitio estatico sin dependencias externas de fuentes ni frameworks.
- Estructura de assets simplificada: una sola carpeta `assets` con todos los archivos.
- Imagen hero optimizada en JPG junto a copia PNG original.
- CSS y JS separados, ordenados y faciles de mantener.
- Navegacion responsive con menu movil.
- Animaciones suaves con soporte para `prefers-reduced-motion`.
- Enlaces comerciales segmentados por motivo de consulta:
  - Solicitar hora.
  - Informacion sobre podologia.
  - Uña encarnada.
  - Evaluacion podologica.
  - Tratamiento para hongos.
- SEO local optimizado para:
  - Podologo Alto Hospicio.
  - Podologia Alto Hospicio.
  - Uña encarnada Alto Hospicio.
  - Tratamiento de hongos Alto Hospicio.
  - Podologia avanzada Alto Hospicio.
  - Atencion podologica Alto Hospicio.

## Observaciones para futuras versiones

- Reemplazar `NUMERO_WHATSAPP_AQUI` por el numero real en formato internacional, por ejemplo `56912345678`.
- Reemplazar `INSTAGRAM_AQUI` por el usuario real de Instagram.
- Reemplazar `UBICACION_AQUI` por la direccion definitiva de la consulta.
- Reemplazar `https://tudominio.cl/` en canonical, Open Graph, sitemap y JSON-LD cuando exista el dominio final.
- Mantener los assets sin subcarpetas en futuras versiones, salvo que el cliente pida otra estructura.
- Ajustar horarios de atencion cuando esten definidos.
- Agregar fotografias reales del centro cuando el cliente las tenga disponibles.
- Crear `Version-02` para cualquier cambio importante, sin sobrescribir esta carpeta.
