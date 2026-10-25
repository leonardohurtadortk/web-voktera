---
doc_id: IA_GUIDE
target_tool: code-dna
prompt_instructions: 'Reglas universales de trabajo profesional para IAs.'
status: master
---
# Guia de Trabajo para IAs (Logica Universal)
## Paso 0 — Si tenés memoria persistente externa
Antes de iniciar sesión: descartá todo estado vivo recordado sobre este proyecto (debates activos, tareas en progreso, ramas ocupadas). Solo conservá protocolo y metaconocimiento estable. Luego continuá con el arranque normal.

## Memoria externa segura — qué podés persistir y qué no
**Sí seguro**: protocolo de trabajo, convenciones del motor, bugs conocidos del propio code-dna, estructura general.
**Nunca persistir**: estado vivo (opiniones actuales de debates, ownership de tareas, ramas ocupadas, conteos de debates). Eso solo lo sabe code-dna ahora.

Este archivo se genera automaticamente para TODOS los proyectos gestionados con Code DNA.
Contiene la logica universal de trabajo: como comportarse profesionalmente en CUALQUIER proyecto.
Code DNA se usa tambien para mejorar Code DNA a si mismo. Si estas trabajando en el motor (`code-dna/`), tus cambios afectaran a como futuras IAs trabajaran en cualquier proyecto. Si estas en otro proyecto gestionado con Code DNA, este archivo te da las reglas para trabajar profesionalmente — el motor de Code DNA es transparente para ti y no necesitas preocuparte por el.


## Dónde estás en el flujo

Si estás leyendo esto, ya iniciaste sesión. Este documento te da las **reglas universales** de trabajo profesional con Code DNA — aplican a cualquier proyecto gestionado con esta herramienta.

**Próximo paso:** Lee `README.md` (`adn ver README.md`) para entender qué proyecto es este, su estructura y el flujo operativo paso a paso.

## Orden de Lectura (post-sesión)

> **Modo automático:** al iniciar sesión, el sistema detecta si tenés tareas asignadas y te indica el modo. **Modo trabajo:** tenés al menos una tarea en progreso (`adn tomar`). **Modo mejora:** sin tarea, priorizás ideas, debates y decisiones. Las lecturas base se adaptan según el modo (ver sección siguiente).

> 💡 **Atajo:** `adn onboarding` orquesta automáticamente los pasos 2–5 (README, contexto, árbol resumido y sugerencia de backlog) en un solo comando. Útil para reducir fricción inicial, sin sustituir la lectura consciente.


1. **IA_GUIDE.md** (estás aquí) → **Propósito:** aprender las reglas de trabajo profesional con Code DNA, válidas para cualquier proyecto gestionado con la herramienta. **Qué sacar:** cómo proponer antes de actuar, verificar quirúrgicamente, respetar jerarquía de tareas y manejar el contexto.

2. **README.md** (`adn ver README.md`) → **Propósito:** entender qué es ESTE proyecto, su estructura real y cómo el árbol refleja esa estructura. **Qué sacar:** identidad del proyecto, navegación por archivo/carpeta/función/clase/método y el uso de `scope` con `::`.
3. **`adn contexto`** → **Propósito:** ver el estado vivo del proyecto. **Qué sacar:** urgentes de hoy, decisiones abiertas, sesiones paralelas activas y tu tarea asignada; con eso definís prioridades.

4. **`adn arbol --resumen`** → **Propósito:** construir el mapa de conocimiento vinculado del código con orientación por capas. **Qué sacar:** dónde está cada pieza de código, qué artefacto guía la describe y un resumen de hijos directos. Usá `--expandir` para ver toda la descendencia.
> Después de `adn arbol --resumen`, ejecutá `adn ayuda familia` para ver un tutorial práctico con ejemplos.
>
> ⚠️ Ejecutá `adn arbol --resumen`, `adn ayuda familia` y `adn backlog` en bloques separados. Si una salida se trunca, usá `adn continuar` antes de enviar el siguiente comando.

5. **`adn backlog`** → **Propósito:** ver las tareas pendientes y elegir cuál tomar. **Qué sacar:** tareas urgentes, agrupadas por sección o categoría. A partir de acá, tomá una tarea con `adn tomar <T-XXX>` y empezá a trabajar.

> 💡 **Handoff:** solo si estás reanudando una sesión previa (por pérdida de contexto o para continuar un trabajo en curso), leé el handoff con `adn ver code-dna/sessions/<sesion>.md`. Te dirá qué se estaba haciendo y cuál era el siguiente paso.
6. **docs/ARCHITECTURE.md, CHANGELOG.md** → **Propósito:** obtener detalle técnico e histórico según la necesidad. **Qué sacar:** arquitectura de componentes y cambios recientes relevantes para la tarea.

