import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  Eye,
  Home,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Menu as MenuIcon,
  Pencil,
  Plus,
  QrCode,
  ScanLine,
  Search,
  Settings,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  Store,
  UserRound,
  UsersRound,
  Utensils,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import lunchImage from "@/assets/bocadoo-lunch.jpg";
import soupImage from "@/assets/bocadoo-soup.jpg";
import veggieImage from "@/assets/bocadoo-veggie.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bocadoo — Maquetas de la app móvil" },
      {
        name: "description",
        content:
          "Ocho pantallas móviles de Bocadoo para comensales y restaurantes de Quito.",
      },
      { property: "og:title", content: "Bocadoo — Maquetas de la app móvil" },
      {
        property: "og:description",
        content:
          "Explora el diseño de Bocadoo para planes de almuerzo prepagados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BocadooShowcase,
});

type IconType = LucideIcon;

const Logo = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className={`${compact ? "h-9 w-9" : "h-12 w-12"} grid shrink-0 place-items-center rounded-[14px] bg-primary text-primary-foreground shadow-brand`}>
      <Utensils size={compact ? 18 : 23} strokeWidth={2.8} />
    </div>
    <div>
      <div className={`${compact ? "text-lg" : "text-2xl"} font-black leading-none text-foreground`}>bocadoo</div>
      {!compact && <div className="mt-1 text-[10px] font-semibold text-muted-foreground">tu almuerzo, más fácil</div>}
    </div>
  </div>
);

const StatusBar = () => (
  <div className="flex h-11 shrink-0 items-center justify-between px-6 pt-1 text-[12px] font-bold text-foreground">
    <span>9:41</span>
    <div className="flex items-center gap-1.5">
      <span className="flex items-end gap-[2px]" aria-hidden="true">
        <i className="h-1 w-[2px] rounded-full bg-foreground" />
        <i className="h-1.5 w-[2px] rounded-full bg-foreground" />
        <i className="h-2 w-[2px] rounded-full bg-foreground" />
        <i className="h-2.5 w-[2px] rounded-full bg-foreground" />
      </span>
      <span className="h-2 w-3 rounded-t-full border-2 border-foreground border-b-0" />
      <span className="h-2.5 w-5 rounded-[4px] border border-foreground p-[1px]"><i className="block h-full w-3 rounded-[2px] bg-foreground" /></span>
    </div>
  </div>
);

const Phone = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <figure className="w-[390px] shrink-0">
    <div className="phone-shell relative h-[844px] overflow-hidden rounded-[47px] border-[7px] border-phone bg-background shadow-phone">
      <div className="absolute left-1/2 top-2 z-30 h-[25px] w-[92px] -translate-x-1/2 rounded-full bg-phone" />
      <div className="flex h-full flex-col overflow-hidden rounded-[39px]">
        <StatusBar />
        {children}
      </div>
      <div className="absolute bottom-2 left-1/2 z-30 h-1 w-28 -translate-x-1/2 rounded-full bg-foreground/80" />
    </div>
    <figcaption className="mt-5 text-center text-sm font-bold text-showcase-muted">{title}</figcaption>
  </figure>
);

