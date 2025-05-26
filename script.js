document.addEventListener('DOMContentLoaded', function() {
    // Existing email template functions
    window.getActivityInfoTemplate = function() {
        return `📋 SOLICITUD DE SOPORTE - ACCESO ACTIVITY INFO
----------------------------------------------

▪️ INFORMACIÓN DEL SOLICITANTE
----------------------------------------------
👤 Nombre completo: 
📱 Número de contacto: 
👨‍💼 Rol/Cargo en la organización: 

▪️ DETALLE DE LA SOLICITUD
----------------------------------------------
🔍 Descripción detallada del problema:



▪️ INFORMACIÓN ADICIONAL
----------------------------------------------
📅 Fecha en que se presentó el problema: 
🖥️ Sistema operativo y navegador utilizados: 

----------------------------------------------
Corporación Opción Legal | Evaluación y Seguimiento | Gestión de la Información`;
    };

    window.getDataVerificationTemplate = function() {
        return `📊 SOLICITUD DE VERIFICACIÓN DE DATOS
----------------------------------------------

▪️ INFORMACIÓN DEL SOLICITANTE
----------------------------------------------
👤 Nombre completo: 
📱 Número de contacto: 
👨‍💼 Rol/Cargo en la organización: 

▪️ DETALLE DE LA SOLICITUD
----------------------------------------------
🔍 Descripción de los datos que requieren verificación:



▪️ INFORMACIÓN CONTEXTUAL
----------------------------------------------
📝 Formulario o sección donde se encuentran los datos: 
📅 Periodo o fecha de los datos en cuestión: 

----------------------------------------------
Corporación Opción Legal | Evaluación y Seguimiento | Gestión de la Información`;
    };

    window.getTechnicalSupportTemplate = function() {
        return `🔧 SOLICITUD DE APOYO TÉCNICO
----------------------------------------------

▪️ INFORMACIÓN DEL SOLICITANTE
----------------------------------------------
👤 Nombre completo: 
📱 Número de contacto: 
👨‍💼 Rol/Cargo en la organización: 

▪️ DETALLE DE LA SOLICITUD
----------------------------------------------
🎓 Tipo de apoyo requerido:
(Capacitación, orientación, material educativo, etc.)

📝 Descripción detallada de la necesidad:



▪️ INFORMACIÓN COMPLEMENTARIA
----------------------------------------------
👥 Número de personas que requieren el apoyo: 
📅 Fechas y horarios preferidos (si aplica): 

----------------------------------------------
Corporación Opción Legal | Evaluación y Seguimiento | Gestión de la Información`;
    };

    window.getFormModificationTemplate = function() {
        return `📝 SOLICITUD DE MODIFICACIÓN DE FORMULARIOS
----------------------------------------------

▪️ INFORMACIÓN DEL SOLICITANTE
----------------------------------------------
👤 Nombre completo: 
📱 Número de contacto: 
👨‍💼 Rol/Cargo en la organización: 

▪️ DETALLE DE LA SOLICITUD
----------------------------------------------
📋 Nombre del formulario a modificar: 
⚙️ Tipo de modificación requerida:
(Nuevo campo, cambio de opciones, modificar lógica, etc.)

📄 Descripción detallada de los cambios solicitados:



▪️ JUSTIFICACIÓN Y CONTEXTO
----------------------------------------------
🎯 Objetivo de la modificación: 
📊 Impacto esperado: 

----------------------------------------------
Corporación Opción Legal | Evaluación y Seguimiento | Gestión de la Información`;
    };

    window.getAnalyticsTemplate = function() {
        return `📊 SOLICITUD DE PRODUCTOS ANALÍTICOS
----------------------------------------------

▪️ INFORMACIÓN DEL SOLICITANTE
----------------------------------------------
👤 Nombre completo: 
📱 Número de contacto: 
👨‍💼 Rol/Cargo en la organización: 

▪️ DETALLE DE LA SOLICITUD
----------------------------------------------
📈 Tipo de producto analítico requerido:
(Informe, dashboard, análisis estadístico, etc.)

📝 Descripción detallada del análisis solicitado:



▪️ PARÁMETROS DEL ANÁLISIS
----------------------------------------------
📅 Periodo de tiempo a analizar: 
🌐 Cobertura geográfica (si aplica): 
⏱️ Fecha límite para entrega del producto (si aplica): 

----------------------------------------------
Corporación Opción Legal | Evaluación y Seguimiento | Gestión de la Información`;
    };

    window.getOtherRequestsTemplate = function() {
        return `📬 OTRAS SOLICITUDES - GESTIÓN DE INFORMACIÓN
----------------------------------------------

▪️ INFORMACIÓN DEL SOLICITANTE
----------------------------------------------
👤 Nombre completo: 
📱 Número de contacto: 
👨‍💼 Rol/Cargo en la organización: 

▪️ DETALLE DE LA SOLICITUD
----------------------------------------------
📋 Categoría general de la solicitud:
(Sugerencia, reporte de error, exportación de datos, etc.)

📝 Descripción detallada:



▪️ INFORMACIÓN ADICIONAL
----------------------------------------------
⏱️ Nivel de urgencia: 
📅 Fecha límite requerida (si aplica): 

----------------------------------------------
Corporación Opción Legal | Evaluación y Seguimiento | Gestión de la Información`;
    };

    // New qualitative report templates
    window.getDiagnosisTemplate = function() {
        return `
1. SOLICITUD DE INFORMACIÓN CUALITATIVA - ETAPA DE DIAGNÓSTICO
▪️ INFORMACIÓN DEL SOLICITANTE
👤 Nombre completo:
📱 Número de contacto:
👨‍💼 Rol/Cargo en la organización:

▪️ DETALLE DE LA SOLICITUD
📋 Categoría general de la solicitud: Reporte de información cualitativa - Etapa de diagnóstico
📝 Descripción detallada:
(Por favor, especifique qué tipo de información cualitativa del diagnóstico necesita: narrativas, identificación de necesidades, descripción de problemáticas, mapeo de actores, etc.)

📊 Territorio/Población objetivo:
🔍 Variables cualitativas específicas requeridas:
📑 Formato de entrega solicitado: (Informe narrativo, transcripciones, categorización temática, etc.)

▪️ INFORMACIÓN ADICIONAL
⏱️ Nivel de urgencia:
📅 Fecha límite requerida (si aplica):
📌 Propósito del uso de la información:`;
    };

    window.getPlanningTemplate = function() {
        return `
2. SOLICITUD DE INFORMACIÓN CUALITATIVA - ETAPA DE PLANEACIÓN
▪️ INFORMACIÓN DEL SOLICITANTE
👤 Nombre completo:
📱 Número de contacto:
👨‍💼 Rol/Cargo en la organización:

▪️ DETALLE DE LA SOLICITUD
📋 Categoría general de la solicitud: Reporte de información cualitativa - Etapa de planeación
📝 Descripción detallada:
(Por favor, especifique qué tipo de información cualitativa de planeación necesita: objetivos establecidos con la comunidad, expectativas de participantes, criterios de priorización, acuerdos con actores clave, etc.)

🎯 Proyecto/Iniciativa relacionada:
📊 Componentes específicos de la planeación requeridos:
📑 Formato de entrega solicitado: (Matriz de planificación, documento narrativo, material visual, etc.)

▪️ INFORMACIÓN ADICIONAL
⏱️ Nivel de urgencia:
📅 Fecha límite requerida (si aplica):
📌 Propósito del uso de la información:`;
    };

    window.getImplementationTemplate = function() {
        return `
3. SOLICITUD DE INFORMACIÓN CUALITATIVA - ETAPA DE IMPLEMENTACIÓN
▪️ INFORMACIÓN DEL SOLICITANTE
👤 Nombre completo:
📱 Número de contacto:
👨‍💼 Rol/Cargo en la organización:

▪️ DETALLE DE LA SOLICITUD
📋 Categoría general de la solicitud: Reporte de información cualitativa - Etapa de implementación
📝 Descripción detallada:
(Por favor, especifique qué tipo de información cualitativa de implementación necesita: registros de participación comunitaria, procesos de adaptación metodológica, dificultades identificadas, historias de cambio, etc.)

🔄 Período de implementación solicitado:
📍 Territorio/Población específica:
🛠️ Actividades o procesos específicos:
📑 Formato de entrega solicitado: (Informe de proceso, recopilación de testimonios, material visual, etc.)

▪️ INFORMACIÓN ADICIONAL
⏱️ Nivel de urgencia:
📅 Fecha límite requerida (si aplica):
📌 Propósito del uso de la información:`;
    };

    window.getEvaluationTemplate = function() {
        return `
4. SOLICITUD DE INFORMACIÓN CUALITATIVA - ETAPA DE EVALUACIÓN
▪️ INFORMACIÓN DEL SOLICITANTE
👤 Nombre completo:
📱 Número de contacto:
👨‍💼 Rol/Cargo en la organización:

▪️ DETALLE DE LA SOLICITUD
📋 Categoría general de la solicitud: Reporte de información cualitativa - Etapa de evaluación
📝 Descripción detallada:
(Por favor, especifique qué tipo de información cualitativa de evaluación necesita: percepción de impacto, testimonios de cambio, aprendizajes identificados, recomendaciones comunitarias y de estructuras, etc.)

📊 Criterios de evaluación específicos:
🎯 Resultados/Objetivos a evaluar:
👥 Grupos de interés incluidos en la evaluación:
📑 Formato de entrega solicitado: (Informe evaluativo, sistematización de experiencias, presentación de resultados, etc.)

▪️ INFORMACIÓN ADICIONAL
⏱️ Nivel de urgencia:
📅 Fecha límite requerida (si aplica):
📌 Propósito del uso de la información:`;
    };

    // Function to send email via Gmail
    window.sendEmail = function(to, subject, body) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };

    // Function to show modal
    window.showQualitativeModal = function() {
        const modal = document.getElementById('qualitativeModal');
        modal.style.display = 'flex';
    };

    // Function to close modal
    window.closeQualitativeModal = function() {
        const modal = document.getElementById('qualitativeModal');
        modal.style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('qualitativeModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});