> **Nota:** los primeros 5 pasos (1–5) son OBLIGATORIOS. Antes de editar código con lógica sensible, revisá ARCHITECTURE.md. El paso 6 es contexto adicional según la tarea. Para navegar el árbol sin cargar el contexto completo, usá el Protocolo de Chunking (Regla 10). Las secciones 'Tipos de Artefactos y Scope', 'Cómo Usar los Comandos' y 'Flujo de Debates y Descubrimiento de Comandos' son referencia on-demand y no son obligatorias.

## Modos de trabajo y lecturas adaptadas

El arranque detecta automáticamente el modo según ownership de tarea y disponibilidad de tareas:

- **Modo trabajo (programador):** por defecto. Siempre consultá `adn backlog` primero y seguí sus instrucciones: si hay tareas libres, tomá una con `adn tomar <ID>`. Si no hay tareas libres o el humano te indica modo mejora, actuá como arquitecto senior.
  Durante el trabajo, podés ejecutar `adn programador` en cualquier momento para reubicarte: muestra tu tarea activa, coordinación, árbol del scope, conocimiento vinculado y siguiente paso.
- **Modo mejora (senior/arquitecto):** cuando no haya tareas libres en `adn backlog` o el humano lo solicite, ejecutá `adn modo-mejora` para obtener la guía operativa completa generada dinámicamente según el estado del proyecto: auditoría del árbol, debates con contador real de opiniones, salud de artefactos, detección de duplicados, actividad paralela y criterio de parada.
  ⚠️ En modo mejora proponé y decidí con criterio; no edites código sin aprobación.

**Coordinación senior/programador:** al completar tareas, el senior recibe un digest consolidado y revisa el árbol con `adn modo-mejora`. `adn contexto` y `adn programador` muestran un aviso compacto de senior activo. El detalle operativo se describe en el flujo de coordinación de tu proyecto (búscalo con `adn familia --tema "coordinación"` o consulta `adn modo-mejora`).

**Rotación automática:** el sistema asigna por defecto **programador**. Si hay **3 o más sesiones programador activas y ninguna sesión en modo mejora**, la siguiente sesión se sugiere como **mejora**. No se sugiere automáticamente otra mejora si ya existe al menos una sesión en modo mejora. `adn backlog` muestra el panel una sola vez por sesión con esta condición.

Las transiciones son automáticas: `adn tomar <T-XXX>` activa modo trabajo; `adn desbloquear mejora "<motivo>"` activa modo mejora. Para identificar tu modo actual, `adn contexto` muestra las tareas tomadas por tu sesión.

Al cerrar sesión, sincronizá los artefactos de información (MOD/FLW/CTR/DEC) por scope, o registrá `absorbido_en: none` justificando que no aplica.

## Reglas de Comportamiento Profesional

### Regla 0: No Tienes Acceso Directo
- **NO TIENES ACCESO DIRECTO**: no puedes ejecutar comandos, leer archivos ni verificar si Code DNA está instalado. El humano ejecuta cada comando y te pega el resultado real. Nunca asumas ni inventes una salida que no te hayan pegado.
- **BLOQUES DE COMANDOS**: puedes enviar varios comandos en un mismo bloque cuando no dependan del resultado del anterior. Si un comando depende del resultado del anterior, envíalos de uno en uno.
- **ERRORES**: si un comando falla, el bloque se detiene y los siguientes no se procesan. Corrige el error antes de continuar.
- **FORMATO**: el prompt inicial define el formato obligatorio de bloques. Los comandos `adn editar` y `adn aplicar` deben ir en bloques separados del resto.

### Regla 0.1: Un bloque, una respuesta — nunca fragmentar

Una respuesta que contenga comandos `adn` debe tenerlos en **un único bloque de código Markdown**. No generes múltiples bloques separados por texto explicativo.

❌ **INCORRECTO** — el humano no puede copiar de una vez:

    ~~~adn
    [sesion:xxx]
    adn ver archivo
    FIN
    ~~~

    Texto explicativo en medio...

    ~~~adn
    [sesion:xxx]
    adn aplicar ...
    FIN
    ~~~

✅ **CORRECTO** — copiable de una sola vez:

    ~~~adn
    [sesion:xxx]
    adn ver archivo
    FIN
    ~~~

    (Texto explicativo va ANTES o DESPUÉS del bloque, nunca dentro ni entre bloques.)


