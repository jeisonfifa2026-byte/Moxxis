import { motion } from 'framer-motion';
import { Truck, CreditCard, ShieldCheck, Clock, MapPin, Banknote, Smartphone, Check } from 'lucide-react';

const shippingMethods = [
  {
    icon: Truck,
    title: 'Envío Estándar',
    desc: 'Entrega en 3-5 días hábiles a cualquier ciudad de Colombia.',
    price: '$10.000 - $15.000',
  },
  {
    icon: Clock,
    title: 'Envío Express',
    desc: 'Entrega en 1-2 días hábiles para ciudades principales.',
    price: '$20.000 - $30.000',
  },
  {
    icon: MapPin,
    title: 'Envío a Bogotá',
    desc: 'Entrega el mismo día en zonas seleccionadas de Bogotá.',
    price: '$8.000 - $12.000',
  },
];

const paymentMethods = [
  {
    icon: Banknote,
    title: 'Transferencia Bancaria',
    desc: 'Bancolombia, Davivienda, Nequi, Daviplata. Confirmación inmediata.',
  },
  {
    icon: Smartphone,
    title: 'PSE',
    desc: 'Pago en línea directo desde tu cuenta bancaria. En proceso de integración.',
    comingSoon: true,
  },
  
  {
    icon: ShieldCheck,
    title: 'Garantía de Entrega',
    desc: 'Todos los envíos incluyen número de guía y seguimiento en tiempo real.',
  },
];

export default function Shipping() {
  return (
  <div className="min-h-screen bg-dark-950">

    {/* Hero */}
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/images/catalog/pago.png"
          alt="Envíos y Pagos MOXX"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/35" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 55%, rgba(0,0,0,.35) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Contenido */}
      <div className="relative section-padding max-w-5xl mx-auto w-full py-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            INFORMACIÓN DE COMPRA
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Envíos y <span className="gold-text-gradient">Pagos</span>
          </h1>

          <p className="mt-6 text-lg text-dark-300 max-w-xl leading-relaxed">
            Conoce nuestras opciones de envío a nivel nacional y los métodos de pago disponibles para realizar tus compras con total seguridad.
          </p>

        </motion.div>

      </div>

    </section>

    <div className="section-padding max-w-5xl mx-auto py-20">

        {/* Shipping Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Truck className="w-6 h-6 text-gold-400" />
            Envíos Nacionales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {shippingMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-gold-500/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4">{method.desc}</p>
                <p className="text-gold-400 font-semibold text-sm">{method.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-gold-500/5 border border-gold-500/10">
            <h3 className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-3">
              Políticas de Envío
            </h3>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                Envíos gratis en compras superiores a $200.000 en Bogotá.
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                Envíos gratis en compras superiores a $350.000 a nivel nacional.
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                Todos los envíos incluyen número de guía para seguimiento.
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                Empaque premium incluido sin costo adicional.
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                No realizamos envíos internacionales en este momento.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Payment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-gold-400" />
            Métodos de Pago
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-dark-900 border border-white/5 hover:border-gold-500/20 transition-all duration-500"
              >
                {method.comingSoon && (
                  <span className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-semibold bg-gold-500/10 text-gold-400 uppercase tracking-wider">
                    Próximamente
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}