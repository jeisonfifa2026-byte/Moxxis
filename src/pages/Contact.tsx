import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Send, Clock, Check } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setSubmitting(false);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-dark-950 pt-24 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Estamos Aquí Para Ti
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contacto
          </h1>
          <p className="text-dark-400 max-w-xl">
            ¿Tienes preguntas, necesitas ayuda con tu pedido o quieres saber más sobre MOXX? Escríbenos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-5">
                <a
                  href="https://wa.me/573203177677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 uppercase tracking-wide">WhatsApp</p>
                    <p className="text-white text-sm group-hover:text-gold-400 transition-colors">+57 320 317 7677</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 uppercase tracking-wide">Email</p>
                    <p className="text-white text-sm">moxxoficial@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 uppercase tracking-wide">Ubicación</p>
                    <p className="text-white text-sm">Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs text-dark-500 uppercase tracking-wide">Horario</p>
                    <p className="text-white text-sm">Lun - Vie: 9am - 6pm</p>
                    <p className="text-dark-500 text-xs">Sáb: 10am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-dark-900 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/moxxoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center text-dark-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@moxxoficial2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-dark-950 border border-white/10 flex items-center justify-center text-dark-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.65 6.34 6.34 0 0 0 9.35 22a6.3 6.3 0 0 0 6.31-6.26V9.2a8.32 8.32 0 0 0 3.93 1V6.69z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-dark-900 border border-white/5">
              <h3 className="text-lg font-semibold text-white mb-6">Envíanos un Mensaje</h3>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">Mensaje enviado correctamente. Te responderemos pronto.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-dark-400 font-medium uppercase tracking-wide mb-2 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-950 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-dark-400 font-medium uppercase tracking-wide mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-950 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-dark-400 font-medium uppercase tracking-wide mb-2 block">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-950 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-dark-400 font-medium uppercase tracking-wide mb-2 block">
                      Asunto
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-950 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-dark-950">Selecciona un asunto</option>
                      <option value="pedido" className="bg-dark-950">Consulta de Pedido</option>
                      <option value="producto" className="bg-dark-950">Pregunta sobre Producto</option>
                      <option value="talla" className="bg-dark-950">Ayuda con Talla</option>
                      <option value="mayor" className="bg-dark-950">Compra al por Mayor</option>
                      <option value="otro" className="bg-dark-950">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-dark-400 font-medium uppercase tracking-wide mb-2 block">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-950 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