const NavBar = ({
  active,
  owner = false,
}: {
  active: string;
  owner?: boolean;
}) => {
  const items: Array<[string, IconType]> = owner
    ? [["Home", Home], ["Planes", WalletCards], ["Menú", MenuIcon], ["Ajustes", Settings]]
    : [["Home", Home], ["Restaurantes", Store], ["Ajustes", Settings]];
  return (
    <div className="mt-auto grid h-[73px] shrink-0 border-t border-border bg-background/95 px-3 pb-3 pt-2 backdrop-blur-sm" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map(([label, Icon]) => {
        const selected = active === label;
        return (
          <div key={label} className={`flex flex-col items-center justify-center gap-1 rounded-2xl ${selected ? "text-primary" : "text-muted-foreground"}`}>
            <div className={selected ? "rounded-xl bg-accent px-4 py-1" : "px-4 py-1"}><Icon size={19} strokeWidth={selected ? 2.7 : 2} /></div>
            <span className="text-[9px] font-bold">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

const Avatar = ({ initials, large = false }: { initials: string; large?: boolean }) => (
  <div className={`${large ? "h-20 w-20 text-xl" : "h-11 w-11 text-xs"} grid shrink-0 place-items-center rounded-full border-2 border-background bg-lavender font-black text-primary shadow-soft`}>
    {initials}
  </div>
);

const SectionTitle = ({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) => (
  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
    <h3 className="min-w-0 text-[15px] font-extrabold text-foreground">{children}</h3>
    {action}
  </div>
);

const LoginScreen = () => (
  <Phone title="Login compartido">
    <div className="relative flex flex-1 flex-col overflow-hidden px-6 pb-8">
      <div className="absolute -right-16 -top-24 h-52 w-52 rounded-full bg-lavender" />
      <div className="absolute -left-24 top-24 h-44 w-44 rounded-full border-[28px] border-accent/70" />
      <div className="relative mt-12 flex justify-center"><Logo /></div>
      <div className="relative mt-8 text-center">
        <h1 className="text-[30px] font-black leading-tight text-foreground">Tu almuerzo,<br /><span className="text-primary">sin cartulinas.</span></h1>
        <p className="mt-2 text-xs font-medium text-muted-foreground">Planes simples. Almuerzos sin complicaciones.</p>
      </div>
      <div className="relative mt-7 rounded-[26px] bg-card p-4 shadow-card">
        <div className="grid grid-cols-2 rounded-xl bg-muted p-1 text-[11px] font-bold">
          <div className="rounded-[10px] bg-primary px-2 py-2.5 text-center text-primary-foreground shadow-soft">Soy comensal</div>
          <div className="px-2 py-2.5 text-center text-muted-foreground">Tengo un restaurante</div>
        </div>
        <label className="mt-5 block text-[10px] font-bold text-muted-foreground">CORREO ELECTRÓNICO</label>
        <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-muted px-4 text-xs text-foreground"><Mail size={16} className="text-primary" /> carlos@email.com</div>
        <label className="mt-4 block text-[10px] font-bold text-muted-foreground">CONTRASEÑA</label>
        <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-muted px-4 text-xs text-foreground"><LockKeyhole size={16} className="text-primary" /><span className="tracking-[4px]">••••••••</span><Eye size={15} className="ml-auto text-muted-foreground" /></div>
        <div className="mt-3 text-right text-[10px] font-bold text-primary">¿Olvidaste tu contraseña?</div>
        <div className="mt-5 flex h-12 items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background shadow-soft">Iniciar sesión</div>
        <div className="my-4 flex items-center gap-3 text-[9px] text-muted-foreground"><i className="h-px flex-1 bg-border" />o continúa con<i className="h-px flex-1 bg-border" /></div>
        <div className="flex h-11 items-center justify-center gap-3 rounded-xl border border-border bg-background text-xs font-bold text-foreground"><span className="text-base font-black text-google">G</span>Continuar con Google</div>
      </div>
      <div className="mt-auto text-center text-xs text-muted-foreground">¿Primera vez? <span className="font-extrabold text-primary">Crear cuenta</span></div>
    </div>
  </Phone>
);

const Transaction = ({ icon: Icon, name, detail, value, positive = false }: { icon: IconType; name: string; detail: string; value: string; positive?: boolean }) => (
  <div className="grid grid-cols-[38px_minmax(0,1fr)_auto] items-center gap-3 py-2.5">
    <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary"><Icon size={16} /></div>
    <div className="min-w-0"><div className="truncate text-[11px] font-extrabold text-foreground">{name}</div><div className="mt-0.5 truncate text-[9px] text-muted-foreground">{detail}</div></div>
    <div className={`text-[10px] font-extrabold ${positive ? "text-success" : "text-foreground"}`}>{value}</div>
  </div>
);

const DinerHome = () => (
  <Phone title="Comensal · Home">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <header className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0"><p className="text-[10px] font-semibold text-muted-foreground">MIÉRCOLES, 30 DE SEPTIEMBRE</p><h2 className="mt-1 truncate text-[23px] font-black">¡Hola, Carlos!</h2></div><Avatar initials="CM" />
        </header>
        <div className="mt-6"><SectionTitle action={<div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground"><Plus size={17} /></div>}>Mis planes</SectionTitle></div>
        <div className="relative mt-3 pb-5">
          <div className="absolute inset-x-3 bottom-0 top-7 rounded-[23px] bg-lavender opacity-70" />
          <div className="relative overflow-hidden rounded-[23px] bg-card-dark p-5 text-card-dark-foreground shadow-card">
            <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground"><Utensils size={16} /></div><div><p className="text-[12px] font-bold">La Cuchara de San Blas</p><p className="text-[8px] text-card-dark-muted">Plan mensual</p></div></div><Sparkles size={18} className="text-lavender" /></div>
            <div className="mt-5 flex items-end justify-between"><div><p className="text-[29px] font-black leading-none">14 <span className="text-[15px]">almuerzos</span></p><p className="mt-1.5 text-[9px] text-card-dark-muted">Vence el 30/10</p></div><p className="text-sm font-bold text-lavender">≈ $39,20</p></div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/20"><div className="h-full w-[30%] rounded-full bg-primary" /></div>
            <div className="mt-2 flex items-center justify-between text-[8px] text-card-dark-muted"><span>6 usados de 20</span><span>70% disponible</span></div>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-background px-3 py-2.5 text-[11px] font-extrabold text-foreground"><QrCode size={16} /> Mostrar QR</div>
          </div>
        </div>
        <div className="mt-5"><SectionTitle action={<span className="text-[9px] font-bold text-primary">Ver todo</span>}>Historial de transacciones</SectionTitle></div>
        <div className="mt-1 divide-y divide-border">
          <Transaction icon={Utensils} name="La Cuchara de San Blas" detail="Almuerzo consumido · Hoy, 13:12" value="− 1" />
          <Transaction icon={ShoppingBag} name="Rincón Manabita" detail="Compra plan quincenal · Ayer" value="$36,00" />
          <Transaction icon={Utensils} name="La Cuchara de San Blas" detail="Almuerzo consumido · Lun, 12:48" value="− 1" />
        </div>
      </div>
      <NavBar active="Home" />
    </div>
  </Phone>
);

const RestaurantCard = ({ image, name, zone, price, plans }: { image: string; name: string; zone: string; price: string; plans: string }) => (
  <div className="grid grid-cols-[86px_minmax(0,1fr)] gap-3 rounded-2xl bg-card p-2.5 shadow-soft">
    <img src={image} alt="Almuerzo del restaurante" loading="lazy" width={896} height={752} className="h-[82px] w-[86px] rounded-xl object-cover" />
    <div className="min-w-0 py-1"><div className="flex items-start justify-between gap-2"><h4 className="truncate text-xs font-extrabold">{name}</h4><span className="flex shrink-0 items-center gap-1 text-[9px] font-bold"><Star size={10} className="fill-primary text-primary" />4,8</span></div><p className="mt-1 flex items-center gap-1 text-[9px] text-muted-foreground"><MapPin size={10} />{zone}</p><p className="mt-2 text-[10px] font-bold text-primary">{price} / almuerzo</p><p className="mt-1 text-[8px] text-muted-foreground">{plans}</p></div>
  </div>
);

const Marketplace = () => (
  <Phone title="Comensal · Restaurantes">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <div className="mt-3 flex items-center justify-between"><div><p className="text-[10px] font-semibold text-muted-foreground">DESCUBRE CERCA DE TI</p><h2 className="mt-1 text-[23px] font-black">Restaurantes</h2></div><div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary"><MapPin size={18} /></div></div>
        <div className="mt-4 flex h-11 items-center gap-3 rounded-xl bg-card px-4 shadow-soft"><Search size={16} className="text-muted-foreground" /><span className="text-[11px] text-muted-foreground">Busca por restaurante o zona</span><SlidersHorizontal size={15} className="ml-auto text-primary" /></div>
        <div className="mt-5"><SectionTitle action={<span className="text-[9px] font-bold text-primary">Ver todas</span>}>Ofertas para ti</SectionTitle></div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="relative h-[116px] overflow-hidden rounded-2xl"><img src={lunchImage} alt="Oferta de almuerzos" loading="lazy" width={896} height={752} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-image-overlay" /><div className="absolute inset-x-3 bottom-3 text-image-foreground"><p className="text-[9px] font-bold">La Cuchara</p><p className="text-sm font-black">20 por $50</p></div><span className="absolute right-2 top-2 rounded-lg bg-primary px-2 py-1 text-[8px] font-black text-primary-foreground">−15%</span></div>
          <div className="relative h-[116px] overflow-hidden rounded-2xl"><img src={veggieImage} alt="Oferta vegetariana" loading="lazy" width={896} height={752} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-image-overlay" /><div className="absolute inset-x-3 bottom-3 text-image-foreground"><p className="text-[9px] font-bold">Verde Limón</p><p className="text-sm font-black">10 por $28</p></div><span className="absolute right-2 top-2 rounded-lg bg-lavender px-2 py-1 text-[8px] font-black text-foreground">VEGGIE</span></div>
        </div>
        <div className="mt-4 flex gap-2 overflow-hidden"><span className="shrink-0 rounded-full bg-primary px-3 py-2 text-[9px] font-bold text-primary-foreground">Cerca de mí</span><span className="shrink-0 rounded-full bg-muted px-3 py-2 text-[9px] font-bold">Precio</span><span className="shrink-0 rounded-full bg-muted px-3 py-2 text-[9px] font-bold">Mejor calificados</span></div>
        <div className="mt-4 rounded-2xl bg-accent p-3.5">
          <div className="flex items-center justify-between"><div><p className="text-[9px] font-black text-primary">OFERTA FLASH</p><p className="mt-1 text-xs font-extrabold">Plan mensual · El Patio</p></div><div className="rounded-lg bg-foreground px-2.5 py-1.5 text-[10px] font-black text-background">02:14:36</div></div>
          <div className="mt-3 flex items-center justify-between"><span className="text-[9px] font-semibold text-muted-foreground">¡Quedan 5 planes!</span><span className="rounded-lg bg-primary px-3 py-2 text-[9px] font-extrabold text-primary-foreground">Comprar ahora</span></div>
        </div>
        <div className="mt-5"><SectionTitle>Todos los restaurantes</SectionTitle></div>
        <div className="mt-3 space-y-3"><RestaurantCard image={lunchImage} name="La Cuchara de San Blas" zone="Frente a la PUCE" price="$2,80" plans="Semanal · Quincenal · Mensual" /><RestaurantCard image={veggieImage} name="Verde Limón" zone="La Floresta" price="$3,25" plans="Semanal · Mensual" /></div>
      </div>
      <NavBar active="Restaurantes" />
    </div>
  </Phone>
);

const SettingsRow = ({ icon: Icon, label, danger = false }: { icon: IconType; label: string; danger?: boolean }) => (
  <div className={`grid grid-cols-[32px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-1.5 ${danger ? "text-danger" : "text-foreground"}`}>
    <div className={`grid h-8 w-8 place-items-center rounded-[10px] ${danger ? "bg-danger-soft" : "bg-accent text-primary"}`}><Icon size={14} /></div><span className="text-[10px] font-bold">{label}</span>{!danger && <ChevronRight size={14} className="text-muted-foreground" />}
  </div>
);

const DinerSettings = () => (
  <Phone title="Comensal · Ajustes">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <h2 className="mt-4 text-[23px] font-black">Ajustes</h2>
        <div className="mt-4 flex flex-col items-center rounded-[24px] bg-accent/70 p-3"><div className="relative"><Avatar initials="CM" large /><div className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full border-2 border-accent bg-primary text-primary-foreground"><Pencil size={12} /></div></div><h3 className="mt-2 text-sm font-black">Carlos Mejía</h3><p className="mt-1 text-[9px] text-muted-foreground">carlos.mejia@email.com</p></div>
        <p className="mb-1 mt-4 text-[9px] font-black text-muted-foreground">MI CUENTA</p>
        <SettingsRow icon={UserRound} label="Editar nombre" /><SettingsRow icon={Mail} label="Cambiar correo" /><SettingsRow icon={LockKeyhole} label="Cambiar contraseña" /><SettingsRow icon={CreditCard} label="Métodos de pago" />
        <p className="mb-1 mt-3 text-[9px] font-black text-muted-foreground">PREFERENCIAS Y SOPORTE</p>
        <SettingsRow icon={Bell} label="Notificaciones" /><SettingsRow icon={CircleHelp} label="Ayuda y soporte" /><SettingsRow icon={LockKeyhole} label="Términos y privacidad" /><SettingsRow icon={LogOut} label="Cerrar sesión" danger />
      </div>
      <NavBar active="Ajustes" />
    </div>
  </Phone>
);

const QuickAction = ({ icon: Icon, label }: { icon: IconType; label: string }) => (
  <div className="flex min-w-0 flex-col items-center gap-2 rounded-2xl bg-card px-2 py-3 shadow-soft"><div className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-primary"><Icon size={18} /></div><span className="text-center text-[9px] font-extrabold leading-tight">{label}</span></div>
);

const OwnerHome = () => (
  <Phone title="Dueño · Home">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <header className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"><div className="flex min-w-0 items-center gap-3"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-foreground text-background"><Utensils size={20} /></div><div className="min-w-0"><p className="truncate text-[9px] font-bold text-muted-foreground">LA CUCHARA DE SAN BLAS</p><h2 className="truncate text-xl font-black">¡Hola, María!</h2></div></div><Bell size={19} /></header>
        <div className="relative mt-6 overflow-hidden rounded-[24px] bg-primary p-5 text-primary-foreground shadow-brand"><div className="absolute -right-7 -top-8 h-28 w-28 rounded-full bg-lavender/30" /><p className="relative text-[9px] font-bold text-primary-soft">RESUMEN DE SEPTIEMBRE</p><p className="relative mt-3 text-[32px] font-black leading-none">48 <span className="text-[17px]">clientes activos</span></p><div className="relative mt-3 flex items-center justify-between"><div><p className="text-xl font-black">$1.320</p><p className="text-[9px] text-primary-soft">vendidos este mes</p></div><div className="flex items-center gap-1 rounded-xl bg-background px-3 py-2.5 text-[9px] font-extrabold text-foreground"><Plus size={14} /> Agregar cliente</div></div></div>
        <div className="mt-5"><SectionTitle>Accesos rápidos</SectionTitle></div>
        <div className="mt-3 grid grid-cols-3 gap-3"><QuickAction icon={CreditCard} label="Cobrar" /><QuickAction icon={ScanLine} label="Escanear QR" /><QuickAction icon={Utensils} label="Registrar consumo" /></div>
        <div className="mt-6"><SectionTitle action={<span className="text-[9px] font-bold text-primary">Ver todo</span>}>Historial de transacciones</SectionTitle></div>
        <div className="mt-2 divide-y divide-border">
          <Transaction icon={UserRound} name="Carlos Mejía" detail="Almuerzo consumido · 13:12" value="Validado" positive />
          <Transaction icon={ShoppingBag} name="Valentina Ortiz" detail="Plan mensual · 12:44" value="$52,00" positive />
          <Transaction icon={UserRound} name="Mateo Cevallos" detail="Plan semanal · 11:58" value="Pendiente" />
          <Transaction icon={Utensils} name="Sofía Almeida" detail="Almuerzo consumido · 11:35" value="Validado" positive />
        </div>
        <div className="mt-4 rounded-2xl bg-muted p-4"><div className="flex items-center justify-between"><div><p className="text-[9px] font-bold text-muted-foreground">HOY</p><p className="mt-1 text-sm font-black">37 almuerzos servidos</p></div><div className="text-right"><p className="text-lg font-black text-primary">74%</p><p className="text-[8px] text-muted-foreground">de la meta diaria</p></div></div></div>
      </div>
      <NavBar active="Home" owner />
    </div>
  </Phone>
);

const Toggle = ({ on = true }: { on?: boolean }) => <div className={`flex h-6 w-11 items-center rounded-full p-1 ${on ? "justify-end bg-primary" : "justify-start bg-muted-foreground/30"}`}><i className="h-4 w-4 rounded-full bg-background shadow-soft" /></div>;

const PlanCard = ({ type, lunches, price, days, clients, on = true }: { type: string; lunches: number; price: string; days: number; clients: number; on?: boolean }) => (
  <div className="rounded-2xl bg-card p-4 shadow-soft"><div className="flex items-center justify-between"><div><span className="rounded-lg bg-accent px-2 py-1 text-[8px] font-black text-primary">{type.toUpperCase()}</span><p className="mt-2 text-lg font-black">{lunches} almuerzos</p></div><Toggle on={on} /></div><div className="mt-3 grid grid-cols-3 border-t border-border pt-3"><div><p className="text-[8px] text-muted-foreground">Precio</p><p className="mt-1 text-xs font-extrabold">{price}</p></div><div><p className="text-[8px] text-muted-foreground">Vigencia</p><p className="mt-1 text-xs font-extrabold">{days} días</p></div><div><p className="text-[8px] text-muted-foreground">Clientes</p><p className="mt-1 text-xs font-extrabold">{clients}</p></div></div></div>
);

const OwnerPlans = () => (
  <Phone title="Dueño · Planes">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <div className="mt-3 flex items-center justify-between"><div><p className="text-[10px] font-semibold text-muted-foreground">LA CUCHARA DE SAN BLAS</p><h2 className="mt-1 text-[23px] font-black">Mis planes</h2></div><div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><Plus size={18} /></div></div>
        <div className="mt-5 space-y-3"><PlanCard type="Semanal" lunches={5} price="$15,00" days={7} clients={12} /><PlanCard type="Quincenal" lunches={10} price="$28,00" days={18} clients={19} /><PlanCard type="Mensual" lunches={20} price="$52,00" days={35} clients={31} /></div>
        <div className="mt-5 rounded-[22px] border border-primary/20 bg-accent/60 p-4"><div className="flex items-center gap-2"><Sparkles size={16} className="text-primary" /><h3 className="text-sm font-black">Plan personalizado</h3></div><p className="mt-1 text-[9px] text-muted-foreground">Arma una opción especial para tus clientes.</p><p className="mt-4 text-[8px] font-bold text-muted-foreground">DÍAS INCLUIDOS</p><div className="mt-2 flex justify-between">{["L", "M", "M", "J", "V", "S"].map((d, i) => <span key={`${d}-${i}`} className={`grid h-8 w-8 place-items-center rounded-lg text-[9px] font-black ${i < 5 ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground"}`}>{d}</span>)}</div><div className="mt-4 grid grid-cols-3 gap-2">{[["Almuerzos", "12"], ["Precio", "$32"], ["Expira", "21 días"]].map(([a,b]) => <div key={a} className="rounded-xl bg-background p-2.5"><p className="text-[7px] text-muted-foreground">{a}</p><p className="mt-1 text-[10px] font-black">{b}</p></div>)}</div><div className="mt-4 rounded-xl bg-foreground py-3 text-center text-[10px] font-bold text-background">Crear plan</div></div>
      </div>
      <NavBar active="Planes" owner />
    </div>
  </Phone>
);

const Dish = ({ title, name, image, soldOut = false }: { title: string; name: string; image: string; soldOut?: boolean }) => (
  <div className={`overflow-hidden rounded-2xl bg-card shadow-soft ${soldOut ? "opacity-60" : ""}`}><img src={image} alt={name} loading="lazy" width={896} height={752} className="h-[90px] w-full object-cover" /><div className="p-3"><div className="flex items-center justify-between"><span className="text-[8px] font-black text-primary">{title.toUpperCase()}</span>{soldOut && <span className="rounded-md bg-danger-soft px-1.5 py-1 text-[7px] font-black text-danger">AGOTADO</span>}</div><p className="mt-1 text-[11px] font-extrabold">{name}</p><div className="mt-2 flex items-center gap-1 text-[8px] text-muted-foreground"><Check size={11} /> Disponible hoy</div></div></div>
);

const OwnerMenu = () => (
  <Phone title="Dueño · Menú del día">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <div className="mt-3 flex items-center justify-between"><div><p className="text-[10px] font-semibold text-muted-foreground">MENÚ DEL DÍA</p><h2 className="mt-1 text-[22px] font-black">Miércoles 30</h2><p className="text-[10px] text-muted-foreground">Septiembre · 2026</p></div><div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><CalendarDays size={20} /></div></div>
        <div className="mt-5 grid grid-cols-2 gap-3"><Dish title="Sopa" name="Locro de papa" image={soupImage} /><Dish title="Segundo" name="Pollo a la plancha" image={lunchImage} /><Dish title="Opción veggie" name="Bowl de quinoa" image={veggieImage} /><Dish title="Postre" name="Higos con queso" image={soupImage} soldOut /></div>
        <div className="mt-4 rounded-2xl bg-muted p-3"><div className="flex items-center justify-between"><div><p className="text-[8px] font-bold text-muted-foreground">BEBIDA DE HOY</p><p className="mt-1 text-[11px] font-extrabold">Jugo de naranjilla</p></div><Toggle /></div></div>
        <div className="mt-5 flex items-center justify-between"><h3 className="text-sm font-black">Menú de la semana</h3><span className="text-[9px] font-bold text-primary">Editar</span></div>
        <div className="mt-3 flex gap-2">{[["LUN", "Seco de pollo"], ["MAR", "Fritada"], ["MIÉ", "Pollo grill"]].map(([day,meal],i) => <div key={day} className={`w-[104px] shrink-0 rounded-xl p-3 ${i === 2 ? "bg-primary text-primary-foreground" : "bg-card shadow-soft"}`}><p className={`text-[8px] font-black ${i === 2 ? "text-primary-soft" : "text-muted-foreground"}`}>{day}</p><p className="mt-2 text-[9px] font-extrabold leading-tight">{meal}</p></div>)}</div>
        <div className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-foreground text-xs font-extrabold text-background"><Eye size={16} /> Publicar menú</div>
      </div>
      <NavBar active="Menú" owner />
    </div>
  </Phone>
);

const OwnerSettings = () => (
  <Phone title="Dueño · Ajustes">
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 overflow-hidden px-5">
        <h2 className="mt-4 text-[23px] font-black">Ajustes</h2>
        <div className="mt-4 flex items-center gap-4 rounded-[24px] bg-foreground p-4 text-background"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><Utensils size={24} /></div><div className="min-w-0"><p className="text-[8px] font-bold text-lavender">MI RESTAURANTE</p><h3 className="mt-1 text-sm font-black leading-tight">La Cuchara de San Blas</h3><p className="mt-1 text-[8px] text-card-dark-muted">Editar perfil <Pencil size={8} className="inline" /></p></div></div>
        <p className="mb-1 mt-4 text-[9px] font-black text-muted-foreground">NEGOCIO</p>
        <SettingsRow icon={Store} label="Datos del restaurante" /><SettingsRow icon={Clock3} label="Dirección y horarios" /><SettingsRow icon={Pencil} label="Editar nombre" /><SettingsRow icon={CreditCard} label="Métodos de cobro" />
        <p className="mb-1 mt-3 text-[9px] font-black text-muted-foreground">CUENTA Y SOPORTE</p>
        <SettingsRow icon={Mail} label="Cambiar correo" /><SettingsRow icon={LockKeyhole} label="Cambiar contraseña" /><SettingsRow icon={Bell} label="Notificaciones" /><SettingsRow icon={CircleHelp} label="Ayuda y soporte" /><SettingsRow icon={LogOut} label="Cerrar sesión" danger />
      </div>
      <NavBar active="Ajustes" owner />
    </div>
  </Phone>
);

function ScreenGroup({ eyebrow, title, count, children }: { eyebrow: string; title: string; count: number; children: React.ReactNode }) {
  return (
    <section className="min-w-max">
      <div className="mb-8 flex items-end justify-between border-b border-showcase-border pb-5">
        <div><p className="text-[11px] font-black uppercase text-primary">{eyebrow}</p><h2 className="mt-2 text-3xl font-black text-showcase-foreground">{title}</h2></div>
        <span className="rounded-full bg-showcase-pill px-3 py-1.5 text-xs font-bold text-showcase-muted">{count} {count === 1 ? "pantalla" : "pantallas"}</span>
      </div>
      <div className="flex gap-10">{children}</div>
    </section>
  );
}

function BocadooShowcase() {
  return (
    <main className="min-h-screen overflow-x-auto bg-showcase px-10 py-12 font-sans md:px-16 md:py-16">
      <header className="mb-16 flex min-w-max items-end justify-between gap-20">
        <div><Logo /><p className="mt-6 max-w-md text-sm leading-relaxed text-showcase-muted">Sistema visual de la app móvil para planes de almuerzo prepagados en Quito.</p></div>
        <div className="flex items-center gap-3"><span className="h-4 w-4 rounded-full bg-showcase-muted" /><span className="h-4 w-4 rounded-full bg-phone" /><span className="h-4 w-4 rounded-full bg-background" /><span className="h-4 w-4 rounded-full bg-primary" /><span className="h-4 w-4 rounded-full bg-lavender" /></div>
      </header>
      <div className="flex min-w-max items-start gap-24 pb-16">
        <ScreenGroup eyebrow="Acceso" title="Pantalla compartida" count={1}><LoginScreen /></ScreenGroup>
        <ScreenGroup eyebrow="Experiencia 01" title="Comensal" count={3}><DinerHome /><Marketplace /><DinerSettings /></ScreenGroup>
        <ScreenGroup eyebrow="Experiencia 02" title="Dueño de restaurante" count={4}><OwnerHome /><OwnerPlans /><OwnerMenu /><OwnerSettings /></ScreenGroup>
      </div>
    </main>
  );
}