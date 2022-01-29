import React, { useEffect, useState } from "react";

function Room() {
  const [first, setfirst] = useState(0);
  // let child = document.getElementById("test");
  // let parent = document.getElementById("test_parent");
  // parent.style.height = child.offsetHeight
  // let height = document.getElementById('test').offsetHeight
  useEffect(() => {
    setfirst(document.getElementById('test').offsetHeight)
  }, []);

  console.log('height');
  return (
    <div className="room center-content">
      <div className='first_main'>
        <div id='test_parent' className='main' style={{ height: first }}>
          <div className='first'>first</div>
          <div id='test' className='test'>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
