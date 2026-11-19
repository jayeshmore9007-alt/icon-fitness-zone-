export type Member = {
  id: string;
  name: string;
  plan: string;
  status: "active" | "due";
  nextDue: string;
};

export type Plan = {
  id: string;
  name: string;
  price: number;
};

export type Staff = {
  id: string;
  name: string;
  role: string;
  status: string;
};

export const PLANS: Plan[] = [
  { id: "monthly", name: "Monatlich", price: 1500 },
  { id: "quarterly", name: "Quartal", price: 4000 },
  { id: "half-year", name: "Halbjahr", price: 7000 },
  { id: "yearly", name: "Jahresplan", price: 12000 },
];

export const MEMBERS: Member[] = [
  { id: "m1", name: "Rohan Patil", plan: "Quartal", status: "active", nextDue: "2025-03-12" },
  { id: "m2", name: "Sneha Kulkarni", plan: "Monatlich", status: "due", nextDue: "2025-01-28" },
  { id: "m3", name: "Amit Deshmukh", plan: "Jahresplan", status: "active", nextDue: "2025-11-05" },
  { id: "m4", name: "Priya Joshi", plan: "Halbjahr", status: "active", nextDue: "2025-06-20" },
  { id: "m5", name: "Vikram Shinde", plan: "Monatlich", status: "due", nextDue: "2025-01-30" },
];

export const STAFF: Staff[] = [
  { id: "s1", name: "Kiran More", role: "Personal Trainer", status: "Personal Training (Active)" },
  { id: "s2", name: "Neha Pawar", role: "Rezeption", status: "Floor Duty" },
  { id: "s3", name: "Sachin Gaikwad", role: "Trainer", status: "Break" },
];
