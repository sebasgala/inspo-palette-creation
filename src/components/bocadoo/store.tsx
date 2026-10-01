import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

// Estado simulado del prototipo: no hay backend, todo vive en memoria y se guarda en localStorage.

export type AppUser = { id: string; name: string; username: string; email: string; phone: string };
export type Plan = {
  id: string;
  type: string;
  name: string;
  lunches: number;
  price: number;
  days: number;
  clients: number;
  active: boolean;
};
/** Cliente del restaurante. Sin `userId` es un "Contacto sin plan" agregado a mano; sin `planId` aún no tiene plan. */
export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  userId?: string;
  planId?: string;
  lunchesLeft: number;
};
export type TxnIcon = "user" | "bag" | "utensils";
export type Txn = {
  id: string;
  icon: TxnIcon;
  name: string;
  detail: string;
  value: string;
  positive: boolean;
};
export type PosLine = { name: string; qty: number; price: number; isLunch: boolean };

export const APP_USERS: AppUser[] = [
  {
    id: "u1",
    name: "Carlos Mejía",
    username: "carlos.mejia",
    email: "carlos.mejia@email.com",
    phone: "0991234567",
  },
  {
    id: "u2",
    name: "Valentina Ortiz",
    username: "valentina.ortiz",
    email: "valentina.ortiz@email.com",
    phone: "0998765432",
  },
  {
    id: "u3",
    name: "Mateo Cevallos",
    username: "mateo.cevallos",
    email: "mateo.c@email.com",
    phone: "0981112233",
  },
  {
    id: "u4",
    name: "Sofía Almeida",
    username: "sofia.almeida",
    email: "sofia.almeida@email.com",
    phone: "0973334455",
  },
  {
    id: "u5",
    name: "Camila Rivas",
    username: "camila.rivas",
    email: "camila.rivas@email.com",
    phone: "0965556677",
  },
  {
    id: "u6",
    name: "Andrés Paredes",
    username: "andres.paredes",
    email: "andres.p@email.com",
    phone: "0957778899",
  },
];

/** Comensal con sesión iniciada en la experiencia de comensal. */
export const DINER_USER_ID = "u1";
export const DINER_ZONES = [
  "Frente a la PUCE",
  "La Floresta",
  "La Mariscal",
  "Centro Histórico",
  "Cumbayá",
];

type State = {
  plans: Plan[];
  clients: Client[];
  transactions: Txn[];
  activeClients: number;
  sales: number;
  servedToday: number;
  ticket: number;
  dinerZone: string | null;
};

const initialState: State = {
  plans: [
    {
      id: "p-semanal",
      type: "Semanal",
      name: "Plan semanal",
      lunches: 5,
      price: 15,
      days: 7,
      clients: 12,
      active: true,
    },
    {
      id: "p-quincenal",
      type: "Quincenal",
      name: "Plan quincenal",
      lunches: 10,
      price: 28,
      days: 18,
      clients: 19,
      active: true,
    },
    {
      id: "p-mensual",
      type: "Mensual",
      name: "Plan mensual",
      lunches: 20,
      price: 52,
      days: 35,
      clients: 31,
      active: true,
    },
  ],
  clients: [
    {
      id: "c1",
      name: "Carlos Mejía",
      email: "carlos.mejia@email.com",
      phone: "0991234567",
      userId: "u1",
      planId: "p-mensual",
      lunchesLeft: 14,
    },
    {
      id: "c2",
      name: "Valentina Ortiz",
      email: "valentina.ortiz@email.com",
      phone: "0998765432",
      userId: "u2",
      planId: "p-mensual",
      lunchesLeft: 20,
    },
    {
      id: "c3",
      name: "Sofía Almeida",
      email: "sofia.almeida@email.com",
      phone: "0973334455",
      userId: "u4",
      planId: "p-quincenal",
      lunchesLeft: 7,
    },
    {
      id: "c4",
      name: "Diego Salazar",
      email: "diego.salazar@gmail.com",
      phone: "0987654321",
      lunchesLeft: 0,
    },
  ],
  transactions: [
    {
      id: "t1",
      icon: "user",
      name: "Carlos Mejía",
      detail: "Almuerzo consumido · 13:12",
      value: "Validado",
      positive: true,
    },
    {
      id: "t2",
      icon: "bag",
      name: "Valentina Ortiz",
      detail: "Plan mensual · 12:44",
      value: "$52,00",
      positive: true,
    },
    {
      id: "t3",
      icon: "user",
      name: "Mateo Cevallos",
      detail: "Plan semanal · 11:58",
      value: "Pendiente",
      positive: false,
    },
    {
      id: "t4",
      icon: "utensils",
      name: "Sofía Almeida",
      detail: "Almuerzo consumido · 11:35",
      value: "Validado",
      positive: true,
    },
  ],
  activeClients: 48,
  sales: 1320,
  servedToday: 37,
  ticket: 148,
  dinerZone: null,
};

