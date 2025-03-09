import { StaticImageData } from "next/image";
import { CNC } from "./pusb-cnc-type";

export interface CardTabCnCContainerProps {
  cnc: CNC[] | null | undefined;
}

export interface Tab {
  key: string;
  value: string;
}

export interface MainWorkplan {
  Workplan: string;
  description: string;
  image: string | StaticImageData;
}

export interface MissionPUSB {
  vision: string;
  description: string;
}

export interface EventsPUSBData {
  eventImage: string | StaticImageData;
  eventName: string;
  eventDesc: string;
  eventTimeline: string;
  eventAudience?: string;
  eventPresents: string | null;
  eventPeriod?: string;
  isPresent: boolean;
  ministry: string;
}

export interface EventsCategoryData {
  categoryName: string;
}

export interface CnCWorkplanData {
  workPeriod: string;
  workDay: string | null;
  workMonth: string | null;
  workName: string;
  workDescription: string;
  isEventSoon: boolean;
}

export interface LogoColorData {
  color: string;
  colorHex: string;
  colorMeaning: string;
}

export interface LogoShapeData {
  shape: string;
  shapeMeaning: string;
}

export interface CardContactData {
  contactIcon: React.ReactNode;
  contactTitle: string;
  contactDesc: string;
  contact: React.ReactNode;
}
