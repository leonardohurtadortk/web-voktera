---
id: FLW-003
type: flow
status: active
title: 'Flujo: absorción de documentación en proyecto ya escrito'
category: mejora
---
## Cuándo aplica
Cuando se abre Code DNA en un proyecto que ya tiene código escrito (sin Code DNA previo), a diferencia de un proyecto nuevo (idea sin código) o uno que ya trabaja con Code DNA.

## Objetivo: poblar el Árbol, no rellenar documentos
El verdadero cerebro del proyecto son los **artefactos atómicos** y el **Árbol** que forman. Los documentos monolíticos (`ARCHITECTURE.md`, `AUDITORIA.md`, `ROADMAP.md`) son solo vistas agregadas que se alimentan de esos artefactos. Por tanto, el trabajo de absorción consiste en **crear artefactos con `scope:` correcto**, no en escribir prosa en documentos macro.

## Inventario completo de artefactos

### Artefactos creados con `adn documentar`
- **`docs/modules/MOD-XXX.md`** — documentación de módulos/archivos. Usa `adn documentar modulo <archivo>`.
- **`docs/flows/FLW-XXX.md`** — flujos de trabajo, procesos, pipelines. Usa `adn documentar flujo <nombre>`.
- **`docs/contracts/CON-XXX.md`** — contratos de API, interfaces, protocolos. Usa `adn documentar contrato <nombre>`.
- **`docs/risks/RSK-XXX.md`** — riesgos técnicos, vulnerabilidades, puntos frágiles. Usa `adn documentar riesgo <nombre>`.
- **`docs/notes/NOTE-XXX.md`** — notas rápidas, observaciones, ideas sueltas. Usa `adn documentar nota <nombre>`.

### Artefactos creados manualmente
- **`docs/tasks/T-XXX.md`** — tareas pendientes, mejoras, refactorizaciones. `status: pending`, `category: deuda-tecnica` (u otra).
- **`docs/tasks/BUG-XXX.md`** — bugs o problemas funcionales detectados. `status: pending`, `category: bug`.
- **`docs/decisions/DEC-XXX.md`** — decisiones de arquitectura. Para decisiones ya implementadas en código existente, usa `status: closed`.

### Artefactos de sesión (automáticos)
- **`docs/sessions/YYYY-MM-DD.md`** — resumen de sesiones de trabajo. Se crean con `adn sesion guardar`.

### Documentos monolíticos (semilla, se auto-alimentan)
- `README.md`, `IA_GUIDE.md` — identidad y reglas universales.
- `docs/ARCHITECTURE.md`, `docs/ROADMAP.md`, `docs/AUDITORIA.md`, `docs/CHANGELOG.md`, `docs/SESSIONS.md` — vistas agregadas que se actualizan desde los artefactos.

## Qué NO hay que tocar durante la absorción
- `IA_GUIDE.md` — plantilla universal, igual en todos los proyectos.
- `README.md` — autodocumentado vía heurística (`_detect_project_heuristics`), no requiere rellenado manual.
- `docs/SESSIONS.md`, `docs/CHANGELOG.md` — se alimentan solos con el uso normal (sesiones y cambios futuros), no con el pasado del proyecto.

## Proceso de absorción (ciclo por hallazgo)

### 1. Exploración quirúrgica
- `adn estructura` o `adn scan` para ver carpetas principales.
- `adn deep` o `adn resumen` en 2-3 archivos clave (entry point, core) para entender de qué va el proyecto.

### 2. Detección de hallazgos y creación de artefactos
Por cada hallazgo relevante, **propón** al humano crear el artefacto correspondiente (Regla 2: el humano confirma):

- **Archivo/módulo complejo que futuras IAs necesitarán entender** → `docs/modules/MOD-XXX.md` con `adn documentar modulo <archivo>`.
- **Patrón de diseño, separación de responsabilidades, elección de librería** → `docs/decisions/DEC-XXX.md` con `status: closed`.
- **Deuda técnica: código duplicado, funciones largas, falta de tests, imports circulares** → `docs/tasks/T-XXX.md` con `category: deuda-tecnica`.
- **Bug o problema funcional detectado** → `docs/tasks/BUG-XXX.md` con `category: bug`.
- **Flujo de trabajo, pipeline, proceso complejo** → `docs/flows/FLW-XXX.md` con `adn documentar flujo <nombre>`.
- **API, interfaz, protocolo, contrato entre módulos** → `docs/contracts/CON-XXX.md` con `adn documentar contrato <nombre>`.
- **Riesgo técnico, vulnerabilidad, punto frágil** → `docs/risks/RSK-XXX.md` con `adn documentar riesgo <nombre>`.
- **Observación rápida, idea suelta, nota contextual** → `docs/notes/NOTE-XXX.md` con `adn documentar nota <nombre>`.

### 3. Frontmatter obligatorio (lo que inserta el artefacto en el Árbol)
Todo artefacto nuevo DEBE incluir en su YAML:
- `id:` — identificador único (MOD-XXX, DEC-XXX, T-XXX, BUG-XXX, FLW-XXX, CON-XXX, RSK-XXX, NOTE-XXX).
- `type:` — module, decision, task, bug, flow, contract, risk o note.
- `status:` — active, closed o pending.
- `category:` — dominio (navegacion, seguridad, deuda-tecnica, bug, etc.).
- **`scope:`** — lista de rutas de archivos que el artefacto describe o afecta. **Sin `scope:`, el artefacto no se vincula al código y no aparece correctamente en `adn arbol` ni `adn familia`.**
- `parent:` (opcional) — si el artefacto depende o es hijo de otro.

### 4. Verificación
- Ejecuta `adn arbol` para confirmar que el nuevo artefacto es visible en el mapa.
- Ejecuta `adn familia <ID>` para ver cómo se integra en la jerarquía.

## Qué NO hacer
- No escribas párrafos largos en `ARCHITECTURE.md` o `AUDITORIA.md` sin antes haber creado los artefactos atómicos que los justifican. Esos documentos se generan/actualizan a partir de los artefactos, no al revés.
- No crees artefactos sin `scope:` — quedan huérfanos y no aportan al Árbol.
- No asumas decisiones: propón cada artefacto al humano antes de crearlo (Regla 2).

## Principio rector
La IA actúa como **arqueólogo digital que cataloga hallazgos**, no como redactor que rellena plantillas. Cada archivo investigado debe quedar documentado en el Árbol para que ninguna IA futura tenga que re-explorar desde cero (Regla 9: banquear el camino recorrido).
