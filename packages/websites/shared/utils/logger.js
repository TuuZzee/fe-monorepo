/* eslint-disable no-console */
// Only file allowed to use console. statment

export const debugLog = (content, value, service) => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
    console.debug(`${service ? `[${service}]` : ''} ${content}${value ? ': ' : ''}`, value);
  }
};

export const warningLog = (content, value, service) => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
    console.warn(`${service ? `[${service}]` : ''} ${content}${value ? ': ' : ''}`, value);
  }
};

export const errorLog = (content, value, service) => {
  console.error(`${service ? `[${service}]` : ''} ${content}${value ? ': ' : ''}`, value);
};
