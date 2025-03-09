export interface CNC {
  id: string;
  short_name: string;
  full_name: string;
  image: string;
  category: string;
  highlight: string;
  description: string;
  instagram: string;
  status: boolean;
}

export interface WorkplanCNC {
  id: number;
  cnc_id: number;
  title: string;
  description: string;
  duration: string;
  date_parse: string;
  status: boolean;
}

export interface ModalActivityCnCProps {
  openModal: boolean;
  workName?: string;
  workDescription?: string;
  WorkplanCNC: WorkplanCNC;
  handleModalDescription: () => void;
}
