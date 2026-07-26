export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const ui = {
  es: {
    'nav.inicio': 'Inicio',
    'nav.servicios': 'Servicios',
    'nav.blog': 'Blog',
    'nav.contacto': 'Contacto',
    'hero.title': 'Dr. Juan Pérez',
    'hero.specialty': 'Especialista en Medicina Interna',
    'hero.license': 'Colegiado Nº 12345',
    'hero.cta': 'Agendar Cita',
    'services.title': 'Servicios y Tratamientos',
    'services.viewAll': 'Ver todos',
    'timeline.title': 'Trayectoria y Aportes',
    'blog.title': 'Artículos y Publicaciones',
    'blog.readMore': 'Leer más',
    'testimonials.title': 'Testimonios',
    'contact.title': 'Ubicación y Contacto',
    'contact.address': 'Dirección',
    'contact.hours': 'Horarios',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar',
    'footer.rights': 'Todos los derechos reservados',
    'language.es': 'Español',
    'language.en': 'English',
  },
  en: {
    'nav.inicio': 'Home',
    'nav.servicios': 'Services',
    'nav.blog': 'Blog',
    'nav.contacto': 'Contact',
    'hero.title': 'Dr. Juan Pérez',
    'hero.specialty': 'Internal Medicine Specialist',
    'hero.license': 'License No. 12345',
    'hero.cta': 'Book Appointment',
    'services.title': 'Services & Treatments',
    'services.viewAll': 'View all',
    'timeline.title': 'Background & Contributions',
    'blog.title': 'Articles & Publications',
    'blog.readMore': 'Read more',
    'testimonials.title': 'Testimonials',
    'contact.title': 'Location & Contact',
    'contact.address': 'Address',
    'contact.hours': 'Hours',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'footer.rights': 'All rights reserved',
    'language.es': 'Español',
    'language.en': 'English',
  },
};

export function useTranslations(lang: Locale) {
  return ui[lang];
}