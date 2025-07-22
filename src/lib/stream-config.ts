// Stream Video Configuration
export const STREAM_API_KEY = 'mmhfdzb5evj2'; // Demo API key - replace with your own
export const STREAM_APP_ID = 'quiz-app';

// Sample users for demo
export const DEMO_USERS = {
  student1: {
    id: 'student1',
    name: 'You',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  student2: {
    id: 'student2', 
    name: 'Study Partner',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  },
};

// Generate token for demo (in production, this should be done on your backend)
export const generateDemoToken = (userId: string): string => {
  // This is a simplified demo token - in production use proper JWT with Stream secret
  return `demo-token-${userId}-${Date.now()}`;
};