### Regla 0.2: Anti-burocracia — no crear artefactos que nadie va a leer

Antes de crear un artefacto (tarea, decisión, nota, flujo, módulo, debate, riesgo, contrato), respondé estas tres preguntas en tu razonamiento interno:

1. **¿La próxima IA va a necesitar leer esto para trabajar?** Si la respuesta es "no" o "no estoy seguro", no lo crees.
2. **¿Ya existe algo que cubre esto?** Buscá con `adn familia --tema <palabra>` y `adn buscar <término>`. Si existe, enriquecelo. No crees paralelo.
3. **¿Qué pasa si NO lo hago?** Si la respuesta es "nada", descartalo.

**Prohibido crear artefactos por "actividad de sesión"**, por "dejar constancia", o por "parece ordenado". El árbol crece cuando el proyecto aprende algo nuevo, no cuando la IA navega.

**Cada artefacto nuevo es una deuda de lectura** para todas las IAs futuras. Creá con criterio quirúrgico.

### Regla 0.3: Anti-sí — refutá antes de validar

Si el humano te propone una idea, tarea o mejora:

1. **Primero intentá refutarla con evidencia.** Buscá en el código, en los artefactos existentes, en el árbol. Preguntate: ¿esto ya existe? ¿rompe algo? ¿es redundante? ¿hay una forma más simple?
2. **Si encontrás al menos un problema real, decíselo primero**, antes de proponer cómo hacerlo.
3. **Si no podés refutarla después de investigar seriamente**, recién ahí proponé cómo implementarla.

**Prohibido responder "buena idea", "excelente", "genial" o variantes** sin haber intentado refutar antes. El humano prefiere la verdad incómoda a la validación vacía.

Si no tenés evidencia para refutar ni para confirmar, decí "no tengo contexto suficiente para opinar; necesito investigar X e Y".

### Regla 0.4: ¿Por qué no?

Toda propuesta (tarea, cambio, artefacto) debe venir con la respuesta explícita a: **"¿qué pasa si no lo hacemos?"**

- Si la respuesta es "nada" → descartar la propuesta.
- Si la respuesta es "se rompe X" o "perdemos Y" o "la próxima IA no va a entender Z" → la propuesta tiene valor real.
- Si la respuesta es ambigua → investigar hasta que sea concreta o descartar.

Aplicá esta regla también cuando **vos** proponés algo. No propongas sin poder articular la consecuencia de no hacerlo.

### Regla 0.5: Límite de artefactos nuevos por sesión

**Máximo 5 artefactos nuevos por sesión.** Si necesitás crear más, pedí autorización explícita al humano explicando por qué los 5 no alcanzan.

Excepciones (no cuentan para el límite):
- Tareas derivadas directas de una tarea padre que el humano aprobó (`--parent` con padre existente).
- Bugs encontrados durante el trabajo (siempre documentar bugs es válido).
- Artefactos absorbidos al completar (se calculan automáticamente).

**El límite existe porque** crear 14 tareas para "ordenar" es exactamente el desastre que estas reglas buscan evitar. Si tu sesión necesita crear 14 artefactos, no los estás pensando bien.

### Regla 1: Nunca Inventes

- Si no sabes algo, PREGUNTA al humano.
- No memorices comandos: usa `adn comandos` para listarlos y `adn ayuda <comando>` para la sintaxis.
- Si no estás seguro del formato de un comando, PREGUNTA antes de generarlo.
- Si detectas algo raro en el código o docs, AVISA al humano.

### Regla 2: Proponer Antes de Actuar

**Criterio de acción**: distinguí por evidencia e impacto antes de pedir permiso.
- **Actuá sin preguntar** si hay evidencia dura verificable (código real, test que falla, comando concreto) y el cambio es reversible y de bajo impacto (fix de una línea, corrección de texto, actualización de un artefacto existente). Dejá traza, no pidas OK.
- **Preguntá antes** si no hay evidencia (solo intuición o "parece que") o el cambio es irreversible/alto impacto (borrar artefactos, cambiar API, modificar este archivo, decisiones de arquitectura).
- **Prohibido ofrecer menús de opciones** ("¿hago A, B o C?") cuando una domina por evidencia. Si podés refutar las alternativas con datos, no las presentes como opciones — presentá la sobreviviente como acción y ejecutala. Si el humano pregunta explícitamente "¿qué opinás?", respondé con tu recomendación, no con un menú.

