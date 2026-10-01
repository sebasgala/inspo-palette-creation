import { useNavigate } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import {
  Bell,
  Check,
  CircleHelp,
  CreditCard,
  Eye,
  LocateFixed,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Pencil,
  QrCode,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Star,
  UserRound,
  Utensils,
} from "lucide-react";
import { useState } from "react";

import lunchImage from "@/assets/bocadoo-lunch.jpg";
import veggieImage from "@/assets/bocadoo-veggie.jpg";

import { APP_USERS, DINER_USER_ID, DINER_ZONES, money, useBocadoo } from "./store";
import {
  Avatar,
  BottomSheet,
  Logo,
  ModalHeader,
  NavBar,
  Overlay,
  PrimaryButton,
  SectionTitle,
  SettingsRow,
  Transaction,
} from "./ui";

export function LoginScreen() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"diner" | "owner">("diner");
  const enter = () => navigate({ to: role === "diner" ? "/app/comensal" : "/app/dueno" });
  const tab = (value: "diner" | "owner", label: string) => (
    <button
      type="button"
      onClick={() => setRole(value)}
      className={
        role === value
          ? "rounded-[10px] bg-primary px-2 py-2.5 text-center text-primary-foreground shadow-soft"
          : "px-2 py-2.5 text-center text-muted-foreground"
      }
    >
      {label}
    </button>
  );
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden px-6 pb-8">
      <div className="absolute -right-16 -top-24 h-52 w-52 rounded-full bg-lavender" />
      <div className="absolute -left-24 top-24 h-44 w-44 rounded-full border-[28px] border-accent/70" />
      <div className="relative mt-12 flex justify-center">
        <Logo />
      </div>
      <div className="relative mt-8 text-center">
        <h1 className="text-[30px] font-black leading-tight text-foreground">
          Tu almuerzo,
          <br />
          <span className="text-primary">sin cartulinas.</span>
        </h1>
        <p className="mt-2 text-xs font-medium text-muted-foreground">
          Planes simples. Almuerzos sin complicaciones.
        </p>
      </div>
      <div className="relative mt-7 rounded-[26px] bg-card p-4 shadow-card">
        <div className="grid grid-cols-2 rounded-xl bg-muted p-1 text-[11px] font-bold">
          {tab("diner", "Soy comensal")}
          {tab("owner", "Tengo un restaurante")}
        </div>
        <label className="mt-5 block text-[10px] font-bold text-muted-foreground">
          CORREO ELECTRÓNICO
        </label>
        <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-muted px-4 text-xs text-foreground">
          <Mail size={16} className="text-primary" />{" "}
          {role === "diner" ? "carlos@email.com" : "maria@lacuchara.ec"}
        </div>
        <label className="mt-4 block text-[10px] font-bold text-muted-foreground">CONTRASEÑA</label>
        <div className="mt-2 flex h-12 items-center gap-3 rounded-xl bg-muted px-4 text-xs text-foreground">
          <LockKeyhole size={16} className="text-primary" />
          <span className="tracking-[4px]">••••••••</span>
          <Eye size={15} className="ml-auto text-muted-foreground" />
        </div>
        <div className="mt-3 text-right text-[10px] font-bold text-primary">
          ¿Olvidaste tu contraseña?
        </div>
        <button
          type="button"
          onClick={enter}
          className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background shadow-soft"
        >
          Iniciar sesión
        </button>
        <div className="my-4 flex items-center gap-3 text-[9px] text-muted-foreground">
          <i className="h-px flex-1 bg-border" />o continúa con
          <i className="h-px flex-1 bg-border" />
        </div>
        <button
          type="button"
          onClick={enter}
          className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background text-xs font-bold text-foreground"
        >
          <span className="text-base font-black text-google">G</span>Continuar con Google
        </button>
      </div>
      <div className="mt-auto text-center text-xs text-muted-foreground">
        ¿Primera vez? <span className="font-extrabold text-primary">Crear cuenta</span>
      </div>
    </div>
  );
}

