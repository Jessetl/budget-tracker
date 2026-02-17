# agents.md — Guía para trabajar con Clean Architecture

Este documento define cómo deben trabajar las personas y agentes de IA dentro de este proyecto.

Objetivo: mantener el código simple, escalable y fácil de testear respetando Clean Architecture.

## 1) Principios base

- Separar responsabilidades por capas.
- Las dependencias siempre apuntan hacia adentro:
  - `presentation -> domain`
  - `presentation -> core`
  - `core -> domain`
  - `domain` no depende de `presentation`, ni de infraestructura concreta.
- Evitar lógica de negocio en componentes UI.
- Preferir composición e inyección por props/parámetros antes que acoplar clases concretas.

## 2) Estructura actual y responsabilidad

### `src/domain/`

Reglas de negocio puras.

- Entidades, tipos y lógica de negocio.
- Sin imports de React, navegador, `localStorage`, ni librerías de UI.

### `src/core/`

Contratos y casos de uso de aplicación.

- Interfaces de repositorios en `core/contracts` (ej. `ThemeRepository`).
- Casos de uso / servicios de aplicación (si se agregan).
- Puede depender de `domain`.

### `src/infrastructure/`

Implementaciones técnicas concretas.

- Adaptadores a API, `localStorage`, SDKs externos, etc.
- Implementa interfaces definidas en `core`.

### `src/presentation/`

UI, estado de vista y orquestación para pantalla.

- Páginas, hooks de UI, context providers, router.
- Llama casos de uso/servicios del `core`.
- No debe contener reglas de negocio complejas.

### `src/shared/`

Componentes reutilizables y utilidades transversales.

- Layouts, componentes UI comunes y helpers sin lógica de negocio de dominio.

## 3) Reglas de dependencias (importantes)

✅ Permitido:

- `presentation` importa de `core`, `domain`, `shared`.
- `infrastructure` importa de `core` y `domain`.
- `core` importa de `domain`.

❌ No permitido:

- `domain` importar de cualquier otra capa.
- `core` importar de `presentation` o de implementaciones concretas de infraestructura.
- `presentation` acoplarse a detalles técnicos si existe contrato en `core`.

## 4) Flujo recomendado para crear una nueva feature

1. **Definir dominio**
   - Crear/ajustar entidad o tipo en `domain`.
2. **Definir contrato**
   - Crear interfaz de repositorio o servicio en `core`.
3. **Implementar detalle técnico**
   - Implementar el contrato en `infrastructure`.
4. **Conectar UI**
   - Consumir el contrato en `presentation` (hooks, provider o página).
5. **Mantener inversión de dependencias**
   - La UI depende de interfaces, no de detalles.

## 5) Convenciones de código

- TypeScript estricto y tipos explícitos en APIs públicas.
- Nombres claros por intención (`ThemeRepository`, `toggleTheme`, etc.).
- Evitar archivos “god object” con demasiadas responsabilidades.
- Mantener componentes pequeños y legibles.
- Si una lógica se reutiliza o crece, moverla a `core`/`domain` según corresponda.

## 6) Criterios de revisión (checklist rápido)

Antes de mergear cambios, verificar:

- [ ] ¿La lógica de negocio está fuera de la UI?
- [ ] ¿Se respetaron las direcciones de dependencia?
- [ ] ¿Se usan interfaces para desacoplar infraestructura?
- [ ] ¿Los nombres y tipos son claros?
- [ ] ¿No se introdujo complejidad innecesaria?

## 7) Guía para agentes de IA (cuando editen código)

- Hacer cambios mínimos y enfocados.
- No mezclar refactors grandes con una feature pequeña.
- No mover archivos de capa sin justificarlo.
- Si hay ambigüedad, preferir la opción más simple y consistente con esta guía.
- Si una decisión rompe estas reglas, documentar por qué.

## 8) Estado actual de capas

Las implementaciones concretas viven en `src/infrastructure/`.
`src/core/` mantiene contratos y casos de uso.