- NUNCA crees un artefacto nuevo en docs/tasks/ o docs/decisions/ sin aprobación explícita del humano.
- NUNCA modifiques ARCHITECTURE.md sin consultar al humano.
- **Mejoras proactivas**: si detectás una mejora o refactorización no solicitada, NO la apliques. Proponela formalmente con su `scope:` candidato y `parent:` sugerido, y esperá aprobación del humano antes de tocarla (T-129).
- **Editar artefactos existentes**: puedes enriquecer un artefacto existente (añadir riesgos, notas, contexto) si el cambio es menor y no altera el alcance original. Si es sustancial, consulta al humano.
- **Borrar artefactos**: NUNCA borres un artefacto sin aprobación. Si crees que está obsoleto, propón archivarlo con `adn podar`.
- **Corregir scope**: si descubres que un artefacto tiene `scope:` incorrecto, corrígelo directamente.
- Si detectas algo pendiente, di: "He detectado X, ¿quieres que lo registremos?" y espera el OK.

### Regla 3: Verificación Quirúrgica

- Antes de cualquier `adn aplicar` o `adn editar`, muestra el bloque ORIGINAL exacto y luego el NUEVO.
- ORIGINAL debe coincidir EXACTAMENTE con el contenido actual del archivo (incluyendo espacios).
- Si el bloque es muy grande, divídelo en cambios más pequeños.

### Regla 4: Rutas Relativas y Creación de Archivos

- Usa siempre rutas desde la raíz del proyecto.
- Nunca uses rutas absolutas.
- Para crear un archivo nuevo, usa `adn aplicar` con ORIGINAL vacío y el contenido completo en NUEVO.

### Regla 5: Análisis Previo

- En proyectos nuevos o sin documentación, analiza primero el código con `adn scan`, `adn deep`, `adn resumen` para que la documentación sea fiel a la realidad.
- No inventes contenido sobre el proyecto; pregunta al humano.
- Si vas a refactorizar o modularizar código, ejecuta primero `adn doctor` y sigue su recorrido guiado.
- **Piensa en modularizar desde el primer momento**: trabaja siempre pensando en archivos pequeños. Si una función nueva puede vivir en su propio módulo, decláralo con un scope planificado apuntando al archivo que aún no existe. Un scope puede apuntar a una carpeta (`core/commands/`), un archivo (`core/nuevo.py`), una clase (`core/nuevo.py::MiClase`) o una función (`core/nuevo.py::mi_funcion`). Si dudas, pregunta.

### Regla 6: Respetar el Conocimiento Vinculado

- Si al usar `adn aplicar`, `adn editar`, `adn funcion` o `adn clase` aparece un aviso de "⚠️ Conocimiento vinculado", léelo completo antes de continuar.
- Nunca ignores ni omitas ese aviso al humano, aunque parezca no relevante.
- Si el aviso contradice lo que se te pide, detente y coméntaselo al humano.

### Regla 7: Navegar el Árbol y Proponer Antes de Crear

- Antes de proponer una tarea, decisión o mejora, usa `adn familia --tema <palabra>` o `adn familia <ID|ruta>` para ver si ya existe algo en esa rama.
- Usa `adn decisiones` para ver decisiones activas y `adn backlog --categoria <cat>` para filtrar tareas por dominio.
- Al ver una tarea en `adn contexto` o `adn backlog`, no te quedes solo con su título: ábrela con `adn familia <ID>` y explora su rama con `adn arbol <ruta>` para entender contexto y relaciones antes de decidir.
- Si el humano menciona una mejora o idea suelta, **no crees tareas automáticamente**: revisa `adn backlog` (las ideas humanas aparecen en `💡 Ideas pendientes` con prioridad si no hay urgentes). Investiga con `adn familia --tema` y vincula con `adn ideas vincular <num> <ID>`. Al completar una tarea, `adn completar` absorbe automáticamente las ideas vinculadas dentro del artefacto y las elimina de `human_backlog.md`.
- Solo después de indagar, si no existe nada, propón formalmente crear el artefacto.

### Regla 7.1: Árbol y familia como primera clase (proyectos nuevos)

En un proyecto nuevo (o uno que no conocés), NO empieces por el código. Empezá por el árbol de conocimiento. Es la única forma de saber qué existe, qué se decidió antes, y por qué, sin leer todo el repositorio.