const DINER_PLAN_TOTAL = 20;
const DINER_LUNCH_PRICE = 2.8;

function QrModal({ lunchesLeft, onClose }: { lunchesLeft: number; onClose: () => void }) {
  const user = APP_USERS.find((u) => u.id === DINER_USER_ID)!;
  return (
    <Overlay onClose={onClose}>
      <div className="m-auto w-[336px] max-w-[calc(100%-32px)] rounded-[28px] bg-background p-5 shadow-card animate-in zoom-in-95 duration-200">
        <ModalHeader
          icon={QrCode}
          eyebrow="MI CÓDIGO QR"
          title="La Cuchara de San Blas"
          onClose={onClose}
        />
        <div className="mt-5 grid place-items-center rounded-[24px] bg-accent/60 p-5">
          <div className="relative rounded-2xl bg-background p-4 text-card-dark shadow-soft">
            <QRCodeSVG
              value={`bocadoo://validar?usuario=${user.username}&restaurante=la-cuchara-de-san-blas&plan=mensual`}
              size={176}
              level="H"
              bgColor="transparent"
              fgColor="currentColor"
            />
            <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border-4 border-background bg-primary text-primary-foreground">
              <Utensils size={16} strokeWidth={2.8} />
            </div>
          </div>
          <p className="mt-4 text-sm font-black">@{user.username}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">
            Plan mensual · {lunchesLeft} almuerzos disponibles
          </p>
        </div>
        <p className="mt-4 text-center text-[10px] text-muted-foreground">
          Muestra este código en caja para descontar tu almuerzo.
        </p>
        <PrimaryButton onClick={onClose}>
          <Check size={16} /> Listo
        </PrimaryButton>
      </div>
    </Overlay>
  );
}

export function DinerHomeScreen({
  initialQrOpen = false,
}: {
  initialQrOpen?: boolean | undefined;
}) {
  const { clientForUser } = useBocadoo();
  const [qrOpen, setQrOpen] = useState(initialQrOpen);
  const lunchesLeft = clientForUser(DINER_USER_ID)?.lunchesLeft ?? 14;
  const used = Math.max(DINER_PLAN_TOTAL - lunchesLeft, 0);
  const usedPct = Math.min(Math.round((used / DINER_PLAN_TOTAL) * 100), 100);
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5">
        <header className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold text-muted-foreground">
              MIÉRCOLES, 30 DE SEPTIEMBRE
            </p>
            <h2 className="mt-1 truncate text-[23px] font-black">¡Hola, Carlos!</h2>
          </div>
          <Avatar initials="CM" />
        </header>
        <div className="mt-6">
          <SectionTitle>Mis planes</SectionTitle>
        </div>
        <div className="relative mt-3 pb-5">
          <div className="absolute inset-x-3 bottom-0 top-7 rounded-[23px] bg-lavender opacity-70" />
          <div className="relative overflow-hidden rounded-[23px] bg-card-dark p-5 text-card-dark-foreground shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Utensils size={16} />
                </div>
                <div>
                  <p className="text-[12px] font-bold">La Cuchara de San Blas</p>
                  <p className="text-[8px] text-card-dark-muted">Plan mensual</p>
                </div>
              </div>
              <Sparkles size={18} className="text-lavender" />
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <p className="text-[29px] font-black leading-none">
                  {lunchesLeft} <span className="text-[15px]">almuerzos</span>
                </p>
                <p className="mt-1.5 text-[9px] text-card-dark-muted">Vence el 30/10</p>
              </div>
              <p className="text-sm font-bold text-lavender">
                ≈ {money(lunchesLeft * DINER_LUNCH_PRICE)}
              </p>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/20">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${usedPct}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[8px] text-card-dark-muted">
              <span>
                {used} usados de {DINER_PLAN_TOTAL}
              </span>
              <span>{100 - usedPct}% disponible</span>
            </div>
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-background px-3 py-2.5 text-[11px] font-extrabold text-foreground"
            >
              <QrCode size={16} /> Mostrar QR
            </button>
          </div>
        </div>
        <div className="mt-5">
          <SectionTitle
            action={<span className="text-[9px] font-bold text-primary">Ver todo</span>}
          >
            Historial de transacciones
          </SectionTitle>
        </div>
        <div className="mt-1 divide-y divide-border pb-4">
          <Transaction
            icon={Utensils}
            name="La Cuchara de San Blas"
            detail="Almuerzo consumido · Hoy, 13:12"
            value="− 1"
          />
          <Transaction
            icon={ShoppingBag}
            name="Rincón Manabita"
            detail="Compra plan quincenal · Ayer"
            value="$36,00"
          />
          <Transaction
            icon={Utensils}
            name="La Cuchara de San Blas"
            detail="Almuerzo consumido · Lun, 12:48"
            value="− 1"
          />
        </div>
      </div>
      <NavBar active="Home" />
      {qrOpen && <QrModal lunchesLeft={lunchesLeft} onClose={() => setQrOpen(false)} />}
    </div>
  );
}

