import { ImageSourcePropType } from "react-native";

export interface CategoryListProps {
  categories: string[];
  active: string;
  setActive: (cat: string) => void;
}

export interface CoffeeCardProp {
  id: number;
  image: ImageSourcePropType;     
  rating: number;
  title: string;
  subtitle: string;
  price: number;
  description: string;          
}


export interface HeaderProps{
  query: string;
  setQuery: (text: string)=>void
}


export interface Notice  {
  id: string | number;
  title: string;
  body: string;
  time: string;
  unread?: boolean;
  type?: "order" | "promo" | "system";
  section?: "Today" | "Earlier";
};