**Flujo de orientación obligatorio para proyectos nuevos:**
1. `adn arbol --resumen` → vista general: qué carpetas tienen conocimiento vinculado y cuáles no. Si un archivo importante NO aparece en el árbol, significa que todavía nadie le registró conocimiento — tratalo como zona sin documentar y proponé crear su MOD/FLW/CTR antes de modificarlo.
2. `adn familia <ruta|ID>` → historia y relaciones de un nodo concreto. Acepta ruta (`core/x.py`), función (`core/x.py::func`), clase o ID. No hace falta memorizar IDs: usá la ruta real como punto de entrada.
3. `adn familia --tema <palabra>` → busca sin conocer el ID exacto. Si algo ya existe sobre ese tema, mejoralo; no crees paralelo.

**Reglas de uso del árbol/familia:**
- Antes de editar código: leé el MOD del archivo (o ancestro) con `adn familia`.
- Antes de crear un artefacto: `adn familia --tema <palabra>` para ver si ya existe.
- Un archivo sin MOD en el árbol NO es "un archivo sin documentación": es una señal de que falta registrar conocimiento. Proponé crear el MOD con scope granular (`core/archivo.py`, `::funcion`, `::Clase`, `::Clase::metodo`).
- Los scopes apuntan a código real: si el scope no coincide con un archivo/función, `adn alcance` lo marcará como inválido.
- Para crear/editar/eliminar artefactos: usá `adn crear`, `adn editar`, `adn meta`. Para la sintaxis completa de cada tipo: `adn ayuda artefactos`.

**Por qué esto aplica a cualquier proyecto gestionado con Code DNA:** El árbol es un espejo del código. Si el código está bien modularizado, el árbol te guía a la pieza correcta en segundos. Si el código es un monolito, el árbol te lo muestra (nodo opaco sin sub-nodos) y podés proponer dividirlo.

**Referencia:** el mapa completo de tipos, comandos y formatos de scope vive en `adn ayuda artefactos`. Esta regla es el "cuándo y por qué"; la ayuda es el "cómo".

### Regla 8: Respetar la Jerarquía de Tareas

- Si una tarea tiene `parent: T-XXX`, hereda el contexto de su padre. Léelo antes de ejecutar la hija.
- Al completar una hija, verifica si la padre debe actualizarse o cerrarse.
- Usa `adn familia <ID>` para ver toda la rama sin cargar los cuerpos completos.
- **Asignación en paralelo**: antes de editar o completar una tarea, asígnatela con `adn tomar <T-XXX>`. El motor validará la propiedad. Si ya no vas a trabajar en una tarea asignada, liberala con `adn liberar` para devolverla a `pending` y permitir que otra sesión la tome.

### Regla 8.1: Asignación obligatoria antes de leer código

- Antes de ejecutar comandos de lectura de código (`adn ver`, `adn funcion`, `adn clase`, `adn lineas`, `adn ir`, `adn deep`, etc.) debes tener una tarea asignada a tu sesión con `adn tomar <T-XXX>` o activar modo mejora con `adn desbloquear mejora "<motivo>"`.
- Sin tarea ni modo mejora, esos comandos se bloquean y muestran las dos opciones.
- La lectura de documentación (`docs/`) sigue permitida sin tarea.
- Al ver `adn backlog`, `adn arbol` o `adn familia`, las tareas `in_progress` muestran dueño y scope; si la tarea ya tiene dueño, elige otra rama o coordina con la sesión.

### Regla 9: El Árbol como Memoria de Aprendizaje

- El árbol crece cuando el proyecto aprende algo nuevo, no por la actividad de navegación.
- **Antes de modificar**: navega el árbol (paso 5 del Orden de Lectura). El código explica *qué* hace; el árbol explica *por qué* existe.
- **Después de modificar (OBLIGATORIO)**: busca con `adn familia --tema <palabra>` si ya existe conocimiento relacionado. Si existe, mejóralo. Si no, crea un artefacto nuevo vinculado con `scope:`.
- **Prohibido**: no crees documentación redundante ni nodos por "actividad de sesión". Registra solo lo que ayude a tomar mejores decisiones futuras.
- **Auditá y construí el árbol activamente**:
  - Si un nodo te parece desordenado (archivo monolítico sin sub-nodos, scopes inválidos, muchos artefactos apuntando a un archivo entero), proponé al humano modularizarlo, limpiar scopes o granularizar.
  - Si al explorar el proyecto detectás que falta un MOD para una carpeta, archivo, función, clase o método, crealo o proponelo con `scope` granular y `parent` jerárquico (carpeta → archivo → función/clase). Asigná `parent` a los MOD hijo existentes (ej. MOD-001 debe colgar de un MOD de `core/commands/`). El objetivo es que todo el proyecto quede mapeado con MODs cuando el conocimiento esté claro.
  - Si detectás debates activos con consenso claro, proponé al humano cerrarlos con `adn veredicto <DB-XXX> "resultado"` y referenciá la DEC que absorbe. No los cierres sin aprobación del humano.
  - Si detectás un flujo multi-paso no registrado, creá un FLW; si una API/contrato no está documentado, creá un CTR.
  - La IA que viene después va a ver el mismo árbol — dejalo más completo y coherente.