const RestaurantCard = ({
  image,
  name,
  zone,
  price,
  plans,
}: {
  image: string;
  name: string;
  zone: string;
  price: string;
  plans: string;
}) => (
  <div className="grid grid-cols-[86px_minmax(0,1fr)] gap-3 rounded-2xl bg-card p-2.5 shadow-soft">
    <img
      src={image}
      alt="Almuerzo del restaurante"
      loading="lazy"
      width={896}
      height={752}
      className="h-[82px] w-[86px] rounded-xl object-cover"
    />
    <div className="min-w-0 py-1">
      <div className="flex items-start justify-between gap-2">
        <h4 className="truncate text-xs font-extrabold">{name}</h4>
        <span className="flex shrink-0 items-center gap-1 text-[9px] font-bold">
          <Star size={10} className="fill-primary text-primary" />
          4,8
        </span>
      </div>
      <p className="mt-1 flex items-center gap-1 text-[9px] text-muted-foreground">
        <MapPin size={10} />
        {zone}
      </p>
      <p className="mt-2 text-[10px] font-bold text-primary">{price} / almuerzo</p>
      <p className="mt-1 text-[8px] text-muted-foreground">{plans}</p>
    </div>
  </div>
);

/** Posición de cada zona en el mapa simulado (porcentajes). */
const ZONE_PINS: Record<string, { x: number; y: number; count: number }> = {
  "Frente a la PUCE": { x: 46, y: 44, count: 12 },
  "La Floresta": { x: 66, y: 58, count: 8 },
  "La Mariscal": { x: 34, y: 62, count: 15 },
  "Centro Histórico": { x: 18, y: 82, count: 10 },
  Cumbayá: { x: 86, y: 24, count: 6 },
};

