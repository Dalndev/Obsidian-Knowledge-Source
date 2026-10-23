---
tags:
  - it
---
---

# Antecedentes

- **94% del filtrado de datos públicos** se produce a través del correo electrónico.
- El correo electrónico es uno de los vectores más populares de ataque para obtener acceso a información, ya que se ejecutan ataques de phishing, ataque credential-based, malware, spyware.
# Proofpoint

- Plataforma de ciberseguridad para la protección de empleados e información de ciberataques enfocados a emails, redes sociales, dispositivos móviles.
	- Provee soluciones basadas en la nube para ataques de phishing, ingeniería social y [[Business Email Compromise (BEC)]].
- Las soluciones son nativas de la nube lo cual hace que sea compatible una gran variedad de tecnologías
- Se ofrecen capacitaciones de seguridad que ayuda a los usuarios a prepararse ante posibles amenazas, informándolos sobre los ataques mas recientes.
- Se tienen acceso a mas de 60 informes detallando el flujo de correo, además de tendencias de seguridad permitiéndoles a los equipos de TI abordar problemas de manera oportuna.

# Email Security

- Producto enfocado a la protección de la bandeja de entrada de los usuarios ante ataques de phishing, scams, suplantación de emails, etc. Por medio del filtrado de mensajes entrantes analizados con IA.
- Implementa detección de amenazas multicapa con el fin de evitar que las amenazas se propaguen a la bandeja de entrada, evitando reduciendo así la necesidad de capacitación de los usuarios para enfrentar dichas amenazas.
	- **Cifrado y archivado de correo electrónico**. Impide la interceptions de correos electrónicos enviados por medio de la red. Además su archivado proporciona un almacenamiento seguro para mensajes con datos confidenciales.
	- **Detección basada en firmas**. Filtra los correos electrónicos según su contenido, en donde se asocia amenazas conocidas las cuales son bloqueadas y denunciadas de manera automática.
	- **Análisis de reputación dinámica**. Realiza una búsqueda de información sobre el servidor de correo dueño del mensaje para determinar indicios de comportamientos maliciosos y bloquearlos si presenta vulnerabilidades.
	- **Análisis de reputación del remitente**. Realiza un análisis del contenido así como atributos en el mensaje para establecer una relación entre el remitente y destinatario mediante IA, para determinar que el remitente es seguro.
	- **Funciones anti-spoofing**. Utiliza DMARC (Dominio basado en Autenticación de Mensajes), lo cual impide la suplantación de identidad por medio de la falsificación del dominio.
	- **Prevención de pérdida de datos (DLP)**. Realiza un análisis de los correos salientes para buscar información confidencial, con el fin de evitar la filtración de información privada en la organización.
	- **Protección de la identidad**. Realiza un monitoreo para conocer el comportamiento habitual de los empleados, lo cual activa alertas cuando un agente de amenazas compromete la cuenta de correo.
	- **Protección contra ataques dirigidos**. Impide que amenazas de malware lleguen a la bandeja de entrada por medio de la eliminación de los archivos infectados y mediante la desinsectación de enlaces URL.

# Herramientas de Análisis

- **Puntuación dinámica de riesgos**. Se realiza una puntación de 1 a 1000 considerando lo siguiente, sofisticación del agente de amenaza, propagación, enfoque del ataque, tipo de ataque, volumen total de ataques. Lo cual es analizado en cada mensaje éntrate en el servicio, permitiendo así comprender el nivel de riesgo por usuario y empresa.
- **Reglas personalizadas y controles configurable**. Es posible dividir en categorías de cuarentena según la amenaza: spam, phishing, malware, etc.
  La función de análisis identificara correos grises para limitar la saturación de la bandeja de entrada.
- **Visibilidad profunda y rastreo de mensajes**. Existe la funcionalidad de búsqueda para localizar datos de registro difíciles de encontrar. 
  Adicional los usuarios tienen la capacidad de crear listas de remitentes seguros y bloqueados para reducir proactivamente la superficie de ataque de la organización.
- **Oportunidades para reducir su superficie de ataque**. Proporciona información sobre objetivos de alto impacto o Very Attacked People (VAPs), lo cual informa en donde puede ser expuesta la información confidencial, permitiendo así bloquear acceso a archivos específicos en la nube u otros activos primordiales a dichos usuarios.
# Referencias

- [Core Email Protection](https://www.proofpoint.com/us/resources/solution-briefs/core-email-protection)
- [Proofpoint, Email Security](https://www.proofpoint.com/us/products/threat-defense)
- [What is Proofpoint and How Does it Work?](https://www.lumificyber.com/blog/what-is-proofpoint-how-does-it-work/)
- [Proofpoint, Solution Brief](https://www.proofpoint.com/sites/default/files/solution-briefs/pfpt-us-sb-core-email-protection.pdf)
- [More Secure Together: Proofpoint and Microsoft](https://www.proofpoint.com/us/resources/e-books/more-secure-together-proofpoint-microsoft)
- [Solving the complete set of needs in human-centric security](https://www.proofpoint.com/us/platform)
- [260,000 Reasons to Switch: Infrastructure Leader Trades In Abnormal for Proofpoint](https://www.proofpoint.com/us/blog/email-and-cloud-threats/missed-spam-emails-threats-abnormals-blind-spot)
- [Data, Dollars, and Digital Threats – Defeating the Cybercriminal Playbook](https://www.proofpoint.com/us/resources/webinars/data-dollars-and-digital-threats-defeating-cybercriminal-playbook)
- [What is Proofpoint Nexus®? The Detection Behind  Human-Centric Security](https://www.proofpoint.com/us/platform/nexus)
- [Future proof with comprehensive threat protection](https://www.proofpoint.com/us/products/threat-defense)
