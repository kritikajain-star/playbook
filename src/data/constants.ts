// src/data/constants.ts
import { ArrowLeft, FolderKanban, Building2, Rocket, Wrench, Users, ShieldCheck, Map, Hammer, Lightbulb, Workflow, ClipboardCheck, ServerCog } from "lucide-react";

export const LAND_DATA = [
  { id: 'a', item: 'Verify land ownership status (title deed, encumbrances, disputes).', objective: 'Ensure legal viability' },
  { id: 'b', item: 'Conduct zoning verification: confirm land classification permits industrial/service-centre use.', objective: 'Zoning compliance' },
  { id: 'c', item: 'Check proximity constraints (logistics hubs, highways, restrictions near residential zones).', objective: 'Logistics fit' },
  { id: 'd', item: 'Assessment of geo-political risks (stability, regulatory volatility).', objective: 'Risk mitigation' },
  { id: 'e', item: 'Obtain pre-approval from Government Authorities for company incorporation.', objective: 'Gov approval' },
  { id: 'f', item: 'Complete environmental pre-screening requirements (potential contamination, protected zones).', objective: 'Environmental check' },
  { id: 'g', item: 'Validate land boundaries through a certified surveyor.', objective: 'Boundary validation' },
];

export const categories = [
  { name: "Land acquisition & due diligence", href: "/phase2/land-acquisition", icon: Map },
  { name: "Legal & corporate readiness", href: "/phase2/legal-readiness", icon: ShieldCheck },
  { name: "Facility Design & Construction", href: "/phase2/facility-design-construction", icon: Building2 },
  { name: "Pre-Operations", href: "/phase2/pre-operations", icon: Workflow },
  { name: "Lean Principles", href: "/phase2/lean-principles", icon: Lightbulb },
  { name: "Equipment & Tooling", href: "/phase2/equipment-tooling", icon: Wrench },
  { name: "Manpower", href: "/phase2/manpower", icon: Users },
  { name: "Change Management", href: "/phase2/change-management", icon: FolderKanban },
  { name: "Technology Transfer", href: "/phase2/technology-transfer", icon: ServerCog },
  { name: "Operations setup", href: "/phase2/operations-setup", icon: ClipboardCheck },
  { name: "Back-office Setup", href: "/phase2/back-office-setup", icon: Rocket },
  { name: "Go-live & Continuous Improvement", href: "/phase2/go-live-improvement", icon: Hammer },
];