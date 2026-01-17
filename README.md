# LearnLoop: Spaced Repetition Learning System

LearnLoop es una plataforma avanzada de gestión de aprendizaje basada en tarjetas de memoria (flashcards), diseñada para optimizar la retención de información a largo plazo mediante la implementación del algoritmo de repetición espaciada SM-2 (SuperMemo-2).

El sistema ha sido desarrollado con un enfoque en la escalabilidad y la precisión algorítmica, proporcionando una solución robusta para el estudio técnico y académico de alto rendimiento.

---

## Especificaciones Técnicas

El proyecto se sustenta sobre un stack tecnológico moderno que garantiza la integridad de los datos y un rendimiento óptimo en entornos de producción:

* **Lenguaje de Programación:** TypeScript para asegurar la consistencia de tipos y minimizar errores en tiempo de ejecución.
* **Framework de Aplicación:** Next.js (App Router) para la entrega eficiente de contenido y gestión avanzada de rutas.
* **Capa de Persistencia:** Prisma ORM para la gestión y modelado de la base de datos de manera relacional.
* **Infraestructura de Pruebas:** Vitest para la validación exhaustiva de la lógica del algoritmo SM-2 y componentes críticos del sistema.

---

## Arquitectura del Sistema

La estructura del repositorio sigue principios de diseño modular y separación de responsabilidades para facilitar el mantenimiento:

* **`src/logic`**: Núcleo computacional. Contiene la implementación matemática y lógica del algoritmo de repetición espaciada.
* **`src/components`**: Biblioteca de interfaces de usuario para la interacción con las tarjetas y visualización de progreso.
* **`src/server`**: Capa de API y servicios encargada de la persistencia de datos y gestión de sesiones de usuario.

---

## Características de Implementación

### 1. Algoritmo de Repetición Espaciada (SM-2)
El sistema calcula intervalos de revisión personalizados basados en la dificultad percibida por el usuario. Cada interacción ajusta el factor de facilidad (E-Factor) y el intervalo de repetición para optimizar la curva del olvido de manera individualizada.

### 2. Gestión de Entornos de Estudio
Interfaz diseñada bajo principios de usabilidad profesional para minimizar distracciones, con estados de retroalimentación inmediata sobre el rendimiento del usuario durante las sesiones de estudio.

### 3. Validación y Tipado Estricto
Uso extensivo de interfaces de TypeScript para garantizar que los flujos de datos entre el servidor y el cliente sean seguros y coherentes en todas las fases del ciclo de vida de la aplicación.

---

## Metodología de Desarrollo

Este proyecto se ha ejecutado bajo un estándar de desarrollo de alta granularidad, documentado mediante un historial de más de 75 commits atómicos. Este proceso asegura la trazabilidad completa de cada ajuste en la lógica del algoritmo y la integración de componentes.

El periodo de desarrollo abarca desde julio de 2024 hasta septiembre de 2024, reflejando una progresión técnica lógica desde la cimentación de la arquitectura hasta la fase final de optimización y pruebas unitarias.

---

## Configuración del Entorno

### Requisitos Técnicos
* Node.js v18 o superior.
* Base de datos compatible con Prisma (PostgreSQL o SQLite).

### Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install` para la instalación de dependencias.
3. Configurar las variables de entorno para la conexión de la base de datos.
4. Ejecutar `npx prisma migrate dev` para inicializar el esquema de datos.
5. Iniciar el servidor de desarrollo mediante `npm run dev`.

### Control de Calidad
Para validar la integridad de los cálculos del algoritmo y la estabilidad del sistema:
```bash
npm run test
