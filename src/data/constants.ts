// src/data/constants.ts
import { Building2, Gavel, Construction, Activity, Zap, Settings, Users, RefreshCcw, Share2, Cog, Briefcase, PlayCircle } from 'lucide-react';

export const LAND_DATA = [
  { id: 'a', item: 'Verify land ownership status (title deed, encumbrances, disputes).', objective: 'Ensure legal viability' },
  { id: 'b', item: 'Conduct zoning verification: confirm land classification permits industrial/service-centre use.', objective: 'Zoning compliance' },
  { id: 'c', item: 'Check proximity constraints (logistics hubs, highways, restrictions near residential zones).', objective: 'Logistics fit' },
  { id: 'd', item: 'Assessment of geo-political risks (stability, regulatory volatility).', objective: 'Risk mitigation' },
  { id: 'e', item: 'Obtain pre-approval from Government Authorities for company incorporation.', objective: 'Gov approval' },
  { id: 'f', item: 'Complete environmental pre-screening requirements (potential contamination, protected zones).', objective: 'Environmental check' },
  { id: 'g', item: 'Validate land boundaries through a certified surveyor.', objective: 'Boundary validation' },
];

export const CATEGORIES = [
  { title: "Land acquisition & due diligence", icon: Building2 },
  { title: "Legal & corporate readiness", icon: Gavel },
  { title: "Facility Design & Construction", icon: Construction },
  { title: "Pre-Operations", icon: Activity },
  { title: "Lean Principles", icon: Zap },
  { title: "Equipment & Tooling", icon: Settings },
  { title: "Manpower", icon: Users },
  { title: "Change Management", icon: RefreshCcw },
  { title: "Technology Transfer", icon: Share2 },
  { title: "Operations setup", icon: Cog },
  { title: "Back-office Setup", icon: Briefcase },
  { title: "Go-live & Continuous Improvement", icon: PlayCircle },
];