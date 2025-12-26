// packages/types/src/components.ts
import React from "react";

export interface ContentSection {
  // <--- Must have 'export'
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}
