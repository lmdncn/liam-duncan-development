import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-YK652M6H79'; // Replace with your actual GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
  });
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};