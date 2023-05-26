import { Transition, VariantLabels, Variants } from 'framer-motion';

export enum SelectedPage {
  Home = 'Home',
  About = 'About',
  Projects = 'Projects',
  Contact = 'Contact',
}

export enum Locales {
  EN = 'en',
  ES = 'es',
}

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export enum Technologies {
  JavaScript = 'JavaScript',
  HTML5 = 'HTML5',
  CSS = 'CSS',
  ReactJS = 'ReactJS',
  TypeScript = 'TypeScript',
  NodeJS = 'NodeJS',
  MySQL = 'MySQL',
  MongoDB = 'MongoDB',
  TailwindCSS = 'TailwindCSS',
  Git = 'Git',
  GitHub = 'GitHub',
  PhotoShop = 'PhotoShop',
  DiscordJS = 'DiscordJS',
  ExpressJS = 'ExpressJS',
}

export type ContactInputs = {
  name: string;
  email: string;
  comments: string;
};

export interface IconInterface {
  name: string;
  icon: React.FunctionComponent;
}

export interface Project {
  name: string;
  img: string;
  preview?: string;
  technologies: Technologies[];
  repository?: string;
  WIP?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  comments: string;
}

interface ViewportOptions {
  once?: boolean;
  amount?: 'some' | 'all' | number;
}

export interface AnimationAttributes {
  variants: Variants;
  initial: VariantLabels;
  transition: Transition;
  whileInView: VariantLabels;
  viewport: ViewportOptions;
}