### Regla 10: Manejo Obligatorio de Outputs Truncados

- Si ves `🛑 OUTPUT TRUNCADO`, tu siguiente comando DEBE ser `adn continuar` y nada más. No agregues otros comandos en el mismo bloque.
- Nunca ignores este aviso ni continúes sin leer todas las páginas disponibles.
- Si la salida indica varias páginas, usá `adn continuar N` para ir a la página N.

### Regla 12: Atención Obligatoria a Mensajes y Advertencias de Colisión

- Si una salida incluye `📨` (mensajes pendientes) o `⚠️` de colisión/ownership/coordinación, la IA debe **leer el bloque completo antes de actuar**.
- **Ante colisión de sesiones**: detenerse, identificar la sesión propietaria mencionada en la advertencia, y responder con `adn mensaje <sesion> "<mensaje>"` para coordinar. Nunca ignore una advertencia de `validar_propiedad_tarea` o de conflicto de edición concurrente.
- **Ante output truncado**: verificar siempre con `adn continuar N` antes de proceder. Un mensaje urgente podría estar en la página siguiente.
- **Prioridad de mensajes**: los mensajes con `prioridad:alta` o `tipo:cuidado` deben atenderse de inmediato, antes de cualquier otro comando.
- **Registro**: si un mensaje requiere acción, documenta la decisión en el artefacto correspondiente o en una nota de sesión.

### Regla 13: Tareas Atómicas y Jerarquía Padre/Hija

> 🔗 **Referencia operativa:** El flujo detallado de creación, ejecución y cierre de tareas padre/hijas, junto con la actualización de artefactos informativos (MOD/DEC/FLW/CTR), se descubre con `adn ayuda artefactos` y `adn programador`. En resumen: creá tareas atómicas con `--parent`; al tomar una tarea hija, leé la padre; al completar una hija, actualizá el artefacto informativo que corresponda; antes de cerrar una padre, ejecutá `adn completar` y atendé la verificación automática.

- Toda tarea debe tener un único objetivo claro y verificable.
- Los pasos deben ser acciones concretas y numeradas, no descripciones genéricas.
- Los criterios de aceptación deben ser medibles y comprobables.
- Prohibido crear tareas genéricas tipo "mejorar X" sin desglosar en subtareas atómicas.
- Toda tarea con más de un objetivo o responsabilidad debe dividirse en una tarea padre y subtareas hijas atómicas con `--parent`.
- Ejemplo de estructura correcta:
  - T-560 (padre): Robustecer lógica de fin de rama y cierre coordinado.
    - T-561 (hija): Detectar fin de rama y avisar cuando no hay más tareas en la familia/rama.
    - T-562 (hija): Permitir guardado sin fricción cuando no hay tareas libres en la rama.
    - T-563 (hija): Añadir panel de coordinación y organización de rama ante conflictos.
- Las tareas hijas heredan el contexto de la padre; leé la padre antes de ejecutar las hijas.
- Antes de completar una tarea padre, verificá que todas las hijas estén completadas y el cableado sea correcto (`adn familia`, `adn arbol`).
- Las tareas pequeñas y bien delimitadas se registran como tarea única, sin tarea padre, con `scope` granular apuntando a la función/clase/método afectado.
- Ejemplo de tarea única: "Ajustar texto de ayuda en `_ayuda_crear`" con `scope: core/commands/create.py::_ayuda_crear`.
- Ejemplo de tarea padre compleja: "Implementar sistema de autenticación" con hijas "Implementar login", "Implementar control de acceso", "Implementar recuperación de contraseña".
## Protocolo de Cierre de Sesión (OBLIGATORIO)

Cuando el humano diga "cerramos", "paramos", "terminamos" o similar:

1. Evalúa qué artefactos/documentos necesitan actualización.
2. Propón al humano qué actualizar y espera su aprobación.
3. Genera los bloques `adn aplicar` uno por uno para los docs acordados.
4. Revisá el árbol y la familia para los scopes tocados:
   - `adn arbol <ruta>` y `adn familia <ruta>` para ver conocimiento vinculado.
   - Si falta MOD/FLW/CTR, creá o actualizá con `adn crear modulo|flujo|contrato ... --scope <ruta>`.
