const legalTexts = {
    terms: {
      title: 'Términos y Condiciones',
      date: 'Última actualización: Junio de 2025',
      content: `
        <p>Bienvenido a www.facilsitio.com, sitio web de propiedad de facilsitio.</p>
        <p><strong>1. Uso del sitio web</strong><br>Este sitio tiene como objetivo brindar información sobre nuestros servicios digitales  y productos como diseño web, publicidad, dominios, hosting y más. Al acceder, usted se compromete a usar esta web únicamente con fines legales y bajo las normas aplicables.</p>
        <p><strong>2. Propiedad intelectual</strong><br>Todo el contenido (textos, imágenes, gráficos...) mostrado en este sitio es propiedad de facilsitio  o de sus aliados. Está prohibida su reproducción o uso sin autorización previa por escrito.</p>
        <p><strong>3. Precios y servicios</strong><br>Los precios, promociones o características de los productos pueden cambiar sin previo aviso. El hecho de ver un producto en esta web no implica obligación contractual hasta que el cliente haya recibido una cotización formal o haya realizado un pago aprobado.</p>
        <p><strong>4. Limitación de responsabilidad</strong><br>facilsitio no garantiza que el sitio esté libre de errores. o interrupciones, aunque tomamos medidas técnicas para mantenerlo seguro y funcional. El uso de esta página es bajo responsabilidad del usuario.</p>
        <p><strong>5. Enlaces externos</strong><br>Podemos incluir enlaces a sitios de terceros. No somos responsables por el contenido, políticas o prácticas de esas páginas externas.</p>
        <p><strong>6. Protección de datos personales</strong><br>La información recolectada mediante formularios  o medios de contacto se maneja con total confidencialidad y bajo las leyes de protección de datos vigentes en Perú. No compartimos ni vendemos tus datos a terceros.</p>
        <p><strong>7. Contacto</strong><br>Para consultas legales, comerciales o relacionadas a estos términos, puede escribirnos a:<br><br>📧 <strong>contacto@facilsitio.com</strong><br></p>
        <p><strong>8. Modificaciones</strong><br>facilsitio se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en esta misma sección y entrarán en vigencia desde su publicación.</p>
      `
    },
    privacy: {
      title: 'Política de Privacidad',
      date: 'Última actualización: Junio de 2025',
      content: `
        <p>En facilsitio respetamos tu privacidad. Toda la información personal recopilada será utilizada únicamente con fines administrativos...</p>
        <p>No compartimos tu información con terceros salvo que sea requerido por ley o por mandato judicial.</p>
        <p>Utilizamos medidas de seguridad técnicas y organizativas para proteger tus datos.</p>
        <p>Tienes derecho a acceder, corregir, actualizar o eliminar tus datos personales. Puedes ejercer estos derechos escribiendo a contacto@facilsitio.com con el asunto: “Protección de Datos”.</p>
      `
    },
    cookies: {
      title: 'Política de Cookies',
      date: 'Última actualización: Junio de 2025',
      content: `
        <p>Este sitio utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico web.</p>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio.</p>
        <p>Al continuar navegando aceptas el uso de cookies. Puedes desactivarlas desde la configuración de tu navegador.</p>
      `
    }
  };

  function openLegalModal(type) {
  const modal = document.getElementById('legalModal');
  const title = document.getElementById('modalTitle');
  const date = document.getElementById('modalDate');
  const content = document.getElementById('modalContent');
  document.body.classList.add('no-scroll');

  const data = legalTexts[type];
  if (data) {
    title.textContent = data.title;
    date.textContent = data.date;
    content.innerHTML = data.content;
  }

  // Calcular ancho de la scrollbar
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.setProperty('--scrollbar-compensation', `${scrollBarWidth}px`);
  document.body.classList.add('modal-open');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}


  function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.classList.remove('no-scroll');

  document.body.classList.remove('modal-open');
  document.body.style.removeProperty('--scrollbar-compensation');
}

  function handleLegalLink(event, type) {
  event.preventDefault(); // Evita el salto al top
  openLegalModal(type);
}