function LocationModal({
  current,
  onClose,
  onConfirm,
}: {
  current: string | null;
  onClose: () => void;
  onConfirm: (zone: string) => void;
}) {
  const [zone, setZone] = useState(current ?? DINER_ZONES[0]!);
  return (
    <Overlay onClose={onClose}>
      <BottomSheet>
        <ModalHeader
          icon={MapPin}
          eyebrow="TU UBICACIÓN"
          title="¿Dónde almuerzas hoy?"
          onClose={onClose}
        />
        <div
          className="relative mt-4 h-[170px] overflow-hidden rounded-2xl bg-muted"
          style={{
            backgroundImage:
              "linear-gradient(var(--background) 3px, transparent 3px), linear-gradient(90deg, var(--background) 3px, transparent 3px)",
            backgroundSize: "34px 34px",
          }}
        >
          <div className="absolute left-[58%] top-[8%] h-14 w-20 rounded-xl bg-success/20" />
          <div className="absolute -left-6 top-[48%] h-3 w-[130%] -rotate-12 bg-background" />
          {DINER_ZONES.map((name) => {
            const pin = ZONE_PINS[name]!;
            const on = name === zone;
            return (
              <button
                type="button"
                key={name}
                aria-label={name}
                onClick={() => setZone(name)}
                className="absolute -translate-x-1/2 -translate-y-full"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                {on && (
                  <span className="absolute left-1/2 top-full h-5 w-5 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/40" />
                )}
                <MapPin
                  size={on ? 30 : 22}
                  strokeWidth={2.4}
                  className={
                    on ? "fill-primary text-background drop-shadow" : "fill-lavender text-primary"
                  }
                />
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setZone(DINER_ZONES[0]!)}
          className="mt-3 flex w-full items-center gap-3 rounded-xl bg-accent/60 px-3 py-2.5 text-left"
        >
          <LocateFixed size={16} className="text-primary" />
          <div>
            <p className="text-[11px] font-extrabold">Usar mi ubicación actual</p>
            <p className="text-[9px] text-muted-foreground">Detectada cerca de la PUCE</p>
          </div>
        </button>
        <div className="mt-3 space-y-2">
          {DINER_ZONES.map((name) => {
            const on = name === zone;
            return (
              <button
                type="button"
                key={name}
                onClick={() => setZone(name)}
                className={`grid w-full grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border px-3 py-2.5 text-left ${on ? "border-primary bg-accent/50" : "border-border"}`}
              >
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full border-2 ${on ? "border-primary" : "border-muted-foreground/40"}`}
                >
                  {on && <i className="h-2.5 w-2.5 rounded-full bg-primary" />}
                </span>
                <span className="text-[11px] font-extrabold">{name}</span>
                <span className="text-[9px] text-muted-foreground">
                  {ZONE_PINS[name]!.count} restaurantes
                </span>
              </button>
            );
          })}
        </div>
        <PrimaryButton onClick={() => onConfirm(zone)}>
          <Check size={16} /> Confirmar ubicación
        </PrimaryButton>
      </BottomSheet>
    </Overlay>
  );
}

export function MarketplaceScreen({
  initialLocationOpen = false,
}: {
  initialLocationOpen?: boolean | undefined;
}) {
  const { dinerZone, setDinerZone } = useBocadoo();
  const [locationOpen, setLocationOpen] = useState(initialLocationOpen);
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5">
        <div className="mt-3 flex items-center justify-between">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-muted-foreground">
              {dinerZone ? `CERCA DE ${dinerZone.toUpperCase()}` : "DESCUBRE CERCA DE TI"}
            </p>
            <h2 className="mt-1 text-[23px] font-black">Restaurantes</h2>
          </div>
          <button
            type="button"
            aria-label="Elegir ubicación"
            onClick={() => setLocationOpen(true)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary"
          >
            <MapPin size={18} />
          </button>
        </div>
        <div className="mt-4 flex h-11 items-center gap-3 rounded-xl bg-card px-4 shadow-soft">
          <Search size={16} className="text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">Busca por restaurante o zona</span>
          <SlidersHorizontal size={15} className="ml-auto text-primary" />
        </div>
        <div className="mt-5">
          <SectionTitle
            action={<span className="text-[9px] font-bold text-primary">Ver todas</span>}
          >
            Ofertas para ti
          </SectionTitle>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="relative h-[116px] overflow-hidden rounded-2xl">
            <img
              src={lunchImage}
              alt="Oferta de almuerzos"
              loading="lazy"
              width={896}
              height={752}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-image-overlay" />
            <div className="absolute inset-x-3 bottom-3 text-image-foreground">
              <p className="text-[9px] font-bold">La Cuchara</p>
              <p className="text-sm font-black">20 por $50</p>
            </div>
            <span className="absolute right-2 top-2 rounded-lg bg-primary px-2 py-1 text-[8px] font-black text-primary-foreground">
              −15%
            </span>
          </div>
          <div className="relative h-[116px] overflow-hidden rounded-2xl">
            <img
              src={veggieImage}
              alt="Oferta vegetariana"
              loading="lazy"
              width={896}
              height={752}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-image-overlay" />
            <div className="absolute inset-x-3 bottom-3 text-image-foreground">
              <p className="text-[9px] font-bold">Verde Limón</p>
              <p className="text-sm font-black">10 por $28</p>
            </div>
            <span className="absolute right-2 top-2 rounded-lg bg-lavender px-2 py-1 text-[8px] font-black text-foreground">
              VEGGIE
            </span>
          </div>
        </div>
        <div className="mt-4 flex gap-2 overflow-hidden">
          <span className="shrink-0 rounded-full bg-primary px-3 py-2 text-[9px] font-bold text-primary-foreground">
            Cerca de mí
          </span>
          <span className="shrink-0 rounded-full bg-muted px-3 py-2 text-[9px] font-bold">
            Precio
          </span>
          <span className="shrink-0 rounded-full bg-muted px-3 py-2 text-[9px] font-bold">
            Mejor calificados
          </span>
        </div>
        <div className="mt-4 rounded-2xl bg-accent p-3.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black text-primary">OFERTA FLASH</p>
              <p className="mt-1 text-xs font-extrabold">Plan mensual · El Patio</p>
            </div>
            <div className="rounded-lg bg-foreground px-2.5 py-1.5 text-[10px] font-black text-background">
              02:14:36
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-muted-foreground">
              ¡Quedan 5 planes!
            </span>
            <span className="rounded-lg bg-primary px-3 py-2 text-[9px] font-extrabold text-primary-foreground">
              Comprar ahora
            </span>
          </div>
        </div>
        <div className="mt-5">
          <SectionTitle>Todos los restaurantes</SectionTitle>
        </div>
        <div className="mt-3 space-y-3 pb-4">
          <RestaurantCard
            image={lunchImage}
            name="La Cuchara de San Blas"
            zone="Frente a la PUCE"
            price="$2,80"
            plans="Semanal · Quincenal · Mensual"
          />
          <RestaurantCard
            image={veggieImage}
            name="Verde Limón"
            zone="La Floresta"
            price="$3,25"
            plans="Semanal · Mensual"
          />
        </div>
      </div>
      <NavBar active="Restaurantes" />
      {locationOpen && (
        <LocationModal
          current={dinerZone}
          onClose={() => setLocationOpen(false)}
          onConfirm={(zone) => {
            setDinerZone(zone);
            setLocationOpen(false);
          }}
        />
      )}
    </div>
  );
}

export function DinerSettingsScreen() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-4">
        <h2 className="mt-4 text-[23px] font-black">Ajustes</h2>
        <div className="mt-4 flex flex-col items-center rounded-[24px] bg-accent/70 p-3">
          <div className="relative">
            <Avatar initials="CM" large />
            <div className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full border-2 border-accent bg-primary text-primary-foreground">
              <Pencil size={12} />
            </div>
          </div>
          <h3 className="mt-2 text-sm font-black">Carlos Mejía</h3>
          <p className="mt-1 text-[9px] text-muted-foreground">carlos.mejia@email.com</p>
        </div>
        <p className="mb-1 mt-4 text-[9px] font-black text-muted-foreground">MI CUENTA</p>
        <SettingsRow icon={UserRound} label="Editar nombre" />
        <SettingsRow icon={Mail} label="Cambiar correo" />
        <SettingsRow icon={LockKeyhole} label="Cambiar contraseña" />
        <SettingsRow icon={CreditCard} label="Métodos de pago" />
        <p className="mb-1 mt-3 text-[9px] font-black text-muted-foreground">
          PREFERENCIAS Y SOPORTE
        </p>
        <SettingsRow icon={Bell} label="Notificaciones" />
        <SettingsRow icon={CircleHelp} label="Ayuda y soporte" />
        <SettingsRow icon={LockKeyhole} label="Términos y privacidad" />
        <SettingsRow icon={LogOut} label="Cerrar sesión" danger to="/app" />
      </div>
      <NavBar active="Ajustes" />
    </div>
  );
}
