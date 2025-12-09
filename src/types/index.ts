import { ReactNode } from "react";

export interface NavbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface Toast {
  id: string | number;
  title: string;
  message: string;
  type?: "success" | "danger" | "info" | "warning"; 
}

export interface ToastsContainerProps {
  toasts: Toast[];
  removeToast: (id: string | number) => void;
}

export interface CurvyEdgeProps {
  color?: string;
  className?: string;
}

export interface LayoutProps {
  children: ReactNode;
  toasts: Toast[]; 
  removeToast: ToastsContainerProps["removeToast"]; 
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  subscribeEmail: string;
  setSubscribeEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubscribe: () => void;
}

export interface Product {
  id: string;
  title: string;      // Use `title` consistently
  price: string;
  image: string;
  phone?: string;      // optional phone
  email?: string;      // optional email
  author?: string;     // optional author
}


// ✅ Define type for services
export interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface SellCropProps {
  onCreated?: (p: Product) => void;
  showToast?: (t: Toast) => void;
}

export interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
}

export interface ProductGridProps {
  products?: Product[];           
  onDelete?: (id: string) => void;
  search?: string;
}

export interface FooterProps {
  subscribeEmail: string;
  setSubscribeEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubscribe: () => void;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  img: string;
}

export interface MarketplaceProps {
  products?: Product[]; // merged static + db from App
  search?: string;
  onDelete?: (id: string) => void;
  onCreated?: (p: Product) => void;
  showToast?: (t: Toast) => void;
}