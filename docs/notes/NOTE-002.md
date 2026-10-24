---

id: NOTE-002
type: note
status: active
category: mejora
date: '2026-10-24'
title: 'GBP VOKTERA: auditoría de servicios y plan de limpieza futura (30 días)'
scope:
- docs/notes/NOTE-002.md
created_by: DeepSeek-003
created_at: '2026-10-23T23:57:24.214251+00:00'
updated_by: DeepSeek-003
updated_at: 2026-10-24T00:01:13Z
---

## Regla
No modificar la ficha de Google Business Profile de VOKTERA durante 30 días (desde 2026-10-24 hasta 2026-11-23) por riesgo de re-suspensión. Cualquier cambio (servicios, horarios, categorías, teléfono) debe esperar a que los campos actualmente en revisión se estabilicen.

## Por qué existe
La ficha de GBP tiene campos en revisión (categorías) y ya sufrió una suspensión previa. Tocar servicios ahora podría disparar otra re-suspensión. Claude-001 documentó el cambio de plan el 2026-10-23: en lugar de limpiar la ficha ya, se documenta la lista actual de servicios y un plan de limpieza futura para ejecutar dentro de un mes.

## Qué NO hacer
- No borrar ni añadir servicios en GBP antes del 2026-11-23.
- No cambiar categorías, horarios ni teléfono mientras haya campos en revisión.
- No duplicar servicios con variantes de "urgente" (señal de spam para Google).
- No dejar el sitio web apuntando a acortadores; debe ser `https://voktera.online/`.

## Lista actual de servicios en GBP (capturada 2026-10-23)
Categoría principal: **Cerrajero**.

Servicios listados (13):
1. Cambio de cerraduras
2. Instalación de cerraduras electrónicas
3. Instalación de cerrojos y cerraduras de puertas
4. Reparación de cerrojos y cerraduras de puertas
5. Apertura de puertas sin daños
6. Cambio de bombines
7. Instalación de bombines de seguridad
8. Instalación de cerraduras de seguridad
9. Apertura de puertas urgente a domicilio
10. Servicio de cerrajería de urgencia
11. Apertura inmediata de puertas sin daños
12. Apertura de puertas urgente
13. Intervención de cerrajería urgente

## Diagnóstico
- **Redundancia de urgencia (spam)**: 5 variantes del mismo servicio urgente (ítems 9, 10, 11, 12, 13). Google penaliza duplicados semánticos.
- **Faltan 3 verticales completas**: persianas, muebles/carpintería y mantenimiento del hogar no aparecen en la ficha, aunque la web las ofrece.
- **Solapamiento cerraduras**: "Instalación de cerrojos y cerraduras de puertas" vs "Instalación de cerraduras de seguridad" vs "Instalación de cerraduras electrónicas" — conviene consolidar.

## Plan de Limpieza Futura (ejecutar a partir del 2026-11-23)
### Borrar (7)
- Apertura de puertas urgente a domicilio
- Servicio de cerrajería de urgencia
- Apertura inmediata de puertas sin daños
- Apertura de puertas urgente
- Intervención de cerrajería urgente
- Instalación de cerraduras electrónicas (integrar en "Instalación de cerraduras de seguridad")
- Instalación de cerrojos y cerraduras de puertas (integrar en "Reparación de cerrojos y cerraduras de puertas")

### Dejar (5)
- Cambio de cerraduras
- Reparación de cerrojos y cerraduras de puertas
- Apertura de puertas sin daños
- Cambio de bombines
- Instalación de bombines de seguridad
- Instalación de cerraduras de seguridad

### Añadir (verticales que faltan)
- **Persianas**: Reparación de persianas · Cambio de cintas y ejes · Motorización de persianas
- **Muebles**: Montaje de muebles · Montaje de armarios y vestidores · Montaje de muebles de cocina
- **Mantenimiento**: Pequeñas reparaciones eléctricas · Colgar cuadros y estanterías · Ajuste de puertas y ventanas

### Alineación con la web
- Web canónica: `https://voktera.online/` (sin acortador) — OK.
- Teléfono: `+34 911 26 60 11` — OK.
- Cita/Booking: `https://wa.me/34911266011` — OK.
- Horario: **pendiente de unificar en la web** (JSON-LD L-S 08-22; hero 8-20 todos los días; contacto L-D 8-20). T-002 debe resolverlo antes de tocar GBP.

## Referencias
- T-012 (auditoría GBP, origen de esta nota)
- T-011 (flujo de reseñas, depende de la ficha estabilizada)
- T-002 (unificación de horario en la web, bloqueante para alinear GBP)
- `voktera.online/index.html` (fuente de verdad de servicios y zonas)

## 🧭 Cómo trabajar con esta nota
- Crear: `adn crear nota "título" --scope <ruta>`
- Explorar contexto: `adn familia NOTE-XXX`
- Recordar: las notas no deben duplicar decisiones ni módulos.
- Si esta nota revela una acción, promovela a T/BUG o proponé DEC/CTR.

## 🧭 Cómo trabajar con este artefacto
- Crear: `adn crear nota "Título"`
- Editar cuerpo: `adn editar` / `adn aplicar`
- Editar frontmatter: `adn meta <archivo>`
- Explorar: `adn familia <NOTE-XXX>`
- Reglas: IA_GUIDE.md (Regla 9: árbol como memoria).