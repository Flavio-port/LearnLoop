LearnLoop: Spaced Repetition Learning System
LearnLoop es una plataforma avanzada de gestión de aprendizaje basada en tarjetas de memoria (flashcards), diseñada para optimizar la retención de información a largo plazo mediante la implementación del algoritmo de repetición espaciada SM-2 (SuperMemo-2).

El sistema ha sido desarrollado con un enfoque en la escalabilidad y la precisión algorítmica, proporcionando una solución robusta para el estudio técnico y académico.

Especificaciones Técnicas
El proyecto se sustenta sobre un stack tecnológico moderno que garantiza la integridad de los datos y un rendimiento óptimo:

Lenguaje de Programación: TypeScript para asegurar la consistencia de tipos en todo el sistema.

Framework de Aplicación: Next.js (App Router) para la entrega eficiente de contenido y gestión de rutas.

Capa de Persistencia: Prisma ORM para la gestión y modelado de la base de datos de manera relacional.

Infraestructura de Pruebas: Vitest para la validación exhaustiva de la lógica del algoritmo SM-2 y componentes de sistema.

Arquitectura del Sistema
La estructura del repositorio sigue principios de diseño modular para facilitar el mantenimiento y la extensibilidad de la plataforma:

src/logic: Núcleo computacional del sistema. Contiene la implementación matemática del algoritmo de repetición espaciada.

src/components: Biblioteca de interfaces de usuario para la interacción con las flashcards y visualización de progreso.

src/server: Capa de API y servicios encargada de la persistencia de mazos de estudio y gestión de sesiones de usuario.

Características de Implementación
1. Algoritmo de Repetición Espaciada (SM-2)
El sistema calcula intervalos de revisión personalizados basados en la dificultad percibida por el usuario. Cada interacción ajusta el factor de facilidad (E-Factor) y el intervalo de repetición para maximizar la curva del olvido.

2. Gestión de Entornos de Estudio
Interfaz diseñada para minimizar distracciones, con soporte para animaciones fluidas y estados de retroalimentación inmediata sobre el rendimiento del usuario.

3. Validación de Datos y Tipado
Uso extensivo de interfaces y tipos de TypeScript para garantizar que los flujos de datos entre el servidor y el cliente sean seguros y libres de errores en tiempo de ejecución.

Metodología de Desarrollo
Este proyecto se ha ejecutado bajo un estándar de desarrollo de alta granularidad, documentado mediante un historial de más de 75 commits atómicos. Este proceso asegura la trazabilidad completa de cada ajuste en la lógica del algoritmo, las actualizaciones de la interfaz y la integración de la API.

El periodo de desarrollo abarca desde julio de 2024 hasta septiembre de 2024, reflejando una progresión lógica desde la cimentación de la arquitectura hasta la fase final de pulido y pruebas unitarias.

Configuración del Entorno
Requisitos Técnicos
Node.js v18 o superior.

Base de datos compatible con Prisma (PostgreSQL o SQLite recomendados).

Instalación
Clonar el repositorio.

Ejecutar npm install para la instalación de dependencias.

Configurar las variables de entorno para la conexión de la base de datos.

Ejecutar npx prisma migrate dev para inicializar el esquema de datos.

Iniciar el servidor de desarrollo mediante npm run dev.

Ejecución de Pruebas
Para validar la integridad del sistema y los cálculos del algoritmo:

Bash
npm run test
