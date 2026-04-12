import { type Project } from '$lib/data/projects';

export enum IDEFileName {
  PRESENTATION = "présentation.md",
  FEATURES = "fonctionnalités.yml",
  CONFIG = "configuration.env"
}

export interface IDEFile {
  id: IDEFileName;
  label: string;
  icon: string;
  color: string;
}

export const IDE_FILES: IDEFile[] = [
  { id: IDEFileName.PRESENTATION, label: "présentation.md", icon: "md", color: "#e34c26" },
  { id: IDEFileName.FEATURES, label: "fonctionnalités.yml", icon: "yaml", color: "#58a6ff" },
  { id: IDEFileName.CONFIG, label: "configuration.env", icon: "config", color: "#3fb950" }
];

export class IDEController {
  project = $state<Project | null>(null);
  activeFile = $state<IDEFileName | "">(IDEFileName.PRESENTATION);
  openFiles = $state<IDEFileName[]>([IDEFileName.PRESENTATION]);

  constructor(project: Project) {
    this.project = project;
  }

  openFile(id: IDEFileName) {
    if (!this.openFiles.includes(id)) {
      this.openFiles = [...this.openFiles, id];
    }
    this.activeFile = id;
  }

  closeFile(id: IDEFileName) {
    this.openFiles = this.openFiles.filter(f => f !== id);
    if (this.activeFile === id && this.openFiles.length > 0) {
      this.activeFile = this.openFiles[this.openFiles.length - 1];
    } else if (this.openFiles.length === 0) {
      this.activeFile = "";
    }
  }

  setActiveFile(id: IDEFileName) {
    this.activeFile = id;
  }
}