const STORAGE_KEY = "bocadoo-demo-v1";
export const DAILY_GOAL = 50;

export const money = (n: number) => `$${n.toFixed(2).replace(".", ",")}`;
export const moneyShort = (n: number) =>
  `$${Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
export const initialsOf = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("") || "?";
export const normalizePhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("593") ? `0${digits.slice(3)}` : digits;
};
export const normalizeEmail = (email: string) => email.trim().toLowerCase();

const newId = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
const now = () =>
  new Date().toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit", hour12: false });

export type ChargeTarget = { kind: "user"; user: AppUser } | { kind: "client"; client: Client };

function useBocadooState() {
  const [state, setState] = useState<State>(initialState);
  const booted = useRef(false);
  // Evita que el efecto de guardado sobrescriba el localStorage recién leído con el estado
  // inicial "viejo" que todavía ve ese mismo ciclo de render, antes de que el setState de
  // abajo se aplique.
  const skipNextPersist = useRef(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        skipNextPersist.current = true;
        setState({ ...initialState, ...(JSON.parse(raw) as Partial<State>) });
      }
    } catch {
      // Sin almacenamiento disponible: se usa el estado inicial.
    }
    booted.current = true;
  }, []);

  useEffect(() => {
    if (!booted.current) return;
    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignorado: el prototipo sigue funcionando en memoria.
    }
  }, [state]);

  const findAppUser = (email: string, phone: string) => {
    const e = normalizeEmail(email);
    const p = normalizePhone(phone);
    return APP_USERS.find(
      (u) =>
        (e && normalizeEmail(u.email) === e) || (p.length >= 9 && normalizePhone(u.phone) === p),
    );
  };

  const findContact = (email: string, phone: string) => {
    const e = normalizeEmail(email);
    const p = normalizePhone(phone);
    return state.clients.find(
      (c) =>
        !c.userId &&
        ((e && normalizeEmail(c.email) === e) || (p.length >= 9 && normalizePhone(c.phone) === p)),
    );
  };

  const clientForUser = (userId: string) => state.clients.find((c) => c.userId === userId);

  const addContact = (data: { name: string; email: string; phone: string }) => {
    const client: Client = {
      id: newId("c"),
      name: data.name.trim(),
      email: normalizeEmail(data.email),
      phone: normalizePhone(data.phone),
      lunchesLeft: 0,
    };
    setState((s) => ({ ...s, clients: [client, ...s.clients] }));
    return client;
  };

  /** Devuelve false si el usuario ya era cliente del restaurante. */
  const linkUser = (user: AppUser) => {
    if (clientForUser(user.id)) return false;
    const client: Client = {
      id: newId("c"),
      name: user.name,
      email: user.email,
      phone: user.phone,
      userId: user.id,
      lunchesLeft: 0,
    };
    setState((s) => ({ ...s, clients: [client, ...s.clients] }));
    return true;
  };

  const chargePlan = (target: ChargeTarget, plan: Plan) => {
    setState((s) => {
      const existing =
        target.kind === "client"
          ? s.clients.find((c) => c.id === target.client.id)
          : s.clients.find((c) => c.userId === target.user.id);
      const wasActive = Boolean(existing?.planId);
      const updated: Client = existing
        ? { ...existing, planId: plan.id, lunchesLeft: existing.lunchesLeft + plan.lunches }
        : target.kind === "user"
          ? {
              id: newId("c"),
              name: target.user.name,
              email: target.user.email,
              phone: target.user.phone,
              userId: target.user.id,
              planId: plan.id,
              lunchesLeft: plan.lunches,
            }
          : { ...target.client, planId: plan.id, lunchesLeft: plan.lunches };
      const clients = existing
        ? s.clients.map((c) => (c.id === existing.id ? updated : c))
        : [updated, ...s.clients];
      return {
        ...s,
        clients,
        plans: s.plans.map((p) => (p.id === plan.id ? { ...p, clients: p.clients + 1 } : p)),
        activeClients: s.activeClients + (wasActive ? 0 : 1),
        sales: s.sales + plan.price,
        transactions: [
          {
            id: newId("t"),
            icon: "bag" as const,
            name: updated.name,
            detail: `${plan.name} · ${now()}`,
            value: money(plan.price),
            positive: true,
          },
          ...s.transactions,
        ],
      };
    });
  };

  const discountLunch = (clientId: string) => {
    setState((s) => {
      const client = s.clients.find((c) => c.id === clientId);
      if (!client || client.lunchesLeft <= 0) return s;
      return {
        ...s,
        clients: s.clients.map((c) =>
          c.id === clientId ? { ...c, lunchesLeft: c.lunchesLeft - 1 } : c,
        ),
        servedToday: s.servedToday + 1,
        transactions: [
          {
            id: newId("t"),
            icon: "utensils" as const,
            name: client.name,
            detail: `Almuerzo consumido · ${now()}`,
            value: "Validado",
            positive: true,
          },
          ...s.transactions,
        ],
      };
    });
  };

  const posSale = (lines: PosLine[]) => {
    const total = lines.reduce((sum, l) => sum + l.qty * l.price, 0);
    const lunches = lines.reduce((sum, l) => sum + (l.isLunch ? l.qty : 0), 0);
    const ticket = state.ticket;
    setState((s) => ({
      ...s,
      sales: s.sales + total,
      servedToday: s.servedToday + lunches,
      ticket: s.ticket + 1,
      transactions: [
        {
          id: newId("t"),
          icon: "utensils" as const,
          name: `Venta directa · Ticket #${String(s.ticket).padStart(4, "0")}`,
          detail: `${lunches} ${lunches === 1 ? "almuerzo" : "almuerzos"} · ${now()}`,
          value: money(total),
          positive: true,
        },
        ...s.transactions,
      ],
    }));
    return { ticket, total };
  };

  const addPlan = (plan: Omit<Plan, "id" | "clients" | "active">) =>
    setState((s) => ({
      ...s,
      plans: [...s.plans, { ...plan, id: newId("p"), clients: 0, active: true }],
    }));

  const togglePlan = (id: string) =>
    setState((s) => ({
      ...s,
      plans: s.plans.map((p) => (p.id === id ? { ...p, active: !p.active } : p)),
    }));

  const setDinerZone = (zone: string) => setState((s) => ({ ...s, dinerZone: zone }));

  return {
    ...state,
    findAppUser,
    findContact,
    clientForUser,
    addContact,
    linkUser,
    chargePlan,
    discountLunch,
    posSale,
    addPlan,
    togglePlan,
    setDinerZone,
  };
}

type Store = ReturnType<typeof useBocadooState>;

const BocadooContext = createContext<Store | null>(null);

export function BocadooProvider({ children }: { children: ReactNode }) {
  const store = useBocadooState();
  return <BocadooContext.Provider value={store}>{children}</BocadooContext.Provider>;
}

export function useBocadoo() {
  const store = useContext(BocadooContext);
  if (!store) throw new Error("useBocadoo debe usarse dentro de BocadooProvider");
  return store;
}