5. Antes de guardar, revisá el checklist de artefactos de información vinculados a los archivos modificados (`MOD`, `FLW`, `CTR`, `DEC`) y actualizalos si aportan valor; si no, justificá `absorbido_en: none`.
6. Revisá ideas y debates globales y relacionados con los scopes tocados:
   - Ejecutá `adn ideas` y `adn debate` para ver pendientes globales.
   - Leé los debates/ideas relevantes con `adn debate <DB>` o `adn ideas`.
   - Opiná solo si tenés conocimiento real del tema; si no, dejá constancia breve "sin contexto" en los pasos de la sesión.
   - No inventes opiniones ni repitas sin evidencia.
7. Ejecuta `adn sesion guardar` para generar el resumen de sesión y commit. Si el guardado se bloquea por el umbral de tareas (4 tareas completadas) y necesitás forzarlo, usá `adn sesion guardar --force`. Para cerrar sin completar el umbral, usá `adn sesion cerrar --force`; desde T-934, `--force` solo omite el umbral y el buffer de paginación huérfano, nunca el trabajo a medias (planes pendientes, cambios sin guardar, tareas tomadas).
8. Verifica que el árbol refleja lo aprendido (Regla 9).
- **Tareas/Bugs** (`docs/tasks/`): al completar una tarea o cuando el humano apruebe una nueva. Crea/edita `T-XXX.md` o `BUG-XXX.md` con `adn crear` o `adn aplicar`. Nunca sin aprobación.
- **Decisiones** (`docs/decisions/`): cuando se debata y acuerde una decisión importante. Crea/edita `DEC-XXX.md`. Siempre debate primero.
- **Debates** (`docs/debates/`): cuando un debate no trivial necesite preservarse. Usa `adn ayuda artefactos` para estructura y ejemplos. Para opinar sobre un debate activo, usa `adn debate <DB-XXX> responder "opinión"` en lugar de editar el archivo a mano; `adn debate <DB-XXX> consenso` y `adn debate <DB-XXX> cerrar` gestionan el ciclo del debate (consulta `adn ayuda debate` para umbrales y flujo). Para deliberación estructurada, usá `adn debate <DB-XXX> proponer "descripción"` para agregar alternativas y `adn debate <DB-XXX> contribuir "TIPO ALT texto"` para registrar contribuciones deliberativas (APOYAR, CRITICAR, MEJORAR, COMBINAR, PREGUNTAR) sobre esas alternativas. En debates sin alternativas formales, considerá unanimidad semántica solo si no hay desacuerdo explícito entre opiniones; nunca fuerces consenso si existe conflicto real entre posturas.
- **Notas** (`docs/notes/`): cuando surja una lección técnica no obvia o un bug sutil. Crea `NOTE-XXX.md`.
- **Flujos** (`docs/flows/`): cuando definas un flujo multi-paso. Crea `FLW-XXX.md`.
- **ARCHITECTURE.md**: cuando se descubra algo importante sobre la estructura. Solo con aprobación.
- **CHANGELOG.md**: se registra automáticamente al ejecutar `adn sesion guardar`. No edites manualmente.
- **README.md**: cuando cambie algo fundamental sobre el proyecto. Siempre consulta al humano.

## Tipos de Artefactos y Scope (on-demand)

Para tipos de artefactos, formatos de frontmatter y reglas de scope, consultá `adn ayuda artefactos`.

## Errores Comunes a Evitar
## Verificar cambios antes de completar

Antes de dar una tarea por terminada, verificá con `adn test`. Descubre y ejecuta
los tests del proyecto (`tmp_test/`, `tests/` o `test/`) y muestra un resumen
compacto (OK/fallos). Sirve para cualquier proyecto gestionado con Code DNA.

- `adn test` — corre todos los tests y resume.
- `adn test <patrón>` — solo los tests cuyo nombre contenga el patrón.
- `adn test --verbose` — salida completa.
- `adn test --tipo unittest|pytest` — fuerza el runner.
- `adn test --dir <carpeta>` — usa otra carpeta de tests.

No pidas al humano correr `python3` a mano si `adn test` cubre el caso.

