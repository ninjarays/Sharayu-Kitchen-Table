import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export function useEvent() {
  return useContext(EventContext);
}

export function EventProvider({ children }) {
  const [eventId, setEventId] = useState('65449ddda500a99901665360'); 

  const value = {
    eventId,
    setEventId,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}
