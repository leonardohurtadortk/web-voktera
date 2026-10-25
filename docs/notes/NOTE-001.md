---


id: NOTE-001
type: note
status: active
category: documentacion
date: '2026-10-24'
title: Protocolo de trabajo en paralelo con Code-DNA y enjambre de IAs
scope:
- docs/notes/NOTE-001.md
- docs/
created_by: Claude-001
created_at: '2026-10-23T23:31:44.901112+00:00'
updated_by: Claude-001
updated_at: 2026-10-23T23:33:32Z
---



## Regla
1. **Jerarquía de Roles:** Una sesión actúa como Senior Mayor/Arquitecto (Claude-001). No toca código; solo asigna tareas, audita, gestiona el árbol (`adn crear modulo/flujo`) y se comunica con el operador humano.
2. **Higiene de Mensajes:** El motor `code-dna` permite mensajería entre sesiones (`adn mensaje`). La Regla de Oro es: *mensaje leído, mensaje contestado, mensaje eliminado*. No dejar hilos abiertos que confundan a las demás IAs.
3. **Quirk del Motor (CRÍTICO):** El comando para limpiar mensajes (`adn mensaje limpiar`) **debe ir SIEMPRE en un bloque separado**, nunca junto a otros comandos, ya que corta la secuencia de ejecución y produce errores en el bloque.
4. **Dependencias Cruzadas:** En un enjambre, las fases de código no son 100% paralelas. Por ejemplo, la extracción del CSS a un archivo externo (Fase 2) debe esperar a que terminen los ajustes de metadatos en el `index.html` (Fase 1). Las IAs de fases posteriores deben adelantar *redacción de textos* mientras esperan.
5. **Poblado del Árbol:** Mientras el código muta, otra IA (DeepSeek-004) se encarga de crear los MODs correspondientes para no dejar el árbol de conocimiento huérfano (Regla 9 de IA_GUIDE).

## Por qué existe
Durante la optimización SEO de `voktera.online`, se desplegó un enjambre de 5 sesiones de IA trabajando en paralelo para acelerar las fases del proyecto (desde la configuración técnica del HTML hasta el copywriting de landings locales y auditoría de Google Business Profile).

## Qué NO hacer
- No dejar mensajes sin responder ni sin borrar (contamina el contexto de las demás sesiones).
- No editar el `index.html` en paralelo por varias sesiones para evitar conflictos de colisión (Regla 12).
- No crear artefactos redundantes en el árbol; usar `adn familia` para verificar si ya existe algo.

## Referencias
- Tareas: T-001 a T-012.

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