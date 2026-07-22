import { motion } from 'framer-motion';
import { Truck, CreditCard, ShieldCheck, Clock, MapPin, Banknote, Smartphone, Check } from 'lucide-react';

// 👇 IMPORTANTE: Importamos la imagen de fondo desde la carpeta src/images
// (Ajusta los '../' según dónde esté guardado tu componente)
import pagoBg from '../images/catalog/pago.png';

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
    icon: CreditCard,
    title: 'Efectivo / Contraentrega',
    desc: 'Disponible en Bogotá y ciudades principales. Tarifa adicional del 5%.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía de Entrega',
    desc: 'Todos los envíos incluyen número de guía y seguimiento en tiempo real.',
  },
];

export default function Shipping() {
  return (
    <div className="relative min-h-screen bg-dark-950 overflow-hidden">
      {/* 1. Imagen de Fondo */}
      <img
        src={pagoBg}
        alt="Fondo Envíos y Pagos MOXX"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 2. Capa oscura con leve desenfoque para legibilidad */}
      <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-[2px]" />

      {/* 3. Contenido Principal */}
      <div className="relative z-10 section-padding max-w-5xl mx-auto pt-24 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Información de Compra
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Envíos y Pagos
          </h1>
          <p className="text-dark-400 max-w-xl">
            Conoce nuestras opciones de envío a nivel nacional y los métodos de pago disponibles.
          </p>
        </motion.div>

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
                className="p-6 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-white/10 hover:border-gold-500/30 transition-all duration-500"
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

          <div className="p-6 rounded-xl bg-gold-500/10 backdrop-blur-md border border-gold-500/20">
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
                className="relative p-6 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-white/10 hover:border-gold-500/30 transition-all duration-500"
              >
                {method.comingSoon && (
                  <span className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-semibold bg-gold-500/20 text-gold-400 uppercase tracking-wider">
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