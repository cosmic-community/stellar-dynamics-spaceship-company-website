// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Spacecraft interface
export interface Spacecraft extends CosmicObject {
  type: 'spacecraft';
  metadata: {
    description: string;
    price: number;
    specifications: {
      length?: string;
      width?: string;
      height?: string;
      weight?: string;
      max_speed?: string;
      crew_capacity?: number;
      passenger_capacity?: number;
      cargo_capacity?: string;
      range?: string;
      propulsion_system?: string;
      power_source?: string;
    };
    features?: string[];
    images?: {
      url: string;
      imgix_url: string;
    }[];
    status?: 'Available' | 'Pre-Order' | 'Coming Soon';
    category?: 'Commercial' | 'Military' | 'Research' | 'Transport';
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    role: string;
    bio: string;
    expertise?: string[];
    photo?: {
      url: string;
      imgix_url: string;
    };
    email?: string;
    linkedin?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name: string;
    company?: string;
    rating: number;
    testimonial_text: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    date?: string;
  };
}

// Company Info interface
export interface CompanyInfo extends CosmicObject {
  type: 'company-info';
  metadata: {
    mission_statement: string;
    vision_statement?: string;
    history?: string;
    values?: string[];
    founded_year?: number;
    headquarters?: string;
  };
}

// Mission Service interface
export interface MissionService extends CosmicObject {
  type: 'mission-services';
  metadata: {
    description: string;
    service_type?: 'Cargo Transport' | 'Passenger Transport' | 'Research Mission' | 'Commercial Flight' | 'Custom Mission';
    duration?: string;
    price_range?: string;
    features?: string[];
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Contact Info interface
export interface ContactInfo extends CosmicObject {
  type: 'contact-info';
  metadata: {
    email: string;
    phone?: string;
    address?: string;
    office_hours?: string;
    social_media?: {
      twitter?: string;
      linkedin?: string;
      facebook?: string;
      instagram?: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}