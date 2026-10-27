import { Link } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import "./landing.css";

const UPDATED = "26 de octubre de 2026";

type Section = { id: string; title: string; body: ReactNode };

const contactLink = (
  <Link to="/" hash="contacto">
    formulario de contacto de nuestra página
  </Link>
);

const SECTIONS: Section[] = [
  {
    id: "quienes-somos",
    title: "1. Quiénes somos y a quién aplica esta política",
    body: (
      <>
        <p>
          Bocadoo digitaliza los planes de almuerzo prepagados que los restaurantes ya venden: el
          dueño registra a sus clientes y cada almuerzo se valida con un código QR. Somos un
          proyecto desarrollado en Quito, Ecuador, y actuamos como{" "}
          <b>responsable del tratamiento</b> de los datos personales que se describen aquí.
        </p>
        <p>Esta política aplica a:</p>
        <ul>
          <li>quienes visitan esta página y nos dejan sus datos en el formulario;</li>
          <li>
            los <b>dueños de restaurantes</b> que usan o prueban Bocadoo;
          </li>
          <li>
            los <b>comensales</b> (estudiantes, oficinistas) que usan sus planes en la app.
          </li>
        </ul>
        <p>
          La redactamos conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador
          (LOPDP) y a buenas prácticas internacionales de transparencia.
        </p>
      </>
    ),
  },
  {
    id: "datos",
    title: "2. Qué datos recopilamos",
    body: (
      <>
        <h3>Cuando nos escribes desde esta página</h3>
        <p>
          Tu nombre, el nombre de tu restaurante y tu número de WhatsApp, para contactarte y
          conversar sobre Bocadoo.
        </p>
        <h3>Si eres dueño de un restaurante</h3>
        <ul>
          <li>Nombre, nombre del restaurante, correo y teléfono de contacto.</li>
          <li>Planes que ofreces: tipo, número de almuerzos, vigencia y precio.</li>
          <li>Menú del día y platos que decidas publicar.</li>
          <li>
            Datos de tus clientes que tú registras: nombre, correo, celular, plan activo y almuerzos
            restantes.
          </li>
          <li>Registro de ventas, cobros y almuerzos validados.</li>
        </ul>
        <h3>Si eres comensal</h3>
        <ul>
          <li>Nombre, nombre de usuario, correo y celular.</li>
          <li>Los planes que tienes con cada restaurante y los almuerzos que te quedan.</li>
          <li>
            Historial de consumo: fecha, hora y restaurante donde se validó cada almuerzo con tu QR.
          </li>
          <li>Zona o universidad que eliges para ver restaurantes y ofertas cercanas.</li>
        </ul>
        <h3>Datos que NO recopilamos</h3>
        <p>
          Hoy el pago de los planes se hace directamente en el restaurante, en efectivo o por
          transferencia, fuera de Bocadoo. Por eso{" "}
          <b>no almacenamos números de tarjeta ni datos bancarios</b>. Tampoco pedimos datos
          sensibles como salud, religión, origen étnico o datos biométricos.
        </p>
        <h3>Datos técnicos</h3>
        <p>
          Al visitar la página, tu navegador y los servicios que la alojan pueden registrar datos
          técnicos básicos, como dirección IP, tipo de dispositivo y páginas visitadas.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "3. Para qué usamos tus datos",
    body: (
      <>
        <table>
          <thead>
            <tr>
              <th>Finalidad</th>
              <th>Base legal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Responder tu mensaje y contactarte sobre Bocadoo</td>
              <td>Tu consentimiento</td>
            </tr>
            <tr>
              <td>
                Crear tu cuenta, activar planes, validar almuerzos con QR y mostrar a ambas partes
                cuántos almuerzos quedan
              </td>
              <td>Ejecución del servicio que solicitas</td>
            </tr>
            <tr>
              <td>Dar al restaurante reportes de uso: qué días y qué platos funcionan mejor</td>
              <td>Interés legítimo del restaurante y de Bocadoo</td>
            </tr>
            <tr>
              <td>Mostrar ofertas y restaurantes cercanos a tu zona o universidad</td>
              <td>Tu consentimiento</td>
            </tr>
            <tr>
              <td>Prevenir fraudes, errores de cobro y usos indebidos</td>
              <td>Interés legítimo</td>
            </tr>
            <tr>
              <td>Mejorar la app y medir si funciona como esperamos</td>
              <td>Interés legítimo, con datos agregados siempre que sea posible</td>
            </tr>
            <tr>
              <td>Cumplir obligaciones legales y atender requerimientos de autoridades</td>
              <td>Obligación legal</td>
            </tr>
          </tbody>
        </table>
        <p>
          <b>No vendemos tus datos personales</b> ni los usamos para decisiones automatizadas que te
          afecten legalmente.
        </p>
      </>
    ),
  },
  {
    id: "camara-qr",
    title: "4. Cámara, código QR y almacenamiento en tu dispositivo",
    body: (
      <>
        <p>
          El dueño del restaurante usa la <b>cámara del celular</b> únicamente para escanear el QR
          del comensal. Pedimos tu permiso antes de activarla, la imagen se procesa en el momento y{" "}
          <b>no se graba ni se guarda</b>. Puedes revocar el permiso cuando quieras desde los
          ajustes de tu navegador o teléfono.
        </p>
        <p>
          El <b>prototipo interactivo</b> de esta página funciona con datos de ejemplo. Lo que hagas
          en él (clientes, planes, menú) se guarda solo en tu propio navegador (almacenamiento
          local) y no se envía a nuestros servidores. Puedes borrarlo limpiando los datos del sitio
          en tu navegador.
        </p>
        <p>
          Usamos únicamente el almacenamiento necesario para que el sitio funcione. No usamos
          cookies de publicidad ni de seguimiento entre sitios.
        </p>
      </>
    ),
  },
  {
    id: "compartimos",
    title: "5. Con quién compartimos tus datos",
    body: (
      <>
        <ul>
          <li>
            <b>Entre restaurante y comensal.</b> Cuando un restaurante registra un plan a tu nombre,
            ese restaurante ve tu nombre, contacto, saldo y consumo en <i>su</i> local, y tú ves el
            detalle de tus planes. Un restaurante no ve tu consumo en otros restaurantes.
          </li>
          <li>
            <b>Proveedores tecnológicos</b> que nos ayudan a operar: alojamiento del sitio,
            almacenamiento de datos, tipografías y herramientas de desarrollo. Solo reciben lo
            necesario y están obligados a protegerlo.
          </li>
          <li>
            <b>Autoridades</b>, cuando una ley o una orden judicial lo exija.
          </li>
          <li>
            <b>Datos agregados o anónimos</b>, que no te identifican (por ejemplo, "el plato más
            pedido de la semana"), podemos usarlos en reportes y mejoras.
          </li>
        </ul>
        <p>
          Si en el futuro un socio de pagos procesa transacciones dentro de la app, lo informaremos
          y actualizaremos esta política antes de empezar.
        </p>
      </>
    ),
  },
  {
    id: "transferencias",
    title: "6. Transferencias internacionales",
    body: (
      <p>
        Algunos proveedores tecnológicos y nuestra estructura empresarial futura pueden implicar que
        tus datos se almacenen o procesen fuera del Ecuador, por ejemplo en Estados Unidos. Cuando
        ocurra, exigiremos garantías adecuadas de protección conforme a la ley aplicable.
      </p>
    ),
  },
  {
    id: "conservacion",
    title: "7. Cuánto tiempo conservamos tus datos",
    body: (
      <>
        <ul>
          <li>Mensajes de contacto: hasta 12 meses desde tu último contacto con nosotros.</li>
          <li>Cuenta y planes: mientras la cuenta esté activa.</li>
          <li>
            Historial de consumo y ventas: el tiempo necesario para la gestión del plan y las
            obligaciones contables del restaurante.
          </li>
          <li>
            Al cerrar tu cuenta, eliminamos o anonimizamos tus datos, salvo los que una ley nos
            obligue a conservar.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "8. Cómo protegemos tus datos",
    body: (
      <>
        <p>
          Aplicamos medidas técnicas y organizativas razonables: conexión cifrada (HTTPS), acceso
          limitado a quienes lo necesitan y revisión de los datos que pedimos para pedir solo lo
          indispensable.
        </p>
        <p>
          Ningún sistema es 100 % infalible. Si ocurre una vulneración que afecte tus datos, te lo
          comunicaremos y avisaremos a la autoridad competente en los plazos que establece la ley.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "9. Tus derechos",
    body: (
      <>
        <p>La LOPDP te reconoce, entre otros, los siguientes derechos sobre tus datos:</p>
        <ul>
          <li>
            <b>Acceso:</b> saber qué datos tuyos tratamos y para qué.
          </li>
          <li>
            <b>Rectificación y actualización:</b> corregir datos inexactos o incompletos.
          </li>
          <li>
            <b>Eliminación:</b> pedir que borremos tus datos cuando ya no sean necesarios o retires
            tu consentimiento.
          </li>
          <li>
            <b>Oposición:</b> negarte a que usemos tus datos para ciertas finalidades.
          </li>
          <li>
            <b>Portabilidad:</b> recibir tus datos en un formato común.
          </li>
          <li>
            <b>Suspensión del tratamiento</b> en los casos que la ley prevé.
          </li>
          <li>
            <b>No ser objeto de decisiones automatizadas</b> que produzcan efectos jurídicos sobre
            ti.
          </li>
        </ul>
        <p>
          Para ejercerlos, escríbenos por el {contactLink} indicando tu nombre, el derecho que
          quieres ejercer y un medio para responderte. Podemos pedirte verificar tu identidad.
          Responderemos dentro de los plazos legales.
        </p>
        <p>
          Si consideras que no atendimos bien tu solicitud, puedes presentar un reclamo ante la{" "}
          <b>Superintendencia de Protección de Datos Personales</b> del Ecuador.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "10. Menores de edad",
    body: (
      <p>
        Bocadoo está dirigido a personas mayores de 18 años. No recopilamos a propósito datos de
        menores. Si crees que un menor nos entregó datos, escríbenos y los eliminaremos.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "11. Cambios a esta política",
    body: (
      <p>
        Podemos actualizar esta política cuando Bocadoo cambie, por ejemplo al incorporar pagos
        dentro de la app o nuevas funciones. Siempre mostraremos arriba la fecha de la última
        actualización y, si el cambio es importante, te avisaremos por un medio visible.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "12. Contacto",
    body: (
      <p>
        Para cualquier duda sobre esta política o sobre tus datos, usa el {contactLink}. Es la vía
        oficial de Bocadoo para solicitudes de privacidad.
      </p>
    ),
  },
];

/** Política de privacidad pública. Reusa los estilos de la landing bajo `.landing`. */
export function PrivacyPage() {
  // Al llegar desde el footer de la landing, la página debe abrir arriba.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="landing legal-page">
      <header className="legal-top">
        <div className="container">
          <Link to="/" className="brand" aria-label="Bocadoo, volver al inicio">
            <img
              className="legal-logo"
              src="/landing/bocadoo-logo.webp"
              alt="Bocadoo"
              width="155"
              height="50"
            />
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="container legal-wrap">
          <Link to="/" className="legal-back">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Volver al inicio
          </Link>

          <span className="badge">
            <i>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
              </svg>
            </i>
            Privacidad
          </span>
          <h1 className="h2">Política de privacidad</h1>
          <p className="lead">
            Te explicamos en simple qué datos usamos, para qué y cómo puedes controlarlos.
          </p>
          <p className="legal-date">Última actualización: {UPDATED}</p>

          <nav className="legal-index" aria-label="Contenido de la política">
            <b>En esta página</b>
            <ol>
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s/, "")}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal-body">
            {SECTIONS.map((s) => (
              <section key={s.id} id={s.id}>
                <h2>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </article>
        </div>
      </main>

      <footer className="legal-foot">
        <div className="container foot-bot">
          <span>Hecho en Quito, Ecuador</span>
          <span>© 2026 Bocadoo</span>
        </div>
      </footer>
    </div>
  );
}
