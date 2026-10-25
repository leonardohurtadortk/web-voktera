---
doc_id: README
target_tool: code-dna
prompt_instructions: 'Documento de identidad del proyecto; leer primero.'
status: generated
---

# [IA: Pregúntame el nombre del proyecto]

[IA: Pregúntame el propósito principal de este proyecto en 1-2 frases]

## Descripción

[IA: Pregúntame una descripción breve del proyecto]

## Stack Tecnológico

- Lenguaje principal: [IA: Pregúntame qué lenguaje usa este proyecto]
- Entry point probable: [IA: Pregúntame cuál es el archivo de entrada]
- Dependencias: [IA: Pregúntame cómo se gestionan las dependencias]
- [IA: Pregúntame qué frameworks y dependencias principales usa este proyecto]

## Estado Actual

[IA: Pregúntame en qué fase está este proyecto: exploración, desarrollo activo, mantenimiento, etc.]

## Estructura del Proyecto

<!-- CODE_DNA:START estructura -->
## Estructura del Proyecto

Archivos y carpetas de primer nivel del proyecto: visión pasiva del filesystem.
No incluye artefactos internos del motor (`code-dna/`, `logs/`, etc.).

Para orientarte en el proyecto:
- **Ver todo el proyecto (filesystem completo):** `adn scan` — listado real de archivos y carpetas, sin filtrar por conocimiento. Punto de partida cuando no sabés qué hay.
- **Mapa de conocimiento vinculado al código:** `adn arbol --resumen` — qué archivos/carpetas tienen artefactos asociados y cuáles no.
- **Historia y relaciones de un nodo concreto:** `adn familia <ID|ruta>` — artefactos, jerarquía y dependencias de un punto del proyecto.
- **Estado vivo (sesiones, decisiones, urgentes):** `adn contexto`
- **¿Falta poblar el árbol?** Si un archivo o carpeta importante aparece en `adn scan` pero no en `adn arbol`, no tiene conocimiento vinculado: creá un MOD con `adn crear modulo "..." --scope <ruta>` para documentarlo.

  - README.md
  - docs/
  - human_backlog.md
  - voktera.online/


ECOSISTEMA (workspace: /mnt/disco_hdd/work/workspace):
  - apps/ (gestionado por Code DNA)
  - backups/ (gestionado por Code DNA)
  - data/ (sin code-dna/)
  - ecosistema/ (sin code-dna/)
  - experiments/ (sin code-dna/)
  - notes/ (sin code-dna/)
  - projects/ (gestionado por Code DNA)
Usa 'adn ecosistema <archivo.md>' para leer un documento de la raiz del ecosistema (ej. ADN_MAESTRO.md).

📚 DOCS DISPONIBLES (con contenido real — lee bajo demanda con 'adn ver'):
  ✅ README.md
  ✅ docs/ARCHITECTURE.md
  ✅ docs/CHANGELOG.md
  ✅ docs/SESSIONS.md
  ✅ docs/AUDITORIA.md
  ✅ docs/ROADMAP.md

## Progreso
- Progreso: 0.0% (0/11 tareas)
- Raíz: /mnt/disco_hdd/work/workspace/apps/web-voktera
- Métricas: 124 archivos indexados (excluyendo entornos pesados automáticamente)
<!-- CODE_DNA:END estructura -->

## Documentación

- IA_GUIDE.md → Punto de entrada obligatorio para cualquier IA.
- docs/ARCHITECTURE.md → Arquitectura y componentes.
- docs/CHANGELOG.md → Cambios realizados.
- docs/SESSIONS.md → Resumen de sesiones importantes.

## Progreso

- Progreso: 0.0% (0/0 tareas)
- Métricas: [IA: Pregúntame cuántos archivos indexados tiene este proyecto]

---

Proyecto gestionado con Code DNA.