- Inventar formatos de comandos o usar delimitadores no reconocidos. Formato nuevo (T-1049): prefijo `@@` en columna 0; `@@NOMBRE: valor` para campos de una línea, `@@NOMBRE` para campos de bloque; `@@FIN` cierra. Nombres compartidos por `adn aplicar` y `adn editar`: `@@ARCHIVO`, `@@ACTUAL` (bloque actual), `@@NUEVO` (bloque nuevo), `@@META`. `adn editar` agrega `@@MODO`, `@@LINEAS`. El formato legacy (`ORIGINAL:`, `NUEVO:`, `VERIFICAR:`, `CONTENIDO:`, `META:`, `FIN`) se acepta durante la transición con heurística estricta.
- Usar comandos shell crudos (ls, cat, grep) en vez de `adn ver`, `adn scan`, etc.
- Pegar código a mano en archivos en vez de usar `adn aplicar`.
- Crear artefactos nuevos sin aprobación.
- Escribir en documentos monolíticos legacy (`BACKLOG.md`, `DECISIONS.md`) en lugar de artefactos por ID.
- Reutilizar un ID sin verificar antes con `adn estructura` o `adn arbol`.
- En `adn editar` sobre artefactos (`docs/tasks/`, `docs/decisions/`, etc.): `LINEAS` se ignora; `VERIFICAR` debe ser un bloque real del archivo que incluya un encabezado (`#` o `##`). El frontmatter YAML se edita solo con `adn meta`, nunca con `adn editar`/`adn aplicar`.
- Cerrar sesión sin proponer actualización de docs.
- Ignorar el campo `parent:` al trabajar en una tarea hija.
- No generar handoff al terminar si la sesión es larga: usa `adn sesion guardar --handoff`.
- Crear un comando nuevo sin registrarlo en `core/registry.py` (`COMMAND_REGISTRY` + `COMMAND_FLOW_GROUPS`) o sin completar su `description`/`aliases`. Si falta, no aparecerá en `adn comandos` ni en `adn ayuda`.
- Revertir cambios con `git` por consola (ni `git revert`, ni `git reset --hard`): usá `adn revert` (ver "Cómo revertir el trabajo de una sesión"). El git crudo rompe el aislamiento por sesión y arrastra trabajo ajeno.

## Cómo revertir el trabajo de una sesión

Cuando una sesión rompió algo, dejó un cambio no deseado, o necesitás volver atrás un trabajo propio o ajeno, Code DNA permite deshacerlo sin salir a la consola:

1. **Identificá qué revertir con `adn log sesiones`.** Lista los commits recientes con su sesión, goal y archivos tocados, y muestra el comando de revert listo para copiar. Filtrá con `--sesion <id>`, `--desde YYYY-MM-DD` o `--limite N`.
2. **Previsualizá antes de aplicar.** `adn revert <sesion-id|commit-hash>` sin flags es un dry-run: muestra qué commits se revertirían sin tocar nada. Ejemplo: `adn revert deepseek-207`.
3. **Aplicá con confirmación explícita.** `adn revert <sesion-id|commit-hash> --si-o-si`. El comando resuelve la sesión a sus commits (vía el trailer `Session:` de cada commit), aplica un revert quirúrgico y sincroniza el índice de conocimiento. Ejemplo: `adn revert 517b1c6 --si-o-si`.
4. **Verificá el resultado.** `adn log sesiones` para ver el nuevo commit de revert y `adn arbol <ruta>` para confirmar que el conocimiento vinculado quedó coherente.

**Qué NO hacer:**
- No ejecutes `git` por consola (ni `git revert`, ni `git reset --hard`): rompe el aislamiento por sesión y puede arrastrar trabajo ajeno.
- No uses `git reset --hard` para "volver atrás": descarta cambios sin trazabilidad y afecta a todas las sesiones.
- No reviertas el trabajo de otra sesión sin coordinarla con `adn mensaje <sesion> "..."`.

Como cada commit contiene solo los archivos de su sesión y lleva el trailer `Session: <id>`, revertir una sesión no toca el trabajo de las demás.

## Cómo Usar los Comandos (on-demand)

Antes de actuar en un área, entrá a su flujo para ver TODAS las herramientas disponibles (no uses siempre los mismos comandos):

<!-- CODE_DNA:START comandos -->
- `adn comandos contexto` → 🧭 Orientación y contexto
- `adn comandos lectura` → 📖 Leer y analizar código
- `adn comandos escritura` → ✍️ Editar y confirmar
- `adn comandos sesiones` → 🤝 Sesiones y colaboración
- `adn comandos salud` → 🩺 Salud y sistema
<!-- CODE_DNA:END comandos -->

Para el catálogo completo: `adn comandos todo`. Para el detalle de un comando: `adn ayuda <comando>`.

## Flujo de Debates y Descubrimiento de Comandos (on-demand)

Para debates y flujo deliberativo, consultá `adn ayuda debate` y `adn comandos`.
