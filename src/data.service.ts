import { Injectable } from '@angular/core';

export interface Industry {
  id: string;
  title: string;
  desc: string;
  image: string;
  heroImage: string;
  content: string;
  features: string[];
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  industries: Industry[] = [
    {
      id: 'mobility',
      title: 'Mobility Solutions',
      desc: 'Connected cars, autonomous driving tech.',
      image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      heroImage: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      content: 'We partner with global OEMs and Tier-1 suppliers to deliver cutting-edge automotive software. From embedded ECU development to cloud-connected fleet management, our solutions drive safety and efficiency.',
      features: ['ADAS & Autonomous Driving', 'Electric Vehicles (EV)', 'Connected Cockpits', 'V2X Communication']
    },
    {
      id: 'aerospace',
      title: 'Aerospace & Defence',
      desc: 'Avionics, flight control systems.',
      image: 'https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg',
      heroImage: 'https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg',
      content: 'NeST Digital provides comprehensive engineering services for the aerospace and defence sectors, adhering to strict standards like DO-178C and DO-254.',
      features: ['Avionics Software', 'Electronic Warfare', 'ATE & Test Rigs', 'Cockpit Displays']
    },
    {
      id: 'healthcare',
      title: 'Healthcare Tech',
      desc: 'Medical imaging, patient data management.',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
      heroImage: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
      content: 'We empower healthcare providers and medical device manufacturers with advanced software solutions. From high-resolution imaging to interoperable patient data systems.',
      features: ['Medical Imaging', 'Health Informatics', 'Telemedicine', 'IoT in Healthcare']
    },
    {
      id: 'banking',
      title: 'Banking & Finance',
      desc: 'FinTech solutions, secure payments.',
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg',
      heroImage: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg',
      content: 'The financial sector demands robust security. NeST Digital supports banks, insurers, and fintech companies in their digital transformation journeys.',
      features: ['Digital Banking', 'Payments Modernization', 'RegTech', 'Insurance Tech']
    },
    {
      id: 'industrial',
      title: 'Industrial',
      desc: 'IIoT, smart manufacturing.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      content: 'Enabling Industry 4.0 with smart connectivity. We help manufacturers bridge the gap between OT and IT. By integrating legacy machinery with modern cloud platforms.',
      features: ['IIoT Solutions', 'Predictive Maintenance', 'HMI/SCADA', 'Digital Twins']
    },
    {
      id: 'locomotive',
      title: 'Locomotive',
      desc: 'Signaling systems, train control.',
      image: 'https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg',
      heroImage: 'https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg',
      content: 'NeST Digital provides highly reliable software and hardware engineering services for the rail industry, specializing in safety-critical applications.',
      features: ['Signaling & Control', 'Communication Systems', 'Asset Monitoring', 'Simulator Development']
    }
  ];

  blogs: Blog[] = [
    {
      id: 'ai-mcp',
      title: 'AI Replacing the Browser? (MCP)',
      date: 'Dec 1, 2025',
      category: 'Artificial Intelligence',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      content: '<p>The digital landscape is shifting. MCP allows AI models to understand the context of a users digital environment. Instead of manually searching, the AI acts as a bridge.</p>'
    },
    {
      id: 'lidar-gis',
      title: 'LiDAR Data for Feature Extraction',
      date: 'Nov 28, 2025',
      category: 'Geospatial Tech',
      image: 'https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg',
      content: '<p>LiDAR technology scans the physical world with lasers. The real challenge is Feature Extraction—teaching computers to recognize specific objects within the point cloud.</p>'
    },
    {
      id: 'ev-charging',
      title: 'The d/dt of EV Charging',
      date: 'Nov 15, 2025',
      category: 'Automotive',
      image: 'https://images.pexels.com/photos/9800009/pexels-photo-9800009.jpeg',
      content: '<p>The rate of change in the EV sector is exponential. Smart Charging and V2G are the future of grid stability and automotive power management.</p>'
    }
  ];

  getIndustry(id: string) { return this.industries.find(i => i.id === id); }
  getBlog(id: string) { return this.blogs.find(b => b.id === id); }
}