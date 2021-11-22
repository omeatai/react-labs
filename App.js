import React from 'react';
import Contact from './Contact';

function App() {
  return (
    <div className="contacts">
      <Contact
        img="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
